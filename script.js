const SERVICES = [
  {
    id: "thai-classic",
    name: "Traditional Thai Massage",
    desc: "Yoga-like stretches and acupressure to improve mobility and relieve deep tension.",
    category: ["thai"],
    durations: [60, 90],
    prices: { 60: "€60", 90: "€85" },
    tags: ["Full body", "Stretching", "No oil"]
  },
  {
    id: "oil-relax",
    name: "Oil Relaxation Massage",
    desc: "Gentle, flowing massage with warm oil to relax the nervous system.",
    category: ["oil"],
    durations: [60, 90],
    prices: { 60: "€65", 90: "€90" },
    tags: ["Calming", "Aromatherapy"]
  },
  {
    id: "foot-reflex",
    name: "Foot Reflexology",
    desc: "Targeted pressure points on feet to benefit the whole body.",
    category: ["foot"],
    durations: [45, 60],
    prices: { 45: "€40", 60: "€50" },
    tags: ["Pressure points", "Detox"]
  },
  {
    id: "couples",
    name: "Couples Massage",
    desc: "Share a relaxing experience side-by-side; choose Thai or oil.",
    category: ["couples"],
    durations: [60, 90],
    prices: { 60: "€120", 90: "€170" },
    tags: ["Two therapists", "Bonding"]
  },
  {
    id: "add-hot-stone",
    name: "Add-on: Hot Stones",
    desc: "Soothing heat to melt muscle tension. Add to any 60/90 minute session.",
    category: ["add-ons"],
    durations: [0],
    prices: { 0: "+€15" },
    tags: ["Heat therapy"]
  }
];

const I18N = {
  en: {
    title: "White Orchid Thai Massage",
    meta_description: "Authentic Thai massage services. Traditional Thai, Foot Reflexology, Oil Relaxation, Couples massage, and more. Book your session today.",
    nav_services: "Services",
    nav_about: "About",
    nav_contact: "Contact",
    book_now: "Book Now",
    hero_title: "Restore Balance with Authentic Thai Massage",
    hero_desc: "Certified therapists. Clean, calm space. Personalized treatments to relieve tension and improve mobility.",
    hero_book: "Book a Session",
    view_services: "View Services",
    chip_all: "All",
    chip_thai: "Thai",
    chip_oil: "Oil",
    chip_foot: "Foot",
    chip_couples: "Couples",
    chip_addons: "Add-ons",
    services_heading: "Our Services",
    about_heading: "About Us",
    about_desc: "We offer traditional Thai techniques blended with modern bodywork to help you feel your best. Our therapists are trained and certified.",
    about_bullet_1: "Certified Thai massage therapists",
    about_bullet_2: "Clean, relaxing environment",
    about_bullet_3: "Personalized treatments",
    hours_label: "Opening Hours",
    location_label: "Location",
    contact_heading: "Contact",
    contact_desc: "Call or message to book. Walk-ins welcome based on availability.",
    whatsapp_btn: "Message on WhatsApp",
    call_btn: "Call +382 67 025 711",
    footer_small: "Wellness & Health • Licensed practice",
    modal_title: "Book a Session",
    label_name: "Full Name",
    label_phone: "Phone",
    label_date: "Preferred Date",
    label_time: "Preferred Time",
    label_service: "Service",
    label_duration: "Duration",
    label_notes: "Notes",
    btn_clear: "Clear",
    btn_submit: "Request Booking",
    addon_label: "Add-on",
    mail_subject_prefix: "Booking Request - ",
    label_summary_title: "Booking Request",
    label_summary_name: "Name",
    label_summary_phone: "Phone",
    label_summary_service: "Service",
    label_summary_duration: "Duration",
    label_summary_price: "Price",
    label_summary_preferred: "Preferred",
    label_summary_notes: "Notes",
    whatsapp_msg: "Hello! I'd like to book a Thai massage. Could you share availability?",
    services: {
      "thai-classic": {
        name: "Traditional Thai Massage",
        desc: "Yoga-like stretches and acupressure to improve mobility and relieve deep tension.",
        tags: { "Full body": "Full body", Stretching: "Stretching", "No oil": "No oil" }
      },
      "oil-relax": {
        name: "Oil Relaxation Massage",
        desc: "Gentle, flowing massage with warm oil to relax the nervous system.",
        tags: { Calming: "Calming", Aromatherapy: "Aromatherapy" }
      },
      "foot-reflex": {
        name: "Foot Reflexology",
        desc: "Targeted pressure points on feet to benefit the whole body.",
        tags: { "Pressure points": "Pressure points", Detox: "Detox" }
      },
      couples: {
        name: "Couples Massage",
        desc: "Share a relaxing experience side-by-side; choose Thai or oil.",
        tags: { "Two therapists": "Two therapists", Bonding: "Bonding" }
      },
      "add-hot-stone": {
        name: "Add-on: Hot Stones",
        desc: "Soothing heat to melt muscle tension. Add to any 60/90 minute session.",
        tags: { "Heat therapy": "Heat therapy" }
      }
    }
  },
  it: {
    title: "White Orchid Massaggi Thai",
    meta_description: "Servizi di massaggio thailandese autentico. Thai tradizionale, riflessologia plantare, rilassante con olio, massaggio di coppia e altro. Prenota oggi.",
    nav_services: "Servizi",
    nav_about: "Chi siamo",
    nav_contact: "Contatti",
    book_now: "Prenota ora",
    hero_title: "Ritrova l'equilibrio con il massaggio Thai",
    hero_desc: "Terapeuti certificati. Spazio pulito e tranquillo. Trattamenti personalizzati per sciogliere le tensioni e migliorare la mobilità.",
    hero_book: "Prenota una sessione",
    view_services: "Vedi i servizi",
    chip_all: "Tutti",
    chip_thai: "Thai",
    chip_oil: "Olio",
    chip_foot: "Piedi",
    chip_couples: "Coppie",
    chip_addons: "Extra",
    services_heading: "I nostri servizi",
    about_heading: "Chi siamo",
    about_desc: "Tecniche Thai tradizionali con bodywork moderno per farti sentire al meglio. Terapeuti formati e certificati.",
    about_bullet_1: "Terapeuti di massaggio Thai certificati",
    about_bullet_2: "Ambiente pulito e rilassante",
    about_bullet_3: "Trattamenti personalizzati",
    hours_label: "Orari",
    location_label: "Indirizzo",
    contact_heading: "Contatti",
    contact_desc: "Chiama o scrivi per prenotare. Ingresso senza appuntamento in base alla disponibilità.",
    whatsapp_btn: "Messaggio su WhatsApp",
    call_btn: "Chiama +382 67 025 711",
    footer_small: "Benessere & Salute • Attività autorizzata",
    modal_title: "Prenota una sessione",
    label_name: "Nome completo",
    label_phone: "Telefono",
    label_date: "Data preferita",
    label_time: "Ora preferita",
    label_service: "Servizio",
    label_duration: "Durata",
    label_notes: "Note",
    btn_clear: "Pulisci",
    btn_submit: "Richiedi prenotazione",
    addon_label: "Extra",
    mail_subject_prefix: "Richiesta di prenotazione - ",
    label_summary_title: "Richiesta di prenotazione",
    label_summary_name: "Nome",
    label_summary_phone: "Telefono",
    label_summary_service: "Servizio",
    label_summary_duration: "Durata",
    label_summary_price: "Prezzo",
    label_summary_preferred: "Preferito",
    label_summary_notes: "Note",
    whatsapp_msg: "Ciao! Vorrei prenotare un massaggio thai. Avete disponibilità?",
    services: {
      "thai-classic": {
        name: "Massaggio Thai Tradizionale",
        desc: "Stretching simile allo yoga e digitopressione per migliorare la mobilità e sciogliere le tensioni profonde.",
        tags: { "Full body": "Corpo intero", Stretching: "Stretching", "No oil": "Senza olio" }
      },
      "oil-relax": {
        name: "Massaggio Rilassante con Olio",
        desc: "Massaggio dolce e fluido con olio caldo per rilassare il sistema nervoso.",
        tags: { Calming: "Rilassante", Aromatherapy: "Aromaterapia" }
      },
      "foot-reflex": {
        name: "Riflessologia Plantare",
        desc: "Pressioni mirate sui punti del piede per beneficiare tutto il corpo.",
        tags: { "Pressure points": "Punti di pressione", Detox: "Detossinazione" }
      },
      couples: {
        name: "Massaggio di Coppia",
        desc: "Condividi un'esperienza rilassante fianco a fianco; Thai o olio.",
        tags: { "Two therapists": "Due terapisti", Bonding: "Condivisione" }
      },
      "add-hot-stone": {
        name: "Extra: Pietre Calde",
        desc: "Calore avvolgente per sciogliere le tensioni. Aggiungi a sessioni da 60/90 minuti.",
        tags: { "Heat therapy": "Terapia del calore" }
      }
    }
  },
  th: {
    title: "White Orchid นวดไทย",
    meta_description: "บริการนวดไทยแบบดั้งเดิม รีเฟล็กซ์เท้า นวดน้ำมัน นวดคู่ และอื่น ๆ จองได้เลย",
    nav_services: "บริการ",
    nav_about: "เกี่ยวกับเรา",
    nav_contact: "ติดต่อ",
    book_now: "จองตอนนี้",
    hero_title: "คืนสมดุลด้วยการนวดไทย",
    hero_desc: "ผู้เชี่ยวชาญที่ได้รับการรับรอง สถานที่สะอาดและสงบ ดูแลเฉพาะบุคคลเพื่อคลายความตึงและเพิ่มความคล่องตัว",
    hero_book: "จองคอร์ส",
    view_services: "ดูบริการ",
    chip_all: "ทั้งหมด",
    chip_thai: "นวดไทย",
    chip_oil: "นวดน้ำมัน",
    chip_foot: "นวดฝ่าเท้า",
    chip_couples: "คู่รัก",
    chip_addons: "บริการเสริม",
    services_heading: "บริการของเรา",
    about_heading: "เกี่ยวกับเรา",
    about_desc: "เทคนิคไทยดั้งเดิมผสานบอดี้เวิร์กสมัยใหม่เพื่อสุขภาพที่ดี ผู้เชี่ยวชาญผ่านการอบรมและรับรอง",
    about_bullet_1: "ผู้เชี่ยวชาญนวดไทยที่ได้รับการรับรอง",
    about_bullet_2: "บรรยากาศสะอาดและผ่อนคลาย",
    about_bullet_3: "การดูแลแบบเฉพาะบุคคล",
    hours_label: "เวลาเปิดทำการ",
    location_label: "ที่ตั้ง",
    contact_heading: "ติดต่อ",
    contact_desc: "โทรหรือส่งข้อความเพื่อจอง รับลูกค้า Walk-in ตามคิวว่าง",
    whatsapp_btn: "ส่งข้อความทาง WhatsApp",
    call_btn: "โทร +382 67 025 711",
    footer_small: "สุขภาพและความเป็นอยู่ที่ดี • สถานประกอบการมีใบอนุญาต",
    modal_title: "จองคอร์ส",
    label_name: "ชื่อ-นามสกุล",
    label_phone: "โทรศัพท์",
    label_date: "วันที่ต้องการ",
    label_time: "เวลาที่ต้องการ",
    label_service: "บริการ",
    label_duration: "ระยะเวลา",
    label_notes: "หมายเหตุ",
    btn_clear: "ล้างข้อมูล",
    btn_submit: "ส่งคำขอจอง",
    addon_label: "บริการเสริม",
    mail_subject_prefix: "คำขอจอง - ",
    label_summary_title: "คำขอจอง",
    label_summary_name: "ชื่อ",
    label_summary_phone: "โทรศัพท์",
    label_summary_service: "บริการ",
    label_summary_duration: "ระยะเวลา",
    label_summary_price: "ราคา",
    label_summary_preferred: "ต้องการ",
    label_summary_notes: "หมายเหตุ",
    whatsapp_msg: "สวัสดี ต้องการจองนวดไทย รบกวนแจ้งเวลาว่างด้วย",
    services: {
      "thai-classic": {
        name: "นวดไทยแบบดั้งเดิม",
        desc: "ยืดเหยียดคล้ายโยคะและกดจุดเพื่อเพิ่มความคล่องตัวและคลายความตึงลึก",
        tags: { "Full body": "ทั่วทั้งร่างกาย", Stretching: "ยืดเหยียด", "No oil": "ไม่มีน้ำมัน" }
      },
      "oil-relax": {
        name: "นวดผ่อนคลายด้วยน้ำมัน",
        desc: "นุ่มนวลและไหลลื่นด้วยน้ำมันอุ่นเพื่อผ่อนคลายระบบประสาท",
        tags: { Calming: "ผ่อนคลาย", Aromatherapy: "อโรมาเธอราพี" }
      },
      "foot-reflex": {
        name: "กดจุดฝ่าเท้า",
        desc: "กดจุดเฉพาะบนฝ่าเท้าเพื่อส่งผลดีต่อทั้งร่างกาย",
        tags: { "Pressure points": "จุดกด", Detox: "ดีท็อกซ์" }
      },
      couples: {
        name: "นวดคู่",
        desc: "แบ่งปันประสบการณ์ผ่อนคลายเคียงข้างกัน เลือกนวดไทยหรือ น้ำมัน",
        tags: { "Two therapists": "สองผู้เชี่ยวชาญ", Bonding: "ผูกพัน" }
      },
      "add-hot-stone": {
        name: "บริการเสริม: หินร้อน",
        desc: "ความร้อนช่วยผ่อนคลายกล้ามเนื้อ เพิ่มได้กับคอร์ส 60/90 นาที",
        tags: { "Heat therapy": "บำบัดด้วยความร้อน" }
      }
    }
  },
  sr: {
    title: "White Orchid Tajlandska masaža",
    meta_description: "Autentične tajlandske masaže: tradicionalna, refleksologija stopala, ulje, masaža za parove i više. Rezervišite danas.",
    nav_services: "Usluge",
    nav_about: "O nama",
    nav_contact: "Kontakt",
    book_now: "Rezerviši odmah",
    hero_title: "Vratite ravnotežu uz tajlandsku masažu",
    hero_desc: "Sertifikovani terapeuti. Čist, miran prostor. Personalizirani tretmani za opuštanje i bolju pokretljivost.",
    hero_book: "Zakaži termin",
    view_services: "Pogledaj usluge",
    chip_all: "Sve",
    chip_thai: "Tajlandska",
    chip_oil: "Ulje",
    chip_foot: "Stopala",
    chip_couples: "Parovi",
    chip_addons: "Dodaci",
    services_heading: "Naše usluge",
    about_heading: "O nama",
    about_desc: "Tradicionalne tajlandske tehnike sa modernim bodywork pristupom. Terapeuti obučeni i sertifikovani.",
    about_bullet_1: "Sertifikovani terapeuti tajlandske masaže",
    about_bullet_2: "Čisto, opuštajuće okruženje",
    about_bullet_3: "Personalizovani tretmani",
    hours_label: "Radno vreme",
    location_label: "Lokacija",
    contact_heading: "Kontakt",
    contact_desc: "Pozovite ili pošaljite poruku za rezervaciju. Dolazak bez zakazivanja po dostupnosti.",
    whatsapp_btn: "Poruka na WhatsApp",
    call_btn: "Pozovi +382 67 025 711",
    footer_small: "Zdravlje i wellness • Licencirana praksa",
    modal_title: "Zakaži termin",
    label_name: "Ime i prezime",
    label_phone: "Telefon",
    label_date: "Željeni datum",
    label_time: "Željeno vreme",
    label_service: "Usluga",
    label_duration: "Trajanje",
    label_notes: "Napomena",
    btn_clear: "Obriši",
    btn_submit: "Pošalji zahtev",
    addon_label: "Dodatak",
    mail_subject_prefix: "Zahtev za rezervaciju - ",
    label_summary_title: "Zahtev za rezervaciju",
    label_summary_name: "Ime",
    label_summary_phone: "Telefon",
    label_summary_service: "Usluga",
    label_summary_duration: "Trajanje",
    label_summary_price: "Cena",
    label_summary_preferred: "Željeno",
    label_summary_notes: "Napomena",
    whatsapp_msg: "Zdravo! Želeo/la bih da zakažem tajlandsku masažu. Imate li slobodnih termina?",
    services: {
      "thai-classic": {
        name: "Tradicionalna tajlandska masaža",
        desc: "Istezanje poput joge i akupresura za bolju pokretljivost i oslobađanje duboke tenzije.",
        tags: { "Full body": "Celo telo", Stretching: "Istezanje", "No oil": "Bez ulja" }
      },
      "oil-relax": {
        name: "Relaks masaža sa uljem",
        desc: "Blaga, tečna masaža sa toplim uljem za opuštanje nervnog sistema.",
        tags: { Calming: "Umirujuće", Aromatherapy: "Aromaterapija" }
      },
      "foot-reflex": {
        name: "Refleksologija stopala",
        desc: "Ciljane tačke pritiska na stopalima za dobrobit celog tela.",
        tags: { "Pressure points": "Tačke pritiska", Detox: "Detoks" }
      },
      couples: {
        name: "Masaža za parove",
        desc: "Delite opuštajuće iskustvo jedno pored drugog; izaberite Thai ili ulje.",
        tags: { "Two therapists": "Dva terapeuta", Bonding: "Povezivanje" }
      },
      "add-hot-stone": {
        name: "Dodatak: Vruće kamenje",
        desc: "Toplota koja opušta mišiće. Dodajte uz sesije od 60/90 min.",
        tags: { "Heat therapy": "Toplotna terapija" }
      }
    }
  }
};

let currentLang = localStorage.getItem("lang") || "en";

const whatsappNumber = "38267025711";
const emailAddress = "bookings@whiteorchid.example";
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const modal = document.getElementById("booking-modal");
const form = document.getElementById("booking-form");
const closeBtn = document.getElementById("modal-close");
const clearBtn = document.getElementById("clear-form");
const serviceSelect = document.getElementById("service-select");
const durationSelect = document.getElementById("duration-select");
const servicesGrid = document.getElementById("services-grid");
const filtersEl = document.getElementById("filters");
const whatsappLink = document.getElementById("whatsapp-link");
const ctaBook = document.getElementById("cta-book");
const heroBook = document.getElementById("hero-book");
const langSelect = document.getElementById("lang-select");

function t(key) {
  const pack = I18N[currentLang] || I18N.en;
  return pack[key] || I18N.en[key] || key;
}

function ts(serviceId, key, fallback) {
  const pack = I18N[currentLang] || I18N.en;
  const svc = pack.services?.[serviceId];
  if (!svc) return fallback;
  const v = svc[key];
  return v || fallback;
}

function tt(serviceId, tag) {
  const pack = I18N[currentLang] || I18N.en;
  const svc = pack.services?.[serviceId];
  const map = svc?.tags || {};
  return map[tag] || tag;
}

function applyTranslations() {
  document.documentElement.setAttribute("lang", currentLang);
  document.title = t("title");
  const metaDesc = document.querySelector('[data-i18n-meta="meta_description"]');
  if (metaDesc) metaDesc.setAttribute("content", t("meta_description"));
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = t(key);
  });
  setWhatsAppLink();
  renderServices(filtersEl.querySelector('.chip.active')?.dataset.filter || "all");
  populateServiceSelect(serviceSelect.value || null);
}

function setLang(lang) {
  currentLang = I18N[lang] ? lang : "en";
  localStorage.setItem("lang", currentLang);
  if (langSelect) langSelect.value = currentLang;
  applyTranslations();
}

function renderServices(filter = "all") {
  servicesGrid.innerHTML = "";
  const items = SERVICES.filter(s => filter === "all" || s.category.includes(filter));
  items.forEach(s => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-body">
        <h3>${ts(s.id, "name", s.name)}</h3>
        <p class="desc">${ts(s.id, "desc", s.desc)}</p>
        <div class="pills">${s.tags.map(t => `<span class="pill">${tt(s.id, t)}</span>`).join("")}</div>
        ${s.durations.map(d => `
          <div class="price-row">
            <span>${d === 0 ? t("addon_label") : d + " min"}</span>
            <strong>${s.prices[d]}</strong>
          </div>`).join("")}
        <div class="card-actions">
          <button class="btn secondary" data-book="${s.id}">Book</button>
          <button class="icon-btn" data-details="${s.id}">Details</button>
        </div>
      </div>`;
    servicesGrid.appendChild(card);
  });

  servicesGrid.querySelectorAll("[data-book]").forEach(btn => {
    btn.addEventListener("click", () => openBooking(btn.getAttribute("data-book")));
  });
  servicesGrid.querySelectorAll("[data-details]").forEach(btn => {
    btn.addEventListener("click", () => alert("Ask your therapist about techniques, pressure preferences, and focus areas."));
  });
}

function populateServiceSelect(defaultServiceId = null) {
  serviceSelect.innerHTML = SERVICES.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
  const selected = defaultServiceId || SERVICES[0].id;
  serviceSelect.value = selected;
  populateDurationSelect(selected);
}

function populateDurationSelect(serviceId) {
  const s = SERVICES.find(x => x.id === serviceId);
  durationSelect.innerHTML = s.durations.map(d => {
    const label = d === 0 ? t("addon_label") : `${d} min`;
    return `<option value="${d}">${label} (${s.prices[d]})</option>`;
  }).join("");
}

function openBooking(serviceId = null) {
  populateServiceSelect(serviceId);
  modal.showModal();
}

serviceSelect.addEventListener("change", (e) => populateDurationSelect(e.target.value));
closeBtn.addEventListener("click", () => modal.close());
clearBtn.addEventListener("click", () => form.reset());
[ctaBook, heroBook].forEach(b => b && b.addEventListener("click", () => openBooking()));
if (langSelect) {
  langSelect.value = currentLang;
  langSelect.addEventListener("change", (e) => setLang(e.target.value));
}

filtersEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  filtersEl.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  renderServices(btn.dataset.filter);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const name = fd.get("name")?.toString().trim();
  const phone = fd.get("phone")?.toString().trim();
  const date = fd.get("date");
  const time = fd.get("time");
  const serviceId = fd.get("service");
  const duration = fd.get("duration");
  const notes = fd.get("notes")?.toString().trim();

  if (!name || !phone || !date || !time || !serviceId || !duration) return;

  const service = SERVICES.find(s => s.id === serviceId);
  const price = service.prices[Number(duration)];
  const summary = `${t("label_summary_title")}
${t("label_summary_name")}: ${name}
${t("label_summary_phone")}: ${phone}
${t("label_summary_service")}: ${ts(service.id, "name", service.name)}
${t("label_summary_duration")}: ${duration === "0" ? t("addon_label") : duration + " min"}
${t("label_summary_price")}: ${price}
${t("label_summary_preferred")}: ${date} ${time}
${t("label_summary_notes")}: ${notes || "-"}
`;

  const mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(t("mail_subject_prefix") + ts(service.id, "name", service.name))}&body=${encodeURIComponent(summary)}`;
  window.location.href = mailto;
  modal.close();
});

function setWhatsAppLink() {
  const msg = encodeURIComponent(t("whatsapp_msg"));
  whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${msg}`;
}

applyTranslations();
