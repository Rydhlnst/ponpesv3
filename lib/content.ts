import type { IconType } from "react-icons";
import {
  FaBookOpen,
  FaBookOpenReader,
  FaBookQuran,
  FaBuildingColumns,
  FaClipboardList,
  FaGraduationCap,
  FaHandsPraying,
  FaMosque,
  FaStar,
  FaUsers,
  FaUserGraduate,
  FaHouse,
} from "react-icons/fa6";

export type NavItem = {
  label: string;
  href: string;
};

export type NewsItem = {
  title: string;
  date: string;
  summary: string;
  href: string;
  image?: string;
  category?: string;
};

export type PartnerItem = {
  name: string;
  note: string;
};

export type WhyUsItem = {
  title: string;
  description: string;
  icon: IconType;
};

export type EducationProgram = {
  name: string;
  summary: string;
  focus: string;
  image: string;
  points: string[];
  icon: IconType;
};

export type Facility = {
  name: string;
  description: string;
  image: string;
  icon: IconType;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  aspect: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  color: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  category: string;
  icon: IconType;
  items: FaqItem[];
};

export const siteConfig = {
  name: "Pondok Pesantren Salfakinah Barokah Qur'an",
  shortName: "Salfakinah Barokah Qur'an",
  location: "Desa Babat, Kecamatan Penukal, Kabupaten PALI",
  tagline: "Pondok Pesantren Tahfidzul Qur'an",
  description:
    "Sebaik-baik kalian adalah orang yang belajar Al-Qur'an dan mengajarkannya. Pondok Pesantren Salfakinah Barokah Qur'an hadir sebagai wadah untuk mencetak generasi penghafal Al-Qur'an yang berakhlak mulia, berilmu, dan bermanfaat bagi umat.",
  whatsapp: "https://wa.me/6282177215500",
  whatsappLabel: "Hubungi Pengurus",
  brochureHref: "#",
  mapHref: "#",
  logo: "/logo.png",
  heroImage: "/gallery/gallery-01.jpeg",
  address: "Jl. Lingkar Desa Babat, Kecamatan Penukal, Kabupaten PALI, Sumatera Selatan",
  email: "salfakinahbarokahquran@gmail.com",
  officeHours: "Senin - Sabtu: 08.00 - 17.00",
};

const IMG = {
  ngajiMalam:            "/gallery/gallery-01.jpeg",
  santriDepanPapan:      "/gallery/gallery-02.jpeg",
  halaqahMelingkar:      "/gallery/gallery-03.jpeg",
  santriSekolah:         "/gallery/gallery-04.jpeg",
  haflahJuz:             "/gallery/gallery-05.jpeg",
  papanNama:             "/gallery/gallery-06.jpeg",
  belajarAlQuran:        "/gallery/gallery-07.jpeg",
  santriDanGuru:         "/gallery/gallery-08.jpeg",
  peletakanBatu:         "/gallery/gallery-09.jpeg",
  ngajiMalam2:           "/gallery/gallery-10.jpeg",
  setoran:               "/gallery/gallery-11.jpeg",
  wisuda:                "/gallery/gallery-12.jpeg",
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Pendidikan", href: "/pendidikan" },
  { label: "Fasilitas", href: "/fasilitas" },
  { label: "Galeri", href: "/galeri" },
  { label: "FAQ", href: "/faq" },
  { label: "Pendaftaran", href: "/pendaftaran" },
  { label: "Kontak", href: "/kontak" },
];

export const heroStats = [
  { value: "60+", label: "Santri Aktif" },
  { value: "Tahfidz", label: "Al-Qur'an" },
  { value: "Kitab", label: "Kuning" },
];

export const newsItems: NewsItem[] = [
  {
    title: "Kegiatan Ngaji Malam Rutin Santri Salfakinah Barokah Qur'an",
    date: "07 Jul 2026",
    summary: "Santri secara rutin mengikuti kegiatan ngaji malam bersama di halaman pesantren, dipimpin langsung oleh Ustadz Salman Al Farisi Al Hafidz.",
    href: "#",
    image: IMG.ngajiMalam,
    category: "kegiatan santri",
  },
  {
    title: "Haflah Qur'an dan Khataman Bersama Santri",
    date: "10 Jun 2026",
    summary: "Kegiatan haflah Al-Qur'an dan khataman bersama menjadi momentum spesial untuk merayakan pencapaian para santri dalam menghafal Al-Qur'an.",
    href: "#",
    image: IMG.haflahJuz,
    category: "kegiatan santri",
  },
  {
    title: "Peletakan Batu Pertama Pembangunan Gedung Baru Ponpes",
    date: "01 Feb 2022",
    summary: "Alhamdulillah, peletakan batu pertama pembangunan gedung baru Pondok Pesantren Salfakinah Barokah Qur'an telah dilaksanakan bersama para santri dan wali santri.",
    href: "#",
    image: IMG.peletakanBatu,
    category: "pembangunan",
  },
];

export const historyParagraphs = [
  "Puji syukur kita panjatkan ke hadirat Allah SWT yang telah menurunkan Al-Qur'an sebagai petunjuk dan rahmat bagi alam semesta. Pondok Pesantren Salfakinah Barokah Qur'an berdiri atas semangat untuk mencetak generasi Qur'ani yang berakhlak mulia.",
  "Berangkat dari visi 'sebaik-baik kalian adalah orang yang belajar Al-Qur'an dan mengajarkannya', pesantren ini hadir di tengah masyarakat Desa Babat, Kecamatan Penukal, Kabupaten PALI sebagai lembaga pendidikan berbasis Al-Qur'an.",
  "Sejak resmi beroperasi pada tahun 2021 di bawah bimbingan Ustadz Salman Al Farisi Al Hafidz, Salfakinah Barokah Qur'an terus berkembang dengan program unggulan Tahfidzul Qur'an dan Kitab Kuning yang menjadi fondasi pembentukan karakter santri.",
];

export const partnerItems: PartnerItem[] = [
  { name: "Tahfidzul Qur'an", note: "Program unggulan" },
  { name: "Kitab Kuning", note: "Ilmu agama mendalam" },
  { name: "TPA / TPQ", note: "Untuk anak-anak" },
  { name: "Pendidikan Formal", note: "SD IT Barokah Qur'an" },
];

export const whyUsItems: WhyUsItem[] = [
  {
    title: "Tahfidzul Qur'an Terstruktur",
    description:
      "Program menghafal Al-Qur'an yang terstruktur dengan bimbingan langsung dari Ustadz Al Hafidz, disertai evaluasi berkala untuk menjaga kualitas hafalan.",
    icon: FaBookQuran,
  },
  {
    title: "Kitab Kuning & Diniyah",
    description:
      "Pengajian kitab kuning sebagai sarana memahami ilmu agama dari sumber aslinya, mencakup fiqih, aqidah, hadits, dan tafsir Al-Qur'an.",
    icon: FaBookOpenReader,
  },
  {
    title: "Adab dan Akhlak Islami",
    description:
      "Pembentukan karakter santri melalui pembiasaan adab Islami dalam keseharian, shalat berjamaah, dan pembinaan akhlakul karimah.",
    icon: FaHandsPraying,
  },
  {
    title: "Pengasuh Hafidz Qur'an",
    description:
      "Dibimbing langsung oleh Ustadz Salman Al Farisi Al Hafidz — pengasuh yang berpengalaman dan berdedikasi dalam membina generasi Qur'ani.",
    icon: FaUserGraduate,
  },
  {
    title: "Lingkungan Pesantren Islami",
    description:
      "Suasana lingkungan pesantren yang kondusif di Desa Babat, jauh dari kebisingan kota, mendukung fokus belajar dan ibadah santri.",
    icon: FaUsers,
  },
  {
    title: "Terbuka untuk Semua Usia",
    description:
      "Menerima santri dari anak-anak hingga remaja, dengan program yang disesuaikan mulai dari TPA/TPQ hingga pendidikan formal berbasis Al-Qur'an.",
    icon: FaStar,
  },
];

export const educationPrograms: EducationProgram[] = [
  {
    name: "Tahfidzul Qur'an",
    summary:
      "Program unggulan menghafal Al-Qur'an 30 juz secara tartil dan bertahap, dengan bimbingan langsung Ustadz Al Hafidz menggunakan metode yang tepat dan efektif.",
    focus: "Fokus pada kualitas hafalan, kelancaran bacaan tajwid, dan pembiasaan murajaah (mengulang hafalan) setiap hari.",
    image: IMG.ngajiMalam,
    points: [
      "Setoran hafalan baru (ziyadah) dan muraja'ah harian terjadwal",
      "Bimbingan tajwid dan makhorijul huruf secara langsung",
      "Evaluasi berkala untuk memastikan kualitas dan kelancaran hafalan",
    ],
    icon: FaBookQuran,
  },
  {
    name: "Kitab Kuning (Diniyah)",
    summary:
      "Pengajian kitab kuning klasik sebagai sarana mendalami ilmu agama Islam dari sumber aslinya, meliputi fiqih, aqidah, akhlak, dan hadits.",
    focus: "Membangun pondasi ilmu agama yang kuat agar santri memahami Islam secara komprehensif dari ulama-ulama terdahulu.",
    image: IMG.belajarAlQuran,
    points: [
      "Pengajian kitab fiqih, aqidah, dan akhlak secara rutin",
      "Bimbingan memahami teks Arab klasik (kitab kuning)",
      "Kajian hadits dan tafsir Al-Qur'an bersama pengasuh",
    ],
    icon: FaBookOpen,
  },
  {
    name: "TPA / TPQ Barokah Qur'an",
    summary:
      "Program pendidikan Al-Qur'an untuk anak-anak usia dini, mengajarkan membaca Al-Qur'an dengan benar sebagai fondasi cinta Al-Qur'an sejak kecil.",
    focus: "Menanamkan kecintaan terhadap Al-Qur'an sejak usia dini melalui metode belajar yang menyenangkan dan penuh kasih sayang.",
    image: IMG.halaqahMelingkar,
    points: [
      "Belajar membaca Al-Qur'an dari Iqra hingga Al-Qur'an",
      "Hafalan surat-surat pendek (Juz 'Amma) dan doa harian",
      "Pengenalan adab dan akhlak Islami untuk anak-anak",
    ],
    icon: FaGraduationCap,
  },
  {
    name: "SD IT Barokah Qur'an",
    summary:
      "Pendidikan formal Sekolah Dasar Islam Terpadu yang memadukan kurikulum nasional dengan pendidikan agama dan tahfidz Al-Qur'an.",
    focus: "Mencetak lulusan yang cerdas secara akademik sekaligus hafal Al-Qur'an dan berkarakter Islami yang kuat.",
    image: IMG.santriSekolah,
    points: [
      "Kurikulum nasional dipadukan dengan pelajaran agama dan Al-Qur'an",
      "Target hafalan Al-Qur'an terprogram sepanjang jenjang SD",
      "Pembinaan karakter dan adab Islami dalam keseharian",
    ],
    icon: FaBuildingColumns,
  },
];

export const facilityItems: Facility[] = [
  {
    name: "Gedung & Asrama Santri",
    description:
      "Gedung pesantren yang terus berkembang, menyediakan tempat mukim yang nyaman bagi santri dalam suasana Islami.",
    image: IMG.papanNama,
    icon: FaBuildingColumns,
  },
  {
    name: "Ruang Ngaji Al-Qur'an",
    description:
      "Ruang belajar Al-Qur'an yang kondusif, dilengkapi rihal (meja Al-Qur'an) untuk kegiatan tahfidz dan halaqah.",
    image: IMG.ngajiMalam,
    icon: FaBookOpen,
  },
  {
    name: "Masjid & Mushola",
    description:
      "Sarana ibadah utama santri untuk sholat berjamaah, dzikir pagi-petang, dan berbagai kegiatan keagamaan sehari-hari.",
    image: IMG.setoran,
    icon: FaMosque,
  },
  {
    name: "Ruang Kelas & Perpustakaan",
    description:
      "Ruang belajar formal dan koleksi kitab-kitab agama untuk mendukung kegiatan diniyah dan pendidikan formal santri.",
    image: IMG.santriSekolah,
    icon: FaBookOpenReader,
  },
  {
    name: "Kantor Sekretariat",
    description:
      "Pusat layanan administrasi dan informasi pesantren, serta tempat konsultasi pendaftaran santri baru.",
    image: IMG.santriDanGuru,
    icon: FaHouse,
  },
  {
    name: "Area Bermain & Olahraga",
    description:
      "Halaman pesantren yang digunakan untuk kegiatan olahraga dan bermain santri untuk menjaga kesehatan dan kebersamaan.",
    image: IMG.peletakanBatu,
    icon: FaStar,
  },
];

export const educationHighlights = [
  "Tahfidzul Qur'an dan Kitab Kuning sebagai program unggulan pesantren.",
  "Bimbingan langsung dari Ustadz Al Hafidz berpengalaman.",
  "Pembentukan akhlak dan karakter Islami dalam keseharian santri.",
];

export const facilityHighlights = [
  "Gedung pesantren yang terus berkembang dan nyaman untuk santri",
  "Suasana lingkungan pesantren yang asri dan kondusif di Desa Babat",
  "Sarana ibadah dan belajar Al-Qur'an yang lengkap",
];

export const faqCategories: FaqCategory[] = [
  {
    category: "Pendaftaran",
    icon: FaClipboardList,
    items: [
      {
        question: "Bagaimana cara mendaftarkan anak ke Salfakinah Barokah Qur'an?",
        answer:
          "Pendaftaran dapat dilakukan dengan menghubungi pengurus melalui WhatsApp di nomor 082177215500 atau mengunjungi langsung pesantren di Jl. Lingkar Desa Babat, Kecamatan Penukal, Kabupaten PALI.",
      },
      {
        question: "Berapa usia minimal untuk mendaftar?",
        answer:
          "Pesantren menerima santri mulai dari anak-anak usia TPA/TPQ (5 tahun ke atas) hingga remaja untuk program tahfidz dan kitab kuning. Silakan hubungi pengurus untuk informasi lebih lanjut.",
      },
      {
        question: "Apa saja yang perlu dipersiapkan untuk mendaftar?",
        answer:
          "Umumnya diperlukan fotokopi Kartu Keluarga, fotokopi akta kelahiran, dan pas foto. Untuk informasi lengkap persyaratan terkini, silakan hubungi pengurus melalui WhatsApp.",
      },
      {
        question: "Apakah ada tes masuk?",
        answer:
          "Terdapat tes kemampuan membaca Al-Qur'an sebagai bagian dari proses penerimaan santri. Hal ini bertujuan untuk menempatkan santri pada program yang sesuai dengan kemampuannya.",
      },
    ],
  },
  {
    category: "Program & Kegiatan",
    icon: FaBookOpen,
    items: [
      {
        question: "Program apa saja yang tersedia di Salfakinah Barokah Qur'an?",
        answer:
          "Terdapat empat program utama: (1) Tahfidzul Qur'an — menghafal Al-Qur'an 30 juz; (2) Kitab Kuning/Diniyah — pengajian kitab klasik; (3) TPA/TPQ — untuk anak-anak usia dini; (4) SD IT Barokah Qur'an — pendidikan formal Islam terpadu.",
      },
      {
        question: "Bagaimana kegiatan harian santri?",
        answer:
          "Kegiatan harian santri meliputi sholat berjamaah, setoran hafalan (ziyadah), muraja'ah (mengulang hafalan), pengajian kitab kuning, belajar formal (bagi yang di SD IT), dan kegiatan keagamaan lainnya.",
      },
      {
        question: "Apakah santri wajib menginap (mukim)?",
        answer:
          "Terdapat opsi santri mukim (tinggal di pesantren) dan santri kalong (pulang hari). Untuk informasi lebih detail mengenai sistem mukim, silakan hubungi pengurus.",
      },
    ],
  },
  {
    category: "Biaya & Informasi Umum",
    icon: FaClipboardList,
    items: [
      {
        question: "Berapa biaya pendidikan di Salfakinah Barokah Qur'an?",
        answer:
          "Untuk informasi lengkap mengenai biaya pendaftaran, syahriah (biaya bulanan), dan rincian lainnya, silakan hubungi pengurus langsung melalui WhatsApp di 082177215500.",
      },
      {
        question: "Di mana lokasi pesantren?",
        answer:
          "Pondok Pesantren Salfakinah Barokah Qur'an berlokasi di Jl. Lingkar Desa Babat, Kecamatan Penukal, Kabupaten PALI, Sumatera Selatan.",
      },
      {
        question: "Siapa pengasuh Ponpes Salfakinah Barokah Qur'an?",
        answer:
          "Pengasuh Pondok Pesantren Salfakinah Barokah Qur'an adalah Ustadz Salman Al Farisi Al Hafidz, seorang hafidz Al-Qur'an yang berdedikasi dalam mendidik generasi penghafal Qur'an.",
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Wali Santri — Ibu Sari",
    role: "Wali Santri Program Tahfidzul Qur'an",
    quote:
      "Alhamdulillah, sejak mondok di Salfakinah Barokah Qur'an, anak kami semakin rajin beribadah dan hafalannya berkembang pesat. Ustadz Salman sangat sabar dan berdedikasi dalam membimbing anak-anak.",
  },
  {
    name: "Wali Santri — Bapak Ahmad",
    role: "Wali Santri SD IT Barokah Qur'an",
    quote:
      "Lingkungan pesantren yang Islami membuat anak kami tumbuh dengan akhlak yang baik. Program kitab kuning dan tahfidz berjalan selaras, kami sangat puas dan bangga menitipkan anak di sini.",
  },
];

export const galleryImages: GalleryImage[] = [
  { src: IMG.ngajiMalam,       alt: "Santri Salfakinah Barokah Qur'an ngaji malam di depan spanduk pesantren",      aspect: "4/3"  },
  { src: IMG.santriDepanPapan, alt: "Santri putra dan putri foto bersama di depan papan nama Rumah Tahfidz",         aspect: "4/3"  },
  { src: IMG.halaqahMelingkar, alt: "Kegiatan halaqah santri belajar Al-Qur'an melingkar bersama ustadz",            aspect: "4/3"  },
  { src: IMG.santriSekolah,    alt: "Santri SD IT Barokah Qur'an foto bersama guru di ruang kelas",                  aspect: "4/3"  },
  { src: IMG.haflahJuz,        alt: "Acara Haflah Al-Qur'an dan wisuda santri penghafal Qur'an",                     aspect: "16/9" },
  { src: IMG.papanNama,        alt: "Papan nama SD IT Islam Terpadu Barokah Qur'an Yayasan Salfakinah",              aspect: "4/3"  },
  { src: IMG.belajarAlQuran,   alt: "Santri belajar membaca Al-Qur'an di meja rihal saat malam hari",               aspect: "3/4"  },
  { src: IMG.santriDanGuru,    alt: "Santri putra dan putri berkumpul bersama ustadz dan guru di depan spanduk",     aspect: "16/9" },
  { src: IMG.peletakanBatu,    alt: "Peletakan batu pertama pembangunan gedung Pondok Pesantren Salfakinah",         aspect: "3/4"  },
  { src: IMG.ngajiMalam2,      alt: "Kegiatan ngaji malam bersama santri di Rumah Tahfidz Barokah Qur'an",          aspect: "4/3"  },
  { src: IMG.setoran,          alt: "Ustadz menyimak setoran hafalan santri secara langsung",                        aspect: "4/3"  },
  { src: IMG.wisuda,           alt: "Wisudawan penghafal Qur'an Salman Al Farisi bersama keluarga",                  aspect: "3/4"  },
];

export const historyTimeline: TimelineItem[] = [
  {
    year: "2017",
    title: "Pendirian Yayasan",
    description: "Yayasan Pondok Pesantren Salfakinah Barokah Qur'an resmi didirikan dan terdaftar secara hukum di Kementerian Hukum dan HAM RI.",
    color: "bg-amber-500",
  },
  {
    year: "2021",
    title: "Mulai Beroperasi",
    description: "Pondok Pesantren Salfakinah Barokah Qur'an mulai menerima santri dan beroperasi secara resmi di Desa Babat, Kecamatan Penukal, Kabupaten PALI.",
    color: "bg-primary",
  },
  {
    year: "2022",
    title: "Pembangunan Gedung",
    description: "Peletakan batu pertama pembangunan gedung permanen pesantren sebagai wujud nyata komitmen pengembangan fasilitas bagi para santri.",
    color: "bg-accent-gold",
  },
  {
    year: "Sekarang",
    title: "Terus Berkembang",
    description: "Dengan sekitar 60 santri aktif, Salfakinah Barokah Qur'an terus berkembang dalam mencetak generasi penghafal Al-Qur'an yang berakhlak mulia.",
    color: "bg-emerald-600",
  },
];
