export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  context: string;
  tags: string[];
  images: string[];
  repoUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "medhug",
    title: "MedHug",
    summary:
      "Aplikasi pemesanan obat untuk memudahkan pengelolaan resep dan pengantaran obat ke rumah.",
    role: "UI/UX dan pengembangan mobile",
    context: "Proyek perkuliahan, Universitas Airlangga",
    tags: ["Dart", "Mobile App", "Figma", "UI/UX"],
    images: ["/projects/Medhug-1.png", "/projects/Medhug-2.png"],
    demoUrl:
      "https://www.figma.com/design/2mBFTT1sTIzz0lRR703rWS/MedHug----Project-UI-UX?node-id=88-2205&t=SLK33GkZPth6YTjt-1",
    demoLabel: "Lihat Desain",
    overview:
      "MedHug membantu pengguna memesan obat dan mengelola resep dari satu aplikasi, tanpa harus datang langsung ke apotek.",
    challenge:
      "Alur pemesanan obat memiliki banyak langkah, sehingga antarmuka harus tetap sederhana dan mudah dipahami oleh berbagai kalangan pengguna.",
    solution:
      "Antarmuka dirancang dan diprototipekan di Figma, kemudian aplikasi dibangun dengan Dart agar dapat berjalan di berbagai platform.",
    outcome:
      "Prototipe antarmuka lengkap tersedia di Figma dan dapat dibuka lewat tombol Lihat Desain.",
  },
  {
    slug: "portal-lowongan-ponorogo",
    title: "Portal Lowongan Kerja dan Pelatihan Lokal",
    summary:
      "Portal PKL/Magang Terintegrasi Kabupaten Ponorogo.",
    role: "Pengembang web dan mobile",
    context: "Magang, Diskominfo Ponorogo",
    tags: ["Laravel", "React", "Tailwind CSS", "Inertia.js", "MySQL"],
    images: ["/projects/Portal-1.png", "/projects/Portal-2.png"],
    overview:
      "Portal ini mempertemukan pencari kerja, perusahaan, dan penyelenggara pelatihan di Kabupaten Ponorogo dalam satu tempat. Pengguna utamanya adalah lulusan SMA/SMK hingga S2 dan masyarakat umum.",
    challenge:
      "Layanan harus siap dipakai ribuan pengguna, mudah dicari, dan terbagi untuk tiga peran: pencari kerja, instansi atau perusahaan, dan admin.",
    solution:
      "Backend Laravel dan antarmuka React dijalankan dalam satu proyek lewat Inertia.js dengan database MySQL. Pencarian lowongan memakai mesin pencari terpisah agar hasilnya relevan dan cepat, dan instansi dapat menilai CV pelamar lewat fitur CV Assessment.",
    outcome: "Proyek ini masih dalam tahap pengembangan.",
  },
  {
    slug: "website-portofolio",
    title: "Website Portofolio",
    summary:
      "Situs portofolio pribadi dengan tema terang dan gelap, dibangun dari nol dan dideploy ke Cloudflare.",
    role: "Desain dan pengembangan",
    context: "Proyek pribadi",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare"],
    images: ["/projects/portofolio-1.png", "/projects/portofolio-2.png"],
    overview:
      "Situs ini memuat profil, pengalaman, dan karya saya, dengan halaman studi kasus untuk setiap proyek.",
    challenge:
      "Membuat situs yang cepat, responsif, dan mudah diperbarui tanpa bergantung pada template pihak ketiga.",
    solution:
      "Seluruh komponen ditulis sendiri dengan React dan Tailwind CSS. Konten dipisahkan ke file data, lalu situs dideploy ke Cloudflare Workers menggunakan OpenNext.",
    outcome:
      "Setiap push ke GitHub memicu build dan deploy otomatis di Cloudflare.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
