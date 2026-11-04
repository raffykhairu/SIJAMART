export default function EmptyState({ kataKunci, kategori, onReset }) {
  const kelasTombol =
    "mt-5 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm " +
    "font-semibold text-white transition hover:bg-emerald-700";

  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
      <p className="text-4xl">&#128230;</p>
      <h3 className="mt-3 text-lg font-bold text-slate-800">
        Produk tidak ditemukan
      </h3>
      <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">
        {kategori === "Semua" ? (
          <>Tidak ada produk yang cocok dengan pencarian.</>
        ) : (
          <>
            Tidak ada produk pada kategori{" "}
            <span className="font-semibold text-slate-700">{kategori}</span>
            {kataKunci !== "" && (
              <>
                {" "}
                yang namanya mengandung &ldquo;
                <span className="font-semibold text-slate-700">
                  {kataKunci}
                </span>
                &rdquo;
              </>
            )}
            .
          </>
        )}{" "}
        Coba ubah kata kunci atau filter kategori.
      </p>
      <button
        type="button"
        onClick={onReset}
        className={kelasTombol}
      >
        Reset pencarian &amp; filter
      </button>
    </div>
  );
}
