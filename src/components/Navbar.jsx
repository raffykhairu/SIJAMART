export default function Navbar() {
  return (
    <nav className="bg-emerald-700 text-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-xl">
            &#128722;
          </span>
          <div>
            <p className="font-bold leading-tight">SIJA Mart</p>
            <p className="text-xs text-emerald-100">Dashboard Minimarket</p>
          </div>
        </div>

        <div className="hidden items-center gap-6 text-sm font-medium sm:flex">
          <span className="border-b-2 border-white pb-1">Produk</span>
          <span className="text-emerald-100">Laporan</span>
          <span className="text-emerald-100">Pengaturan</span>
        </div>
      </div>
    </nav>
  );
}
