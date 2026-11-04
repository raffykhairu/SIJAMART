const kelasInput =
  "w-full rounded-xl border border-slate-300 bg-slate-50 py-2.5 " +
  "pl-10 pr-10 text-slate-800 outline-none transition " +
  "focus:border-emerald-500 focus:bg-white focus:ring-2 " +
  "focus:ring-emerald-200";

const kelasTombolHapus =
  "absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 " +
  "text-sm text-slate-400 transition hover:bg-slate-100 hover:text-slate-600";

export default function SearchBar({ nilai, onUbah }) {
  return (
    <div>
      <label
        htmlFor="cari-produk"
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        Cari produk
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          &#128269;
        </span>
        <input
          id="cari-produk"
          type="text"
          value={nilai}
          onChange={(event) => onUbah(event.target.value)}
          placeholder="Contoh: beras"
          className={kelasInput}
        />
        {nilai !== "" && (
          <button
            type="button"
            onClick={() => onUbah("")}
            aria-label="Hapus kata kunci"
            className={kelasTombolHapus}
          >
            &#10005;
          </button>
        )}
      </div>
    </div>
  );
}
