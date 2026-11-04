import { BATAS_MENIPIS } from "../data/produk.js";

// if-else untuk tiga kemungkinan status stok.
export function hitungStatus(stok) {
  if (stok === 0) {
    return { kunci: "habis", label: "Habis" };
  }

  if (stok <= BATAS_MENIPIS) {
    return { kunci: "menipis", label: "Menipis" };
  }

  return { kunci: "tersedia", label: "Tersedia" };
}

const gaya = {
  tersedia: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  menipis: "bg-amber-100 text-amber-700 ring-amber-200",
  habis: "bg-red-100 text-red-700 ring-red-200",
};

const kelasBadge =
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 " +
  "text-xs font-semibold ring-1";

export default function StatusBadge({ stok }) {
  const status = hitungStatus(stok);

  return (
    <span className={`${kelasBadge} ${gaya[status.kunci]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status.label}
    </span>
  );
}
