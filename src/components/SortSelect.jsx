const kelasSelect =
  "w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 " +
  "text-slate-800 outline-none transition focus:border-emerald-500 " +
  "focus:bg-white focus:ring-2 focus:ring-emerald-200";

export default function SortSelect({ nilai, onUbah }) {
  return (
    <div>
      <label
        htmlFor="urutan-harga"
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        Urutkan harga
      </label>
      <select
        id="urutan-harga"
        value={nilai}
        onChange={(event) => onUbah(event.target.value)}
        className={kelasSelect}
      >
        <option value="default">Harga asli (default)</option>
        <option value="termurah">Termurah ke termahal</option>
        <option value="termahal">Termahal ke termurah</option>
      </select>
    </div>
  );
}
