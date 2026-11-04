export default function SummaryCards({ daftarProduk }) {
  const total = daftarProduk.length;
  const habis = daftarProduk.filter((produk) => produk.stok === 0).length;
  const tersedia = total - habis;

  const kartu = [
    {
      label: "Total Produk",
      nilai: total,
      keterangan: "jenis barang",
      warna: "border-slate-400",
      teks: "text-slate-800",
    },
    {
      label: "Produk Tersedia",
      nilai: tersedia,
      keterangan: "siap dijual",
      warna: "border-emerald-500",
      teks: "text-emerald-600",
    },
    {
      label: "Produk Habis",
      nilai: habis,
      keterangan: "perlu restock",
      warna: "border-red-500",
      teks: "text-red-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {kartu.map((item) => (
        <div
          key={item.label}
          className={`rounded-2xl border-l-4 ${item.warna} bg-white p-5 shadow-sm`}
        >
          <p className="text-sm text-slate-500">{item.label}</p>
          <p className={`mt-1 text-3xl font-bold ${item.teks}`}>{item.nilai}</p>
          <p className="mt-1 text-xs text-slate-400">{item.keterangan}</p>
        </div>
      ))}
    </div>
  );
}
