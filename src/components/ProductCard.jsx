import StatusBadge from "./StatusBadge.jsx";

const kelasInfo =
  "rounded-xl px-4 py-2.5 text-center text-sm font-semibold";

const formatRupiah = (angka) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(angka);

export default function ProductCard({ produk }) {
  const habis = produk.stok === 0;

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow ${
        habis ? "border-red-200" : "border-slate-200 hover:border-emerald-300"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
          {produk.kategori}
        </span>
        <StatusBadge stok={produk.stok} />
      </div>

      <h3 className="mt-3 font-bold text-slate-800">{produk.nama}</h3>

      <p className="mt-1 text-xl font-bold text-emerald-700">
        {formatRupiah(produk.harga)}
      </p>

      <p className="mt-1 text-sm text-slate-500">Stok: {produk.stok} unit</p>

      {/* Conditional rendering untuk keterangan pembelian. */}
      <div className="mt-auto pt-4">
        {habis ? (
          <p className={`${kelasInfo} bg-red-50 text-red-600`}>
            Produk tidak dapat dibeli
          </p>
        ) : (
          <p className={`${kelasInfo} bg-emerald-50 text-emerald-700`}>
            Tersedia untuk dibeli
          </p>
        )}
      </div>
    </article>
  );
}
