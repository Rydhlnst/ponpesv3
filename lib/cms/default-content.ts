import {
  educationHighlights,
  educationPrograms,
  facilityHighlights,
  facilityItems,
  faqCategories,
  galleryImages,
  heroStats,
  historyTimeline,
  mainNav,
  newsItems,
  siteConfig,
  testimonials,
  whyUsItems,
} from "@/lib/content"
import { richTextParagraph } from "@/lib/cms/rich-text"

export const defaultMediaAssets = [
  { label: "Primary Logo", url: "/logo.png", storageKey: "/logo.png", kind: "image", alt: siteConfig.shortName },
  { label: "Hero Image", url: siteConfig.heroImage, storageKey: siteConfig.heroImage, kind: "image", alt: siteConfig.name },
  ...galleryImages.map((item, index) => ({
    label: `Gallery ${index + 1}`,
    url: item.src,
    storageKey: item.src,
    kind: "image",
    alt: item.alt,
  })),
]

export const defaultSiteSettings = {
  id: "site",
  name: siteConfig.name,
  shortName: siteConfig.shortName,
  tagline: siteConfig.tagline,
  description: richTextParagraph(siteConfig.description),
  whatsapp: siteConfig.whatsapp,
  whatsappLabel: siteConfig.whatsappLabel,
  brochureHref: siteConfig.brochureHref,
  mapHref: siteConfig.mapHref,
  logoPath: siteConfig.logo,
  address: siteConfig.address,
  email: siteConfig.email,
  officeHours: siteConfig.officeHours,
  metadataTitle: `${siteConfig.shortName} | ${siteConfig.tagline}`,
  metadataDescription: siteConfig.description,
}

export const defaultHomepage = {
  id: "homepage",
  heroBadge: "QUR'AN - AKHLAK - ILMU",
  heroTitle: siteConfig.name,
  heroDescription: richTextParagraph(siteConfig.description),
  heroImagePath: siteConfig.heroImage,
  primaryCtaLabel: "Daftar Sekarang",
  primaryCtaHref: siteConfig.whatsapp,
  secondaryCtaLabel: "Informasi Pendaftaran",
  secondaryCtaHref: siteConfig.whatsapp,
  newsTitle: "Kabar Terbaru Ponpes",
  newsDescription: richTextParagraph("Berita dan kegiatan terbaru Pondok Pesantren Salfakinah Barokah Qur'an"),
  partnersTitle: "Program Unggulan",
  partnersDescription: richTextParagraph("Program pendidikan terpadu berbasis Al-Qur'an dan ilmu agama"),
  historyTitle: "Sejarah Salfakinah Barokah Qur'an",
  historyDescription: richTextParagraph("Perjalanan Pondok Pesantren Salfakinah Barokah Qur'an dalam mencetak generasi Qur'ani yang berakhlak mulia dan bermanfaat bagi umat."),
  whyUsTitle: "Mengapa Salfakinah Barokah Qur'an?",
  whyUsDescription: richTextParagraph("Alasan memilih Salfakinah Barokah Qur'an sebagai tempat belajar Al-Qur'an dan ilmu agama terbaik untuk putra-putri Anda"),
  educationTitle: "Program Pendidikan",
  educationDescription: richTextParagraph("Program pendidikan terpadu yang memadukan tahfidz Al-Qur'an, kitab kuning, dan pendidikan formal berbasis Islam"),
  facilitiesTitle: "Fasilitas Pesantren",
  facilitiesDescription: richTextParagraph("Kami menyediakan berbagai sarana pendukung proses belajar dan kehidupan santri yang nyaman dan Islami"),
  faqTitle: "Pertanyaan Umum",
  faqDescription: richTextParagraph("Informasi yang mungkin Anda butuhkan sebelum mendaftarkan putra-putri ke pesantren kami"),
  faqImagePath: "/gallery/gallery-02.jpeg",
  testimonialsTitle: "Apa Kata Mereka?",
  testimonialsDescription: richTextParagraph("Testimoni dari wali santri yang telah mempercayakan pendidikan putra-putrinya di Salfakinah Barokah Qur'an"),
  bottomCtaTitle: "Siap mengenal Salfakinah Barokah Qur'an lebih dekat?",
  bottomCtaDescription: richTextParagraph("Hubungi pengurus kami untuk konsultasi program, kunjungan pesantren, dan informasi pendaftaran santri baru."),
  bottomCtaLabel: "Hubungi via WhatsApp",
  bottomCtaHref: siteConfig.whatsapp,
  heroStats,
}

export const defaultNavigation = mainNav.map((item, index) => ({
  ...item,
  sortOrder: index,
  openInNewTab: item.href.startsWith("http"),
}))

export const defaultPartnerItems = [
  { name: "Tahfidzul Qur'an", note: "Program unggulan", sortOrder: 0 },
  { name: "Kitab Kuning", note: "Ilmu agama mendalam", sortOrder: 1 },
  { name: "TPA / TPQ", note: "Untuk anak-anak", sortOrder: 2 },
  { name: "SD IT Barokah Qur'an", note: "Pendidikan formal Islam", sortOrder: 3 },
]

const whyUsIconKeys = [
  "book-text",
  "book-open",
  "hand-helping",
  "graduation-cap",
  "users",
  "sparkles",
]

export const defaultWhyUsItems = whyUsItems.map((item, index) => ({
  title: item.title,
  description: richTextParagraph(item.description),
  iconKey: whyUsIconKeys[index] ?? "sparkles",
  sortOrder: index,
}))

export const defaultNewsItems = newsItems.map((item, index) => ({
  title: item.title,
  dateLabel: item.date,
  category: item.category ?? "",
  summary: richTextParagraph(item.summary),
  href: item.href,
  coverPath: item.image ?? siteConfig.heroImage,
  published: true,
  sortOrder: index,
}))

export const defaultHistoryTimeline = historyTimeline.map((item, index) => ({
  year: item.year,
  title: item.title,
  description: richTextParagraph(item.description),
  color: item.color,
  sortOrder: index,
}))

export const defaultEducationSection = {
  pageTitle: "Program Pendidikan",
  pageDescription: richTextParagraph("Salfakinah Barokah Qur'an menawarkan program pendidikan terpadu yang memadukan Tahfidzul Qur'an, Kitab Kuning, TPA/TPQ, dan pendidikan formal SD IT berbasis Islam."),
  highlights: educationHighlights.map((item, index) => ({ body: richTextParagraph(item), sortOrder: index })),
  programs: educationPrograms.map((program, index) => ({
    name: program.name,
    summary: richTextParagraph(program.summary),
    focus: richTextParagraph(program.focus),
    imagePath: program.image,
    iconKey: ["book-text", "book-open", "graduation-cap", "school"][index] ?? "sparkles",
    homePrimaryLabel: "Lihat Detail",
    homePrimaryHref: "/pendidikan",
    homeSecondaryLabel: "",
    homeSecondaryHref: "",
    sortOrder: index,
    points: program.points.map((point, pointIndex) => ({ body: richTextParagraph(point), sortOrder: pointIndex })),
  })),
}

export const defaultFacilitiesSection = {
  pageTitle: "Fasilitas Pesantren",
  pageDescription: richTextParagraph("Kami menyediakan berbagai sarana dan prasarana yang mendukung kenyamanan belajar, beribadah, dan kehidupan santri di Pondok Pesantren Salfakinah Barokah Qur'an."),
  highlights: facilityHighlights.map((item, index) => ({ body: richTextParagraph(item), sortOrder: index })),
  items: facilityItems.map((item, index) => ({
    name: item.name,
    description: richTextParagraph(item.description),
    imagePath: item.image,
    iconKey: ["building-2", "book-open", "landmark", "book-text", "folder-open", "medal"][index] ?? "sparkles",
    sortOrder: index,
  })),
}

export const defaultGallerySection = {
  pageTitle: "Galeri Kegiatan",
  pageDescription: richTextParagraph("Dokumentasi kegiatan tahfidz Al-Qur'an, pengajian kitab kuning, pembangunan, serta kebersamaan santri di Pondok Pesantren Salfakinah Barokah Qur'an."),
  items: galleryImages.map((item, index) => ({
    imagePath: item.src,
    alt: item.alt,
    caption: richTextParagraph(item.alt),
    aspect: item.aspect,
    published: true,
    sortOrder: index,
  })),
}

export const defaultFaqSection = {
  pageTitle: "Pertanyaan Umum (FAQ)",
  pageDescription: richTextParagraph("Temukan jawaban atas pertanyaan seputar pendaftaran, program, kegiatan, dan informasi umum Pondok Pesantren Salfakinah Barokah Qur'an."),
  categories: faqCategories.map((category, index) => ({
    name: category.category,
    iconKey: ["list-tree", "book-text", "file-text"][index] ?? "circle-help",
    sortOrder: index,
    items: category.items.map((item, itemIndex) => ({
      question: item.question,
      answer: richTextParagraph(item.answer),
      sortOrder: itemIndex,
    })),
  })),
}

export const defaultTestimonialsSection = {
  items: testimonials.map((item, index) => ({
    name: item.name,
    role: item.role,
    quote: richTextParagraph(item.quote),
    avatarPath: item.avatar ?? "",
    published: true,
    sortOrder: index,
  })),
}

export const defaultProfileSection = {
  pageTitle: "Profil Lembaga",
  pageDescription: richTextParagraph("Mengenal lebih dekat Pondok Pesantren Salfakinah Barokah Qur'an — visi misi, program unggulan, pengasuh, dan perjalanan pesantren kami."),
  vision: richTextParagraph("Sebaik-baik kalian adalah orang yang belajar Al-Qur'an dan mengajarkannya. Menjadi pesantren terpercaya dalam mencetak generasi penghafal Qur'an yang berakhlak mulia dan berilmu."),
  identityRows: [
    ["Nama Lembaga", "Pondok Pesantren Salfakinah Barokah Qur'an"],
    ["Makna Nama", "SALFAKINAH berasal dari gabungan nama putra-putri pendiri: SALman, FAhri, dan saKINAH — sekaligus bermakna ketenangan hati (sakinah) dalam mengikuti jejak salafus shalih (orang-orang terdahulu yang shalih)"],
    ["Nama Yayasan", "Yayasan Pondok Pesantren Salfakinah Barokah Qur'an"],
    ["Tahun Berdiri", "2021"],
    ["Pengasuh / Pimpinan", "Salman Al Farisi Al Hafidz"],
    ["Alamat Lengkap", "Jl. Lingkar Desa Babat, Kecamatan Penukal, Kabupaten PALI, Sumatera Selatan"],
    ["Email Resmi", "salfakinahbarokahquran@gmail.com"],
    ["Nomor WhatsApp", "082177215500"],
  ].map(([label, value], index) => ({ label, value, sortOrder: index })),
  missionItems: [
    "Menyelenggarakan pendidikan Al-Qur'an yang berkualitas melalui program tahfidz yang terstruktur dan terukur",
    "Mengajarkan ilmu agama Islam dari sumber aslinya melalui pengajian kitab kuning (diniyah)",
    "Membina generasi muslim yang berakhlak mulia, disiplin, mandiri, dan bermanfaat bagi masyarakat",
    "Menyediakan lingkungan pesantren yang kondusif, Islami, dan mendukung tumbuh kembang santri",
  ].map((body, index) => ({ body: richTextParagraph(body), sortOrder: index })),
  goalItems: [
    "Mencetak generasi penghafal Al-Qur'an yang tartil, mutqin, dan berakhlakul karimah.",
    "Membangun pondasi ilmu agama yang kuat melalui pengajian kitab kuning sejak dini.",
    "Menanamkan nilai-nilai Islam dalam kehidupan sehari-hari santri melalui pembiasaan ibadah.",
    "Mempersiapkan santri agar menjadi insan yang bermanfaat bagi keluarga, masyarakat, dan agama.",
  ].map((body, index) => ({ body: richTextParagraph(body), sortOrder: index })),
  orgRows: [
    ["Pengasuh / Pimpinan", "Salman Al Farisi Al Hafidz"],
    ["Pembina Yayasan", "Pengurus Yayasan Salfakinah Barokah Qur'an"],
    ["Pengelola Pesantren", "Tim Pengurus Salfakinah Barokah Qur'an"],
  ].map(([role, name], index) => ({ role, name, sortOrder: index })),
  programRows: [
    ["Tahfidzul Qur'an", "book-text"],
    ["Kitab Kuning (Diniyah)", "book-open"],
    ["TPA / TPQ", "graduation-cap"],
    ["SD IT Barokah Qur'an", "school"],
  ].map(([name, iconKey], index) => ({ name, iconKey, sortOrder: index })),
}

export const defaultContactSection = {
  pageTitle: "Hubungi Kami",
  pageDescription: richTextParagraph("Hubungi pengurus kami untuk konsultasi program, kunjungan pesantren, dan informasi pendaftaran santri baru di Salfakinah Barokah Qur'an."),
  infoTitle: "Informasi Kontak",
  infoDescription: richTextParagraph("Kami siap melayani pertanyaan dan kebutuhan informasi seputar pendaftaran serta kegiatan pesantren."),
  locationTitle: "Lokasi Pesantren",
  locationDescription: richTextParagraph("Kunjungi kami langsung di Desa Babat untuk berkonsultasi dan melihat suasana pesantren secara langsung."),
  methods: [
    {
      type: "address",
      title: "Alamat Pesantren",
      subtitle: "Sekretariat Utama",
      description: "Jl. Lingkar Desa Babat, Kecamatan Penukal, Kabupaten PALI, Sumatera Selatan",
      value: "Jl. Lingkar Desa Babat, Kecamatan Penukal, Kabupaten PALI, Sumatera Selatan",
      actionLabel: "Buka Peta",
      actionHref: siteConfig.mapHref,
      sortOrder: 0,
    },
    {
      type: "whatsapp",
      title: "WhatsApp Pengurus",
      subtitle: "Hubungi Pengurus",
      description: "Ustadz Salman Al Farisi (082177215500)",
      value: "082177215500",
      actionLabel: "Chat WhatsApp",
      actionHref: siteConfig.whatsapp,
      sortOrder: 1,
    },
    {
      type: "email",
      title: "Email Resmi",
      subtitle: "Kirim Pertanyaan",
      description: "salfakinahbarokahquran@gmail.com",
      value: "salfakinahbarokahquran@gmail.com",
      actionLabel: "Kirim Email",
      actionHref: `mailto:${siteConfig.email}`,
      sortOrder: 2,
    },
    {
      type: "clock",
      title: "Jam Operasional",
      subtitle: "Sekretariat Pesantren",
      description: "Senin - Sabtu : 08.00 - 17.00 WIB",
      value: "Senin - Sabtu : 08.00 - 17.00 WIB",
      actionLabel: "",
      actionHref: "",
      sortOrder: 3,
    },
  ],
  locations: [
    {
      title: "Pondok Pesantren Salfakinah Barokah Qur'an",
      subtitle: "Kampus Utama",
      address: "Jl. Lingkar Desa Babat, Kecamatan Penukal, Kabupaten PALI, Sumatera Selatan",
      mapEmbedUrl: "",
      mapHref: siteConfig.mapHref,
      sortOrder: 0,
    },
  ],
}

export const defaultFooterSection = {
  brandText: "Pondok Pesantren Salfakinah Barokah Qur'an",
  socialIntro: "Tetap terhubung bersama kami di media sosial resmi.",
  copyrightText: `© ${new Date().getFullYear()} Pondok Pesantren Salfakinah Barokah Qur'an. Hak Cipta Dilindungi.`,
  quickLinks: [
    { label: "Home", href: "/", sortOrder: 0 },
    { label: "Profil", href: "/profil", sortOrder: 1 },
    { label: "Pendidikan", href: "/pendidikan", sortOrder: 2 },
    { label: "Fasilitas", href: "/fasilitas", sortOrder: 3 },
    { label: "FAQ", href: "/faq", sortOrder: 4 },
    { label: "Kontak", href: "/kontak", sortOrder: 5 },
  ],
  socialLinks: [
    { platform: "facebook", href: "https://facebook.com", sortOrder: 0 },
    { platform: "instagram", href: "https://instagram.com", sortOrder: 1 },
  ],
}
