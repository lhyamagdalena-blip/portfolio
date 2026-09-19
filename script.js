// ============================================================
// BAHASA / TRANSLATIONS — untuk teks statis (di luar data project)
// ============================================================
const translations = {
  id: {
    hero_eyebrow: "",
    hero_title: "Hi, saya Amelia Magdalena.",
    hero_role: "Fokus pada produk berbasis data",
    hero_bio: "Saya suka menelusuri masalah nyata di balik data, lalu merancang antarmuka yang membantu orang mengambil keputusan lebih cepat.",
    hero_cta1: "Hubungi saya",
    hero_cta2: "Tentang saya",
    work_label: "KARYA PILIHAN",
    work_title: "Projects",
    work_sub: "Project yang saya kembangkan secara mendalam, dari riset sampai hasil pengujian.",
    about_label: "TENTANG SAYA",
    about_title: "Kenalan lebih dekat",
    about_body: "Lulusan S1 Sistem Informasi dengan pengalaman magang sebagai System Analyst di sektor utilitas publik (PDAM). Fokus pada analisis proses bisnis dan perancangan solusi digital. Terbiasa menerjemahkan kebutuhan pengguna menjadi workflow (UML/DFD) dan prototipe UI/UX (Figma) yang teruji lewat User Acceptance Testing, serta menyusun dokumentasi teknis. Berpengalaman berkolaborasi dalam tim, proaktif dalam mencapai target.",
    exp1_role: "System Analyst (Pegawai Magang)",
    exp1_desc: "Menganalisis alur inventaris logistik, merancang usulan solusi digital, dan menyusun dokumentasi rancangan sistem & workflow untuk pelacakan inventaris.",
    edu_role: "S1 Sistem Informasi \u2014 IPK 3.99/4.00 (Cum Laude)",
    edu_desc: "Tugas akhir: Sistem Informasi Inventaris Berbasis Web dengan Metode RAD.",
    skills_label: "KEMAMPUAN",
    skills_title: "Skills",
    skills_soft: "SOFT SKILL",
    skills_tech: "SOFTWARE",
    skills_method: "HARD SKILL",
    soft1: "Berpikir Kritis", soft2: "Ketelitian", soft3: "Manajemen Waktu", soft4: "Kerja Sama Tim", soft5: "Adaptasi",
    hard1: "Analisis Proses Bisnis", hard2: "Wireframing", hard3: "Prototyping", hard4: "Manajemen Proyek", hard5: "Penulisan Teknis",
    how_label: "CARA KERJA",
    how_title: "How I Work",
    how1_t: "Understand", how1_d: "Memahami konteks, masalah, dan kebutuhan di baliknya.",
    how2_t: "Research", how2_d: "Menggali data sebelum mengambil keputusan apa pun.",
    how3_t: "Design", how3_d: "Menyusun alur dan solusi yang terstruktur.",
    how4_t: "Validate", how4_d: "Menguji hasil dan mengukur dampaknya.",
    contact_label: "KONTAK",
    contact_title: "Mari terhubung",
    view_project: "Lihat case study lengkap",
    role_label: "Peran", client_label: "Klien", year_label: "Tahun", tools_label: "Tools",
    overview_h: "OVERVIEW", problem_h: "MASALAH", process_h: "CARA KERJA SISTEM",
    visuals_h: "TAMPILAN DETAIL", impact_h: "DAMPAK", reflection_h: "REFLEKSI",
    links_h: "LIHAT LEBIH LANJUT", back: "← Kembali ke portofolio",
    figma_link: "Lihat desain di Figma ↗", proto_link: "Coba prototype interaktif ↗",
    impact_empty: "Belum ada data dampak formal — project ini masih tahap eksplorasi/konsep.",
    cv_link: "📄 Lihat & unduh CV"
  },
  en: {
    hero_eyebrow: "",
    hero_title: "Hi, I'm Amelia Magdalena.",
    hero_role: "Focused on data-driven products",
    hero_bio: "I like digging into the real problem behind the data, then designing interfaces that help people decide faster.",
    hero_cta1: "Contact me",
    hero_cta2: "About me",
    work_label: "SELECTED WORK",
    work_title: "Projects",
    work_sub: "Projects I've developed in depth, from research to test results.",
    about_label: "ABOUT ME",
    about_title: "Get to know me",
    about_body: "Information Systems graduate with internship experience as a System Analyst in the public utility sector (PDAM). Focused on business process analysis and digital solution design. Used to translating user needs into workflows (UML/DFD) and UI/UX prototypes (Figma) tested through User Acceptance Testing, and writing technical documentation. Experienced collaborating in teams, proactive in reaching targets.",
    exp1_role: "System Analyst (Intern)",
    exp1_desc: "Analyzed logistics inventory flow, proposed digital solutions, and documented system design & workflow for inventory tracking.",
    edu_role: "B.S. Information Systems \u2014 GPA 3.99/4.00 (Cum Laude)",
    edu_desc: "Thesis: Web-based Inventory Information System using the RAD Method.",
    skills_label: "CAPABILITIES",
    skills_title: "Skills",
    skills_soft: "SOFT SKILL",
    skills_tech: "SOFTWARE",
    skills_method: "HARD SKILL",
    soft1: "Critical Thinking", soft2: "Attention to Detail", soft3: "Time Management", soft4: "Teamwork", soft5: "Adaptability",
    hard1: "Business Process Analysis", hard2: "Wireframing", hard3: "Prototyping", hard4: "Project Management", hard5: "Technical Writing",
    how_label: "PROCESS",
    how_title: "How I Work",
    how1_t: "Understand", how1_d: "Understanding the context, problem, and need behind it.",
    how2_t: "Research", how2_d: "Digging into data before making any decision.",
    how3_t: "Design", how3_d: "Structuring flows and well-organized solutions.",
    how4_t: "Validate", how4_d: "Testing the result and measuring its impact.",
    contact_label: "CONTACT",
    contact_title: "Let's connect",
    view_project: "Read full case study",
    role_label: "Role", client_label: "Client", year_label: "Year", tools_label: "Tools",
    overview_h: "OVERVIEW", problem_h: "PROBLEM", process_h: "HOW THE SYSTEM WORKS",
    visuals_h: "DETAILED VIEWS", impact_h: "IMPACT", reflection_h: "REFLECTION",
    links_h: "SEE MORE", back: "← Back to portfolio",
    figma_link: "View design on Figma ↗", proto_link: "Try the interactive prototype ↗",
    impact_empty: "No formal impact data yet — this project is still in the exploration/concept stage.",
    cv_link: "📄 View & download CV"
  }
};

let currentLang = "id";

function applyLanguage() {
  const dict = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === currentLang);
  });
  document.documentElement.lang = currentLang;
  // render ulang bagian yang isinya dari data (project cards / case study)
  if (document.getElementById("workGrid")) renderWorkGrid();
  if (document.getElementById("case-study-mount")) renderCaseStudy();
}

function initLangToggle() {
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.getAttribute("data-lang-btn");
      applyLanguage();
    });
  });
}

// ============================================================
// RENDER KARTU PROJECT DI HOMEPAGE (dari projects.js)
// ============================================================
function renderWorkGrid() {
  const grid = document.getElementById("workGrid");
  if (!grid || typeof projects === "undefined") return;
  const t = translations[currentLang];

  grid.innerHTML = projects.map(p => `
    <a class="work-card reveal in" href="project.html?id=${p.id}">
      <div class="cover">
        <p class="cat">${p.category[currentLang]}</p>
        <h3>${p.title[currentLang]}</h3>
      </div>
      <div class="body">
        <p>${p.short[currentLang]}</p>
        <div class="tags">${p.tools.map(tool => `<span>${tool}</span>`).join("")}</div>
        <span class="read-link">${t.view_project}</span>
      </div>
    </a>
  `).join("");
}

// ============================================================
// RENDER HALAMAN CASE STUDY (project.html) DARI projects.js
// ============================================================
function renderCaseStudy() {
  const mount = document.getElementById("case-study-mount");
  if (!mount || typeof projects === "undefined") return;
  const t = translations[currentLang];
  const params = new URLSearchParams(location.search);
  const p = getProject(params.get("id"));

  document.title = `${p.title[currentLang]} — Amelia Magdalena`;
  const clientText = (typeof p.client === "object") ? p.client[currentLang] : p.client;

  const factsHtml = p.facts.map(f => `<div class="fact"><div class="num">${f.num}</div><div class="label">${f.label[currentLang]}</div></div>`).join("");
  const processHtml = p.process.map((s, i) => `<div class="fstep"><div class="fnum">${i+1}</div><strong>${s.title[currentLang]}</strong><span>${s.desc[currentLang]}</span></div>`).join("");
  const screensHtml = p.screens.map(s => `<div class="shot-frame"><img src="${s.src}" alt="${s.caption[currentLang]}"><p class="shot-caption">${s.caption[currentLang]}</p></div>`).join("");
  const impactHtml = (p.impact && p.impact.length)
    ? `<div class="impact-grid">${p.impact.map(i => `<div class="impact"><div class="num">${i.num}</div><div class="label">${i.label[currentLang]}</div></div>`).join("")}</div>`
    : `<p style="color:var(--muted); font-size:13.5px;">${t.impact_empty}</p>`;

  const coverHtml = p.cover ? `<div class="shot-frame reveal in" style="margin-top:16px;"><img src="${p.cover}" alt="${p.title[currentLang]} cover"></div>` : "";

  const hasLinks = (p.links && (p.links.figma || p.links.prototype));
  const linksHtml = hasLinks ? `
    <div class="cs-block reveal in">
      <h2>${t.links_h}</h2>
      <div class="cs-links">
        ${p.links.figma ? `<a href="${p.links.figma}" target="_blank" rel="noopener">${t.figma_link}</a>` : ""}
        ${p.links.prototype ? `<a href="${p.links.prototype}" target="_blank" rel="noopener">${t.proto_link}</a>` : ""}
      </div>
    </div>` : "";

  mount.innerHTML = `
    <div class="back-nav"><a href="index.html">${t.back}</a></div>
    <div class="cs-header reveal in">
      <p class="tag">${p.category[currentLang]}</p>
      <h1>${p.title[currentLang]}</h1>
    </div>
    ${coverHtml}
    <div class="cs-block reveal in"><h2>${t.overview_h}</h2><p>${p.overview[currentLang]}</p></div>

    <div class="cs-block reveal in">
      <h2>${t.problem_h}</h2>
      <p>${p.problem[currentLang]}</p>
      <div class="fact-grid">${factsHtml}</div>
      ${p.factsSource ? `<p style="font-size:11.5px; color:var(--muted); margin-top:6px;">${p.factsSource[currentLang]}</p>` : ""}
      <p class="quote">${p.quote[currentLang]}</p>
    </div>

    <div class="cs-block reveal in">
      <h2>${t.process_h}</h2>
      <div class="flow-steps">${processHtml}</div>
    </div>

    <div class="cs-block reveal in">
      <h2>${t.visuals_h}</h2>
      ${screensHtml}
    </div>

    <div class="cs-block reveal in">
      <h2>${t.impact_h}</h2>
      ${impactHtml}
    </div>

    <div class="cs-block reveal in"><h2>${t.reflection_h}</h2><p>${p.reflection[currentLang]}</p></div>

    ${linksHtml}

    <div class="cs-footer-nav"><a href="index.html">${t.back}</a></div>
  `;
}

// ============================================================
// (Form kontak dihapus — kontak cukup email, telepon, dan CV)
// ============================================================

// ============================================================
// MOBILE NAV TOGGLE
// ============================================================
function initNavToggle() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!navToggle || !navLinks) return;
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.textContent = '☰';
    });
  });
}

// ============================================================
// SCROLL REVEAL (aman meski JS gagal — lihat .reveal di style.css)
// ============================================================
function initReveal() {
  const revealEls = document.querySelectorAll('.reveal:not(.in)');
  if (!revealEls.length) return;
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initLangToggle();
  renderWorkGrid();
  renderCaseStudy();
  applyLanguage();
  initReveal();
});
