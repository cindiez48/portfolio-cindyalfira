import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-20 pt-40 text-center">
      <h1 className="text-5xl font-semibold tracking-tight">Halaman tidak ditemukan</h1>
      <p className="mt-4 text-muted">
        Alamat yang Anda buka tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
      >
        Kembali ke beranda
      </Link>
    </div>
  );
}
