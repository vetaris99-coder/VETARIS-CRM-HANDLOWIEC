let DB={handlowcy:[{id:'H001',imie:'Anna',nazwisko:'Kowalska',pelna:'Anna Kowalska',email:'a.kowalska@vetaris.pl',tel:'+48 600 100 001',region:'Lubuskie',aktywny:'TAK',target_m:15000,target_k:45000,data_startu:'2024-01-01',manager:''},{id:'H002',imie:'Piotr',nazwisko:'Nowak',pelna:'Piotr Nowak',email:'p.nowak@vetaris.pl',tel:'+48 600 100 002',region:'Dolnoslaskie',aktywny:'TAK',target_m:12000,target_k:36000,data_startu:'2024-03-01',manager:'Anna Kowalska'}],klienci:[{id:'K001',nazwa:'Zdrowy Pies',typ:'Klinika weterynaryjna',nip:'1234567890',osoba:'Jan Wisniewski',tel:'+48 500 200 300',email:'jan@zdrowypies.pl',ulica:'ul. Weterynaryjna 5',kod:'65-001',miasto:'Zielona Gora',woj:'Lubuskie',kraj:'Polska',status:'Aktywny'},{id:'K002',nazwa:'Pupil Sklep',typ:'Sklep zoologiczny',nip:'9876543210',osoba:'Maria Dabrowska',tel:'+48 500 200 301',email:'m.dabrowska@pupil.pl',ulica:'ul. Zoologiczna 12',kod:'50-001',miasto:'Wroclaw',woj:'Dolnoslaskie',kraj:'Polska',status:'Prospekt'}],kontakty:[{id:'C001',id_klienta:'K001',imie:'Jan',nazwisko:'Wisniewski',stanowisko:'Wlasciciel / Weterynarz',tel:'+48 500 200 300',email:'jan@zdrowypies.pl',glowny:'TAK',notatki:'Decyzyjny w sprawach zakupow'},{id:'C002',id_klienta:'K002',imie:'Maria',nazwisko:'Dabrowska',stanowisko:'Kierownik sklepu',tel:'+48 500 200 301',email:'m.dabrowska@pupil.pl',glowny:'TAK',notatki:'Preferuje kontakt emailowy'}],leady:[{id:'S001',data:'2024-11-01',id_klienta:'K001',nazwa:'Suplementy psy Q1 2025',zrodlo:'Polecenie',status:'W toku',etap:'Oferta',id_handlowca:'H001',wartosc:8500,prawdop:70,forecast:5950,data_zamkn:'2025-01-31',priorytet:'Wysoki',nast_krok:'Wyslac oferte'},{id:'S002',data:'2024-11-15',id_klienta:'K002',nazwa:'Suplementy koty pakiet startowy',zrodlo:'Cold call',status:'W toku',etap:'Kwalifikacja',id_handlowca:'H001',wartosc:4200,prawdop:40,forecast:1680,data_zamkn:'2025-02-28',priorytet:'Sredni',nast_krok:'Umowic spotkanie'}],spotkania:[{id:'SP001',data:'2024-12-10',godzina:'10:00',id_klienta:'K001',id_szansy:'S001',id_handlowca:'H001',typ:'Wizyta handlowa',cel:'Prezentacja suplementow',rezultat:'Pozytywne — klient zainteresowany',nast_krok:'Wyslac oferte',data_followup:'2024-12-13',adres:'ul. Weterynaryjna 5 Zielona Gora',status:'Zrealizowane',notatki:''}],zadania:[{id:'Z001',data_utw:'2024-12-01',termin:'2024-12-15',id_klienta:'K001',id_szansy:'S001',id_handlowca:'H001',typ:'Oferta',temat:'Przygotowanie oferty na witaminy',opis:'Oferta na witaminy dla psow Q1',priorytet:'Wysoki',status:'Otwarte',data_zamkn:'',po_terminie:'NIE'},{id:'Z002',data_utw:'2024-12-01',termin:'2024-12-20',id_klienta:'K002',id_szansy:'S002',id_handlowca:'H001',typ:'Telefon',temat:'Follow-up po pierwszym kontakcie',opis:'Sprawdzic czy klient sredni',priorytet:'Sredni',status:'Otwarte',data_zamkn:'',po_terminie:'NIE'}],oferty:[{id:'OF001',data:'2024-12-13',id_klienta:'K001',id_szansy:'S001',id_handlowca:'H001',wartosc_n:6910.57,wartosc_b:8500,status:'Wyslana',waznosc:'2025-01-13',szansa_wyg:70,notatki:''}],zamowienia:[{id:'ZAM001',data:'2024-10-01',id_klienta:'K001',id_szansy:'',id_handlowca:'H001',wartosc_n:4065.04,wartosc_b:5000,status:'Zrealizowane',data_real:'2024-10-15',pierwsze:'TAK',notatki:''}],produkty:[{id:'P001',nazwa:'VetaFlex Pro (psy) 60 kaps',kat:'Suplementy psy',netto:48.78,vat:23,brutto:59.99,aktywny:'TAK'},{id:'P002',nazwa:'VetaVital Kot 90 ml',kat:'Suplementy koty',netto:36.99,vat:23,brutto:45.50,aktywny:'TAK'},{id:'P003',nazwa:'VetaOmega Horse 500 ml',kat:'Suplementy konie',netto:89.43,vat:23,brutto:110.00,aktywny:'TAK'},{id:'P004',nazwa:'VetaImmuno Pies 30 kaps',kat:'Suplementy psy',netto:32.52,vat:23,brutto:40.00,aktywny:'TAK'},{id:'P005',nazwa:'VetaJoint Kot 60 tabl',kat:'Suplementy koty',netto:41.46,vat:23,brutto:51.00,aktywny:'TAK'}],targety:[{rok:2025,miesiac:1,id_h:'H001',przychod:15000,nowi:3,spotkania:8,szanse:5,oferty:3},{rok:2025,miesiac:1,id_h:'H002',przychod:12000,nowi:2,spotkania:6,szanse:4,oferty:2},{rok:2025,miesiac:2,id_h:'H001',przychod:15000,nowi:3,spotkania:8,szanse:5,oferty:3},{rok:2025,miesiac:2,id_h:'H002',przychod:12000,nowi:2,spotkania:6,szanse:4,oferty:2}]};function klientNazwa(id){const k=DB.klienci.find(x=>x.id===id);return k?k.nazwa:id;}function handlNazwa(id){const h=DB.handlowcy.find(x=>x.id===id);return h?h.pelna:id;}function badgeStatus(s){const m={'Aktywny':'g','VIP':'p','Prospekt':'bl','Nieaktywny':'gr','Zrezygnowany':'r','W toku':'o','Nowy':'bl','Zamkniety':'gr','Otwarte':'o','W realizacji':'bl','Zakonczone':'g','Anulowane':'r','Zrealizowane':'g','Wyslana':'bl','Zaakceptowana':'g','Odrzucona':'r','Wygasla':'gr','Robocza':'gr'};return '<span class="b '+(m[s]||'gr')+'">'+s+'</span>';}function badgePrior(p){const m={'Wysoki':'r','Sredni':'o','Niski':'g'};return '<span class="b '+(m[p]||'gr')+'">'+p+'</span>';}function nav(el,sec){document.querySelectorAll('.ni').forEach(x=>x.classList.remove('on'));el.classList.add('on');document.querySelectorAll('.sec').forEach(x=>x.classList.remove('on'));document.getElementById(sec).classList.add('on');const titles={dash:'Dashboard',klienci:'Klienci',kontakty:'Kontakty',leady:'Leady / Szanse',spotkania:'Spotkania',zadania:'Zadania',oferty:'Oferty',zamowienia:'Zamowienia',produkty:'Produkty',handlowcy:'Handlowcy',targety:'Targety'};document.getElementById('ptitle').textContent=titles[sec]||sec;}function openModal(id){document.getElementById(id).classList.add('on');if(id==='mLead'||id==='mZadanie'){fillKlientSelect('l-klient');fillKlientSelect('z-klient');fillHandlSelect('l-handlowiec');fillHandlSelect('z-handlowiec');}}function closeModal(id){document.getElementById(id).classList.remove('on');}function fillKlientSelect(sid){const s=document.getElementById(sid);s.innerHTML='<option value="">-- wybierz --</option>';DB.klienci.forEach(k=>{s.innerHTML+=`<option value="${k.id}">${k.nazwa}</option>`;});}function fillHandlSelect(sid){const s=document.getElementById(sid);s.innerHTML='<option value="">-- wybierz --</option>';DB.handlowcy.forEach(h=>{s.innerHTML+=`<option value="${h.id}">${h.pelna}</option>`;});}function genId(prefix,arr){return prefix+(arr.length+1).toString().padStart(3,'0');}function renderAll(){renderKlienci();renderKontakty();renderLeady();renderSpotkania();renderZadania();renderOferty();renderZamowienia();renderProdukty();renderHandlowcy();renderTargety();renderDash();}function renderKlienci(){const fv=document.getElementById('fk').value.toLowerCase();const ft=document.getElementById('fkTyp').value;const fs=document.getElementById('fkStatus').value;const tbody=document.getElementById('klienci-tbl');tbody.innerHTML=DB.klienci.filter(k=>(k.nazwa.toLowerCase().includes(fv)||k.osoba.toLowerCase().includes(fv)||k.miasto.toLowerCase().includes(fv))&&(!ft||k.typ===ft)&&(!fs||k.status===fs)).map(k=>`<tr><td><b>${k.id}</b></td><td>${k.nazwa}</td><td>${k.typ}</td><td>${k.osoba}</td><td>${k.tel}</td><td>${k.email}</td><td>${k.miasto}</td><td>${badgeStatus(k.status)}</td><td><div class='act-btns'><button class='ed' onclick='delRow("klienci","${k.id}")'>Edytuj</button><button class='del' onclick='delRow("klienci","${k.id}")'>Usuń</button></div></td></tr>`).join('')||'<tr><td colspan=9 class=empty>Brak wyników</td></tr>';}function renderKontakty(){const tbody=document.getElementById('kontakty-tbl');tbody.innerHTML=DB.kontakty.map(c=>`<tr><td><b>${c.id}</b></td><td>${klientNazwa(c.id_klienta)}</td><td>${c.imie}</td><td>${c.nazwisko}</td><td>${c.stanowisko}</td><td>${c.tel}</td><td>${c.email}</td><td>${c.glowny==='TAK'?'<span class="b g">TAK</span>':'NIE'}</td><td><div class='act-btns'><button class='del' onclick='delKontakt("${c.id}")'>Usuń</button></div></td></tr>`).join('')||'<tr><td colspan=9 class=empty>Brak</td></tr>';}function renderLeady(){const etapy=['Lead','Kwalifikacja','Oferta','Negocjacje','Wygrana','Przegrana'];const pipe=document.getElementById('pipeline');pipe.innerHTML=etapy.map(e=>{const items=DB.leady.filter(l=>l.etap===e);return`<div class='pcol'><h4>${e} (${items.length})</h4>${items.map(l=>`<div class='pcard'><div class='pn'>${l.nazwa}</div><div class='pv'>${l.wartosc.toLocaleString()} PLN</div><div class='pc'>${klientNazwa(l.id_klienta)}</div></div>`).join('')}</div>`;}).join('');const tbody=document.getElementById('leady-tbl');tbody.innerHTML=DB.leady.map(l=>`<tr><td><b>${l.id}</b></td><td>${l.nazwa}</td><td>${klientNazwa(l.id_klienta)}</td><td><span class='b bl'>${l.etap}</span></td><td>${badgeStatus(l.status)}</td><td><b>${l.wartosc.toLocaleString()} PLN</b></td><td>${l.prawdop}%</td><td>${handlNazwa(l.id_handlowca)}</td><td>${badgePrior(l.priorytet)}</td><td><div class='act-btns'><button class='del' onclick='delLead("${l.id}")'>Usuń</button></div></td></tr>`).join('')||'<tr><td colspan=10 class=empty>Brak</td></tr>';}function renderSpotkania(){const tbody=document.getElementById('spotkania-tbl');tbody.innerHTML=DB.spotkania.map(s=>`<tr><td><b>${s.id}</b></td><td>${s.data}</td><td>${s.godzina}</td><td>${klientNazwa(s.id_klienta)}</td><td>${s.typ}</td><td>${s.cel}</td><td>${badgeStatus(s.status)}</td><td>${handlNazwa(s.id_handlowca)}</td><td><div class='act-btns'><button class='del' onclick='delSpotkanie("${s.id}")'>Usuń</button></div></td></tr>`).join('')||'<tr><td colspan=9 class=empty>Brak</td></tr>';}function renderZadania(){const fs=document.getElementById('fzStatus').value;const ft=document.getElementById('fzTyp').value;const tbody=document.getElementById('zadania-tbl');tbody.innerHTML=DB.zadania.filter(z=>(!fs||z.status===fs)&&(!ft||z.typ===ft)).map(z=>`<tr><td><b>${z.id}</b></td><td>${z.temat}</td><td>${z.typ}</td><td>${z.termin}</td><td>${klientNazwa(z.id_klienta)}</td><td>${badgePrior(z.priorytet)}</td><td>${badgeStatus(z.status)}</td><td>${z.po_terminie==='TAK'?'<span class="b r">TAK</span>':'<span class="b g">NIE</span>'}</td><td><div class='act-btns'><button class='del' onclick='delZad("${z.id}")'>Usuń</button></div></td></tr>`).join('')||'<tr><td colspan=9 class=empty>Brak</td></tr>';}function renderOferty(){const tbody=document.getElementById('oferty-tbl');tbody.innerHTML=DB.oferty.map(o=>`<tr><td><b>${o.id}</b></td><td>${o.data}</td><td>${klientNazwa(o.id_klienta)}</td><td>${o.wartosc_n.toFixed(2)} PLN</td><td><b>${o.wartosc_b.toLocaleString()} PLN</b></td><td>${badgeStatus(o.status)}</td><td>${o.waznosc}</td><td>${o.szansa_wyg}%</td><td><div class='act-btns'><button class='del' onclick='delOferta("${o.id}")'>Usuń</button></div></td></tr>`).join('')||'<tr><td colspan=9 class=empty>Brak</td></tr>';}function renderZamowienia(){const tbody=document.getElementById('zamowienia-tbl');tbody.innerHTML=DB.zamowienia.map(z=>`<tr><td><b>${z.id}</b></td><td>${z.data}</td><td>${klientNazwa(z.id_klienta)}</td><td>${z.wartosc_n.toFixed(2)} PLN</td><td><b>${z.wartosc_b.toLocaleString()} PLN</b></td><td>${badgeStatus(z.status)}</td><td>${z.data_real||'-'}</td><td>${z.pierwsze==='TAK'?'<span class="b g">TAK</span>':'NIE'}</td><td><div class='act-btns'><button class='del' onclick='delZam("${z.id}")'>Usuń</button></div></td></tr>`).join('')||'<tr><td colspan=9 class=empty>Brak</td></tr>';}function renderProdukty(){const tbody=document.getElementById('produkty-tbl');tbody.innerHTML=DB.produkty.map(p=>`<tr><td><b>${p.id}</b></td><td>${p.nazwa}</td><td><span class='b bl'>${p.kat}</span></td><td>${p.netto.toFixed(2)} PLN</td><td>${p.vat}%</td><td><b>${p.brutto.toFixed(2)} PLN</b></td><td>${p.aktywny==='TAK'?'<span class="b g">TAK</span>':'<span class="b r">NIE</span>'}</td><td><div class='act-btns'><button class='del' onclick='delProd("${p.id}")'>Usuń</button></div></td></tr>`).join('')||'<tr><td colspan=8 class=empty>Brak</td></tr>';}function renderHandlowcy(){const tbody=document.getElementById('handlowcy-tbl');tbody.innerHTML=DB.handlowcy.map(h=>`<tr><td><b>${h.id}</b></td><td>${h.imie}</td><td>${h.nazwisko}</td><td>${h.email}</td><td>${h.tel}</td><td>${h.region}</td><td>${h.aktywny==='TAK'?'<span class="b g">TAK</span>':'<span class="b r">NIE</span>'}</td><td>${h.target_m.toLocaleString()} PLN</td><td>${h.target_k.toLocaleString()} PLN</td><td>${h.manager||'-'}</td><td><div class='act-btns'><button class='del' onclick='delHandl("${h.id}")'>Usuń</button></div></td></tr>`).join('')||'<tr><td colspan=11 class=empty>Brak</td></tr>';}function renderTargety(){const tbody=document.getElementById('targety-tbl');tbody.innerHTML=DB.targety.map(t=>`<tr><td>${t.rok}</td><td>${t.miesiac}</td><td>${handlNazwa(t.id_h)}</td><td><b>${t.przychod.toLocaleString()} PLN</b></td><td>${t.nowi}</td><td>${t.spotkania}</td><td>${t.szanse}</td><td>${t.oferty}</td><td></td></tr>`).join('')||'<tr><td colspan=9 class=empty>Brak</td></tr>';}function renderDash(){document.getElementById('d-klienci').textContent=DB.klienci.length;document.getElementById('d-szanse').textContent=DB.leady.filter(l=>l.status==='W toku').length;document.getElementById('d-zadania').textContent=DB.zadania.filter(z=>z.status==='Otwarte'||z.status==='W realizacji').length;const przychod=DB.zamowienia.reduce((a,z)=>a+z.wartosc_b,0);document.getElementById('d-przychod').textContent=przychod.toLocaleString()+' PLN';const pd=document.getElementById('pipe-dash');const etapy=['Lead','Kwalifikacja','Oferta','Negocjacje'];pd.innerHTML=etapy.map(e=>{const cnt=DB.leady.filter(l=>l.etap===e).length;const val=DB.leady.filter(l=>l.etap===e).reduce((a,l)=>a+l.wartosc,0);return`<div style='display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:13px'><span><b>${e}</b> (${cnt})</span><span style='color:#66bb6a;font-weight:600'>${val.toLocaleString()} PLN</span></div>`;}).join('');const zd=document.getElementById('zadania-dash');zd.innerHTML=DB.zadania.slice(0,3).map(z=>`<div style='display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:13px'><span>${z.temat}</span>${badgeStatus(z.status)}</div>`).join('');const pt=document.getElementById('prod-tbl');pt.innerHTML=DB.produkty.map(p=>`<tr><td><b>${p.id}</b></td><td>${p.nazwa}</td><td><span class='b bl'>${p.kat}</span></td><td>${p.netto.toFixed(2)} PLN</td><td>${p.vat}%</td><td><b>${p.brutto.toFixed(2)} PLN</b></td></tr>`).join('');}function saveKlient(){const k={id:genId('K',DB.klienci),nazwa:document.getElementById('k-nazwa').value,typ:document.getElementById('k-typ').value,nip:document.getElementById('k-nip').value,osoba:document.getElementById('k-osoba').value,tel:document.getElementById('k-tel').value,email:document.getElementById('k-email').value,miasto:document.getElementById('k-miasto').value,woj:document.getElementById('k-woj').value,kraj:document.getElementById('k-kraj').value,status:document.getElementById('k-status').value,ulica:'',kod:''};if(!k.nazwa){alert('Podaj nazwe firmy!');return;}DB.klienci.push(k);closeModal('mKlient');renderAll();}function saveLead(){const l={id:genId('S',DB.leady),data:new Date().toISOString().split('T')[0],nazwa:document.getElementById('l-nazwa').value,id_klienta:document.getElementById('l-klient').value,zrodlo:document.getElementById('l-zrodlo').value,etap:document.getElementById('l-etap').value,status:document.getElementById('l-status').value,priorytet:document.getElementById('l-prior').value,wartosc:parseFloat(document.getElementById('l-wartosc').value)||0,prawdop:parseInt(document.getElementById('l-prob').value)||0,id_handlowca:document.getElementById('l-handlowiec').value,data_zamkn:document.getElementById('l-data').value,nast_krok:document.getElementById('l-krok').value,forecast:0};l.forecast=l.wartosc*l.prawdop/100;if(!l.nazwa){alert('Podaj nazwe szansy!');return;}DB.leady.push(l);closeModal('mLead');renderAll();}function saveZadanie(){const z={id:genId('Z',DB.zadania),data_utw:new Date().toISOString().split('T')[0],termin:document.getElementById('z-termin').value,id_klienta:document.getElementById('z-klient').value,id_szansy:'',id_handlowca:document.getElementById('z-handlowiec').value,typ:document.getElementById('z-typ').value,temat:document.getElementById('z-temat').value,opis:document.getElementById('z-opis').value,priorytet:document.getElementById('z-prior').value,status:document.getElementById('z-status').value,data_zamkn:'',po_terminie:'NIE'};if(!z.temat){alert('Podaj temat!');return;}DB.zadania.push(z);closeModal('mZadanie');renderAll();}function saveProdukt(){const netto=parseFloat(document.getElementById('p-netto').value)||0;const vat=parseInt(document.getElementById('p-vat').value)||23;const p={id:genId('P',DB.produkty),nazwa:document.getElementById('p-nazwa').value,kat:document.getElementById('p-kat').value,netto:netto,vat:vat,brutto:parseFloat((netto*(1+vat/100)).toFixed(2)),aktywny:'TAK'};if(!p.nazwa){alert('Podaj nazwe produktu!');return;}DB.produkty.push(p);closeModal('mProdukt');renderAll();}function delRow(tbl,id){if(confirm('Usunac rekord '+id+'?')){DB[tbl]=DB[tbl].filter(x=>x.id!==id);renderAll();}}function delKontakt(id){delRow('kontakty',id);}function delLead(id){delRow('leady',id);}function delSpotkanie(id){delRow('spotkania',id);}function delZad(id){delRow('zadania',id);}function delOferta(id){delRow('oferty',id);}function delZam(id){delRow('zamowienia',id);}function delProd(id){delRow('produkty',id);}function delHandl(id){delRow('handlowcy',id);}renderAll();let mapaInstance=null;const COORDS={Warszawa:[52.2297,21.0122],Krakow:[50.0647,19.945],Wroclaw:[51.1079,17.0385],Poznan:[52.4064,16.9252],Gdansk:[54.372,18.6386],Szczecin:[53.4285,14.5528],Bydgoszcz:[53.1235,18.0084],Lublin:[51.2465,22.5684],Katowice:[50.2649,19.0238],Bialystok:[53.1325,23.1688],Gdynia:[54.5189,18.5305],Czestochowa:[50.8118,19.1203],Radom:[51.4027,21.1471],Sosnowiec:[50.2863,19.1041],Torun:[53.0138,18.5984],Kielce:[50.8661,20.6286],Gliwice:[50.2945,18.6714],Zabrze:[50.3249,18.7857],Bytom:[50.348,18.912],Olsztyn:[53.7784,20.4801],Rzeszow:[50.0412,21.9991],Ruda_Slaska:[50.2588,18.8566],Rybnik:[50.0971,18.5442],Tychy:[50.1357,18.9956],Dabrowa_Gornicza:[50.3236,19.1947],Opole:[50.6751,17.9213],Elblag:[54.1522,19.4083],Plock:[52.5463,19.7065],Walbrzych:[50.7714,16.2842],Wloclawek:[52.6483,19.0677],Zielona_Gora:[51.9355,15.5063],'Zielona Gora':[51.9355,15.5063],'Zielona Góra':[51.9355,15.5063],'Krosno Odrzanskie':[52.057,15.0995],'Krosno Odrzanskie':[52.057,15.0995],Krosno:[49.6897,21.7697],Gorzow_Wielkopolski:[52.7369,15.2288],'Gorzow Wielkopolski':[52.7369,15.2288],Legnica:[51.207,16.1619],Jelenia_Gora:[50.9044,15.7197],'Jelenia Gora':[50.9044,15.7197],Sulechow:[52.086,15.628]};function getCoords(miasto){if(!miasto)return null;const k=Object.keys(COORDS).find(c=>c.toLowerCase()===miasto.toLowerCase().replace(/ó/g,'o').replace(/ę/g,'e').replace(/ą/g,'a').replace(/ś/g,'s').replace(/ż/g,'z').replace(/ź/g,'z').replace(/Ł/g,'l').replace(/ń/g,'n')||c.toLowerCase()===miasto.toLowerCase());return k?COORDS[k]:null;}function renderMapa(){const container=document.getElementById('mapa-container');if(!container)return;if(mapaInstance){mapaInstance.remove();mapaInstance=null;}mapaInstance=L.map('mapa-container').setView([52.0,19.0],6);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap',maxZoom:18}).addTo(mapaInstance);const colors={Aktywny:'#66bb6a',VIP:'#ab47bc',Prospekt:'#4fc3f7',Nieaktywny:'#90a4ae',Zrezygnowany:'#ef5350'};let count=0;DB.klienci.forEach(k=>{const c=getCoords(k.miasto);if(c){count++;const color=colors[k.status]||'#4fc3f7';const icon=L.divIcon({className:'',html:`<div style="background:${color};width:14px;height:14px;border-radius:50%;border:2px solid #fff;box-shadow:0 2px 4px rgba(0,0,0,.3)"></div>`,iconSize:[14,14],iconAnchor:[7,7]});const marker=L.marker(c,{icon}).addTo(mapaInstance);marker.bindPopup(`<div style="font-family:Segoe UI,sans-serif;min-width:180px"><strong style="font-size:13px;color:#1a2332">${k.nazwa}</strong><br><span style="color:#546e7a;font-size:11px">${k.typ}</span><hr style="margin:6px 0;border:none;border-top:1px solid #f0f2f5"><b>Osoba:</b> ${k.osoba}<br><b>Tel:</b> ${k.tel}<br><b>Miasto:</b> ${k.miasto}, ${k.woj}<br><b>Status:</b> <span style="color:${color};font-weight:700">${k.status}</span></div>`);marker.openPopup();}});document.getElementById('mapa-count').textContent=count+' klientów na mapie ('+DB.klienci.length+' łącznie)';setTimeout(()=>{mapaInstance.invalidateSize();},100);}const origNav=nav;nav=function(el,sec){origNav(el,sec);if(sec==='mapa'){setTimeout(renderMapa,50);}};function fillSel(id,arr,valKey,lblKey){const s=document.getElementById(id);if(!s)return;s.innerHTML='<option value="">-- wybierz --</option>';arr.forEach(x=>{s.innerHTML+=`<option value="${x[valKey]}">${x[lblKey]}</option>`;});}function openModal(id){const m=document.getElementById(id);if(m)m.classList.add('on');if(id==='mLead'||id==='mZadanie'||id==='mSpotkanie'){fillSel('l-klient',DB.klienci,'id','nazwa');fillSel('l-handlowiec',DB.handlowcy,'id','pelna');fillSel('z-klient',DB.klienci,'id','nazwa');fillSel('z-handlowiec',DB.handlowcy,'id','pelna');fillSel('sp-klient',DB.klienci,'id','nazwa');fillSel('sp-handlowiec',DB.handlowcy,'id','pelna');}if(id==='mKontakt'){fillSel('c-klient',DB.klienci,'id','nazwa');}}function closeModal(id){const m=document.getElementById(id);if(m)m.classList.remove('on');}function genId(pre,arr){return pre+(arr.length+1).toString().padStart(3,'0');}function saveKlient(){const k={id:genId('K',DB.klienci),nazwa:document.getElementById('k-nazwa').value||'Nowy klient',typ:document.getElementById('k-typ').value,nip:document.getElementById('k-nip').value,osoba:document.getElementById('k-osoba').value,tel:document.getElementById('k-tel').value,email:document.getElementById('k-email').value,miasto:document.getElementById('k-miasto').value,woj:document.getElementById('k-woj').value,kraj:document.getElementById('k-kraj').value,status:document.getElementById('k-status').value};DB.klienci.push(k);closeModal('mKlient');renderAll();}function saveKontakt(){const c={id:genId('C',DB.kontakty),id_klienta:document.getElementById('c-klient').value,imie:document.getElementById('c-imie').value,nazwisko:document.getElementById('c-nazwisko').value,stanowisko:document.getElementById('c-stanowisko').value,tel:document.getElementById('c-tel').value,email:document.getElementById('c-email').value,glowny:document.getElementById('c-glowny').value,notatki:document.getElementById('c-notatki').value};DB.kontakty.push(c);closeModal('mKontakt');renderAll();}function saveLead(){const w=parseFloat(document.getElementById('l-wartosc').value)||0;const pr=parseFloat(document.getElementById('l-prob').value)||0;const l={id:genId('S',DB.leady),data:new Date().toISOString().slice(0,10),id_klienta:document.getElementById('l-klient').value,nazwa:document.getElementById('l-nazwa').value,zrodlo:document.getElementById('l-zrodlo').value,status:document.getElementById('l-status').value,etap:document.getElementById('l-etap').value,id_handlowca:document.getElementById('l-handlowiec').value,wartosc:w,prawdop:pr,forecast:Math.round(w*pr/100),data_zamkn:document.getElementById('l-data').value,priorytet:document.getElementById('l-prior').value,nast_krok:document.getElementById('l-krok').value};DB.leady.push(l);closeModal('mLead');renderAll();}function saveZadanie(){const z={id:genId('Z',DB.zadania),data_utw:new Date().toISOString().slice(0,10),termin:document.getElementById('z-termin').value,id_klienta:document.getElementById('z-klient').value,id_szansy:'',id_handlowca:document.getElementById('z-handlowiec').value,typ:document.getElementById('z-typ').value,temat:document.getElementById('z-temat').value,opis:document.getElementById('z-opis').value,priorytet:document.getElementById('z-prior').value,status:document.getElementById('z-status').value,data_zamkn:'',po_terminie:'NIE'};DB.zadania.push(z);closeModal('mZadanie');renderAll();}function saveSpotkanie(){const s={id:genId('SP',DB.spotkania),data:document.getElementById('sp-data').value,godzina:document.getElementById('sp-godz').value,id_klienta:document.getElementById('sp-klient').value,id_szansy:'',id_handlowca:document.getElementById('sp-handlowiec').value,typ:document.getElementById('sp-typ').value,cel:document.getElementById('sp-cel').value,rezultat:'',nast_krok:'',data_followup:'',adres:document.getElementById('sp-adres').value,status:document.getElementById('sp-status').value,notatki:''};DB.spotkania.push(s);closeModal('mSpotkanie');renderAll();}function saveProd(){const netto=parseFloat(document.getElementById('p-netto').value)||0;const vat=parseFloat(document.getElementById('p-vat').value)||23;const p={id:genId('P',DB.produkty),nazwa:document.getElementById('p-nazwa').value,kat:document.getElementById('p-kat').value,netto:netto,vat:vat,brutto:parseFloat((netto*(1+vat/100)).toFixed(2)),aktywny:'TAK'};DB.produkty.push(p);closeModal('mProdukt');renderAll();}function delRow(arr,id){DB[arr]=DB[arr].filter(x=>x.id!==id);renderAll();}function delKlient(id){delRow('klienci',id);}function delKontakt(id){delRow('kontakty',id);}function delLead(id){delRow('leady',id);}function delSpotkanie(id){delRow('spotkania',id);}function delZad(id){delRow('zadania',id);}function delOferta(id){delRow('oferty',id);}function delZam(id){delRow('zamowienia',id);}function delProd(id){delRow('produkty',id);}function delHandl(id){delRow('handlowcy',id);}function renderTargety(){const sec=document.getElementById('targety');if(!sec)return;const miesiacNazwy=['','Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'];const terazRok=new Date().getFullYear();const terazMies=new Date().getMonth()+1;const aktywniH=DB.handlowcy.filter(h=>h.aktywny==='TAK');const kartyHTML=aktywniH.map(h=>{const targetMies=DB.targety.find(t=>t.id_h===h.id&&t.rok===terazRok&&t.miesiac===terazMies);const targetPrzychod=targetMies?targetMies.przychod:h.target_m;const targetSpotkania=targetMies?targetMies.spotkania:8;const targetNowi=targetMies?targetMies.nowi:3;const wykonaneZam=DB.zamowienia.filter(z=>z.id_handlowca===h.id).reduce((a,z)=>a+z.wartosc_b,0);const wykonaneSp=DB.spotkania.filter(s=>s.id_handlowca===h.id&&s.status==='Zrealizowane').length;const nowyKlienci=DB.klienci.length;const procPrzychod=targetPrzychod>0?Math.min(Math.round(wykonaneZam/targetPrzychod*100),100):0;const procSp=targetSpotkania>0?Math.min(Math.round(wykonaneSp/targetSpotkania*100),100):0;const kolorProc=p=>p>=100?'#66bb6a':p>=60?'#ffa726':'#ef5350';const pasek=(p,kolor)=>`<div style='background:#f0f2f5;border-radius:20px;height:8px;margin-top:4px'><div style='background:${kolor};height:8px;border-radius:20px;width:${p}%;transition:.4s'></div></div>`;return`<div style='background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.06);padding:20px;border-top:4px solid ${kolorProc(procPrzychod)}'><div style='display:flex;align-items:center;gap:12px;margin-bottom:16px'><div style='width:42px;height:42px;border-radius:50%;background:#1a2332;color:#4fc3f7;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700'>${h.imie[0]}${h.nazwisko[0]}</div><div><div style='font-weight:700;color:#1a2332;font-size:14px'>${h.pelna}</div><div style='font-size:11px;color:#78909c'>${h.region} &bull; ${h.aktywny==='TAK'?'<span style="color:#66bb6a">&#9679; Aktywny</span>':'<span style="color:#ef5350">&#9679; Nieaktywny</span>'}</div></div><div style='margin-left:auto;font-size:22px;font-weight:800;color:${kolorProc(procPrzychod)}'>${procPrzychod}%</div></div><div style='display:grid;grid-template-columns:1fr 1fr;gap:14px'><div style='background:#f8f9fa;border-radius:8px;padding:12px'><div style='font-size:11px;color:#546e7a;font-weight:700;text-transform:uppercase;letter-spacing:.3px'>Przychód vs Target</div><div style='font-size:18px;font-weight:700;color:#1a2332;margin-top:4px'>${wykonaneZam.toLocaleString()} PLN</div><div style='font-size:11px;color:#78909c'>target: ${targetPrzychod.toLocaleString()} PLN</div>${pasek(procPrzychod,kolorProc(procPrzychod))}</div><div style='background:#f8f9fa;border-radius:8px;padding:12px'><div style='font-size:11px;color:#546e7a;font-weight:700;text-transform:uppercase;letter-spacing:.3px'>Spotkania</div><div style='font-size:18px;font-weight:700;color:#1a2332;margin-top:4px'>${wykonaneSp} / ${targetSpotkania}</div><div style='font-size:11px;color:#78909c'>${procSp}% realizacji</div>${pasek(procSp,kolorProc(procSp))}</div><div style='background:#f8f9fa;border-radius:8px;padding:12px'><div style='font-size:11px;color:#546e7a;font-weight:700;text-transform:uppercase;letter-spacing:.3px'>Zamówienia</div><div style='font-size:18px;font-weight:700;color:#1a2332;margin-top:4px'>${DB.zamowienia.filter(z=>z.id_handlowca===h.id).length}</div><div style='font-size:11px;color:#78909c'>w tym okresie</div></div><div style='background:#f8f9fa;border-radius:8px;padding:12px'><div style='font-size:11px;color:#546e7a;font-weight:700;text-transform:uppercase;letter-spacing:.3px'>Leady aktywne</div><div style='font-size:18px;font-weight:700;color:#1a2332;margin-top:4px'>${DB.leady.filter(l=>l.id_handlowca===h.id&&l.status==='W toku').length}</div><div style='font-size:11px;color:#78909c'>w pipeline</div></div></div><div style='margin-top:12px;font-size:11px;color:#78909c;text-align:right'>${miesiacNazwy[terazMies]} ${terazRok}</div></div>`}).join('');const tabelaHTML=`<div class='box' style='margin-top:22px'><div class='box-h'><h3>Historia targetów</h3><button class='btn' onclick='openModal("mTarget")'>+ Dodaj target</button></div><table><thead><tr><th>Rok</th><th>Miesiąc</th><th>Handlowiec</th><th>Target przychodu</th><th>Nowi klienci</th><th>Spotkania</th><th>Szanse</th><th>Oferty</th><th>Akcje</th></tr></thead><tbody id='targety-tbl'></tbody></table></div>`;const kontener=document.getElementById('targety');if(!document.getElementById('targety-karty')){kontener.innerHTML=`<div class='box-h' style='background:#fff;border-radius:10px;margin-bottom:14px;box-shadow:0 2px 8px rgba(0,0,0,.05)'><h3>🏆 Targety handlowców – ${miesiacNazwy[terazMies]} ${terazRok}</h3><button class='btn' onclick='openModal("mTarget")'>+ Dodaj target</button></div><div id='targety-karty' style='display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;margin-bottom:22px'></div>${tabelaHTML}`;}document.getElementById('targety-karty').innerHTML=kartyHTML;const tbody=document.getElementById('targety-tbl');if(tbody)tbody.innerHTML=DB.targety.map(t=>`<tr><td>${t.rok}</td><td>${miesiacNazwy[t.miesiac]||t.miesiac}</td><td>${handlNazwa(t.id_h)}</td><td><strong>${t.przychod.toLocaleString()} PLN</strong></td><td>${t.nowi}</td><td>${t.spotkania}</td><td>${t.szanse}</td><td>${t.oferty}</td><td><div class='act-btns'><button class='del' onclick='delTarget(${JSON.stringify(t)})'>Usuń</button></div></td></tr>`).join('')||'<tr><td colspan=9 class=empty>Brak danych</td></tr>';}function delTarget(t){DB.targety=DB.targety.filter(x=>!(x.rok===t.rok&&x.miesiac===t.miesiac&&x.id_h===t.id_h));renderTargety();}function saveTarget(){const t={rok:parseInt(document.getElementById('tg-rok').value)||new Date().getFullYear(),miesiac:parseInt(document.getElementById('tg-mies').value)||new Date().getMonth()+1,id_h:document.getElementById('tg-handl').value,przychod:parseFloat(document.getElementById('tg-przychod').value)||0,nowi:parseInt(document.getElementById('tg-nowi').value)||0,spotkania:parseInt(document.getElementById('tg-sp').value)||0,szanse:parseInt(document.getElementById('tg-szanse').value)||0,oferty:parseInt(document.getElementById('tg-oferty').value)||0};const idx=DB.targety.findIndex(x=>x.rok===t.rok&&x.miesiac===t.miesiac&&x.id_h===t.id_h);if(idx>=0)DB.targety[idx]=t;else DB.targety.push(t);closeModal('mTarget');renderTargety();}const _origOpenModal=openModal;openModal=function(id){_origOpenModal(id);if(id==='mTarget'){fillSel('tg-handl',DB.handlowcy,'id','pelna');}};function ofLicz(){const n=parseFloat(document.getElementById('of-netto').value)||0;const v=parseFloat(document.getElementById('of-vat').value)||23;document.getElementById('of-brutto').value=(n*(1+v/100)).toFixed(2);}function zamLicz(){const n=parseFloat(document.getElementById('zam-netto').value)||0;const v=parseFloat(document.getElementById('zam-vat').value)||23;document.getElementById('zam-brutto').value=(n*(1+v/100)).toFixed(2);}function saveOferta(){const n=parseFloat(document.getElementById('of-netto').value)||0;const v=parseFloat(document.getElementById('of-vat').value)||23;const o={id:genId('OF',DB.oferty),data:new Date().toISOString().slice(0,10),id_klienta:document.getElementById('of-klient').value,id_szansy:'',id_handlowca:document.getElementById('of-handl').value,wartosc_n:n,wartosc_b:parseFloat((n*(1+v/100)).toFixed(2)),status:document.getElementById('of-status').value,waznosc:document.getElementById('of-waznosc').value,szansa_wyg:parseInt(document.getElementById('of-szansa').value)||50,notatki:document.getElementById('of-notatki').value};DB.oferty.push(o);
}function saveZamowienie(){const n=parseFloat(document.getElementById('zam-netto').value)||0;const v=parseFloat(document.getElementById('zam-vat').value)||23;const z={id:genId('ZAM',DB.zamowienia),data:new Date().toISOString().slice(0,10),id_klienta:document.getElementById('zam-klient').value,id_szansy:'',id_handlowca:document.getElementById('zam-handl').value,wartosc_n:n,wartosc_b:parseFloat((n*(1+v/100)).toFixed(2)),status:document.getElementById('zam-status').value,data_real:document.getElementById('zam-real').value,pierwsze:document.getElementById('zam-pierwsze').value,notatki:document.getElementById('zam-notatki').value};DB.zamowienia.push(z);closeModal('mZamowienie');renderAll();}function zmienStatusOf(id){const o=DB.oferty.find(x=>x.id===id);if(!o)return;document.getElementById('mStatusOf-id').value=id;document.getElementById('mStatusOf-info').textContent='Oferta '+id+' · Klient: '+klientNazwa(o.id_klienta)+' · '+o.wartosc_b.toLocaleString()+' PLN';const sel=document.getElementById('mStatusOf-val');for(let i=0;i<sel.options.length;i++)if(sel.options[i].value===o.status||sel.options[i].text===o.status)sel.selectedIndex=i;openModal('mStatusOf');}function zapiszStatusOf(){const id=document.getElementById('mStatusOf-id').value;const st=document.getElementById('mStatusOf-val').value;const o=DB.oferty.find(x=>x.id===id);if(o)o.status=st;closeModal('mStatusOf');renderAll();}function zmienStatusZam(id){const z=DB.zamowienia.find(x=>x.id===id);if(!z)return;document.getElementById('mStatusZam-id').value=id;document.getElementById('mStatusZam-info').textContent='Zamówienie '+id+' · Klient: '+klientNazwa(z.id_klienta)+' · '+z.wartosc_b.toLocaleString()+' PLN';const sel=document.getElementById('mStatusZam-val');for(let i=0;i<sel.options.length;i++)if(sel.options[i].value===z.status||sel.options[i].text===z.status)sel.selectedIndex=i;openModal('mStatusZam');}function zapiszStatusZam(){const id=document.getElementById('mStatusZam-id').value;const st=document.getElementById('mStatusZam-val').value;const z=DB.zamowienia.find(x=>x.id===id);if(z)z.status=st;closeModal('mStatusZam');renderAll();}function renderOferty(){const tbody=document.getElementById('oferty-tbl');if(!tbody)return;tbody.innerHTML=DB.oferty.map(o=>`<tr><td><strong>${o.id}</strong></td><td>${o.data}</td><td>${klientNazwa(o.id_klienta)}</td><td>${o.wartosc_n.toFixed(2)} PLN</td><td><strong>${o.wartosc_b.toLocaleString()} PLN</strong></td><td>${badgeStatus(o.status)}</td><td>${o.waznosc||'-'}</td><td>${o.szansa_wyg}%</td><td><div class='act-btns'><button class='ed' onclick='zmienStatusOf("${o.id}")'>Zmień status</button></div></td></tr>`).join('')||'<tr><td colspan=9 class=empty>Brak ofert</td></tr>';}function renderZamowienia(){const tbody=document.getElementById('zamowienia-tbl');if(!tbody)return;tbody.innerHTML=DB.zamowienia.map(z=>`<tr><td><strong>${z.id}</strong></td><td>${z.data}</td><td>${klientNazwa(z.id_klienta)}</td><td>${z.wartosc_n.toFixed(2)} PLN</td><td><strong>${z.wartosc_b.toLocaleString()} PLN</strong></td><td>${badgeStatus(z.status)}</td><td>${z.data_real||'-'}</td><td>${z.pierwsze==='TAK'?'<span class="b g">TAK</span>':'NIE'}</td><td><div class='act-btns'><button class='ed' onclick='zmienStatusZam("${z.id}")'>Zmień status</button></div></td></tr>`).join('')||'<tr><td colspan=9 class=empty>Brak zamówień</td></tr>';}const __origOpenModal=openModal;openModal=function(id){__origOpenModal(id);if(id==='mOferta'){fillSel('of-klient',DB.klienci,'id','nazwa');fillSel('of-handl',DB.handlowcy,'id','pelna');}if(id==='mZamowienie'){fillSel('zam-klient',DB.klienci,'id','nazwa');fillSel('zam-handl',DB.handlowcy,'id','pelna');}};renderAll();

function ofLiczSume(){let sN=0,sB=0;document.querySelectorAll('#of-pozycje tr').forEach(tr=>{const sel=tr.querySelector('select');const inp=tr.querySelector('input');if(!sel||!inp)return;const pid=sel.value;const qty=parseFloat(inp.value)||0;const prod=DB.produkty.find(p=>p.id===pid);if(!prod)return;sN+=prod.netto*qty;sB+=prod.brutto*qty;});document.getElementById('of-suma-netto').textContent=sN.toFixed(2)+' PLN';document.getElementById('of-suma-brutto').textContent=sB.toFixed(2)+' PLN';}

function ofDodajPozycje(){const tbody=document.getElementById('of-pozycje');if(!tbody)return;let opts='<option value="">-- wybierz --</option>';DB.produkty.filter(p=>p.aktywny==='TAK').forEach(p=>{opts+=`<option value="${p.id}">${p.nazwa} (${p.brutto} PLN)</option>`;});const tr=document.createElement('tr');tr.innerHTML=`<td><select style="width:100%" onchange="ofLiczSume()">${opts}</select></td><td style="text-align:center"><input type="number" min="1" value="1" style="width:60px;text-align:center" oninput="ofLiczSume()"></td><td style="text-align:right;padding:6px" class="of-cn">-</td><td style="text-align:right;padding:6px" class="of-wn">-</td><td style="text-align:right;padding:6px" class="of-wb">-</td><td><button onclick="ofUsunPozycje(this)" style="background:#e74c3c;color:#fff;border:none;border-radius:4px;padding:2px 7px;cursor:pointer">x</button></td>`;tbody.appendChild(tr);tr.querySelector('select').addEventListener('change',function(){const prod=DB.produkty.find(p=>p.id===this.value);if(prod){this.closest('tr').querySelector('.of-cn').textContent=prod.netto.toFixed(2)+' PLN';}else{this.closest('tr').querySelector('.of-cn').textContent='-';}ofLiczSume();});}

function ofUsunPozycje(btn){btn.closest('tr').remove();ofLiczSume();}

saveOferta=function(){const pozycje=[];let sumaN=0,sumaB=0;document.querySelectorAll('#of-pozycje tr').forEach(tr=>{const sel=tr.querySelector('select');const inp=tr.querySelector('input');if(!sel||!inp)return;const pid=sel.value;const qty=parseFloat(inp.value)||0;const prod=DB.produkty.find(p=>p.id===pid);if(!prod||!pid)return;const wn=parseFloat((prod.netto*qty).toFixed(2));const wb=parseFloat((prod.brutto*qty).toFixed(2));sumaN+=wn;sumaB+=wb;pozycje.push({id_produktu:pid,nazwa:prod.nazwa,ilosc:qty,cena_n:prod.netto,cena_b:prod.brutto,wartosc_n:wn,wartosc_b:wb});});const o={id:genId('OF',DB.oferty),data:new Date().toISOString().slice(0,10),id_klienta:document.getElementById('of-klient').value,id_szansy:'',id_handlowca:document.getElementById('of-handl').value,wartosc_n:parseFloat(sumaN.toFixed(2)),wartosc_b:parseFloat(sumaB.toFixed(2)),pozycje:pozycje,status:document.getElementById('of-status').value,waznosc:document.getElementById('of-waznosc').value,szansa_wyg:parseInt(document.getElementById('of-szansa').value)||50,notatki:document.getElementById('of-notatki').value};DB.oferty.push(o);document.getElementById('of-pozycje').innerHTML='';document.getElementById('of-suma-netto').textContent='0.00 PLN';document.getElementById('of-suma-brutto').textContent='0.00 PLN';closeModal('mOferta');renderAll();}

const _openModalOrig2=openModal;openModal=function(id){_openModalOrig2(id);if(id==='mOferta'){const mbox=document.querySelector('#mOferta .mbox');if(mbox&&!mbox.querySelector('#of-pozycje')){mbox.style.maxWidth='700px';const st=mbox.querySelector('#of-status')?mbox.querySelector('#of-status').value:'Robocza';const waz=mbox.querySelector('#of-waznosc')?mbox.querySelector('#of-waznosc').value:'';const sz=mbox.querySelector('#of-szansa')?mbox.querySelector('#of-szansa').value:'50';mbox.innerHTML='';const h=document.createElement('div');h.innerHTML=`<h3>Nowa oferta</h3><div class='fg'><div class='f'><label>Klient</label><select id='of-klient'></select></div><div class='f'><label>Handlowiec</label><select id='of-handl'></select></div></div><div class='fg'><div class='f'><label>Status</label><select id='of-status'><option>Robocza</option><option>Wyslana</option><option>Zaakceptowana</option><option>Odrzucona</option><option>Wygasla</option></select></div><div class='f'><label>Waznosc do</label><input id='of-waznosc' type='date'></div><div class='f'><label>Szansa wygrania (%)</label><input id='of-szansa' type='number' min='0' max='100' value='50'></div></div><div style='margin:14px 0 6px;display:flex;align-items:center;gap:10px'><b>Pozycje oferty</b><button class='btn' style='padding:4px 12px;font-size:12px' onclick='ofDodajPozycje()'>+ Dodaj pozycje</button></div><div style='overflow-x:auto'><table style='width:100%;border-collapse:collapse;font-size:13px'><thead><tr style='background:#f0f2f5'><th style='padding:7px 6px;text-align:left'>Produkt</th><th style='padding:7px 6px;text-align:center;width:70px'>Ilosc</th><th style='padding:7px 6px;text-align:right;width:90px'>Cena netto</th><th style='padding:7px 6px;text-align:right;width:105px'>Wart. netto</th><th style='padding:7px 6px;text-align:right;width:105px'>Wart. brutto</th><th style='padding:7px 6px;width:32px'></th></tr></thead><tbody id='of-pozycje'></tbody><tfoot><tr style='font-weight:700;border-top:2px solid #dee2e6'><td colspan='3' style='padding:7px 6px;text-align:right'>SUMA:</td><td style='padding:7px 6px;text-align:right' id='of-suma-netto'>0.00 PLN</td><td style='padding:7px 6px;text-align:right' id='of-suma-brutto'>0.00 PLN</td><td></td></tr></tfoot></table></div><div class='f' style='margin-top:12px'><label>Notatki</label><textarea id='of-notatki'></textarea></div><div class='fb'><button class='btn gr' onclick='closeModal("mOferta")'>Anuluj</button><button class='btn' onclick='saveOferta()'>Zapisz</button></div>`;while(h.firstChild)mbox.appendChild(h.firstChild);}fillSel('of-klient',DB.klienci,'id','nazwa');fillSel('of-handl',DB.handlowcy,'id','pelna');}}

updateStatusOf=function(){
const id=document.getElementById('mStatusOf-id').value;
const st=document.getElementById('mStatusOf-val').value;
const o=DB.oferty.find(x=>x.id===id);
if(!o)return;
const prevStatus=o.status;
o.status=st;
if(st==='Zaakceptowana'&&prevStatus!=='Zaakceptowana'){
const zamExists=DB.zamowienia.find(z=>z.id_oferty===id);
if(!zamExists){
const zam={
id:genId('ZAM',DB.zamowienia),
data:new Date().toISOString().slice(0,10),
id_klienta:o.id_klienta,
id_szansy:o.id_szansy||'',
id_handlowca:o.id_handlowca,
id_oferty:id,
wartosc_n:o.wartosc_n,
wartosc_b:o.wartosc_b,
pozycje:o.pozycje||[],
status:'W realizacji',
data_real:'',
pierw: 'NIE',
notatki:'Automatycznie utworzone z oferty '+id
};
DB.zamowienia.push(zam);
if(typeof showToast==='function')showToast('Zamowienie '+zam.id+' zostalo utworzone automatycznie!');
else alert('Zamowienie '+zam.id+' zostalo automatycznie utworzone z oferty '+id+'!');
}
}
closeModal('mStatusOf');
renderAll();
}

;/* Vetaris CRM v2 - kalendarz, platnosci, synchronizacja, oferty -> zamowienia */
(function(){
  const PAYMENT_METHODS=['Gotowka','Przelew przedplata','Przelew terminowy','Karta','BLIK','Pobranie','Kredyt kupiecki','Raty / leasing','Inne'];
  const PAYMENT_STATUSES=['Do realizacji','Czekaj na wplate','Oplacone','Termin platnosci','Po terminie','Anulowane'];
  let currentCal=new Date();

  function byId(id){return document.getElementById(id);}
  function val(id,def=''){const el=byId(id);return el?el.value:def;}
  function setVal(id,v){const el=byId(id);if(el)el.value=v||'';}
  function money(n){return (Number(n)||0).toLocaleString('pl-PL',{minimumFractionDigits:2,maximumFractionDigits:2})+' PLN';}
  function today(){return new Date().toISOString().slice(0,10);}
  function norm(s){return (s||'').toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
  function esc(s){return (s??'').toString().replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
  function paymentDecision(method,status){
    const m=norm(method), st=norm(status);
    if(st.includes('oplac')||m==='gotowka'||m==='karta'||m==='blik')return 'Do realizacji';
    if(m.includes('kredyt')||m.includes('termin'))return 'Kredyt kupiecki';
    if(m.includes('przedplata')||st.includes('wplate'))return 'Czekaj na wplate';
    if(m.includes('pobranie'))return 'Do realizacji';
    return status||'Do realizacji';
  }
  function statusBadge(s){return badgeStatus((s||'').replace('Oplacone','Opłacone').replace('Czekaj na wplate','Czekaj na wpłatę'));}
  function fillOptions(id,items,selected=''){
    const el=byId(id);if(!el)return;
    el.innerHTML=items.map(x=>`<option ${x===selected?'selected':''}>${x}</option>`).join('');
  }
  function fillSelSafe(id,arr,valKey,lblKey,selected=''){
    const s=byId(id);if(!s)return;
    s.innerHTML='<option value="">-- wybierz --</option>'+arr.map(x=>`<option value="${esc(x[valKey])}" ${x[valKey]===selected?'selected':''}>${esc(x[lblKey])}</option>`).join('');
  }
  function normalizeData(){
    DB.klienci.forEach(k=>{
      k.forma_platnosci=k.forma_platnosci||'Przelew przedplata';
      k.status_platnosci=k.status_platnosci||paymentDecision(k.forma_platnosci,'Czekaj na wplate');
      k.limit_kredytu=k.limit_kredytu||0;
      k.termin_platnosci=k.termin_platnosci||'0';
    });
    DB.oferty.forEach(o=>{
      const k=DB.klienci.find(x=>x.id===o.id_klienta)||{};
      o.forma_platnosci=o.forma_platnosci||k.forma_platnosci||'Przelew przedplata';
      o.status_platnosci=o.status_platnosci||paymentDecision(o.forma_platnosci,'Czekaj na wplate');
      o.pozycje=o.pozycje||[];
    });
    DB.zamowienia.forEach(z=>{
      const k=DB.klienci.find(x=>x.id===z.id_klienta)||{};
      z.forma_platnosci=z.forma_platnosci||k.forma_platnosci||'Przelew przedplata';
      z.status_platnosci=z.status_platnosci||paymentDecision(z.forma_platnosci,z.status_platnosci||'Czekaj na wplate');
      z.pozycje=z.pozycje||[];
      z.pierwsze=z.pierwsze||z.pierw||'NIE';
    });
  }
  function resetForm(root){
    const el=typeof root==='string'?document.querySelector(root):root;
    if(!el)return;
    el.querySelectorAll('input,textarea').forEach(x=>{if(x.type!=='date'&&x.type!=='time')x.value='';});
  }
  let firestoreApplying=false;
  function localUpdatedAt(){
    return Number(localStorage.getItem('vetaris_crm_v2_updated_at'))||0;
  }
  function markLocalUpdated(){
    const ts=Date.now();
    localStorage.setItem('vetaris_crm_v2_updated_at',String(ts));
    return ts;
  }
  function saveLocal(){
    try{localStorage.setItem('vetaris_crm_v2',JSON.stringify(DB));}catch(e){}
    if(!firestoreApplying){
      try{markLocalUpdated();}catch(e){}
    }
    try{
      if(!firestoreApplying&&window.vetarisCloudSave)window.vetarisCloudSave(JSON.parse(JSON.stringify(DB)));
    }catch(e){console.warn('Cloud save skipped',e);}
  }
  function loadLocal(){
    try{const raw=localStorage.getItem('vetaris_crm_v2');if(raw){DB=JSON.parse(raw);}}catch(e){}
  }
  window.vetarisGetDB=function(){
    normalizeData();
    return JSON.parse(JSON.stringify(DB));
  };
  window.vetarisFirestoreLoad=function(cloudDB,meta){
    if(!cloudDB||typeof cloudDB!=='object')return;
    const cloudTs=Number(meta&&meta.updatedAtClient)||0;
    const localTs=localUpdatedAt();
    if(localTs&&(!cloudTs||localTs>cloudTs+1000)){
      console.warn('Firestore ma starsze dane, wysylam nowsza lokalna kopie do chmury', {localTs, cloudTs});
      try{if(window.vetarisCloudSave)window.vetarisCloudSave(JSON.parse(JSON.stringify(DB)));}catch(e){}
      return;
    }
    const required=['klienci','kontakty','leady','spotkania','zadania','oferty','zamowienia','produkty','handlowcy','targety'];
    required.forEach(k=>{if(!Array.isArray(cloudDB[k]))cloudDB[k]=Array.isArray(DB[k])?DB[k]:[];});
    firestoreApplying=true;
    DB=cloudDB;
    normalizeData();
    try{localStorage.setItem('vetaris_crm_v2',JSON.stringify(DB));}catch(e){}
    if(cloudTs)try{localStorage.setItem('vetaris_crm_v2_updated_at',String(cloudTs));}catch(e){}
    renderAll();
    firestoreApplying=false;
  };
  window.resetVetarisDemo=function(){
    if(confirm('Wyczyscic lokalnie zapisane dane testowe i wrocic do danych z kodu?')){
      try{localStorage.removeItem('vetaris_crm_v2');}catch(e){}
      location.reload();
    }
  };
  function buildPaymentFields(prefix){
    return `<div class='f'><label>Forma płatności</label><select id='${prefix}-platnosc'>${PAYMENT_METHODS.map(x=>`<option>${x}</option>`).join('')}</select></div>
    <div class='f'><label>Status płatności / decyzja</label><select id='${prefix}-platnosc-status'>${PAYMENT_STATUSES.map(x=>`<option>${x}</option>`).join('')}</select></div>`;
  }
  function ensureClientPaymentFields(){
    const m=byId('mKlient');if(!m||byId('k-platnosc'))return;
    const grid=m.querySelector('.fg');
    if(grid){
      grid.insertAdjacentHTML('beforeend',buildPaymentFields('k')+
      `<div class='f'><label>Termin płatności (dni)</label><input id='k-termin-platnosci' type='number' value='0'></div>
      <div class='f'><label>Limit kredytu kupieckiego</label><input id='k-limit-kredytu' type='number' step='0.01' value='0'></div>`);
    }
  }
  function ensureSpotkaniaLayout(){
    const sec=byId('spotkania');if(!sec||byId('cal-grid'))return;
    sec.innerHTML=`<div class='box-h' style='background:#fff;border-radius:10px;margin-bottom:14px;box-shadow:0 2px 8px rgba(0,0,0,.05)'>
      <h3>Interaktywny kalendarz spotkań</h3>
      <button class='btn' onclick='openModal("mSpotkanie")'>+ Dodaj spotkanie</button>
    </div>
    <div class='calendar-wrap'>
      <div class='cal-top'>
        <button class='btn gr' onclick='calPrev()'>‹ Poprzedni</button>
        <h3 id='cal-title'></h3>
        <button class='btn gr' onclick='calNext()'>Następny ›</button>
      </div>
      <div class='cal-week'><span>Pon</span><span>Wt</span><span>Śr</span><span>Czw</span><span>Pt</span><span>Sob</span><span>Nd</span></div>
      <div id='cal-grid' class='cal-grid'></div>
    </div>
    <div class='box' style='margin-top:16px'><div class='box-h'><h3>Lista spotkań</h3></div>
      <table><thead><tr><th>ID</th><th>Data</th><th>Godz.</th><th>Klient</th><th>Typ</th><th>Cel</th><th>Status</th><th>Handlowiec</th><th>Akcje</th></tr></thead><tbody id='spotkania-tbl'></tbody></table>
    </div>`;
  }
  function ensureOfferOrderHeaders(){
    const oh=document.querySelector('#oferty thead tr');
    if(oh)oh.innerHTML='<th>ID</th><th>Data</th><th>Klient</th><th>Netto</th><th>Brutto</th><th>Status</th><th>Płatność</th><th>Decyzja</th><th>Akcje</th>';
    const zh=document.querySelector('#zamowienia thead tr');
    if(zh)zh.innerHTML='<th>ID</th><th>Data</th><th>Klient</th><th>Netto</th><th>Brutto</th><th>Status</th><th>Płatność</th><th>Realizacja</th><th>Akcje</th>';
  }
  function productRows(prefix){
    const rows=[...document.querySelectorAll(`#${prefix}-pozycje tr`)];
    const pozycje=[];let sumaN=0,sumaB=0;
    rows.forEach(tr=>{
      const pid=tr.querySelector('select')?.value;
      const qty=parseFloat(tr.querySelector('input')?.value)||0;
      const p=DB.produkty.find(x=>x.id===pid);
      if(!p||!qty)return;
      const wn=+(p.netto*qty).toFixed(2), wb=+(p.brutto*qty).toFixed(2);
      sumaN+=wn;sumaB+=wb;
      pozycje.push({id_produktu:p.id,nazwa:p.nazwa,ilosc:qty,cena_n:p.netto,cena_b:p.brutto,wartosc_n:wn,wartosc_b:wb});
    });
    return {pozycje,wartosc_n:+sumaN.toFixed(2),wartosc_b:+sumaB.toFixed(2)};
  }
  function calcRows(prefix){
    let sN=0,sB=0;
    document.querySelectorAll(`#${prefix}-pozycje tr`).forEach(tr=>{
      const pid=tr.querySelector('select')?.value;
      const qty=parseFloat(tr.querySelector('input')?.value)||0;
      const p=DB.produkty.find(x=>x.id===pid);
      const cn=tr.querySelector(`.${prefix}-cn`), wn=tr.querySelector(`.${prefix}-wn`), wb=tr.querySelector(`.${prefix}-wb`);
      if(p){
        const rowN=p.netto*qty,rowB=p.brutto*qty;
        if(cn)cn.textContent=money(p.netto);
        if(wn)wn.textContent=money(rowN);
        if(wb)wb.textContent=money(rowB);
        sN+=rowN;sB+=rowB;
      }else{
        if(cn)cn.textContent='-'; if(wn)wn.textContent='-'; if(wb)wb.textContent='-';
      }
    });
    const sn=byId(`${prefix}-suma-netto`), sb=byId(`${prefix}-suma-brutto`);
    if(sn)sn.textContent=money(sN);
    if(sb)sb.textContent=money(sB);
  }
  function addProductRow(prefix,item){
    const tbody=byId(`${prefix}-pozycje`);if(!tbody)return;
    const opts='<option value="">-- wybierz --</option>'+DB.produkty.filter(p=>p.aktywny==='TAK').map(p=>`<option value="${p.id}" ${item&&item.id_produktu===p.id?'selected':''}>${esc(p.nazwa)} (${money(p.brutto)})</option>`).join('');
    const tr=document.createElement('tr');
    tr.innerHTML=`<td><select style="width:100%" onchange="crmCalcRows('${prefix}')">${opts}</select></td>
      <td style="text-align:center"><input type="number" min="1" value="${item?.ilosc||1}" style="width:64px;text-align:center" oninput="crmCalcRows('${prefix}')"></td>
      <td class="${prefix}-cn" style="text-align:right;padding:6px">-</td>
      <td class="${prefix}-wn" style="text-align:right;padding:6px">-</td>
      <td class="${prefix}-wb" style="text-align:right;padding:6px">-</td>
      <td><button onclick="this.closest('tr').remove();crmCalcRows('${prefix}')" style="background:#e74c3c;color:#fff;border:none;border-radius:4px;padding:2px 7px;cursor:pointer">x</button></td>`;
    tbody.appendChild(tr);calcRows(prefix);
  }
  window.crmCalcRows=calcRows;
  window.ofDodajPozycje=function(){addProductRow('of');};
  window.zamDodajPozycje=function(){addProductRow('zam');};
  function lineItemsForm(prefix,title){
    return `<h3>${title}</h3>
    <div class='fg'><div class='f'><label>Klient</label><select id='${prefix}-klient'></select></div><div class='f'><label>Handlowiec</label><select id='${prefix}-handl'></select></div>${buildPaymentFields(prefix)}</div>
    <div class='fg'><div class='f'><label>Status</label><select id='${prefix}-status'>${prefix==='of'?'<option>Robocza</option><option>Wyslana</option><option>Zaakceptowana</option><option>Odrzucona</option><option>Wygasla</option>':'<option>Nowe</option><option>W realizacji</option><option>Zrealizowane</option><option>Anulowane</option>'}</select></div>
    ${prefix==='of'?`<div class='f'><label>Ważność do</label><input id='of-waznosc' type='date'></div><div class='f'><label>Szansa wygrania (%)</label><input id='of-szansa' type='number' min='0' max='100' value='50'></div>`:`<div class='f'><label>Data realizacji</label><input id='zam-real' type='date'></div><div class='f'><label>Pierwsze zamówienie?</label><select id='zam-pierwsze'><option>NIE</option><option>TAK</option></select></div>`}</div>
    <div style='margin:14px 0 6px;display:flex;align-items:center;gap:10px'><b>Pozycje produktów</b><button class='btn' style='padding:4px 12px;font-size:12px' onclick='${prefix}DodajPozycje()'>+ Dodaj pozycję</button></div>
    <div style='overflow-x:auto'><table style='width:100%;border-collapse:collapse;font-size:13px'><thead><tr style='background:#f0f2f5'><th style='padding:7px 6px;text-align:left'>Produkt</th><th style='padding:7px 6px;text-align:center;width:70px'>Ilość</th><th style='padding:7px 6px;text-align:right;width:100px'>Cena netto</th><th style='padding:7px 6px;text-align:right;width:110px'>Wart. netto</th><th style='padding:7px 6px;text-align:right;width:110px'>Wart. brutto</th><th style='padding:7px 6px;width:32px'></th></tr></thead><tbody id='${prefix}-pozycje'></tbody><tfoot><tr style='font-weight:700;border-top:2px solid #dee2e6'><td colspan='3' style='padding:7px 6px;text-align:right'>SUMA:</td><td style='padding:7px 6px;text-align:right' id='${prefix}-suma-netto'>0.00 PLN</td><td style='padding:7px 6px;text-align:right' id='${prefix}-suma-brutto'>0.00 PLN</td><td></td></tr></tfoot></table></div>
    <div class='f' style='margin-top:12px'><label>Notatki</label><textarea id='${prefix}-notatki'></textarea></div>
    <div class='fb'><button class='btn gr' onclick='closeModal("${prefix==='of'?'mOferta':'mZamowienie'}")'>Anuluj</button><button class='btn' onclick='${prefix==='of'?'saveOferta':'saveZamowienie'}()'>Zapisz</button></div>`;
  }
  function ensureOfferModal(){
    const mbox=document.querySelector('#mOferta .mbox');if(!mbox)return;
    mbox.style.maxWidth='760px';
    mbox.innerHTML=lineItemsForm('of','Nowa oferta');
    fillSelSafe('of-klient',DB.klienci,'id','nazwa');
    fillSelSafe('of-handl',DB.handlowcy,'id','pelna');
  }
  function ensureOrderModal(fromOffer){
    const mbox=document.querySelector('#mZamowienie .mbox');if(!mbox)return;
    mbox.style.maxWidth='760px';
    mbox.innerHTML=lineItemsForm('zam','Nowe zamówienie');
    fillSelSafe('zam-klient',DB.klienci,'id','nazwa',fromOffer?.id_klienta);
    fillSelSafe('zam-handl',DB.handlowcy,'id','pelna',fromOffer?.id_handlowca);
    if(fromOffer){
      setVal('zam-platnosc',fromOffer.forma_platnosci);
      setVal('zam-platnosc-status',paymentDecision(fromOffer.forma_platnosci,fromOffer.status_platnosci));
      (fromOffer.pozycje||[]).forEach(p=>addProductRow('zam',p));
      if(!(fromOffer.pozycje||[]).length){
        byId('zam-suma-netto').textContent=money(fromOffer.wartosc_n);
        byId('zam-suma-brutto').textContent=money(fromOffer.wartosc_b);
      }
      setVal('zam-notatki','Zamówienie utworzone z oferty '+fromOffer.id);
    }
  }
  function ensureUi(){
    normalizeData();
    ensureClientPaymentFields();
    ensureSpotkaniaLayout();
    ensureOfferOrderHeaders();
    const top=document.querySelector('.topbar');
    if(top&&!byId('btn-reset-demo'))top.insertAdjacentHTML('beforeend',`<button id='btn-reset-demo' class='btn gr' style='padding:6px 10px;font-size:12px' onclick='resetVetarisDemo()'>Reset danych</button>`);
  }
  window.renderKlienci=function(){
    normalizeData();
    const fv=(byId('fk')?.value||'').toLowerCase(), ft=byId('fkTyp')?.value||'', fs=byId('fkStatus')?.value||'';
    const tbody=byId('klienci-tbl');if(!tbody)return;
    const head=document.querySelector('#klienci thead tr');
    if(head)head.innerHTML='<th>ID</th><th>Firma</th><th>Typ</th><th>Osoba</th><th>Telefon</th><th>Email</th><th>Miasto</th><th>Status</th><th>Płatność</th><th>Decyzja</th><th>Akcje</th>';
    const rows=DB.klienci.filter(k=>(k.nazwa||'').toLowerCase().includes(fv)||(k.osoba||'').toLowerCase().includes(fv)||(k.miasto||'').toLowerCase().includes(fv)).filter(k=>(!ft||k.typ===ft)&&(!fs||k.status===fs));
    tbody.innerHTML=rows.map(k=>`<tr><td><b>${k.id}</b></td><td>${esc(k.nazwa)}</td><td>${esc(k.typ)}</td><td>${esc(k.osoba)}</td><td>${esc(k.tel)}</td><td>${esc(k.email)}</td><td>${esc(k.miasto)}</td><td>${badgeStatus(k.status)}</td><td>${esc(k.forma_platnosci)}</td><td>${statusBadge(paymentDecision(k.forma_platnosci,k.status_platnosci))}</td><td><div class='act-btns'><button class='del' onclick='delRow("klienci","${k.id}")'>Usuń</button></div></td></tr>`).join('')||'<tr><td colspan=11 class=empty>Brak wyników</td></tr>';
  };
  window.renderSpotkania=function(){
    ensureSpotkaniaLayout();
    renderCalendar();
    const tbody=byId('spotkania-tbl');if(!tbody)return;
    tbody.innerHTML=DB.spotkania.slice().sort((a,b)=>(a.data+a.godzina).localeCompare(b.data+b.godzina)).map(s=>`<tr><td><b>${s.id}</b></td><td>${s.data}</td><td>${s.godzina}</td><td>${klientNazwa(s.id_klienta)}</td><td>${esc(s.typ)}</td><td>${esc(s.cel)}</td><td>${badgeStatus(s.status)}</td><td>${handlNazwa(s.id_handlowca)}</td><td><div class='act-btns'><button class='ed' onclick='prefillSpotkanie("${s.data}")'>+ w tym dniu</button><button class='del' onclick='delSpotkanie("${s.id}")'>Usuń</button></div></td></tr>`).join('')||'<tr><td colspan=9 class=empty>Brak spotkań</td></tr>';
  };
  function renderCalendar(){
    const grid=byId('cal-grid'), title=byId('cal-title');if(!grid||!title)return;
    const y=currentCal.getFullYear(), m=currentCal.getMonth();
    title.textContent=currentCal.toLocaleDateString('pl-PL',{month:'long',year:'numeric'});
    const first=new Date(y,m,1), last=new Date(y,m+1,0);
    const start=(first.getDay()+6)%7;
    const days=[];
    for(let i=0;i<start;i++)days.push(null);
    for(let d=1;d<=last.getDate();d++)days.push(new Date(y,m,d));
    while(days.length%7)days.push(null);
    grid.innerHTML=days.map(dt=>{
      if(!dt)return `<div class='cal-day muted'></div>`;
      const ds=dt.toISOString().slice(0,10);
      const ev=DB.spotkania.filter(s=>s.data===ds);
      const isToday=ds===today();
      return `<div class='cal-day ${isToday?'today':''}' onclick='prefillSpotkanie("${ds}")'><div class='cal-num'>${dt.getDate()}</div>${ev.map(s=>`<div class='cal-event ${norm(s.status).includes('zreal')?'done':''}' title='${esc(s.cel)}'>${esc(s.godzina)} · ${esc(klientNazwa(s.id_klienta))}</div>`).join('')}</div>`;
    }).join('');
  }
  window.calPrev=function(){currentCal=new Date(currentCal.getFullYear(),currentCal.getMonth()-1,1);renderSpotkania();};
  window.calNext=function(){currentCal=new Date(currentCal.getFullYear(),currentCal.getMonth()+1,1);renderSpotkania();};
  window.prefillSpotkanie=function(date){
    openModal('mSpotkanie');
    setVal('sp-data',date);
  };
  window.renderOferty=function(){
    normalizeData();ensureOfferOrderHeaders();
    const tbody=byId('oferty-tbl');if(!tbody)return;
    tbody.innerHTML=DB.oferty.map(o=>{
      const dec=paymentDecision(o.forma_platnosci,o.status_platnosci);
      return `<tr><td><strong>${o.id}</strong></td><td>${o.data}</td><td>${klientNazwa(o.id_klienta)}</td><td>${money(o.wartosc_n)}</td><td><strong>${money(o.wartosc_b)}</strong></td><td>${badgeStatus(o.status)}</td><td>${esc(o.forma_platnosci)}</td><td>${statusBadge(dec)}</td><td><div class='act-btns'><button class='ed' onclick='zmienStatusOf("${o.id}")'>Status</button><button class='ed' onclick='createOrderFromOffer("${o.id}",true)'>Do zamówień</button></div></td></tr>`;
    }).join('')||'<tr><td colspan=9 class=empty>Brak ofert</td></tr>';
  };
  window.renderZamowienia=function(){
    normalizeData();ensureOfferOrderHeaders();
    const tbody=byId('zamowienia-tbl');if(!tbody)return;
    tbody.innerHTML=DB.zamowienia.map(z=>{
      const dec=paymentDecision(z.forma_platnosci,z.status_platnosci);
      return `<tr><td><strong>${z.id}</strong></td><td>${z.data}</td><td>${klientNazwa(z.id_klienta)}</td><td>${money(z.wartosc_n)}</td><td><strong>${money(z.wartosc_b)}</strong></td><td>${badgeStatus(z.status)}</td><td>${esc(z.forma_platnosci)}<br><small>${esc(dec)}</small></td><td>${z.data_real||'-'}</td><td><div class='act-btns'><button class='ed' onclick='zmienStatusZam("${z.id}")'>Status</button><button class='del' onclick='delZam("${z.id}")'>Usuń</button></div></td></tr>`;
    }).join('')||'<tr><td colspan=9 class=empty>Brak zamówień</td></tr>';
  };
  window.saveKlient=function(){
    ensureClientPaymentFields();
    const method=val('k-platnosc','Przelew przedplata');
    const k={id:genId('K',DB.klienci),nazwa:val('k-nazwa','Nowy klient'),typ:val('k-typ'),nip:val('k-nip'),osoba:val('k-osoba'),tel:val('k-tel'),email:val('k-email'),miasto:val('k-miasto'),woj:val('k-woj'),kraj:val('k-kraj','Polska'),status:val('k-status','Prospekt'),ulica:'',kod:'',forma_platnosci:method,status_platnosci:val('k-platnosc-status',paymentDecision(method,'Czekaj na wplate')),termin_platnosci:val('k-termin-platnosci','0'),limit_kredytu:parseFloat(val('k-limit-kredytu','0'))||0};
    if(!k.nazwa){alert('Podaj nazwę firmy');return;}
    DB.klienci.push(k);saveLocal();closeModal('mKlient');resetForm('#mKlient');renderAll();
  };
  window.saveSpotkanie=function(){
    const s={id:genId('SP',DB.spotkania),data:val('sp-data',today()),godzina:val('sp-godz','09:00'),id_klienta:val('sp-klient'),id_szansy:'',id_handlowca:val('sp-handlowiec'),typ:val('sp-typ','Wizyta handlowa'),cel:val('sp-cel'),rezultat:'',nast_krok:'',data_followup:'',adres:val('sp-adres'),status:val('sp-status','Zaplanowane'),notatki:''};
    DB.spotkania.push(s);saveLocal();closeModal('mSpotkanie');renderAll();
  };
  window.saveOferta=function(){
    const data=productRows('of');
    if(!data.pozycje.length){alert('Dodaj przynajmniej jeden produkt do oferty');return;}
    const method=val('of-platnosc','Przelew przedplata');
    const o={id:genId('OF',DB.oferty),data:today(),id_klienta:val('of-klient'),id_szansy:'',id_handlowca:val('of-handl'),...data,forma_platnosci:method,status_platnosci:val('of-platnosc-status',paymentDecision(method,'Czekaj na wplate')),status:val('of-status','Robocza'),waznosc:val('of-waznosc'),szansa_wyg:parseInt(val('of-szansa','50'))||50,notatki:val('of-notatki')};
    DB.oferty.push(o);
    if(norm(o.status).includes('zaakcept'))createOrderFromOffer(o.id,false);
    saveLocal();closeModal('mOferta');renderAll();
  };
  window.saveZamowienie=function(){
    const data=productRows('zam');
    const method=val('zam-platnosc','Przelew przedplata');
    const z={id:genId('ZAM',DB.zamowienia),data:today(),id_klienta:val('zam-klient'),id_szansy:'',id_handlowca:val('zam-handl'),...data,forma_platnosci:method,status_platnosci:val('zam-platnosc-status',paymentDecision(method,'Czekaj na wplate')),status:val('zam-status','Nowe'),data_real:val('zam-real'),pierwsze:val('zam-pierwsze','NIE'),notatki:val('zam-notatki')};
    if(!z.pozycje.length&&!(z.wartosc_b>0)){alert('Dodaj przynajmniej jeden produkt do zamówienia');return;}
    DB.zamowienia.push(z);saveLocal();closeModal('mZamowienie');renderAll();
  };
  window.createOrderFromOffer=function(id,notify){
    const o=DB.oferty.find(x=>x.id===id);if(!o)return;
    const exists=DB.zamowienia.find(z=>z.id_oferty===id);
    if(exists){if(notify)alert('Ta oferta jest już w zamówieniach jako '+exists.id);return exists;}
    const dec=paymentDecision(o.forma_platnosci,o.status_platnosci);
    const z={id:genId('ZAM',DB.zamowienia),data:today(),id_klienta:o.id_klienta,id_szansy:o.id_szansy||'',id_handlowca:o.id_handlowca,id_oferty:id,wartosc_n:o.wartosc_n,wartosc_b:o.wartosc_b,pozycje:o.pozycje||[],forma_platnosci:o.forma_platnosci,status_platnosci:dec,status:dec==='Czekaj na wplate'?'Nowe':'W realizacji',data_real:'',pierwsze:'NIE',notatki:'Automatycznie z oferty '+id};
    DB.zamowienia.push(z);saveLocal();
    if(notify)alert('Utworzono zamówienie '+z.id+' z oferty '+id);
    renderAll();
    return z;
  };
  window.zapiszStatusOf=function(){
    const id=val('mStatusOf-id'), st=val('mStatusOf-val');
    const o=DB.oferty.find(x=>x.id===id);if(!o)return;
    o.status=st;
    if(norm(st).includes('zaakcept')||norm(st).includes('zakoncz')||norm(st).includes('zrealiz'))createOrderFromOffer(id,true);
    saveLocal();closeModal('mStatusOf');renderAll();
  };
  window.openModal=(function(prev){
    return function(id){
      if(id==='mKlient')ensureClientPaymentFields();
      if(id==='mOferta'){const m=byId(id);if(m)m.classList.add('on');ensureOfferModal();return;}
      if(id==='mZamowienie'){const m=byId(id);if(m)m.classList.add('on');ensureOrderModal();return;}
      prev(id);
      if(id==='mKlient'){fillOptions('k-platnosc',PAYMENT_METHODS);fillOptions('k-platnosc-status',PAYMENT_STATUSES);}
      if(id==='mLead'||id==='mZadanie'||id==='mSpotkanie'||id==='mKontakt'){
        fillSelSafe('l-klient',DB.klienci,'id','nazwa');fillSelSafe('z-klient',DB.klienci,'id','nazwa');fillSelSafe('sp-klient',DB.klienci,'id','nazwa');fillSelSafe('c-klient',DB.klienci,'id','nazwa');
        fillSelSafe('l-handlowiec',DB.handlowcy,'id','pelna');fillSelSafe('z-handlowiec',DB.handlowcy,'id','pelna');fillSelSafe('sp-handlowiec',DB.handlowcy,'id','pelna');
      }
    };
  })(window.openModal);
  const prevRenderAll=window.renderAll;
  window.renderAll=function(){
    ensureUi();
    if(typeof renderDash==='function')renderDash();
    renderKlienci();
    if(typeof renderKontakty==='function')renderKontakty();
    if(typeof renderLeady==='function')renderLeady();
    renderSpotkania();
    if(typeof renderZadania==='function')renderZadania();
    renderOferty();
    renderZamowienia();
    if(typeof renderProdukty==='function')renderProdukty();
    if(typeof renderHandlowcy==='function')renderHandlowcy();
    if(typeof renderTargety==='function')renderTargety();
  };
  window.delRow=function(tbl,id){
    if(!DB[tbl]||!Array.isArray(DB[tbl]))return;
    if(!confirm('Usunąć rekord '+id+'?'))return;
    DB[tbl]=DB[tbl].filter(x=>x.id!==id);
    saveLocal();
    renderAll();
  };
  window.delKlient=function(id){delRow('klienci',id);};
  window.delKontakt=function(id){delRow('kontakty',id);};
  window.delLead=function(id){delRow('leady',id);};
  window.delSpotkanie=function(id){delRow('spotkania',id);};
  window.delZad=function(id){delRow('zadania',id);};
  window.delOferta=function(id){delRow('oferty',id);};
  window.delZam=function(id){delRow('zamowienia',id);};
  window.delProd=function(id){delRow('produkty',id);};
  window.delHandl=function(id){delRow('handlowcy',id);};
  window.delTarget=function(t){
    if(!confirm('Usunąć target?'))return;
    DB.targety=DB.targety.filter(x=>!(x.rok===t.rok&&x.miesiac===t.miesiac&&x.id_h===t.id_h));
    saveLocal();
    renderAll();
  };
  window.saveTarget=(function(prev){
    return function(){
      if(typeof prev==='function')prev();
      saveLocal();
      renderAll();
    };
  })(window.saveTarget);
  window.zapiszStatusZam=function(){
    const id=val('mStatusZam-id'), st=val('mStatusZam-val');
    const z=DB.zamowienia.find(x=>x.id===id);if(!z)return;
    z.status=st;
    saveLocal();closeModal('mStatusZam');renderAll();
  };
  loadLocal();
  ensureUi();
  renderAll();
})();

/* Vetaris CRM v5 - status aktualnosci, filtry wszystkich zakladek, handlowcy */
(function(){
  const FILTER_SECTIONS=['kontakty','leady','spotkania','oferty','zamowienia','produkty','handlowcy','targety'];
  const FILTER_PLACEHOLDERS={
    kontakty:'Szukaj kontaktu, klienta, telefonu, email...',
    leady:'Szukaj szansy, klienta, handlowca, statusu...',
    spotkania:'Szukaj spotkania, klienta, handlowca, daty...',
    oferty:'Szukaj oferty, klienta, handlowca, statusu...',
    zamowienia:'Szukaj zamówienia, klienta, handlowca, statusu...',
    produkty:'Szukaj produktu, kategorii, ceny...',
    handlowcy:'Szukaj handlowca, regionu, email...',
    targety:'Szukaj targetu, handlowca, miesiąca...'
  };
  let cloudOkTimer=null;

  function safeTxt(s){return (s??'').toString().replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
  function moneyV5(n){return (Number(n)||0).toLocaleString('pl-PL',{minimumFractionDigits:2,maximumFractionDigits:2})+' PLN';}
  function normV5(s){return (s||'').toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
  function getToast(){
    let t=document.getElementById('crm-save-toast');
    if(!t){
      t=document.createElement('div');
      t.id='crm-save-toast';
      t.innerHTML='<span class="dot">✓</span><span class="txt">Zapisano</span>';
      document.body.appendChild(t);
    }
    return t;
  }
  function toast(text,type='ok'){
    const t=getToast();
    t.className='show '+type;
    t.querySelector('.dot').textContent=type==='error'?'!':'✓';
    t.querySelector('.txt').textContent=text;
    clearTimeout(window.__crmToastTimer);
    window.__crmToastTimer=setTimeout(()=>t.className='',2800);
  }
  function localBadge(text,type='ok'){
    let b=document.getElementById('crm-local-save-status');
    const top=document.querySelector('.topbar');
    if(!top)return;
    if(!b){
      b=document.createElement('span');
      b.id='crm-local-save-status';
      b.style.cssText='font-size:12px;border-radius:999px;padding:6px 10px;background:#dcfce7;color:#166534;font-weight:800;margin-left:8px';
      top.appendChild(b);
    }
    b.textContent=text;
    b.style.background=type==='error'?'#fee2e2':type==='saving'?'#fef3c7':'#dcfce7';
    b.style.color=type==='error'?'#991b1b':type==='saving'?'#92400e':'#166534';
  }
  window.addEventListener('vetaris-cloud-status',e=>{
    const {text,mode}=e.detail||{};
    if(mode==='saving'){
      localBadge('⏳ zapis do chmury...','saving');
      return;
    }
    if(mode==='ok'){
      clearTimeout(cloudOkTimer);
      localBadge('✓ aktualne w chmurze','ok');
      toast(text&&text.includes('Połączono')?'Dane aktualne w chmurze':'Zapis zakończony - aktualne w chmurze','ok');
      cloudOkTimer=setTimeout(()=>localBadge('✓ aktualne','ok'),5000);
      return;
    }
    if(mode==='error'){
      localBadge('⚠ błąd chmury','error');
      toast(text||'Błąd zapisu do chmury','error');
    }
  });

  function ensureHandlowiecModal(){
    let m=document.getElementById('mHandlowiec');
    if(m)return m;
    m=document.createElement('div');
    m.id='mHandlowiec';
    m.className='modal';
    m.innerHTML=`<div class='mbox'><h3>Dodaj handlowca</h3>
      <div class='fg'>
        <div class='f'><label>Imię</label><input id='h-imie'></div>
        <div class='f'><label>Nazwisko</label><input id='h-nazwisko'></div>
        <div class='f'><label>Email</label><input id='h-email' type='email'></div>
        <div class='f'><label>Telefon</label><input id='h-tel'></div>
        <div class='f'><label>Region</label><input id='h-region' value='Lubuskie'></div>
        <div class='f'><label>Aktywny</label><select id='h-aktywny'><option>TAK</option><option>NIE</option></select></div>
        <div class='f'><label>Target miesięczny</label><input id='h-target-m' type='number' step='0.01' value='0'></div>
        <div class='f'><label>Target kwartalny</label><input id='h-target-k' type='number' step='0.01' value='0'></div>
        <div class='f'><label>Manager</label><input id='h-manager'></div>
      </div>
      <div class='fb'><button class='btn gr' onclick='closeModal("mHandlowiec")'>Anuluj</button><button class='btn' onclick='saveHandlowiec()'>Zapisz</button></div>
    </div>`;
    document.body.appendChild(m);
    return m;
  }
  window.saveHandlowiec=function(){
    ensureHandlowiecModal();
    const imie=document.getElementById('h-imie').value.trim();
    const nazwisko=document.getElementById('h-nazwisko').value.trim();
    if(!imie||!nazwisko){alert('Podaj imię i nazwisko handlowca');return;}
    const h={
      id:genId('H',DB.handlowcy),
      imie,nazwisko,
      pelna:(imie+' '+nazwisko).trim(),
      email:document.getElementById('h-email').value.trim(),
      tel:document.getElementById('h-tel').value.trim(),
      region:document.getElementById('h-region').value.trim(),
      aktywny:document.getElementById('h-aktywny').value,
      target_m:parseFloat(document.getElementById('h-target-m').value)||0,
      target_k:parseFloat(document.getElementById('h-target-k').value)||0,
      data_startu:new Date().toISOString().slice(0,10),
      manager:document.getElementById('h-manager').value.trim()
    };
    DB.handlowcy.push(h);
    closeModal('mHandlowiec');
    if(window.crmForceSave)window.crmForceSave('dodano handlowca');
    renderAll();
  };
  window.saveHandl=window.saveHandlowiec;
  window.openHandlowiec=function(){
    ensureHandlowiecModal();
    const m=document.getElementById('mHandlowiec');
    if(m)m.classList.add('on');
  };

  const prevOpenModalV5=window.openModal;
  window.openModal=function(id){
    if(id==='mHandlowiec'){
      ensureHandlowiecModal();
      const m=document.getElementById('mHandlowiec');
      if(m)m.classList.add('on');
      return;
    }
    return prevOpenModalV5.apply(this,arguments);
  };

  function ensureFilters(){
    FILTER_SECTIONS.forEach(sec=>{
      const root=document.getElementById(sec);
      if(!root||root.querySelector('.crm-tab-filter'))return;
      const box=root.querySelector('.box-h');
      if(!box)return;
      box.insertAdjacentHTML('afterend',`<div class="filt crm-tab-filter"><input id="crm-filter-${sec}" placeholder="${FILTER_PLACEHOLDERS[sec]||'Szukaj...'}" oninput="crmApplyFilter('${sec}')"></div>`);
    });
  }
  window.crmApplyFilter=function(sec){
    const input=document.getElementById('crm-filter-'+sec);
    const root=document.getElementById(sec);
    if(!input||!root)return;
    const q=normV5(input.value);
    root.querySelectorAll('tbody tr').forEach(tr=>{
      if(tr.classList.contains('empty'))return;
      tr.style.display=normV5(tr.innerText).includes(q)?'':'none';
    });
  };
  function applyAllFilters(){
    FILTER_SECTIONS.forEach(sec=>{
      const input=document.getElementById('crm-filter-'+sec);
      if(input&&input.value)window.crmApplyFilter(sec);
    });
  }
  function ensureHeader(selector,html){
    const tr=document.querySelector(selector);
    if(tr)tr.innerHTML=html;
  }
  window.renderOferty=function(){
    const tbody=document.getElementById('oferty-tbl');if(!tbody)return;
    ensureHeader('#oferty thead tr','<th>ID</th><th>Data</th><th>Klient</th><th>Handlowiec</th><th>Netto</th><th>Brutto</th><th>Status</th><th>Płatność</th><th>Decyzja</th><th>Akcje</th>');
    tbody.innerHTML=DB.oferty.map(o=>{
      const dec=(typeof paymentDecision==='function')?paymentDecision(o.forma_platnosci,o.status_platnosci):(o.status_platnosci||'-');
      return `<tr><td><strong>${o.id}</strong></td><td>${o.data||'-'}</td><td>${klientNazwa(o.id_klienta)}</td><td>${handlNazwa(o.id_handlowca)}</td><td>${moneyV5(o.wartosc_n)}</td><td><strong>${moneyV5(o.wartosc_b)}</strong></td><td>${badgeStatus(o.status)}</td><td>${safeTxt(o.forma_platnosci||'-')}</td><td>${badgeStatus(dec)}</td><td><div class='act-btns'><button class='ed' onclick='crmOpenEdit("oferty","${o.id}")'>Edytuj</button><button class='ed' onclick='zmienStatusOf("${o.id}")'>Status</button><button class='ed' onclick='createOrderFromOffer&&createOrderFromOffer("${o.id}",true)'>Do zamówień</button><button class='del' onclick='delOferta("${o.id}")'>Usuń</button></div></td></tr>`;
    }).join('')||'<tr><td colspan=10 class=empty>Brak ofert</td></tr>';
    applyAllFilters();
  };
  window.renderZamowienia=function(){
    const tbody=document.getElementById('zamowienia-tbl');if(!tbody)return;
    ensureHeader('#zamowienia thead tr','<th>ID</th><th>Data</th><th>Klient</th><th>Handlowiec</th><th>Netto</th><th>Brutto</th><th>Status</th><th>Płatność</th><th>Realizacja</th><th>Akcje</th>');
    tbody.innerHTML=DB.zamowienia.map(z=>{
      const dec=(typeof paymentDecision==='function')?paymentDecision(z.forma_platnosci,z.status_platnosci):(z.status_platnosci||'-');
      return `<tr><td><strong>${z.id}</strong></td><td>${z.data||'-'}</td><td>${klientNazwa(z.id_klienta)}</td><td>${handlNazwa(z.id_handlowca)}</td><td>${moneyV5(z.wartosc_n)}</td><td><strong>${moneyV5(z.wartosc_b)}</strong></td><td>${badgeStatus(z.status)}</td><td>${safeTxt(z.forma_platnosci||'-')}<br><small>${safeTxt(dec)}</small></td><td>${z.data_real||'-'}</td><td><div class='act-btns'><button class='ed' onclick='crmOpenEdit("zamowienia","${z.id}")'>Edytuj</button><button class='ed' onclick='zmienStatusZam("${z.id}")'>Status</button><button class='del' onclick='delZam("${z.id}")'>Usuń</button></div></td></tr>`;
    }).join('')||'<tr><td colspan=10 class=empty>Brak zamówień</td></tr>';
    applyAllFilters();
  };

  const prevRenderAllV5=window.renderAll;
  window.renderAll=function(){
    const r=prevRenderAllV5.apply(this,arguments);
    ensureFilters();
    renderOferty();
    renderZamowienia();
    applyAllFilters();
    return r;
  };

  setTimeout(()=>{ensureHandlowiecModal();ensureFilters();renderAll();},500);
})();

/* Vetaris CRM v4 - pewny autosave, toast zapisu i edycja rekordow */
(function(){
  const TABLES={
    'klienci-tbl':'klienci',
    'kontakty-tbl':'kontakty',
    'leady-tbl':'leady',
    'spotkania-tbl':'spotkania',
    'zadania-tbl':'zadania',
    'oferty-tbl':'oferty',
    'zamowienia-tbl':'zamowienia',
    'produkty-tbl':'produkty',
    'handlowcy-tbl':'handlowcy'
  };
  const LABELS={
    klienci:'Klient',kontakty:'Kontakt',leady:'Lead / szansa',spotkania:'Spotkanie',zadania:'Zadanie',
    oferty:'Oferta',zamowienia:'Zamówienie',produkty:'Produkt',handlowcy:'Handlowiec',targety:'Target'
  };
  const FIELD_LABELS={
    nazwa:'Nazwa',typ:'Typ',nip:'NIP',osoba:'Osoba',tel:'Telefon',email:'Email',miasto:'Miasto',woj:'Województwo',kraj:'Kraj',status:'Status',
    forma_platnosci:'Forma płatności',status_platnosci:'Status płatności',termin_platnosci:'Termin płatności',limit_kredytu:'Limit kredytu',
    imie:'Imię',nazwisko:'Nazwisko',stanowisko:'Stanowisko',glowny:'Główny',notatki:'Notatki',
    data:'Data',godzina:'Godzina',cel:'Cel',adres:'Adres',termin:'Termin',temat:'Temat',opis:'Opis',priorytet:'Priorytet',
    zrodlo:'Źródło',etap:'Etap',wartosc:'Wartość',prawdop:'Prawdopodobieństwo',data_zamkn:'Data zamknięcia',nast_krok:'Następny krok',
    kat:'Kategoria',netto:'Netto',vat:'VAT',brutto:'Brutto',aktywny:'Aktywny',
    wartosc_n:'Wartość netto',wartosc_b:'Wartość brutto',waznosc:'Ważność',szansa_wyg:'Szansa wygrania',data_real:'Data realizacji',pierwsze:'Pierwsze'
  };
  const EDIT_FIELDS={
    klienci:['nazwa','typ','nip','osoba','tel','email','miasto','woj','kraj','status','forma_platnosci','status_platnosci','termin_platnosci','limit_kredytu'],
    kontakty:['id_klienta','imie','nazwisko','stanowisko','tel','email','glowny','notatki'],
    leady:['nazwa','id_klienta','zrodlo','etap','status','priorytet','wartosc','prawdop','id_handlowca','data_zamkn','nast_krok'],
    spotkania:['data','godzina','id_klienta','typ','id_handlowca','status','cel','adres','notatki'],
    zadania:['temat','typ','termin','priorytet','id_klienta','id_handlowca','status','opis'],
    oferty:['id_klienta','id_handlowca','wartosc_n','wartosc_b','forma_platnosci','status_platnosci','status','waznosc','szansa_wyg','notatki'],
    zamowienia:['id_klienta','id_handlowca','wartosc_n','wartosc_b','forma_platnosci','status_platnosci','status','data_real','pierwsze','notatki'],
    produkty:['nazwa','kat','netto','vat','brutto','aktywny'],
    handlowcy:['imie','nazwisko','pelna','email','tel','region','aktywny','target_m','target_k','manager']
  };
  const SELECTS={
    status:['Aktywny','VIP','Prospekt','Nieaktywny','Zrezygnowany','W toku','Nowy','Otwarte','W realizacji','Zakonczone','Zrealizowane','Anulowane','Robocza','Wyslana','Zaakceptowana','Odrzucona','Wygasla'],
    forma_platnosci:['Gotowka','Przelew przedplata','Przelew terminowy','Karta','BLIK','Pobranie','Kredyt kupiecki','Raty / leasing','Inne'],
    status_platnosci:['Do realizacji','Czekaj na wplate','Oplacone','Termin platnosci','Po terminie','Anulowane'],
    priorytet:['Wysoki','Sredni','Niski'],
    glowny:['TAK','NIE'],
    aktywny:['TAK','NIE'],
    pierwsze:['TAK','NIE'],
    etap:['Lead','Kwalifikacja','Oferta','Negocjacje','Wygrana','Przegrana']
  };

  let lastSavedState='';
  let saveToastTimer=null;
  let initialized=false;
  let suppressAutosave=false;

  function cloneDB(){return JSON.parse(JSON.stringify(DB));}
  function state(){try{return JSON.stringify(DB);}catch(e){return ''}}
  function ensureToast(){
    let t=document.getElementById('crm-save-toast');
    if(t)return t;
    t=document.createElement('div');
    t.id='crm-save-toast';
    t.innerHTML='<span class="dot">✓</span><span class="txt">Zapisano</span>';
    document.body.appendChild(t);
    return t;
  }
  function showToast(text,type){
    const t=ensureToast();
    t.className='show '+(type||'ok');
    t.querySelector('.dot').textContent=type==='error'?'!':'✓';
    t.querySelector('.txt').textContent=text;
    clearTimeout(saveToastTimer);
    saveToastTimer=setTimeout(()=>t.className='',2600);
  }
  function setBadge(text,type){
    let b=document.getElementById('crm-local-save-status');
    const top=document.querySelector('.topbar');
    if(!top)return;
    if(!b){
      b=document.createElement('span');
      b.id='crm-local-save-status';
      b.style.cssText='font-size:12px;border-radius:999px;padding:6px 10px;background:#dcfce7;color:#166534;font-weight:800;margin-left:8px';
      top.appendChild(b);
    }
    b.textContent=text;
    b.style.background=type==='error'?'#fee2e2':type==='saving'?'#fef3c7':'#dcfce7';
    b.style.color=type==='error'?'#991b1b':type==='saving'?'#92400e':'#166534';
  }
  function persistNow(reason){
    try{
      const s=state();
      localStorage.setItem('vetaris_crm_v2',s);
      localStorage.setItem('vetaris_crm_v2_updated_at',String(Date.now()));
      lastSavedState=s;
      setBadge('✓ zapisano lokalnie','ok');
      showToast('Zapisano: '+(reason||'zmiany'),'ok');
      if(window.vetarisCloudSave){
        setBadge('⏳ zapis do chmury...','saving');
        window.vetarisCloudSave(cloneDB());
      }
    }catch(e){
      console.error('CRM save error',e);
      setBadge('błąd zapisu','error');
      showToast('Błąd zapisu danych','error');
    }
  }
  window.crmForceSave=function(reason){persistNow(reason||'ręcznie');};

  const prevFirestoreLoad=window.vetarisFirestoreLoad;
  window.vetarisFirestoreLoad=function(cloudDB,meta){
    suppressAutosave=true;
    try{
      if(typeof prevFirestoreLoad==='function')prevFirestoreLoad(cloudDB,meta);
      lastSavedState=state();
      showToast('Dane pobrane z chmury','ok');
    }finally{
      setTimeout(()=>{suppressAutosave=false;},300);
    }
  };

  const prevRenderAll=window.renderAll;
  window.renderAll=function(){
    if(typeof prevRenderAll==='function')prevRenderAll();
    enhanceTables();
    if(!initialized){
      initialized=true;
      lastSavedState=state();
      return;
    }
    const s=state();
    if(!suppressAutosave&&s&&s!==lastSavedState){
      persistNow('zmiany w CRM');
    }
  };

  function labelFor(field){return FIELD_LABELS[field]||field.replaceAll('_',' ');}
  function optionsFor(field,value){
    if(field==='id_klienta')return DB.klienci.map(k=>`<option value="${k.id}" ${k.id===value?'selected':''}>${k.nazwa}</option>`).join('');
    if(field==='id_handlowca')return DB.handlowcy.map(h=>`<option value="${h.id}" ${h.id===value?'selected':''}>${h.pelna}</option>`).join('');
    const list=SELECTS[field]||[];
    return list.map(x=>`<option value="${x}" ${x===value?'selected':''}>${x}</option>`).join('');
  }
  function inputFor(field,value){
    const safe=(value??'').toString().replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
    if(field==='notatki'||field==='opis'||field==='nast_krok'||field==='cel'){
      return `<textarea data-field="${field}">${safe}</textarea>`;
    }
    if(field.includes('data')||field==='termin'||field==='waznosc')return `<input data-field="${field}" type="date" value="${safe}">`;
    if(['wartosc','prawdop','netto','vat','brutto','wartosc_n','wartosc_b','limit_kredytu','termin_platnosci','target_m','target_k','szansa_wyg'].includes(field))return `<input data-field="${field}" type="number" step="0.01" value="${safe}">`;
    if(field==='godzina')return `<input data-field="${field}" type="time" value="${safe}">`;
    if(field==='id_klienta'||field==='id_handlowca'||SELECTS[field])return `<select data-field="${field}">${optionsFor(field,value)}</select>`;
    return `<input data-field="${field}" value="${safe}">`;
  }
  function ensureEditModal(){
    let m=document.getElementById('crm-edit-modal');
    if(m)return m;
    m=document.createElement('div');
    m.id='crm-edit-modal';
    m.className='modal';
    m.innerHTML=`<div class="mbox crm-edit-box"><h3 id="crm-edit-title">Edycja</h3><input type="hidden" id="crm-edit-table"><input type="hidden" id="crm-edit-id"><div id="crm-edit-fields" class="fg"></div><div class="fb"><button class="btn gr" onclick="crmCloseEdit()">Anuluj</button><button class="btn" onclick="crmSaveEdit()">Zapisz zmiany</button></div></div>`;
    document.body.appendChild(m);
    return m;
  }
  window.crmCloseEdit=function(){
    const m=document.getElementById('crm-edit-modal');if(m)m.classList.remove('on');
  };
  window.crmOpenEdit=function(tbl,id){
    const row=(DB[tbl]||[]).find(x=>x.id===id);
    if(!row){showToast('Nie znaleziono rekordu','error');return;}
    const m=ensureEditModal();
    document.getElementById('crm-edit-table').value=tbl;
    document.getElementById('crm-edit-id').value=id;
    document.getElementById('crm-edit-title').textContent='Edycja: '+(LABELS[tbl]||tbl)+' '+id;
    const fields=EDIT_FIELDS[tbl]||Object.keys(row).filter(k=>k!=='id');
    document.getElementById('crm-edit-fields').innerHTML=fields.map(f=>`<div class="f"><label>${labelFor(f)}</label>${inputFor(f,row[f])}</div>`).join('');
    m.classList.add('on');
  };
  window.crmSaveEdit=function(){
    const tbl=document.getElementById('crm-edit-table').value;
    const id=document.getElementById('crm-edit-id').value;
    const row=(DB[tbl]||[]).find(x=>x.id===id);
    if(!row)return;
    document.querySelectorAll('#crm-edit-fields [data-field]').forEach(el=>{
      const f=el.dataset.field;
      let v=el.value;
      if(['wartosc','prawdop','netto','vat','brutto','wartosc_n','wartosc_b','limit_kredytu','termin_platnosci','target_m','target_k','szansa_wyg'].includes(f))v=parseFloat(v)||0;
      row[f]=v;
    });
    if(tbl==='produkty'){
      row.brutto=parseFloat(((parseFloat(row.netto)||0)*(1+(parseFloat(row.vat)||0)/100)).toFixed(2));
    }
    if(tbl==='handlowcy'&&(!row.pelna||row.pelna.trim()===''))row.pelna=((row.imie||'')+' '+(row.nazwisko||'')).trim();
    crmCloseEdit();
    persistNow('edycja rekordu');
    renderAll();
  };

  function enhanceTables(){
    Object.entries(TABLES).forEach(([tbodyId,tbl])=>{
      const tbody=document.getElementById(tbodyId);
      if(!tbody)return;
      tbody.querySelectorAll('tr').forEach(tr=>{
        if(tr.classList.contains('empty')||tr.dataset.crmEnhanced==='1')return;
        const id=tr.querySelector('td b, td strong')?.textContent?.trim();
        const actions=tr.querySelector('.act-btns')||tr.lastElementChild;
        if(!id||!actions)return;
        if(!actions.querySelector('.crm-edit')){
          actions.insertAdjacentHTML('afterbegin',`<button class="ed crm-edit" onclick='crmOpenEdit("${tbl}","${id}")'>Edytuj</button>`);
        }
        if(!actions.querySelector('.crm-save')){
          actions.insertAdjacentHTML('beforeend',`<button class="ed crm-save" onclick='crmForceSave("rekord ${id}")'>Zapisz</button>`);
        }
        tr.dataset.crmEnhanced='1';
      });
    });
  }

  ['saveKlient','saveKontakt','saveLead','saveZadanie','saveSpotkanie','saveProdukt','saveProd','saveTarget','saveOferta','saveZamowienie','zapiszStatusOf','zapiszStatusZam'].forEach(name=>{
    const prev=window[name];
    if(typeof prev!=='function')return;
    window[name]=function(){
      const before=state();
      const result=prev.apply(this,arguments);
      setTimeout(()=>{
        if(state()!==before)persistNow(name);
        if(typeof window.renderAll==='function')window.renderAll();
      },0);
      return result;
    };
  });

  setTimeout(()=>{enhanceTables();lastSavedState=state();},500);
})();
