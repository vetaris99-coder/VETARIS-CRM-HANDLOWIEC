// =====================================================
// Vetaris CRM - Firebase Auth & Sync
// Wersja: 2.0 (poprawiona)
// =====================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// ⚠️ UWAGA: SPRAWDŹ TE WARTOŚCI W FIREBASE CONSOLE!
// appId i messagingSenderId muszą mieć ten sam numer projektu na początku
const firebaseConfig = {
  apiKey: "AIzaSyCZjBZFwehf8Dyt7S4JaEavUnbvbKl34vY",
  authDomain: "vetaris-6b17b.firebaseapp.com",
  projectId: "vetaris-6b17b",
  storageBucket: "vetaris-6b17b.firebasestorage.app",
  messagingSenderId: "204148824314",
  appId: "1:204148824314:web:eba6b1cbbfc81b9cd89943", // ← POPRAWIONE (było 264...)
  measurementId: "G-26MMF7HNXW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
auth.languageCode = "pl";

// === Elementy DOM ===
const screen = document.getElementById("auth-screen");
const form = document.getElementById("auth-form");
const emailInput = document.getElementById("auth-email");
const passInput = document.getElementById("auth-password");
const errorBox = document.getElementById("auth-error");
const submitBtn = document.getElementById("auth-submit");
const resetBtn = document.getElementById("auth-reset");

let unsubscribeCrm = null;
let crmDocRef = null;
let firstCloudSnapshot = true;
let saveChain = Promise.resolve();
let retryCount = 0;
const MAX_RETRIES = 3;

// === Status synchronizacji ===
function setSyncStatus(text, mode = "idle") {
  let badge = document.getElementById("sync-status");
  const topbar = document.querySelector(".topbar");
  if (!topbar) return;
  if (!badge) {
    badge = document.createElement("span");
    badge.id = "sync-status";
    badge.style.cssText = "margin-left:auto;font-size:12px;border-radius:999px;padding:6px 10px;background:#e0f2fe;color:#075985;font-weight:700";
    const user = topbar.querySelector(".user");
    if (user) user.style.marginLeft = "10px";
    topbar.appendChild(badge);
  }
  badge.textContent = text;
  const colors = {
    idle: ["#e0f2fe", "#075985"],
    saving: ["#fef3c7", "#92400e"],
    ok: ["#dcfce7", "#166534"],
    error: ["#fee2e2", "#991b1b"]
  };
  const [bg, fg] = colors[mode] || colors.idle;
  badge.style.background = bg;
  badge.style.color = fg;
  window.dispatchEvent(new CustomEvent("vetaris-cloud-status", {
    detail: { text, mode }
  }));
}

function showError(message) {
  if (!errorBox) return;
  errorBox.textContent = message || "";
  errorBox.style.display = message ? "block" : "none";
}

function showInfo(message) {
  if (!errorBox) return;
  errorBox.textContent = message || "";
  errorBox.style.display = message ? "block" : "none";
  errorBox.style.background = "#dcfce7";
  errorBox.style.color = "#166534";
  setTimeout(() => {
    errorBox.style.background = "";
    errorBox.style.color = "";
  }, 5000);
}

function authMessage(code) {
  const map = {
    "auth/invalid-email": "Nieprawidłowy adres email.",
    "auth/user-disabled": "To konto jest zablokowane. Skontaktuj się z administratorem.",
    "auth/user-not-found": "Nie ma takiego użytkownika. Poproś administratora o dodanie konta.",
    "auth/wrong-password": "Nieprawidłowe hasło.",
    "auth/invalid-credential": "Nieprawidłowy email lub hasło.",
    "auth/too-many-requests": "Za dużo prób logowania. Spróbuj za kilka minut.",
    "auth/network-request-failed": "Brak połączenia z internetem.",
    "auth/unauthorized-domain": "Ta domena nie jest dodana w Firebase Authorized domains.",
    "auth/missing-password": "Wpisz hasło."
  };
  return map[code] || "Nie udało się zalogować. Sprawdź email i hasło.";
}

// === Przycisk wylogowania ===
function addLogout(user) {
  const topbar = document.querySelector(".topbar");
  if (!topbar || document.getElementById("auth-logout")) return;

  const userLabel = topbar.querySelector(".user");
  if (userLabel) userLabel.textContent = user.email || "Zalogowany użytkownik";

  const btn = document.createElement("button");
  btn.id = "auth-logout";
  btn.className = "btn gr";
  btn.type = "button";
  btn.textContent = "Wyloguj";
  btn.style.marginLeft = "10px";
  btn.addEventListener("click", async () => {
    if (confirm("Czy na pewno chcesz się wylogować?")) {
      await signOut(auth);
    }
  });
  topbar.appendChild(btn);
}

// === Stop synchronizacji ===
function stopFirestoreSync() {
  if (unsubscribeCrm) {
    unsubscribeCrm();
    unsubscribeCrm = null;
  }
  crmDocRef = null;
  window.vetarisCloudSave = null;
  retryCount = 0;
}

// === Start synchronizacji ===
function startFirestoreSync(user) {
  stopFirestoreSync();
  firstCloudSnapshot = true;
  crmDocRef = doc(db, "vetaris_crm", "main");
  setSyncStatus("Łączenie z Firestore...", "saving");

  window.vetarisCloudSave = (data) => {
    if (!crmDocRef || !data) return;
    const updatedAtClient = Number(localStorage.getItem("vetaris_crm_v2_updated_at")) || Date.now();
    
    saveChain = saveChain.then(async () => {
      try {
        setSyncStatus("Zapisywanie w chmurze...", "saving");
        await setDoc(crmDocRef, {
          data,
          updatedAtClient,
          updatedAt: serverTimestamp(),
          updatedBy: user.email || user.uid
        }, { merge: true });
        setSyncStatus("Zapisano w chmurze", "ok");
        retryCount = 0;
      } catch (error) {
        console.error("Firestore save error", error);
        retryCount++;
        if (retryCount < MAX_RETRIES) {
          setSyncStatus(`Ponawiam zapis (${retryCount}/${MAX_RETRIES})...`, "saving");
          await new Promise(r => setTimeout(r, 2000 * retryCount));
          return window.vetarisCloudSave(data);
        }
        setSyncStatus("Błąd zapisu - zapisuję lokalnie", "error");
      }
    });
    return saveChain;
  };

  unsubscribeCrm = onSnapshot(crmDocRef, async (snapshot) => {
    try {
      if (snapshot.exists()) {
        const cloud = snapshot.data();
        if (cloud && cloud.data && typeof window.vetarisFirestoreLoad === "function") {
          window.vetarisFirestoreLoad(cloud.data, {
            updatedBy: cloud.updatedBy || "",
            updatedAtClient: cloud.updatedAtClient || 0,
            fromCache: snapshot.metadata.fromCache
          });
        }
        setSyncStatus(snapshot.metadata.fromCache ? "Dane z cache" : "Połączono z Firestore", "ok");
      } else if (firstCloudSnapshot && typeof window.vetarisGetDB === "function") {
        setSyncStatus("Tworzę bazę...", "saving");
        await setDoc(crmDocRef, {
          data: window.vetarisGetDB(),
          updatedAtClient: Date.now(),
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          updatedBy: user.email || user.uid
        });
        setSyncStatus("Baza utworzona", "ok");
      }
      firstCloudSnapshot = false;
    } catch (error) {
      console.error("Firestore sync error", error);
      setSyncStatus("Błąd synchronizacji", "error");
    }
  }, (error) => {
    console.error("Firestore snapshot error", error);
    setSyncStatus("Brak dostępu do Firestore", "error");
  });
}

// === Persistence ===
setPersistence(auth, browserLocalPersistence).catch(() => {});

// === Obsługa formularza ===
if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    showError("");
    
    const email = emailInput.value.trim();
    const pass = passInput.value;
    
    if (!email || !pass) {
      showError("Wpisz email i hasło.");
      return;
    }
    
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Logowanie...";
    }
    
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (error) {
      showError(authMessage(error.code));
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Zaloguj";
      }
    }
  });
}

// === Reset hasła ===
if (resetBtn) {
  resetBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email) {
      showError("Wpisz najpierw email, na który ma być wysłany link resetujący.");
      emailInput.focus();
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      showInfo(`Wysłano link resetujący hasło na adres ${email}. Sprawdź skrzynkę.`);
    } catch (error) {
      showError(authMessage(error.code));
    }
  });
}

// === Auth state observer ===
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.body.classList.remove("auth-pending", "auth-locked");
    document.body.classList.add("auth-ready");
    if (screen) screen.style.display = "none";
    addLogout(user);
    startFirestoreSync(user);
    console.log("✓ Zalogowano:", user.email);
  } else {
    stopFirestoreSync();
    document.body.classList.remove("auth-pending", "auth-ready");
    document.body.classList.add("auth-locked");
    if (screen) screen.style.display = "grid";
  }
});
