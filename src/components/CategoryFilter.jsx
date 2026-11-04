export default function CategoryFilter({
  daftarKategori,
  kategoriAktif,
  onPilih,
}) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-slate-700">
        Filter kategori
      </p>
      <div className="flex flex-wrap gap-2">
        {daftarKategori.map((kategori) => {
          const aktif = kategori === kategoriAktif;

          return (
            <button
              key={kategori}
              type="button"
              onClick={() => onPilih(kategori)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                aktif
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {kategori}
            </button>
          );
        })}
      </div>
    </div>
  );
}
