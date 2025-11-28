const SERVICES = [
    {
        id: "thai-classic",
        name: "Traditional Thai Massage",
        desc: "Yoga-like stretches and acupressure to improve mobility and relieve deep tension.",
        category: ["thai"],
        durations: [60, 90, 120],
        prices: { 60: "€40", 90: "€60", 120: "€80" },
        tags: ["Full body", "Stretching", "No oil"],
    },
    {
        id: "oil-relax",
        name: "Oil Relaxation Massage",
        desc: "Gentle, flowing massage with warm oil to relax the nervous system.",
        category: ["oil"],
        durations: [60, 90, 120],
        prices: { 60: "€50", 90: "€75", 120: "€90" },
        tags: ["Calming", "Aromatherapy"],
    },
    {
        id: "aroma-oil",
        name: "Aroma Oil Massage",
        desc: "Relaxing massage with aromatic oils to improve circulation and reduce stress.",
        category: ["oil"],
        durations: [60, 90, 120],
        prices: { 60: "€50", 90: "€75", 120: "€90" },
        tags: ["Aromatherapy", "Relaxation"],
    },
    {
        id: "oil-massage",
        name: "Oil Massage",
        desc: "Gentle, flowing massage with warm oil.",
        category: ["oil"],
        durations: [60, 90, 120],
        prices: { 60: "€40", 90: "€60", 120: "€80" },
        tags: ["Massage", "Oil"],
    },
    {
        id: "deep-tissue",
        name: "Deep Tissue Massage",
        desc: "Intense, deep massage to target deep tissue areas for relaxation and recovery.",
        category: ["deep-tissue"],
        durations: [60, 90, 120],
        prices: { 60: "€40", 90: "€60", 120: "€80" },
        tags: ["Deep tissue", "Relaxation"],
    },
    {
        id: "thy-sbay",
        name: "Traditional Thai Sbay Massage",
        desc: "Yoga-like stretches and acupressure to improve mobility and relieve deep tension.",
        category: ["thai"],
        durations: [60, 90, 120],
        prices: { 60: "€40", 90: "€60", 120: "€80" },
        tags: ["Full body", "Stretching", "No oil"],
    },
    {
        id: "candle",
        name: "Candle Massage",
        desc: "Relaxing massage with candles to improve circulation and reduce stress.",
        category: ["oil"],
        durations: [60, 90, 120],
        prices: { 60: "€55", 90: "€80", 120: "€95" },
        tags: ["Aromatherapy", "Relaxation"],
    },
    {
        id: "warm-herbal",
        name: "Warm Herbal Massage",
        desc: "Relaxing massage with warm herbal extracts to improve circulation and reduce stress.",
        category: ["oil"],
        durations: [60, 90, 120],
        prices: { 60: "€55", 90: "€80", 120: "€90" },
        tags: ["Aromatherapy", "Relaxation"],
    },
    {
        id: "hot-stone",
        name: "Hot Stone Massage (Lava stone)",
        desc: "Soothing heat to melt muscle tension. Add to any 60/90/120 minute session.",
        category: ["add-ons"],
        durations: [60, 90, 120],
        prices: { 60: "€60", 90: "€90", 120: "€110" },
        tags: ["Heat therapy"],
    },
];

const I18N = {
    en: {
        title: "White Orchid Thai Massage",
        meta_description:
            "Authentic Thai massage services. Traditional Thai, Foot Reflexology, Oil Relaxation, Couples massage, and more. Book your session today.",
        nav_services: "Services",
        nav_about: "About",
        nav_contact: "Contact",
        book_now: "Book Now",
        hero_title: "Restore Balance with Authentic Thai Massage",
        hero_desc:
            "Certified therapists. Clean, calm space. Personalized treatments to relieve tension and improve mobility.",
        hero_book: "Book a Session",
        view_services: "View Services",
        chip_all: "All",
        chip_thai: "Thai",
        chip_oil: "Oil",
        //chip_foot: "Foot",
        chip_deep_tissue: "Deep Tissue",
        chip_addons: "Add-ons",
        services_heading: "Our Services",
        about_heading: "About Us",
        about_desc:
            "We offer traditional Thai techniques blended with modern bodywork to help you feel your best. Our therapists are trained and certified.",
        about_bullet_1: "Certified Thai massage therapists",
        about_bullet_2: "Clean, relaxing environment",
        about_bullet_3: "Personalized treatments",
        hours_label: "Opening Hours",
        location_label: "Location",
        contact_heading: "Contact",
        contact_desc:
            "Call or message to book. Walk-ins welcome based on availability.",
        whatsapp_btn: "Message on WhatsApp",
        call_btn: "Call +382 67 025 711",
        nav_schedule: "Today's Availability",
        nav_admin: "Admin",
        footer_small: "Wellness & Health • Licensed practice",
        modal_title: "Book a Session",
        label_name: "Full Name",
        label_phone: "Phone",
        label_date: "Preferred Date",
        label_time: "Preferred Time",
        label_service: "Service",
        label_duration: "Duration",
        //label_operator: "Operator",
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
        label_summary_operator: "Operator",
        label_summary_preferred: "Preferred",
        label_summary_notes: "Notes",
        whatsapp_msg:
            "Hello! I'd like to book a Thai massage. Could you share availability?",
        schedule_heading: "Today's Availability",
        table_time: "Time",
        table_status: "Status",
        table_operator: "Operator",
        schedule_free: "Free",
        schedule_booked: "Booked",
        schedule_pending: "Pending",
        schedule_start_label: "Start",
        schedule_end_label: "End",
        schedule_slot_label: "Slot",
        services: {
            "thai-classic": {
                name: "Traditional Thai Massage",
                desc: "Yoga-like stretches and acupressure to improve mobility and relieve deep tension.",
                tags: {
                    "Full body": "Full body",
                    Stretching: "Stretching",
                    "No oil": "No oil",
                },
            },
            "aroma-oil": {
                name: "Aroma Oil Massage",
                desc: "Relaxing massage with aromatic oils to improve circulation and reduce stress.",
                tags: {
                    Aromatherapy: "Aromatherapy",
                    Relaxation: "Relaxation",
                },
            },
            "oil-relax": {
                name: "Oil Relaxation Massage",
                desc: "Gentle, flowing massage with warm oil to relax the nervous system.",
                tags: { Calming: "Calming", Aromatherapy: "Aromatherapy" },
            },
            "oil-massage": {
                name: "Oil Massage",
                desc: "Gentle, flowing massage with warm oil.",
                tags: { Massage: "Massage", Oil: "Oil" },
            },
            "deep-tissue": {
                name: "Deep Tissue Massage",
                desc: "Intense, deep massage to target deep tissue areas for relaxation and recovery.",
                tags: {
                    "Deep tissue": "Deep tissue",
                    Relaxation: "Relaxation",
                },
            },
            "thy-sbay": {
                name: "Traditional Thai Sbay Massage",
                desc: "Yoga-like stretches and acupressure to improve mobility and relieve deep tension.",
                tags: {
                    "Full body": "Full body",
                    Stretching: "Stretching",
                    "No oil": "No oil",
                },
            },
            candle: {
                name: "Candle Massage",
                desc: "Relaxing massage with candles to improve circulation and reduce stress.",
                tags: {
                    Aromatherapy: "Aromatherapy",
                    Relaxation: "Relaxation",
                },
            },
            "warm-herbal": {
                name: "Warm Herbal Massage",
                desc: "Relaxing massage with warm herbal extracts to improve circulation and reduce stress.",
                tags: {
                    Aromatherapy: "Aromatherapy",
                    Relaxation: "Relaxation",
                },
            },
            "hot-stone": {
                name: "Hot Stone Massage (Lava stone)",
                desc: "Soothing heat to melt muscle tension.",
                tags: { "Heat therapy": "Heat therapy" },
            },
        },
    },
    it: {
        title: "White Orchid Massaggi Thai",
        meta_description:
            "Servizi di massaggio thailandese autentico. Thai tradizionale, riflessologia plantare, rilassante con olio, massaggio di coppia e altro. Prenota oggi.",
        nav_services: "Servizi",
        nav_about: "Chi siamo",
        nav_contact: "Contatti",
        book_now: "Prenota ora",
        hero_title: "Ritrova l'equilibrio con il massaggio Thai",
        hero_desc:
            "Terapeuti certificati. Spazio pulito e tranquillo. Trattamenti personalizzati per sciogliere le tensioni e migliorare la mobilità.",
        hero_book: "Prenota una sessione",
        view_services: "Vedi i servizi",
        chip_all: "Tutti",
        chip_thai: "Thai",
        chip_oil: "Olio",
        //chip_foot: "Piedi",
        chip_deep_tissue: "Tessuto profondo",
        chip_addons: "Extra",
        services_heading: "I nostri servizi",
        about_heading: "Chi siamo",
        about_desc:
            "Tecniche Thai tradizionali con bodywork moderno per farti sentire al meglio. Terapeuti formati e certificati.",
        about_bullet_1: "Terapeuti di massaggio Thai certificati",
        about_bullet_2: "Ambiente pulito e rilassante",
        about_bullet_3: "Trattamenti personalizzati",
        hours_label: "Orari",
        location_label: "Indirizzo",
        contact_heading: "Contatti",
        contact_desc:
            "Chiama o scrivi per prenotare. Ingresso senza appuntamento in base alla disponibilità.",
        whatsapp_btn: "Messaggio su WhatsApp",
        call_btn: "Chiama +382 67 025 711",
        nav_schedule: "Disponibilità di oggi",
        nav_admin: "Admin",
        footer_small: "Benessere & Salute • Attività autorizzata",
        modal_title: "Prenota una sessione",
        label_name: "Nome completo",
        label_phone: "Telefono",
        label_date: "Data preferita",
        label_time: "Ora preferita",
        label_service: "Servizio",
        label_duration: "Durata",
        //label_operator: "Operatore",
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
        label_summary_operator: "Operatore",
        label_summary_preferred: "Preferito",
        label_summary_notes: "Note",
        whatsapp_msg:
            "Ciao! Vorrei prenotare un massaggio thai. Avete disponibilità?",
        schedule_heading: "Disponibilità di oggi",
        table_time: "Orario",
        table_status: "Stato",
        table_operator: "Operatore",
        schedule_free: "Libero",
        schedule_booked: "Occupato",
        schedule_pending: "In attesa",
        schedule_start_label: "Inizio",
        schedule_end_label: "Fine",
        schedule_slot_label: "Slot",
        services: {
            "thai-classic": {
                name: "Massaggio Thai Tradizionale",
                desc: "Stretching simile allo yoga e digitopressione per migliorare la mobilità e sciogliere le tensioni profonde.",
                tags: {
                    "Full body": "Corpo intero",
                    Stretching: "Stretching",
                    "No oil": "Senza olio",
                },
            },
            "aroma-oil": {
                name: "Massaggio Aromatherapy con Olio",
                desc: "Massaggio rilassante con oli di aroma per migliorare il flusso sanguineo e ridurre lo stress.",
                tags: {
                    Aromatherapy: "Aromaterapia",
                    Relaxation: "Rilassamento",
                },
            },
            "oil-relax": {
                name: "Massaggio Rilassante con Olio",
                desc: "Massaggio dolce e fluido con olio caldo per rilassare il sistema nervoso.",
                tags: { Calming: "Rilassante", Aromatherapy: "Aromaterapia" },
            },
            "oil-massage": {
                name: "Massaggio con Olio",
                desc: "Massaggio dolce e fluido con olio caldo.",
                tags: { Massage: "Massaggio", Oil: "Olio" },
            },
            "deep-tissue": {
                name: "Massaggio di Celle Profonde",
                desc: "Massaggio intenso per targetare aree profonde del corpo per rilassamento e recupero.",
                tags: {
                    "Deep tissue": "Celle profonde",
                    Relaxation: "Rilassamento",
                },
            },
            "thy-sbay": {
                name: "Massaggio tradizionale thailandese Sbay",
                desc: "Esercizi di stretching e digitopressione simili allo yoga per migliorare la mobilità e alleviare la tensione profonda.",
                tags: {
                    "Full body": "Corpo intero",
                    Stretching: "Stretching",
                    "No oil": "Senza olio",
                },
            },
            candle: {
                name: "Massaggio con Candele",
                desc: "Massaggio rilassante con candele per migliorare la circolazione e ridurre lo stress.",
                tags: {
                    Aromatherapy: "Aromaterapia",
                    Relaxation: "Rilassamento",
                },
            },
            "warm-herbal": {
                name: "Massaggio con Estratti di erbe",
                desc: "Massaggio rilassante con estratti di erbe calda per migliorare la circolazione e ridurre lo stress.",
                tags: {
                    Aromatherapy: "Aromaterapia",
                    Relaxation: "Rilassamento",
                },
            },
            "hot-stone": {
                name: "Massaggio con pietre calde (pietra lavica)",
                desc: "Calore lenitivo per sciogliere la tensione muscolare.",
                tags: { "Terapia del calore": "Heat therapy" },
            },
        },
    },
    th: {
        title: "White Orchid นวดไทย",
        meta_description:
            "บริการนวดไทยแบบดั้งเดิม รีเฟล็กซ์เท้า นวดน้ำมัน นวดคู่ และอื่น ๆ จองได้เลย",
        nav_services: "บริการ",
        nav_about: "เกี่ยวกับเรา",
        nav_contact: "ติดต่อ",
        book_now: "จองตอนนี้",
        hero_title: "คืนสมดุลด้วยการนวดไทย",
        hero_desc:
            "ผู้เชี่ยวชาญที่ได้รับการรับรอง สถานที่สะอาดและสงบ ดูแลเฉพาะบุคคลเพื่อคลายความตึงและเพิ่มความคล่องตัว",
        hero_book: "จองคอร์ส",
        view_services: "ดูบริการ",
        chip_all: "ทั้งหมด",
        chip_thai: "นวดไทย",
        chip_oil: "นวดน้ำมัน",
        //chip_foot: "นวดฝ่าเท้า",
        chip_deep_tissue: "เนื้อเยื่อลึก",
        chip_addons: "บริการเสริม",
        services_heading: "บริการของเรา",
        about_heading: "เกี่ยวกับเรา",
        about_desc:
            "เทคนิคไทยดั้งเดิมผสานบอดี้เวิร์กสมัยใหม่เพื่อสุขภาพที่ดี ผู้เชี่ยวชาญผ่านการอบรมและรับรอง",
        about_bullet_1: "ผู้เชี่ยวชาญนวดไทยที่ได้รับการรับรอง",
        about_bullet_2: "บรรยากาศสะอาดและผ่อนคลาย",
        about_bullet_3: "การดูแลแบบเฉพาะบุคคล",
        hours_label: "เวลาเปิดทำการ",
        location_label: "ที่ตั้ง",
        contact_heading: "ติดต่อ",
        contact_desc: "โทรหรือส่งข้อความเพื่อจอง รับลูกค้า Walk-in ตามคิวว่าง",
        whatsapp_btn: "ส่งข้อความทาง WhatsApp",
        call_btn: "โทร +382 67 025 711",
        nav_schedule: "ตารางวันนี้",
        nav_admin: "ผู้ดูแล",
        footer_small: "สุขภาพและความเป็นอยู่ที่ดี • สถานประกอบการมีใบอนุญาต",
        modal_title: "จองคอร์ส",
        label_name: "ชื่อ-นามสกุล",
        label_phone: "โทรศัพท์",
        label_date: "วันที่ต้องการ",
        label_time: "เวลาที่ต้องการ",
        label_service: "บริการ",
        label_duration: "ระยะเวลา",
        //label_operator: "ผู้ให้บริการ",
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
        label_summary_operator: "ผู้ให้บริการ",
        label_summary_preferred: "ต้องการ",
        label_summary_notes: "หมายเหตุ",
        whatsapp_msg: "สวัสดี ต้องการจองนวดไทย รบกวนแจ้งเวลาว่างด้วย",
        schedule_heading: "ตารางวันนี้",
        table_time: "เวลา",
        table_status: "สถานะ",
        table_operator: "ผู้ให้บริการ",
        schedule_free: "ว่าง",
        schedule_booked: "จองแล้ว",
        schedule_pending: "รอดำเนินการ",
        schedule_start_label: "เริ่ม",
        schedule_end_label: "สิ้นสุด",
        schedule_slot_label: "ช่วง",
        services: {
            "thai-classic": {
                name: "นวดไทยแบบดั้งเดิม",
                desc: "ยืดเหยียดคล้ายโยคะและกดจุดเพื่อเพิ่มความคล่องตัวและคลายความตึงลึก",
                tags: {
                    "Full body": "ทั่วทั้งร่างกาย",
                    Stretching: "ยืดเหยียด",
                    "No oil": "ไม่มีน้ำมัน",
                },
            },
            "aroma-oil": {
                name: "นวดอารมatherapy ด้วยน้ำมัน",
                desc: "นวดอารมatherapy ด้วยน้ำมันอุ่นเพื่อผ่อนคลายระบบประสาท",
                tags: { Aromatherapy: "อโรมาเธอราพี", Relaxation: "ผ่อนคลาย" },
            },
            "oil-relax": {
                name: "นวดผ่อนคลายด้วยน้ำมัน",
                desc: "นุ่มนวลและไหลลื่นด้วยน้ำมันอุ่นเพื่อผ่อนคลายระบบประสาท",
                tags: { Calming: "ผ่อนคลาย", Aromatherapy: "อโรมาเธอราพี" },
            },
            "oil-massage": {
                name: "นวดผ่อนคลายด้วยน้ำมัน",
                desc: "นุ่มนวลและไหลลื่นด้วยน้ำมันอุ่นเพื่อผ่อนคลายระบบประสาท",
                tags: { Calming: "ผ่อนคลาย", Aromatherapy: "อโรมาเธอราพี" },
            },
            "deep-tissue": {
                name: "นวดผ่อนคลายด้วยน้ำมัน",
                desc: "นุ่มนวลและไหลลื่นด้วยน้ำมันอุ่นเพื่อผ่อนคลายระบบประสาท",
                tags: { Calming: "ผ่อนคลาย", Aromatherapy: "อโรมาเธอราพี" },
            },
            "thy-sbay": {
                name: "นวดแผนไทยโบราณ",
                desc: "การยืดกล้ามเนื้อและการกดจุดแบบโยคะช่วยเพิ่มการเคลื่อนไหวและคลายความตึงเครียด",
                tags: {
                    "Full body": "ทั่วทั้งร่างกาย",
                    Stretching: "ยืดเหยียด",
                    "No oil": "ไม่มีน้ำมัน",
                },
            },
            candle: {
                name: "นวดเทียน",
                desc: "การนวดผ่อนคลายด้วยเทียนเพื่อเพิ่มการไหลเวียนโลหิตและลดความเครียด",
                tags: {
                    Aromatherapy: "อโรมาเธอราพี",
                    Relaxation: "ผ่อนคลาย",
                },
            },
            "warm-herbal": {
                name: "นวดสมุนไพรอุ่น",
                desc: "การนวดผ่อนคลายด้วยสารสกัดสมุนไพรอุ่นๆ เพื่อกระตุ้นการไหลเวียนโลหิตและลดความเครียด",
                tags: {
                    Aromatherapy: "อโรมาเธอราพี",
                    Relaxation: "ผ่อนคลาย",
                },
            },
            "hot-stone": {
                name: "นวดหินร้อน (หินลาวา)",
                desc: "ความร้อนผ่อนคลายเพื่อคลายความตึงเครียดของกล้ามเนื้อ",
                tags: { การบำบัดด้วยความร้อน: "Heat therapy" },
            },
        },
    },
    sr: {
        title: "White Orchid Tajlandska masaža",
        meta_description:
            "Autentične tajlandske masaže: tradicionalna, refleksologija stopala, ulje, masaža za parove i više. Rezervišite danas.",
        nav_services: "Usluge",
        nav_about: "O nama",
        nav_contact: "Kontakt",
        book_now: "Rezerviši odmah",
        hero_title: "Vratite ravnotežu uz tajlandsku masažu",
        hero_desc:
            "Sertifikovani terapeuti. Čist, miran prostor. Personalizirani tretmani za opuštanje i bolju pokretljivost.",
        hero_book: "Zakaži termin",
        view_services: "Pogledaj usluge",
        chip_all: "Sve",
        chip_thai: "Tajlandska",
        chip_oil: "Ulje",
        //chip_foot: "Stopala",
        chip_deep_tissue: "Дееп Тиссуе",
        chip_addons: "Dodaci",
        services_heading: "Naše usluge",
        about_heading: "O nama",
        about_desc:
            "Tradicionalne tajlandske tehnike sa modernim bodywork pristupom. Terapeuti obučeni i sertifikovani.",
        about_bullet_1: "Sertifikovani terapeuti tajlandske masaže",
        about_bullet_2: "Čisto, opuštajuće okruženje",
        about_bullet_3: "Personalizovani tretmani",
        hours_label: "Radno vreme",
        location_label: "Lokacija",
        contact_heading: "Kontakt",
        contact_desc:
            "Pozovite ili pošaljite poruku za rezervaciju. Dolazak bez zakazivanja po dostupnosti.",
        whatsapp_btn: "Poruka na WhatsApp",
        call_btn: "Pozovi +382 67 025 711",
        nav_schedule: "Današnja dostupnost",
        nav_admin: "Admin",
        footer_small: "Zdravlje i wellness • Licencirana praksa",
        modal_title: "Zakaži termin",
        label_name: "Ime i prezime",
        label_phone: "Telefon",
        label_date: "Željeni datum",
        label_time: "Željeno vreme",
        label_service: "Usluga",
        label_duration: "Trajanje",
        //label_operator: "Operater",
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
        label_summary_operator: "Operater",
        label_summary_preferred: "Željeno",
        label_summary_notes: "Napomena",
        whatsapp_msg:
            "Zdravo! Želeo/la bih da zakažem tajlandsku masažu. Imate li slobodnih termina?",
        schedule_heading: "Današnja dostupnost",
        table_time: "Vreme",
        table_status: "Status",
        table_operator: "Operater",
        schedule_free: "Slobodno",
        schedule_booked: "Zauzeto",
        schedule_pending: "Na čekanju",
        schedule_start_label: "Početak",
        schedule_end_label: "Kraj",
        schedule_slot_label: "Slot",
        services: {
            "thai-classic": {
                name: "Tradicionalna tajlandska masaža",
                desc: "Istezanje poput joge i akupresura za bolju pokretljivost i oslobađanje duboke tenzije.",
                tags: {
                    "Full body": "Celo telo",
                    Stretching: "Istezanje",
                    "No oil": "Bez ulja",
                },
            },
            "aroma-oil": {
                name: "Aromatherapy with Oil",
                desc: "Relaxing massage with aromatic oils to improve circulation and reduce stress.",
                tags: {
                    Aromatherapy: "Aromatherapy",
                    Relaxation: "Relaxation",
                },
            },
            "oil-relax": {
                name: "Relaks masaža sa uljem",
                desc: "Blaga, tečna masaža sa toplim uljem za opuštanje nervnog sistema.",
                tags: { Calming: "Umirujuće", Aromatherapy: "Aromaterapija" },
            },
            "oil-massage": {
                name: "Masaža sa uljem",
                desc: "Blaga, tečna masaža sa toplim uljem.",
                tags: { Massage: "Masaža", Oil: "Ulj" },
            },
            "deep-tissue": {
                name: "Дубока масажа ткива",
                desc: "Интензивна, дубока масажа циља дубоке области ткива за опуштање и опоравак.",
                tags: {
                    "Deep tissue": "Deep tissue",
                    Relaxation: "Relaxation",
                },
            },
            "thy-sbay": {
                name: "Традиционална тајландска Сбај масажа",
                desc: "Истезања слична јоги и акупресура за побољшање покретљивости и ублажавање дубоке напетости.",
                tags: {
                    "Full body": "Full body",
                    Stretching: "Stretching",
                    "No oil": "No oil",
                },
            },
            candle: {
                name: "Масажа свећама",
                desc: "Опуштајућа масажа свећама за побољшање циркулације и смањење стреса.",
                tags: {
                    Aromatherapy: "Aromatherapy",
                    Relaxation: "Relaxation",
                },
            },
            "warm-herbal": {
                name: "Топла биљна масажа",
                desc: "Опуштајућа масажа са топлим биљним екстрактима за побољшање циркулације и смањење стреса.",
                tags: {
                    Aromatherapy: "Aromatherapy",
                    Relaxation: "Relaxation",
                },
            },
            "hot-stone": {
                name: "Масажа врућим камењем (лавински камен)",
                desc: "Умирујућа топлина за топљење напетости мишића.",
                tags: { "Heat therapy": "Heat therapy" },
            },
        },
    },
};

let currentLang = localStorage.getItem("lang") || "en";

const whatsappNumber = "38267025711";
const emailAddress = "sfghbvnjj@gmail.com";
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const modal = document.getElementById("booking-modal");
const form = document.getElementById("booking-form");
const closeBtn = document.getElementById("modal-close");
const clearBtn = document.getElementById("clear-form");
const serviceSelect = document.getElementById("service-select");
const durationSelect = document.getElementById("duration-select");
const timeSelect = document.getElementById("time-select");
const operatorSelect = document.getElementById("operator-select");
const servicesGrid = document.getElementById("services-grid");
const filtersEl = document.getElementById("filters");
const whatsappLink = document.getElementById("whatsapp-link");
const ctaBook = document.getElementById("cta-book");
const heroBook = document.getElementById("hero-book");
const langSelect = document.getElementById("lang-select");
const scheduleStartEl = document.getElementById("schedule-start");
const scheduleEndEl = document.getElementById("schedule-end");
const scheduleSlotEl = document.getElementById("schedule-slot");

const SCHEDULE_STORE_KEY = "schedule_config";
const DEFAULT_SCHEDULE = { startHour: 10, endHour: 21, slotMinutes: 30 };
const OPERATOR_SCHEDULES = {
    "op-01": { startHour: 10, endHour: 21, slotMinutes: 30 },
    "op-02": { startHour: 10, endHour: 21, slotMinutes: 30 },
    "op-03": { startHour: 10, endHour: 21, slotMinutes: 30 },
};
function readOperators() {
    try {
        const raw = localStorage.getItem("operators");
        const def = [
            { id: "op-01", name: "Suprawee" },
            { id: "op-02", name: "Bua" },
            { id: "op-03", name: "Dao" },
        ];
        const list = raw ? JSON.parse(raw) : def;
        const normalized = (Array.isArray(list) ? list : def).map((o) => ({
            id: o.id,
            name: o.name,
        }));
        localStorage.setItem("operators", JSON.stringify(normalized));
        return normalized.filter((o) => o && o.id && o.name);
    } catch {
        return [
            { id: "op-01", name: "Suprawee" },
            { id: "op-02", name: "Bua" },
            { id: "op-03", name: "Dao" },
        ];
    }
}
let OPERATORS = readOperators();
function getScheduleConfig() {
    try {
        const raw = localStorage.getItem(SCHEDULE_STORE_KEY);
        const cfg = raw ? JSON.parse(raw) : DEFAULT_SCHEDULE;
        const s = Number(cfg.startHour) || DEFAULT_SCHEDULE.startHour;
        const e = Number(cfg.endHour) || DEFAULT_SCHEDULE.endHour;
        const m = Number(cfg.slotMinutes) || DEFAULT_SCHEDULE.slotMinutes;
        return { startHour: s, endHour: e, slotMinutes: m };
    } catch {
        return DEFAULT_SCHEDULE;
    }
}
function getScheduleForOperator(operatorId) {
    const base = getScheduleConfig();
    const op = operatorId ? OPERATOR_SCHEDULES[operatorId] : null;
    return op
        ? {
              startHour: op.startHour ?? base.startHour,
              endHour: op.endHour ?? base.endHour,
              slotMinutes: op.slotMinutes ?? base.slotMinutes,
          }
        : base;
}
function setScheduleConfig(next) {
    const cur = getScheduleConfig();
    const merged = { ...cur, ...next };
    localStorage.setItem(SCHEDULE_STORE_KEY, JSON.stringify(merged));
    initScheduleControls();
    renderSchedule();
}
function initScheduleControls() {
    if (!scheduleStartEl || !scheduleEndEl || !scheduleSlotEl) return;
    const selectedOperator = operatorSelect?.value || null;
    const cfg = getScheduleForOperator(selectedOperator);
    const hours = Array.from({ length: 15 }, (_, i) => 8 + i);
    scheduleStartEl.innerHTML = hours
        .map(
            (h) =>
                `<option value="${h}">${String(h).padStart(2, "0")}:00</option>`
        )
        .join("");
    scheduleEndEl.innerHTML = hours
        .map(
            (h) =>
                `<option value="${h}">${String(h).padStart(2, "0")}:00</option>`
        )
        .join("");
    scheduleSlotEl.innerHTML = [15, 30, 60]
        .map((m) => `<option value="${m}">${m} min</option>`)
        .join("");
    scheduleStartEl.value = String(cfg.startHour);
    scheduleEndEl.value = String(cfg.endHour);
    scheduleSlotEl.value = String(cfg.slotMinutes);
}

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
    const metaDesc = document.querySelector(
        '[data-i18n-meta="meta_description"]'
    );
    if (metaDesc) metaDesc.setAttribute("content", t("meta_description"));
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key) el.textContent = t(key);
    });
    setWhatsAppLink();
    initScheduleControls();
    renderServices(
        filtersEl.querySelector(".chip.active")?.dataset.filter || "all"
    );
    populateServiceSelect(serviceSelect.value || null);
    populateOperatorSelect();
    setDefaultDateToday();
    renderSchedule();
}

function setLang(lang) {
    currentLang = I18N[lang] ? lang : "en";
    localStorage.setItem("lang", currentLang);
    if (langSelect) langSelect.value = currentLang;
    applyTranslations();
}

function renderServices(filter = "all") {
    servicesGrid.innerHTML = "";
    const items = SERVICES.filter(
        (s) => filter === "all" || s.category.includes(filter)
    );
    items.forEach((s) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
      <div class="card-body">
        <h3>${ts(s.id, "name", s.name)}</h3>
        <p class="desc">${ts(s.id, "desc", s.desc)}</p>
        <div class="pills">${s.tags
            .map((t) => `<span class="pill">${tt(s.id, t)}</span>`)
            .join("")}</div>
        ${s.durations
            .map(
                (d) => `
          <div class="price-row">
            <span>${d === 0 ? t("addon_label") : d + " min"}</span>
            <strong>${s.prices[d]}</strong>
          </div>`
            )
            .join("")}
        <div class="card-actions">
          <button class="btn secondary" data-book="${s.id}">Book</button>
          <button class="icon-btn" data-details="${s.id}">Details</button>
        </div>
      </div>`;
        servicesGrid.appendChild(card);
    });

    servicesGrid.querySelectorAll("[data-book]").forEach((btn) => {
        btn.addEventListener("click", () =>
            openBooking(btn.getAttribute("data-book"))
        );
    });
    servicesGrid.querySelectorAll("[data-details]").forEach((btn) => {
        btn.addEventListener("click", () =>
            alert(
                "Ask your therapist about techniques, pressure preferences, and focus areas."
            )
        );
    });
}

function populateServiceSelect(defaultServiceId = null) {
    serviceSelect.innerHTML = SERVICES.map(
        (s) => `<option value="${s.id}">${s.name}</option>`
    ).join("");
    const selected = defaultServiceId || SERVICES[0].id;
    serviceSelect.value = selected;
    populateDurationSelect(selected);
}

function populateOperatorSelect() {
    if (!operatorSelect) return;
    OPERATORS = readOperators();
    operatorSelect.innerHTML = OPERATORS.map(
        (o) => `<option value="${o.id}">${o.name}</option>`
    ).join("");
}

window.addEventListener("storage", (e) => {
    try {
        if (e.key === "operators") {
            OPERATORS = readOperators();
            populateOperatorSelect();
            renderSchedule();
        }
        if (e.key === "bookings") {
            renderSchedule();
        }
    } catch {}
});

function populateDurationSelect(serviceId) {
    const s = SERVICES.find((x) => x.id === serviceId);
    durationSelect.innerHTML = s.durations
        .map((d) => {
            const label = d === 0 ? t("addon_label") : `${d} min`;
            return `<option value="${d}">${label} (${s.prices[d]})</option>`;
        })
        .join("");
    populateAvailableTimes();
}

function openBooking(serviceId = null) {
    populateServiceSelect(serviceId);
    populateOperatorSelect();
    setDefaultDateToday();
    populateAvailableTimes();
    modal.showModal();
}

serviceSelect.addEventListener("change", (e) =>
    populateDurationSelect(e.target.value)
);
durationSelect.addEventListener("change", () => populateAvailableTimes());
const dateInput = document.querySelector('input[name="date"]');
if (dateInput)
    dateInput.addEventListener("change", () => populateAvailableTimes());
if (operatorSelect)
    operatorSelect.addEventListener("change", () => populateAvailableTimes());
closeBtn.addEventListener("click", () => modal.close());
clearBtn.addEventListener("click", () => form.reset());
[ctaBook, heroBook].forEach(
    (b) => b && b.addEventListener("click", () => openBooking())
);
if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener("change", (e) => setLang(e.target.value));
}

filtersEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    filtersEl
        .querySelectorAll(".chip")
        .forEach((c) => c.classList.remove("active"));
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

    const service = SERVICES.find((s) => s.id === serviceId);
    const price = service.prices[Number(duration)];
    const operatorId = operatorSelect?.value || null;
    const operatorName = (() => {
        const ops = readOperators();
        const op = ops.find((o) => o.id === operatorId);
        return op ? op.name : null;
    })();
    const summary = `${t("label_summary_title")}
${t("label_summary_name")}: ${name}
${t("label_summary_phone")}: ${phone}
${t("label_summary_service")}: ${ts(service.id, "name", service.name)}
${t("label_summary_duration")}: ${
        duration === "0" ? t("addon_label") : duration + " min"
    }
${t("label_summary_price")}: ${price}
${t("label_summary_preferred")}: ${date} ${time}
${t("label_summary_notes")}: ${notes || "-"}
`;

    const payload = {
        date,
        start: time,
        minutes: duration === "0" ? 60 : Number(duration),
        name,
        phone,
        serviceId,
        notes,
        status: "pending",
        operatorId,
        operatorName,
    };
    postBookingToBackend(payload);
    saveBooking(payload);
    const mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(
        t("mail_subject_prefix") + ts(service.id, "name", service.name)
    )}&body=${encodeURIComponent(summary)}`;
    try {
        window.open(mailto, "_blank");
    } catch {}
    modal.close();
});

function setWhatsAppLink() {
    const msg = encodeURIComponent(t("whatsapp_msg"));
    whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${msg}`;
}

applyTranslations();

function setDefaultDateToday() {
    const input = document.querySelector('input[name="date"]');
    if (!input) return;
    if (input.value) return;
    const d = new Date();
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
        2,
        "0"
    )}-${String(d.getDate()).padStart(2, "0")}`;
    input.value = iso;
}

function populateAvailableTimes() {
    if (!timeSelect) return;
    const cfg = getScheduleConfig();
    const date =
        document.querySelector('input[name="date"]')?.value ||
        (() => {
            const d = new Date();
            return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
                2,
                "0"
            )}-${String(d.getDate()).padStart(2, "0")}`;
        })();
    const operatorId = operatorSelect?.value || null;
    const dur = Number(durationSelect.value || 60);
    const durationMin = dur === 0 ? 60 : dur;
    const startMin = cfg.startHour * 60;
    const endMin = cfg.endHour * 60;
    const step = cfg.slotMinutes;
    const toStr = (n) =>
        String(Math.floor(n / 60)).padStart(2, "0") +
        ":" +
        String(n % 60).padStart(2, "0");
    fetchAppointments(date, operatorId).then((appts) => {
        const free = [];
        for (let t = startMin; t + durationMin <= endMin; t += step) {
            const s = toStr(t);
            const e = toStr(t + durationMin);
            const overlaps = appts.some(
                (a) =>
                    toMinutes(a.start) < t + durationMin && toMinutes(a.end) > t
            );
            if (!overlaps) free.push({ start: s, end: e });
        }
        timeSelect.innerHTML = free
            .map(
                (x) => `<option value="${x.start}">${x.start}–${x.end}</option>`
            )
            .join("");
    });
}

function toMinutes(hhmm) {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
}

function getAppointmentsForDate(iso, operatorId = null) {
    try {
        const raw = localStorage.getItem("bookings");
        const list = raw ? JSON.parse(raw) : [];
        return list.filter(
            (b) =>
                b.date === iso &&
                b.status !== "cancelled" &&
                (!operatorId ||
                    (b.operatorId ? b.operatorId === operatorId : true))
        );
    } catch {
        return [];
    }
}

function authHeader() {
    try {
        return sessionStorage.getItem("admin_auth_header") || "";
    } catch {
        return "";
    }
}

function fetchAppointments(iso, operatorId = null) {
    const h = authHeader();
    if (!h) return Promise.resolve(getAppointmentsForDate(iso, operatorId));
    const headers = { Authorization: h };
    const url =
        "/api/bookings?date=" +
        iso +
        (operatorId ? "&operator=" + encodeURIComponent(operatorId) : "");
    return fetch(url, { headers })
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((list) =>
            list
                .filter(
                    (b) =>
                        b.status !== "cancelled" &&
                        (!operatorId ||
                            (b.operatorId ? b.operatorId === operatorId : true))
                )
                .map((b) => ({
                    start: b.start,
                    end: b.end,
                    status: b.status || "pending",
                    operatorId: b.operatorId || null,
                }))
        )
        .catch(() => getAppointmentsForDate(iso, operatorId));
}

function saveBooking(b) {
    try {
        const raw = localStorage.getItem("bookings");
        const list = raw ? JSON.parse(raw) : [];
        const end = (() => {
            const [h, m] = b.start.split(":").map(Number);
            const total = h * 60 + m + Number(b.minutes);
            const eh = Math.floor(total / 60);
            const em = total % 60;
            return (
                String(eh).padStart(2, "0") + ":" + String(em).padStart(2, "0")
            );
        })();
        const id = Date.now().toString();
        list.push({
            id,
            date: b.date,
            start: b.start,
            end,
            name: b.name,
            phone: b.phone,
            serviceId: b.serviceId,
            minutes: b.minutes,
            notes: b.notes,
            status: b.status || "pending",
            operatorId: b.operatorId || null,
        });
        localStorage.setItem("bookings", JSON.stringify(list));
        renderSchedule();
    } catch {}
}
function renderSchedule() {
    const tbody = document.getElementById("schedule-body");
    if (!tbody) return;
    const selectedOperator = operatorSelect?.value || null;
    const cfg = getScheduleForOperator(selectedOperator);
    const start = cfg.startHour * 60;
    const end = cfg.endHour * 60;
    const slot = cfg.slotMinutes;
    const toMin = (s) => {
        const [h, m] = s.split(":").map(Number);
        return h * 60 + m;
    };
    const toStr = (n) =>
        String(Math.floor(n / 60)).padStart(2, "0") +
        ":" +
        String(n % 60).padStart(2, "0");
    tbody.innerHTML = "";
    const d = new Date();
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
        2,
        "0"
    )}-${String(d.getDate()).padStart(2, "0")}`;
    fetchAppointments(iso, selectedOperator).then((appts) => {
        for (let tMin = start; tMin < end; tMin += slot) {
            const s = toStr(tMin);
            const e = toStr(Math.min(tMin + slot, end));
            const hasConfirmed = appts.some(
                (a) =>
                    toMin(a.start) < tMin + slot &&
                    toMin(a.end) > tMin &&
                    a.status === "confirmed"
            );
            const hasPending = appts.some(
                (a) =>
                    toMin(a.start) < tMin + slot &&
                    toMin(a.end) > tMin &&
                    a.status !== "cancelled" &&
                    a.status !== "confirmed"
            );
            const overlapped = appts.find(
                (a) => toMin(a.start) < tMin + slot && toMin(a.end) > tMin
            );
            const opName = (() => {
                const id = overlapped?.operatorId || null;
                if (!id) return "-";
                const op = OPERATORS.find((o) => o.id === id);
                return op ? op.name : "-";
            })();
            const tr = document.createElement("tr");
            const cls = hasConfirmed
                ? "status-booked"
                : hasPending
                ? "status-pending"
                : "status-free";
            const label = hasConfirmed
                ? t("schedule_booked")
                : hasPending
                ? t("schedule_pending")
                : t("schedule_free");
            tr.innerHTML = `<td>${s}–${e}</td><td class="${cls}">${label}</td><td>${opName}</td>`;
            tbody.appendChild(tr);
        }
    });
}

function getTodayAppointments() {
    try {
        const raw = localStorage.getItem("bookings");
        const list = raw ? JSON.parse(raw) : [];
        const today = new Date();
        const y = today.getFullYear();
        const m = String(today.getMonth() + 1).padStart(2, "0");
        const d = String(today.getDate()).padStart(2, "0");
        const iso = `${y}-${m}-${d}`;
        return list
            .filter((b) => b.date === iso && b.status !== "cancelled")
            .map((b) => ({ start: b.start, end: b.end }));
    } catch {
        return [];
    }
}

function postBookingToBackend(b) {
    try {
        fetch("/api/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(b),
        }).catch(() => {});
    } catch {}
}
