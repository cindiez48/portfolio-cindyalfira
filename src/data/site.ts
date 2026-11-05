export type WorkItem = {
  company: string;
  timeframe: string;
  role: string;
  achievements: string[];
};

export type StudyItem = {
  name: string;
  description: string;
};

export type SkillItem = {
  title: string;
  description: string;
  tags: string[];
};

export const site = {
  name: "Cindy Alfira",
  role: "Informatics Engineering Student",
  avatar: "/avatar.jpg",
  email: "cindyalfira48@gmail.com",
  location: "Surabaya, Indonesia",
  timeZone: "Asia/Jakarta",
  languages: ["Indonesia"],
  copyrightYear: 2026,
  url: "https://example.com",
  description:
    "Portofolio Cindy Alfira, mahasiswa D4 Teknik Informatika Universitas Airlangga yang berfokus pada Web & Mobile Development (Frontend & Backend) serta analisis data.",
  socials: {
    github: "https://github.com/cindiez48",
    linkedin: "https://www.linkedin.com/in/cindyalfira",
  },
  home: {
    headline: "Hello, World!",
    subline:
      "Cindy Alfira — Tech Enthusiast & Mobile/Web Developer. Berpengalaman membangun sistem administrasi yang efisien, aman, dan scalable."
  },
  about: {
    intro: [
      "Sebagai mahasiswa Teknik Informatika Universitas Airlangga, aktif mengembangkan keahlian di bidang Web dan Mobile Development dengan fokus pada frontend, backend, serta analisis data. Memiliki kombinasi kemampuan teknis dan kreatif untuk mengembangkan produk digital yang tidak hanya fungsional tetapi juga menarik secara visual. Berpengalaman nyata membangun sistem administrasi pendaftaran magang lewat kolaborasi teknis yang terukur, serta siap berkontribusi aktif dalam tim untuk menghadirkan solusi perangkat lunak yang andal.",
    ],
    academic: {
      title: "Perjalanan Akademik",
      tags: ["MAN 2 Ponorogo", "Universitas Airlangga"],
    },
    interests: {
      title: "Minat & Hobi",
      tags: ["Desain Produk Digital", "Teknologi Kreatif"],
    },
    reflections: {
      title: "Refleksi",
      tags: [
        "Debugging & Troubleshooting",
        "Implementasi REST API",
      ],
      note: "Perjalanan belajar saya di universitas dipenuhi tantangan teknis yang melatih kemampuan memecahkan masalah dan terus mendorong untuk menghadirkan solusi perangkat lunak yang fungsional.",
    },
    work: {
      title: "Pengalaman Kerja",
      items: [
        {
          company: "Dinas Komunikasi dan Informatika (Diskominfo) Kabupaten Ponorogo",
          timeframe: "September 2026 - November 2026",
          role: "Magang",
          achievements: [
            "Merancang dan membangun aplikasi pendaftaran magang terintegrasi untuk platform Web dan Mobile guna mendigitalisasi proses administrasi manual.",
            "Mengimplementasikan REST API yang efisien untuk memastikan sinkronisasi data yang lancar dan aman antara aplikasi mobile (Flutter) dan sistem backend.",
          ],
        },
      ] satisfies WorkItem[],
    },
    studies: {
      title: "Pendidikan",
      items: [
        {
          name: "Universitas Airlangga",
          description: "D4 Teknik Informatika (Agustus 2023 - Sekarang).",
        },
        {
          name: "MAN 2 Ponorogo",
          description: "MIPA (Juni 2020 - Mei 2023).",
        },
      ] satisfies StudyItem[],
    },
    skills: {
      title: "Keahlian & Teknologi",
      items: [
        {
          title: "Pengembangan Aplikasi (Web & Mobile)",
          description: "Membangun sistem dan aplikasi modern yang responsif serta terintegrasi.",
          tags: ["Flutter", "Laravel", "REST API", "Git"],
        },
        {
          title: "Bahasa Pemrograman",
          description: "Mengembangkan solusi logika backend dan frontend dengan berbagai bahasa populer.",
          tags: ["Golang", "Python", "Dart", "JavaScript", "PHP"],
        },
        {
          title: "Basis Data",
          description: "Merancang struktur penyimpanan data yang efisien dan aman.",
          tags: ["MySQL", "PostgreSQL"],
        },
        {
          title: "Soft Skills & Sertifikasi",
          description: "Manajemen tugas proyek, kerja sama tim lintas fungsi, serta optimasi kode.",
          tags: ["Troubleshooting", "Code Generation and Optimization Using IBM Granite", "Women In Tech: Python and Cybersecurity (Digital Talent Scholarship)"],
        },
      ] satisfies SkillItem[],
    },
  },
  work: {
    title: "Proyek & Karya Cindy Alfira",
  },
};
