import React, { useState } from "react";

// --- Provacclean One‑Pager (TR/EN) ---
// Put images in /public/images (provacclean-logo.jpg, hero-truck.jpg, service-*.jpg, sector-*.jpg)
// Set your real contact info below.
// Brand colors from logo

const CONTACT_PHONE = "+90 5XX XXX XX XX";
const CONTACT_EMAIL = "info@provacclean.com";
const CONTACT_ADDRESS = "Organize Sanayi Bölgesi, Türkiye";

const BRAND = {
  red: "#E30613",
  blue: "#003399",
};

function BrandButton({ children, className = "", style = {}, ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-xl text-white text-sm font-medium shadow hover:opacity-95 transition ${className}`}
      style={{ background: `linear-gradient(90deg, ${BRAND.red} 0%, ${BRAND.blue} 100%)`, ...style }}
    >
      {children}
    </button>
  );
}

// Çok dilli içerik / Multilingual content
const translations = {
  tr: {
    nav: [
      { id: "home", label: "Ana Sayfa" },
      { id: "hizmetler", label: "Hizmetler" },
      { id: "sektorler", label: "Sektörler" },
      { id: "guvenlik", label: "Güvenlik" },
      { id: "hakkimizda", label: "Hakkımızda" },
      { id: "iletisim", label: "İletişim" },
    ],
    quote: "Teklif iste",
    heroTitle: "Endüstriyel temizlik, taşıma ve atık yönetimi",
    heroDesc:
      "Provacclean; vakum kamyonu, yüksek basınçlı su jeti ve tank temizliği ile hızlı ve güvenli çözümler sunar. Fabrikalar, terminaller ve şantiyeler için 7/24 hizmet.",
    servicesTitle: "Hizmetler",
    services: [
      {
        title: "Vakum Kamyonu Hizmetleri",
        desc: "Çamur, kum, çimento, granül ve yağ kalıntıları gibi ıslak/kuru malzemelerin emilmesi, taşınması ve bertarafı.",
        img: "/images/service-vacuum.jpg",
      },
      {
        title: "Tank & Silo Temizliği",
        desc: "Tank, silo ve depolama sistemlerinin mekanik ve yüksek basınçlı güvenli temizliği.",
        img: "/images/service-silo.goed.jpg",
      },
      {
        title: "Yüksek Basınçlı Su Jeti",
        desc: "Zorlu kirlerin temizlenmesi, tıkanıklık açma ve yüzey/hat temizliği için profesyonel ekipman.",
        img: "/images/service-waterjet.jpg",
      },
    ],
    sectorsTitle: "Sektörler",
    sectors: [
      ["Çimento & Madencilik", "Silo, filtre ve bant sistemleri", "/images/sector-cement.jpg"],
      ["Petrokimya", "Depolama tankları, döküntü müdahalesi", "/images/sector-petro.jpg"],
      ["Gıda", "Hijyenik temizlik, HACCP", "/images/sector-food.jpg"],
    ],
    safetyTitle: "Önce Güvenlik",
    safetyPoints: [
      "LMRA ve toolbox toplantıları",
      "Risk analizi ve iş izinleri",
      "Gaz ölçümü & kapalı alan çalışmaları",
      "Kişisel koruyucu donanım (KKD)",
      "Çevreye duyarlı bertaraf",
    ],
    aboutTitle: "Provacclean Hakkında",
    aboutDesc1:
      "Yılların tecrübesine sahip çevik bir ekibiz. Vakum kamyonu ve yüksek basınç ekipmanlarımızı düzenli bakım ile daima hazır tutar, güvenli ve kesintisiz hizmet sunarız.",
    aboutDesc2:
      "Şeffaf çalışırız: net kapsam, tek irtibat kişisi ve iş bitiminde açık raporlama.",
    values: [
      "Güvenlik ve kalite her şeyden önce",
      "Hızlı mobilizasyon ve sıkı planlama",
      "Dürüst iletişim ve net fiyatlandırma",
    ],
    stats: [
      ["10+", "Yıl deneyim"],
      ["300+", "Proje"],
      ["7/24", "Ulaşılabilir"],
    ],
    contactTitle: "İletişim",
    contactDesc: "İhtiyacınızı kısaca yazın, aynı gün dönüş yapalım.",
    contactButton: "Teklif formunu aç",
    footerText:
      "Türkiye genelinde endüstriyel temizlik. Vakum kamyonu hizmetleri, tank temizliği ve yüksek basınçlı su jeti – güvenli ve hızlı.",
    form: {
      labels: { name: "Ad Soyad*", company: "Firma", phone: "Telefon*", email: "E‑posta", message: "Mesaj*", submit: "Gönder" },
      placeholders: { name: "Adınız Soyadınız", company: "(opsiyonel)", phone: "GSM", email: "ad@firma.com", message: "İşin kısa açıklaması" },
      errors: { required: "Lütfen ad, telefon ve mesaj alanlarını doldurun.", email: "Geçersiz e‑posta adresi." },
      success: "Teşekkürler! E‑posta uygulamanız açıldı. Göndererek iletişime geçebilirsiniz.",
    },
  },
  en: {
    nav: [
      { id: "home", label: "Home" },
      { id: "hizmetler", label: "Services" },
      { id: "sektorler", label: "Sectors" },
      { id: "guvenlik", label: "Safety" },
      { id: "hakkimizda", label: "About Us" },
      { id: "iletisim", label: "Contact" },
    ],
    quote: "Request Quote",
    heroTitle: "Industrial cleaning, transport and waste management",
    heroDesc:
      "Provacclean provides fast and safe solutions with vacuum trucks, high‑pressure water jetting and tank cleaning. Available 24/7 for factories, terminals and construction sites.",
    servicesTitle: "Services",
    services: [
      {
        title: "Vacuum Truck Services",
        desc: "Suction, transport and disposal of wet/dry materials such as sludge, sand, cement, granules, oil residues.",
        img: "/images/service-vacuum.jpg",
      },
      {
        title: "Tank & Silo Cleaning",
        desc: "Mechanical and high‑pressure cleaning of tanks, silos and storage systems with safe work procedures.",
        img: "/images/service-silo.goed.jpg",
      },
      {
        title: "High‑Pressure Water Jet",
        desc: "Removal of stubborn dirt, unclogging and surface/pipe cleaning with professional equipment.",
        img: "/images/service-waterjet.jpg",
      },
    ],
    sectorsTitle: "Sectors",
    sectors: [
      ["Cement & Mining", "Silos, filters and conveyor systems", "/images/sector-cement.jpg"],
      ["Petrochemicals", "Storage tanks, spill response", "/images/sector-petro.jpg"],
      ["Food", "Hygienic cleaning, HACCP", "/images/sector-food.jpg"],
    ],
    safetyTitle: "Safety First",
    safetyPoints: [
      "LMRA & toolbox meetings",
      "Risk assessment and work permits",
      "Gas measurement & confined space work",
      "Personal protective equipment (PPE)",
      "Environmentally responsible disposal",
    ],
    aboutTitle: "About Provacclean",
    aboutDesc1:
      "We are an agile team with years of experience. Our vacuum trucks and high‑pressure equipment are maintained to high standards, ensuring safe and reliable service.",
    aboutDesc2:
      "We work transparently: clear scope, single point of contact, and open reporting upon completion.",
    values: [
      "Safety and quality above all",
      "Fast mobilization and strict planning",
      "Honest communication and clear pricing",
    ],
    stats: [
      ["10+", "Years experience"],
      ["300+", "Projects"],
      ["24/7", "Available"],
    ],
    contactTitle: "Contact",
    contactDesc: "Tell us briefly what you need, we’ll respond the same day.",
    contactButton: "Open quote form",
    footerText:
      "Industrial cleaning across Turkey. Vacuum truck services, tank cleaning and high‑pressure water jetting – safe and fast.",
    form: {
      labels: { name: "Full name*", company: "Company", phone: "Phone*", email: "Email", message: "Message*", submit: "Send" },
      placeholders: { name: "Your name", company: "(optional)", phone: "Mobile", email: "name@company.com", message: "Short description of the job" },
      errors: { required: "Please fill name, phone and message.", email: "Invalid email address." },
      success: "Thanks! Your mail app is opened. Send it to contact us.",
    },
  },
};

function LanguageSwitcher({ lang, setLang }) {
  return (
    <div className="flex gap-2 items-center">
      <button onClick={() => setLang("tr")} className="px-2 py-1 rounded" style={{ backgroundColor: lang === "tr" ? BRAND.red : "#f5f5f5", color: lang === "tr" ? "#fff" : "#000" }}>TR</button>
      <button onClick={() => setLang("en")} className="px-2 py-1 rounded" style={{ backgroundColor: lang === "en" ? BRAND.blue : "#f5f5f5", color: lang === "en" ? "#fff" : "#000" }}>EN</button>
    </div>
  );
}

function Modal({ open, onClose, children, title }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-neutral-100" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

function Nav({ onOpenQuote, lang, setLang }) {
  const t = translations[lang];
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <img src="/images/provacclean-logo.jpg" alt="Provacclean Logo" className="w-36 object-contain" />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {t.nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm text-neutral-700 hover:text-red-600">{n.label}</a>
            ))}
            <BrandButton onClick={onOpenQuote}>{t.quote}</BrandButton>
            <LanguageSwitcher lang={lang} setLang={setLang} />
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-neutral-100" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M3.75 6.75A.75.75 0 014.5 6h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 10.5a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0-5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 grid gap-3">
            {t.nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm text-neutral-700" onClick={() => setOpen(false)}>{n.label}</a>
            ))}
            <BrandButton onClick={() => { setOpen(false); onOpenQuote(); }} className="text-left">{t.quote}</BrandButton>
            <LanguageSwitcher lang={lang} setLang={setLang} />
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ onOpenQuote, lang }) {
  const t = translations[lang];
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative h-[80vh] w-full">
        <img src="/images/hero-truck.jpg" alt="Provacclean Truck" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.4)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">{t.heroTitle}</h1>
          <p className="mt-5 text-neutral-200 text-lg max-w-2xl">{t.heroDesc}</p>
          <div className="mt-8 flex gap-3">
            <BrandButton onClick={onOpenQuote} className="px-5 py-3 text-base">{t.quote}</BrandButton>
            <a href="#hizmetler" style={{ borderColor: "#fff" }} className="px-5 py-3 rounded-xl border font-medium text-white hover:bg-white/10">{t.servicesTitle}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ lang }) {
  const t = translations[lang];
  return (
    <section id="hizmetler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold" style={{ color: BRAND.blue }}>{t.servicesTitle}</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.map((it) => (
            <div key={it.title} className="rounded-3xl border p-6 shadow-sm hover:shadow-md transition bg-white">
              <img src={it.img} alt={it.title} className="w-full h-40 object-cover rounded-2xl mb-3" />
              <h3 className="font-semibold text-neutral-900">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sectors({ lang }) {
  const t = translations[lang];
  return (
    <section id="sektorler" className="py-20 bg-neutral-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold" style={{ color: BRAND.blue }}>{t.sectorsTitle}</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.sectors.map(([name, sub, img]) => (
            <div key={name} className="rounded-2xl border bg-white overflow-hidden">
              <img src={img} alt={name} className="w-full h-32 object-cover" />
              <div className="p-4">
                <p className="font-semibold text-neutral-900">{name}</p>
                <p className="text-sm text-neutral-600">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Safety({ lang }) {
  const t = translations[lang];
  return (
    <section id="guvenlik" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold" style={{ color: BRAND.blue }}>{t.safetyTitle}</h2>
        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700">
          {t.safetyPoints.map((p) => (
            <li key={p} className="rounded-xl border p-3 bg-neutral-50">{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About({ lang }) {
  const t = translations[lang];
  return (
    <section id="hakkimizda" className="py-20 bg-neutral-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold" style={{ color: BRAND.blue }}>{t.aboutTitle}</h2>
        <p className="mt-3 text-neutral-600">{t.aboutDesc1}</p>
        <p className="mt-3 text-neutral-600">{t.aboutDesc2}</p>
        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
          {t.values.map((v) => (<li key={v}>• {v}</li>))}
        </ul>
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          {t.stats.map(([k, v]) => (
            <div key={k} className="rounded-2xl border p-4 bg-neutral-50">
              <div className="text-2xl font-bold" style={{ color: BRAND.blue }}>{k}</div>
              <div className="text-xs text-neutral-500">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm({ lang, compact = false }) {
  const t = translations[lang];
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function validate() {
    if (!form.name || !form.phone || !form.message) return t.form.errors.required;
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return t.form.errors.email;
    return "";
  }

  function onSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (v) { setError(v); return; }
    setError("");
    const subject = encodeURIComponent(lang === "tr" ? "Web sitesinden yeni teklif talebi" : "New quote request from website");
    const body = encodeURIComponent(`${lang === "tr" ? "Ad" : "Name"}: ${form.name}\n${lang === "tr" ? "Firma" : "Company"}: ${form.company}\n${lang === "tr" ? "Telefon" : "Phone"}: ${form.phone}\nE‑mail: ${form.email}\n\n${lang === "tr" ? "Mesaj" : "Message"}:\n${form.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className={!compact ? "rounded-3xl border p-6 bg-white shadow-sm" : ""}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-neutral-600">{t.form.labels.name}</label>
          <input value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-xl border p-2.5 focus:outline-none focus:ring-2" placeholder={t.form.placeholders.name} />
        </div>
        <div>
          <label className="text-sm text-neutral-600">{t.form.labels.company}</label>
          <input value={form.company} onChange={(e)=>setForm({ ...form, company: e.target.value })} className="mt-1 w-full rounded-xl border p-2.5 focus:outline-none focus:ring-2" placeholder={t.form.placeholders.company} />
        </div>
        <div>
          <label className="text-sm text-neutral-600">{t.form.labels.phone}</label>
          <input value={form.phone} onChange={(e)=>setForm({ ...form, phone: e.target.value })} className="mt-1 w-full rounded-xl border p-2.5 focus:outline-none focus:ring-2" placeholder={t.form.placeholders.phone} />
        </div>
        <div>
          <label className="text-sm text-neutral-600">{t.form.labels.email}</label>
          <input value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-xl border p-2.5 focus:outline-none focus:ring-2" placeholder={t.form.placeholders.email} />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm text-neutral-600">{t.form.labels.message}</label>
          <textarea value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} rows={5} className="mt-1 w-full rounded-xl border p-2.5 focus:outline-none focus:ring-2" placeholder={t.form.placeholders.message} />
        </div>
      </div>
      {error && <p className="mt-3 text-sm" style={{ color: BRAND.red }}>{error}</p>}
      {sent && <p className="mt-3 text-sm" style={{ color: "#047857" }}>{t.form.success}</p>}
      <BrandButton type="submit" className="mt-5 w-full">{t.form.labels.submit}</BrandButton>
    </form>
  );
}

function Contact({ lang, onOpenQuote }) {
  const t = translations[lang];
  return (
    <section id="iletisim" className="py-20 bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold" style={{ color: BRAND.blue }}>{t.contactTitle}</h2>
            <p className="mt-3 text-neutral-600">{t.contactDesc}</p>
            <div className="mt-6 rounded-3xl border p-6 bg-neutral-50">
              <p className="text-sm"><span className="font-semibold">{lang === "tr" ? "Telefon:" : "Phone:"}</span> {CONTACT_PHONE}</p>
              <p className="text-sm"><span className="font-semibold">E‑mail:</span> {CONTACT_EMAIL}</p>
              <p className="text-sm"><span className="font-semibold">{lang === "tr" ? "Adres:" : "Address:"}</span> {CONTACT_ADDRESS}</p>
              <p className="mt-2 text-xs text-neutral-500">{lang === "tr" ? "Türkiye genelinde çalışıyoruz. Konuma bağlı olarak mobilizasyon ücreti uygulanabilir." : "We operate across Turkey. Mobilization fees may apply depending on location."}</p>
              <BrandButton onClick={onOpenQuote} className="mt-4">{t.contactButton}</BrandButton>
            </div>
          </div>
          <ContactForm lang={lang} />
        </div>
      </div>
    </section>
  );
}

function Footer({ lang }) {
  const t = translations[lang];
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/provacclean-logo.jpg" alt="Provacclean Logo" className="w-10 object-contain" />
            <div className="font-semibold text-white">Provacclean</div>
          </div>
          <p className="mt-3 text-sm text-neutral-400 max-w-sm">{t.footerText}</p>
        </div>
        <div className="grid gap-2 text-sm">
          {t.nav.map((n) => (<a key={n.id} href={`#${n.id}`} className="hover:text-white">{n.label}</a>))}
        </div>
      </div>
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-neutral-500 flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Provacclean. {lang === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}</span>
          <span>{lang === "tr" ? "Lisanslar/Bilgiler talep üzerine • Gizlilik • Çerezler" : "Licenses/Details on request • Privacy • Cookies"}</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [lang, setLang] = useState("tr");
  return (
    <div className="font-sans text-neutral-900">
      <Nav onOpenQuote={() => setQuoteOpen(true)} lang={lang} setLang={setLang} />
      <Hero onOpenQuote={() => setQuoteOpen(true)} lang={lang} />
      <Services lang={lang} />
      <Sectors lang={lang} />
      <Safety lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} onOpenQuote={() => setQuoteOpen(true)} />
      <Footer lang={lang} />
      <Modal open={quoteOpen} onClose={() => setQuoteOpen(false)} title={translations[lang].quote}>
        <ContactForm lang={lang} compact />
      </Modal>
    </div>
  );
}

// --- DEV sanity checks ---
(function devChecks(){
  const langs = ["tr","en"]; langs.forEach(l=>{
    const t = translations[l];
    console.assert(t && t.nav && t.nav.length===6, `nav invalid for ${l}`);
    console.assert(t.services && t.services.length===3, `services invalid for ${l}`);
    console.assert(t.sectors && t.sectors.length>=3, `sectors invalid for ${l}`);
    console.assert(t.form && t.form.labels && t.form.errors, `form i18n missing for ${l}`);
  });
})();

// Export the App component for use in index.js
export default App;
