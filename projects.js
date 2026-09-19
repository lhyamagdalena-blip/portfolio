// ============================================================
// DATA PROJECT — edit di sini kalau mau tambah/ubah project.
// Setiap project punya versi "id" (Indonesia) dan "en" (Inggris).
// ============================================================

const projects = [
  // ---------------------------------------------------------
  // 1. TIRTA PALA INVENTORY
  // ---------------------------------------------------------
  {
    id: "tirta-pala",
    category: { id: "B2B · INTERNAL TOOL", en: "B2B · INTERNAL TOOL" },
    title: { id: "Tirta Pala Inventory", en: "Tirta Pala Inventory" },
    short: {
      id: "Menyempurnakan alert stok kritis pada sistem inventaris PDAM, berdasarkan riset dan data dari tugas akhir saya.",
      en: "Refining the critical-stock alert on a water-utility inventory system, based on research and data from my thesis."
    },
    role: { id: "UI/UX Designer", en: "UI/UX Designer" },
    year: "2025",
    client: "Perumda Tirta Pala",
    tools: ["Figma"],
    cover: "assets/screenshots/cover-tirtapala.png",
    links: {
      figma: "https://www.figma.com/proto/vWykqkVabhj8YJJuTgyWWI/INVENTARIS-PDAM?node-id=0-4475&p=f&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      prototype: ""
    },
    overview: {
      id: "Tirta Pala Inventory adalah proyek penyempurnaan UI/UX untuk sistem manajemen inventaris PDAM, dibangun di atas riset dan data dari tugas akhir saya. Fokusnya: membantu admin dan staff gudang menyadari stok kritis lebih cepat.",
      en: "Tirta Pala Inventory is a UI/UX refinement project for a water-utility inventory management system, built on research and data from my undergraduate thesis. The focus: helping admins and warehouse staff notice critical stock sooner."
    },
    problem: {
      id: "Pencatatan stok bahan baku pengolahan air masih dilakukan manual, sehingga stok kritis seperti kaporit sering baru disadari saat sudah dibutuhkan.",
      en: "Water-treatment stock was still recorded manually, so critical items like chlorine were often noticed only once already needed."
    },
    facts: [
      { num: "25%", label: { id: "waktu kerja terbuang", en: "work time wasted" } },
      { num: "7–10 hr", label: { id: "keterlambatan laporan", en: "days of reporting delay" } }
    ],
    quote: {
      id: "\u201cKami baru sadar kaporit hampir habis pas mau dipakai. Idealnya kami tahu dari jauh-jauh hari.\u201d",
      en: "\u201cWe only realized the chlorine was almost gone right when we needed it. Ideally we'd know well in advance.\u201d"
    },
    process: [
      { title: { id: "Catat transaksi", en: "Log transaction" }, desc: { id: "Admin/staff input barang masuk & keluar", en: "Admin/staff record stock in & out" } },
      { title: { id: "Sistem validasi", en: "System validates" }, desc: { id: "Data tersimpan otomatis, tidak manual", en: "Data saved automatically, not manual" } },
      { title: { id: "Dashboard monitoring", en: "Dashboard monitoring" }, desc: { id: "Status stok terpantau real-time", en: "Stock status tracked in real time" } },
      { title: { id: "Notifikasi stok", en: "Stock notification" }, desc: { id: "Alert muncul sebelum stok benar-benar habis", en: "Alert appears before stock actually runs out" } }
    ],
    screens: [
      { src: "assets/screenshots/tirtapala-dashboard.png", caption: { id: "Dashboard — panel restock prioritas ditempatkan paling atas", en: "Dashboard — priority restock panel placed at the top" } },
      { src: "assets/screenshots/tirtapala-monitoring.png", caption: { id: "Monitoring Stok — badge status Kritis / Rendah / Aman", en: "Stock Monitoring — Critical / Low / Safe status badges" } },
      { src: "assets/screenshots/tirtapala-kategori.png", caption: { id: "Halaman Kategori barang", en: "Item Category page" } },
      { src: "assets/screenshots/tirtapala-barang.png", caption: { id: "Halaman Barang — pengelolaan data lengkap", en: "Inventory page — full item data management" } }
    ],
    impact: [
      { num: "92.8%", label: { id: "skor UAT", en: "UAT score" } },
      { num: "100%", label: { id: "skenario fungsional lolos", en: "functional test cases passed" } }
    ],
    reflection: {
      id: "Perbaikan UI/UX yang berdampak tidak selalu berarti merombak proses bisnis — kadang cukup memastikan fitur yang sudah direncanakan benar-benar terlihat dan mudah ditindaklanjuti.",
      en: "Impactful UI/UX improvement doesn't always mean overhauling the business process — sometimes it's enough to make an already-planned feature actually visible and actionable."
    }
  },

  // ---------------------------------------------------------
  // 2. TIRTA LAPOR
  // ---------------------------------------------------------
  {
    id: "tirta-lapor",
    category: { id: "PUBLIC SERVICE · 2-SIDED APP", en: "PUBLIC SERVICE · 2-SIDED APP" },
    title: { id: "Tirta Lapor", en: "Tirta Lapor" },
    short: {
      id: "Aplikasi pelaporan gangguan air untuk warga, terhubung langsung ke dashboard petugas PDAM.",
      en: "A water-disruption reporting app for citizens, connected directly to a PDAM staff dashboard."
    },
    role: { id: "UI/UX Designer", en: "UI/UX Designer" },
    year: "2026",
    client: { id: "Personal project (ekstensi ekosistem Tirta Pala)", en: "Personal project (Tirta Pala ecosystem extension)" },
    tools: ["Figma"],
    cover: "assets/screenshots/cover-tirtalapor.png",
    links: {
      figma: "https://www.figma.com/proto/ukEfcJ6xWqMzfXEC9oRBa4/Tirta-Pala?node-id=4-206&starting-point-node-id=27%3A237&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      prototype: ""
    },
    overview: {
      id: "Tirta Lapor adalah eksplorasi pribadi yang melengkapi ekosistem Tirta Pala Inventory — kalau project sebelumnya fokus ke sisi internal (gudang), Tirta Lapor fokus ke sisi warga: bagaimana masyarakat melaporkan gangguan air (mati air, bocor, kualitas air) dan memantau progresnya, sementara petugas PDAM mengelola laporan itu dari satu dashboard.",
      en: "Tirta Lapor is a personal exploration extending the Tirta Pala Inventory ecosystem — where the earlier project focused on the internal warehouse side, Tirta Lapor focuses on citizens: how people report water disruptions (outages, leaks, water quality) and track progress, while PDAM staff manage those reports from one dashboard."
    },
    problem: {
      id: "Warga sering tidak tahu harus lapor ke mana saat air bermasalah, dan begitu lapor, mereka tidak punya visibilitas atas progresnya — pola yang umum terjadi di layanan publik berbasis loket/telepon manual, dan menjadi alasan warga menelepon berulang kali hanya untuk menanyakan status.",
      en: "Citizens often don't know where to report a water problem, and once reported, have no visibility into progress — a common pattern in manual counter/phone-based public services, and the reason citizens end up calling repeatedly just to check status."
    },
    facts: [
      { num: "2 sisi", label: { id: "warga & petugas PDAM", en: "citizens & PDAM staff" } },
      { num: "7", label: { id: "layar inti dirancang", en: "core screens designed" } }
    ],
    factsSource: {
      id: "Pola masalah ini dirujuk dari studi kasus e-Government sejenis (lihat project \u201cE-Government Pengaduan Masyarakat\u201d), disesuaikan untuk konteks layanan air.",
      en: "This problem pattern is referenced from a similar e-Government case study (see the \u201cE-Government Citizen Complaints\u201d project), adapted for a water-utility context."
    },
    quote: {
      id: "\u201cIdenya: warga cukup lapor lewat HP, foto & lokasi otomatis terkirim, lalu bisa pantau statusnya sendiri tanpa perlu telepon berulang kali.\u201d",
      en: "\u201cThe idea: citizens just report from their phone, photo & location are sent automatically, then they can track status themselves without repeated phone calls.\u201d"
    },
    process: [
      { title: { id: "Lapor masalah", en: "Report issue" }, desc: { id: "Pilih kategori, deskripsi, foto & lokasi", en: "Pick category, description, photo & location" } },
      { title: { id: "Tiket terbit", en: "Ticket issued" }, desc: { id: "Nomor laporan otomatis untuk pelacakan", en: "Automatic report number for tracking" } },
      { title: { id: "Petugas proses", en: "Staff processes" }, desc: { id: "Update status dari dashboard admin", en: "Status updated from admin dashboard" } },
      { title: { id: "Warga pantau", en: "Citizen tracks" }, desc: { id: "Progres terlihat real-time di riwayat laporan", en: "Progress visible in real time in report history" } }
    ],
    screens: [
      { src: "assets/screenshots/tirtalapor-home.png", caption: { id: "Home warga — status air wilayah & pengumuman terbaru", en: "Citizen home — area water status & latest announcements" } },
      { src: "assets/screenshots/tirtalapor-form.png", caption: { id: "Form lapor — kategori, deskripsi, foto, dan lokasi", en: "Report form — category, description, photo, and location" } },
      { src: "assets/screenshots/tirtalapor-tracking.png", caption: { id: "Tracking status laporan secara real-time", en: "Real-time report status tracking" } },
      { src: "assets/screenshots/tirtalapor-riwayat.png", caption: { id: "Riwayat laporan dengan filter status", en: "Report history with status filter" } },
      { src: "assets/screenshots/tirtalapor-admin-dashboard.png", caption: { id: "Dashboard petugas — ringkasan laporan per wilayah", en: "Staff dashboard — report summary per area" } },
      { src: "assets/screenshots/tirtalapor-admin-detail.png", caption: { id: "Detail laporan & update status oleh petugas", en: "Report detail & status update by staff" } },
      { src: "assets/screenshots/tirtalapor-admin-pengumuman.png", caption: { id: "Broadcast pengumuman gangguan/perbaikan", en: "Broadcast disruption/repair announcements" } }
    ],
    impact: [],
    reflection: {
      id: "Sengaja membatasi scope ke 7 layar inti (4 sisi warga, 3 sisi petugas) dan pakai 1 design system kecil dari awal — supaya konsisten dan cepat, tanpa perlu fitur tambahan seperti chat atau rating yang belum tentu perlu di tahap ini.",
      en: "Deliberately scoped down to 7 core screens (4 citizen-side, 3 staff-side) using one small design system from the start — for consistency and speed, without extra features like chat or ratings that aren't necessarily needed at this stage."
    }
  },

  // ---------------------------------------------------------
  // 3. E-GOVERNMENT — PENGADUAN MASYARAKAT
  // ---------------------------------------------------------
  {
    id: "egov",
    category: { id: "PUBLIC SERVICE · WEB", en: "PUBLIC SERVICE · WEB" },
    title: { id: "E-Government Pengaduan Masyarakat", en: "E-Government Citizen Complaints" },
    short: {
      id: "Rancangan sistem pengaduan masyarakat berbasis web untuk pelayanan publik distrik.",
      en: "A web-based citizen complaint system design for district public services."
    },
    role: { id: "UI/UX Designer", en: "UI/UX Designer" },
    year: "2025",
    client: { id: "Tugas akhir mata kuliah E-Government", en: "E-Government coursework assignment" },
    tools: ["Figma"],
    cover: "",
    links: { figma: "https://www.figma.com/proto/ylVRu5OIl8qzfegFmYqnyf/EGOV-Amel?node-id=2001-80&p=f&scaling=contain&content-scaling=fixed&page-id=0%3A1", prototype: "" },
    overview: {
      id: "Perancangan sistem informasi e-Government untuk pengaduan masyarakat berbasis web, dengan studi kasus pelayanan publik di sebuah distrik. Tujuannya meningkatkan keterlibatan masyarakat dalam pelayanan publik lewat kanal pengaduan digital.",
      en: "Design of an e-Government information system for web-based citizen complaints, with a district public-service case study. The goal: increasing citizen participation in public service through a digital complaint channel."
    },
    problem: {
      id: "Berdasarkan analisis menggunakan PIECES Framework (Performance, Information, Economy, Control, Efficiency, Service): proses pengaduan manual mengharuskan warga datang langsung ke kantor, dokumentasi berbasis kertas rentan hilang, dan tidak ada mekanisme pelacakan status yang transparan.",
      en: "Based on analysis using the PIECES Framework (Performance, Information, Economy, Control, Efficiency, Service): the manual complaint process required citizens to visit the office in person, paper-based documentation was prone to loss, and there was no transparent status-tracking mechanism."
    },
    facts: [
      { num: "6 aspek", label: { id: "dianalisis via PIECES Framework", en: "analyzed via PIECES Framework" } },
      { num: "0", label: { id: "opsi lapor online (sebelum)", en: "online reporting options (before)" } }
    ],
    quote: {
      id: "\u201cMasyarakat harus datang berulang kali ke kantor hanya untuk menanyakan status laporan yang sudah diajukan.\u201d",
      en: "\u201cCitizens had to visit the office repeatedly just to ask about the status of a complaint they'd already filed.\u201d"
    },
    process: [
      { title: { id: "Analisis PIECES", en: "PIECES analysis" }, desc: { id: "Memetakan masalah di 6 aspek layanan", en: "Mapping problems across 6 service aspects" } },
      { title: { id: "Use case & class diagram", en: "Use case & class diagram" }, desc: { id: "Mendefinisikan aktor dan struktur data", en: "Defining actors and data structure" } },
      { title: { id: "Prototyping", en: "Prototyping" }, desc: { id: "Desain iteratif di Figma", en: "Iterative design in Figma" } },
      { title: { id: "Rancangan UI", en: "UI design" }, desc: { id: "Halaman lapor, tracking, dan dashboard admin", en: "Report, tracking, and admin dashboard pages" } }
    ],
    screens: [
      { src: "assets/screenshots/egov-home.png", caption: { id: "Halaman utama — akses cepat ke pengaduan", en: "Home page — quick access to complaints" } },
      { src: "assets/screenshots/egov-history.png", caption: { id: "Riwayat pengaduan dengan status berjalan", en: "Complaint history with live status" } },
      { src: "assets/screenshots/egov-form.png", caption: { id: "Form laporan pengaduan masyarakat", en: "Citizen complaint report form" } }
    ],
    impact: [],
    reflection: {
      id: "Project ini melatih cara menerjemahkan kerangka analisis formal (PIECES) menjadi keputusan desain konkret, bukan sekadar teori di atas kertas.",
      en: "This project practiced translating a formal analysis framework (PIECES) into concrete design decisions, not just theory on paper."
    }
  },

  // ---------------------------------------------------------
  // 4. QUEUELESS
  // ---------------------------------------------------------
  {
    id: "queueless",
    category: { id: "CONSUMER · 2-SIDED APP", en: "CONSUMER · 2-SIDED APP" },
    title: { id: "QueueLess", en: "QueueLess" },
    short: {
      id: "Aplikasi antrean digital yang menghubungkan pelanggan dengan penyedia layanan secara real-time.",
      en: "A digital queueing app connecting customers with service providers in real time."
    },
    role: { id: "UI/UX Designer", en: "UI/UX Designer" },
    year: "2026",
    client: { id: "Personal project", en: "Personal project" },
    tools: ["Figma"],
    cover: "assets/screenshots/cover-queueless.jpg",
    links: {
      figma: "https://www.figma.com/proto/kBMTQa5rZxQ3t972mJ4TJN/QueueLess?scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-2",
      prototype: ""
    },
    overview: {
      id: "QueueLess adalah konsep platform antrean digital yang menghubungkan pelanggan dengan penyedia layanan (klinik, salon, bengkel) lewat data antrean real-time — pelanggan tidak perlu menunggu di lokasi, penyedia layanan dapat mengelola antrean dari satu dashboard.",
      en: "QueueLess is a digital queueing platform concept connecting customers with service providers (clinics, salons, workshops) through real-time queue data — customers don't need to wait on-site, and providers can manage queues from one dashboard."
    },
    problem: {
      id: "Riset industri mencatat 61% konsumen pernah meninggalkan antrean fisik sebelum gilirannya tiba — masalah yang sama berlaku di layanan seperti klinik, salon, dan bengkel yang masih pakai sistem antrean manual.",
      en: "Industry research shows 61% of consumers have left a physical queue before their turn — the same problem applies to services like clinics, salons, and workshops still using manual queue systems."
    },
    facts: [
      { num: "61%", label: { id: "pernah tinggalkan antrean fisik", en: "have left a physical queue" } },
      { num: "$130B", label: { id: "kerugian bisnis AS/tahun akibat antrean buruk", en: "annual US business losses from poor wait experiences" } }
    ],
    factsSource: {
      id: "Sumber: Waitwhile Consumer Queuing Survey, 2024 — dikutip sebagai konteks skala masalah, bukan hasil riset primer saya.",
      en: "Source: Waitwhile Consumer Queuing Survey, 2024 — cited for problem-scale context, not my own primary research."
    },
    quote: {
      id: "\u201cKalau bisa lihat estimasi waktu dan dapat notifikasi, orang bisa pergi dulu ngapain-ngapain sambil nunggu giliran.\u201d",
      en: "\u201cIf people could see a time estimate and get notified, they could go do other things while waiting for their turn.\u201d"
    },
    process: [
      { title: { id: "Cari & pilih layanan", en: "Search & pick service" }, desc: { id: "Temukan layanan terdekat", en: "Find nearby services" } },
      { title: { id: "Ambil antrean", en: "Take a queue number" }, desc: { id: "Lihat estimasi waktu tunggu", en: "See estimated wait time" } },
      { title: { id: "Pantau & notifikasi", en: "Track & get notified" }, desc: { id: "Bebas beraktivitas, dapat notifikasi saat giliran dekat", en: "Free to do other things, notified when turn is near" } },
      { title: { id: "Datang & dilayani", en: "Arrive & get served" }, desc: { id: "Tiba tepat waktu, tanpa menunggu di lokasi", en: "Arrive on time, no on-site waiting" } }
    ],
    screens: [
      { src: "assets/screenshots/queueless-home.png", caption: { id: "Home — cari layanan terdekat", en: "Home — search nearby services" } },
      { src: "assets/screenshots/queueless-detail.png", caption: { id: "Detail layanan & pilihan jenis konsultasi", en: "Service detail & consultation type options" } },
      { src: "assets/screenshots/queueless-confirmation.png", caption: { id: "Konfirmasi nomor antrean", en: "Queue number confirmation" } },
      { src: "assets/screenshots/queueless-dash-overview.png", caption: { id: "Dashboard bisnis — overview harian", en: "Business dashboard — daily overview" } },
      { src: "assets/screenshots/queueless-dash-kelola.png", caption: { id: "Kelola antrean real-time", en: "Real-time queue management" } },
      { src: "assets/screenshots/queueless-dash-analitik.png", caption: { id: "Analitik & insight waktu puncak", en: "Analytics & peak-time insight" } }
    ],
    impact: [],
    reflection: {
      id: "Konsep ini juga saya kembangkan lebih jauh lewat prototype interaktif sederhana untuk menguji alur customer app dan business dashboard secara langsung, sebelum akhirnya difokuskan kembali ke desain di Figma sebagai output utama.",
      en: "I also pushed this concept further with a simple interactive prototype to test the customer-app and business-dashboard flow directly, before refocusing on the Figma design as the primary output."
    }
  },

  // ---------------------------------------------------------
  // 5. JOBLY
  // ---------------------------------------------------------
  {
    id: "jobly",
    category: { id: "CONSUMER · WEB APP", en: "CONSUMER · WEB APP" },
    title: { id: "Jobly", en: "Jobly" },
    short: {
      id: "Platform pencarian kerja yang membantu pengguna menemukan dan melacak lamaran kerja di satu tempat.",
      en: "A job-search platform helping users find and track applications in one place."
    },
    role: { id: "UI/UX Designer", en: "UI/UX Designer" },
    year: "2026",
    client: { id: "Personal project", en: "Personal project" },
    tools: ["Figma"],
    cover: "",
    links: {
      figma: "https://www.figma.com/proto/b1aLv0Tn1SfVCaexWBXZUg/Jobly-%E2%80%94-UI-UX-Design?node-id=1-32&p=f&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      prototype: ""
    },
    overview: {
      id: "Jobly adalah konsep platform pencarian kerja yang menggabungkan pencarian lowongan, penyimpanan lowongan favorit, dan pelacakan status lamaran dalam satu tempat — dirancang agar pencari kerja tidak kehilangan jejak dari puluhan lamaran yang tersebar di banyak platform.",
      en: "Jobly is a job-search platform concept combining job search, saved listings, and application tracking in one place — designed so job seekers don't lose track of dozens of applications scattered across many platforms."
    },
    problem: {
      id: "Survei LiveCareer (2025) menemukan 57% pencari kerja berhenti di tengah proses lamaran karena formulir yang terlalu rumit atau lama, dan 41% merasa lamaran mereka nyaris tidak pernah dilihat oleh manusia.",
      en: "LiveCareer's 2025 survey found 57% of job seekers abandon an application mid-process due to overly complex or time-consuming forms, and 41% feel their applications are almost never seen by a human."
    },
    facts: [
      { num: "57%", label: { id: "berhenti di tengah proses lamaran", en: "abandon applications mid-process" } },
      { num: "41%", label: { id: "merasa lamaran tak dilihat manusia", en: "feel applications go unseen" } }
    ],
    factsSource: {
      id: "Sumber: LiveCareer Job Search Frustration Survey, 2025 — dikutip sebagai konteks skala masalah, bukan hasil riset primer saya.",
      en: "Source: LiveCareer Job Search Frustration Survey, 2025 — cited for problem-scale context, not my own primary research."
    },
    quote: {
      id: "\u201cIdenya sederhana: satu tempat buat cari kerja, nyimpen yang menarik, dan mantau semua lamaran tanpa buka banyak tab.\u201d",
      en: "\u201cThe idea is simple: one place to search, save interesting listings, and track every application without juggling many tabs.\u201d"
    },
    process: [
      { title: { id: "Cari lowongan", en: "Search jobs" }, desc: { id: "Filter berdasarkan tipe, mode kerja, pengalaman", en: "Filter by type, work mode, experience" } },
      { title: { id: "Simpan favorit", en: "Save favorites" }, desc: { id: "Kumpulkan lowongan menarik", en: "Collect interesting listings" } },
      { title: { id: "Lamar & lacak", en: "Apply & track" }, desc: { id: "Pantau status: applied, interview, offer", en: "Track status: applied, interview, offer" } },
      { title: { id: "Kelola profil", en: "Manage profile" }, desc: { id: "Skill dan preferensi kerja terpusat", en: "Centralized skills and job preferences" } }
    ],
    screens: [
      { src: "assets/screenshots/jobly-home.png", caption: { id: "Home — rekomendasi lowongan & filter", en: "Home — job recommendations & filters" } },
      { src: "assets/screenshots/jobly-detail.png", caption: { id: "Detail lowongan kerja", en: "Job listing detail" } },
      { src: "assets/screenshots/jobly-saved.png", caption: { id: "Lowongan tersimpan", en: "Saved jobs" } },
      { src: "assets/screenshots/jobly-tracking.png", caption: { id: "Pelacakan status lamaran", en: "Application status tracking" } },
      { src: "assets/screenshots/jobly-profile.png", caption: { id: "Profil & preferensi kerja pengguna", en: "User profile & job preferences" } }
    ],
    impact: [],
    reflection: {
      id: "Fokus utama project ini ada di merancang sistem status lamaran (applied → interview → offer) yang jelas secara visual, karena itu bagian yang paling sering bikin pencari kerja bingung di platform lain.",
      en: "The main focus of this project was designing a visually clear application-status system (applied → interview → offer), since that's the part that most often confuses job seekers on other platforms."
    }
  }

  // ============================================================
  // TEMPLATE PROJECT BARU — copy salah satu blok { ... } di atas,
  // tempel di bawah dengan koma sebelumnya, lalu ganti isinya.
  // Jangan lupa ganti "id: " jadi nama unik.
  // ============================================================
];

function getProject(pid) {
  return projects.find(p => p.id === pid) || projects[0];
}
