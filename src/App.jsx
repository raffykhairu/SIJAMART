import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import SummaryCards from "./components/SummaryCards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import SortSelect from "./components/SortSelect.jsx";
import ProductCard from "./components/ProductCard.jsx";
import EmptyState from "./components/EmptyState.jsx";
import Footer from "./components/Footer.jsx";
import { dataProduk } from "./data/produk.js";

const SEMUA_KATEGORI = "Semua";

const kelasTombolReset =
  "rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm " +
  "font-semibold text-slate-700 transition " +
  "hover:border-emerald-400 hover:text-emerald-700";

export default function App() {
  // Tiga state untuk pencarian, filter kategori, dan pengurutan harga.
  const [kataKunci, setKataKunci] = useState("");
  const [kategori, setKategori] = useState(SEMUA_KATEGORI);
  const [urutan, setUrutan] = useState("default");

  // Daftar kategori diambil otomatis dari data produk.
  const daftarKategori = [
    SEMUA_KATEGORI,
    ...new Set(dataProduk.map((produk) => produk.kategori)),
  ];

  const kunci = kataKunci.trim().toLowerCase();

  // Tahap 1: saring berdasarkan nama dan kategori.
  const hasilFilter = dataProduk.filter((produk) => {
    const cocokNama = produk.nama.toLowerCase().includes(kunci);
    const cocokKategori =
      kategori === SEMUA_KATEGORI || produk.kategori === kategori;

    return cocokNama && cocokKategori;
  });

  // Tahap 2: urutkan salinan array agar data sumber tidak berubah.
  const hasilUrut = [...hasilFilter];

  if (urutan === "termurah") {
    hasilUrut.sort((a, b) => a.harga - b.harga);
  } else if (urutan === "termahal") {
    hasilUrut.sort((a, b) => b.harga - a.harga);
  }

  const adaFilterAktif =
    kunci !== "" || kategori !== SEMUA_KATEGORI || urutan !== "default";

  function resetFilter() {
    setKataKunci("");
    setKategori(SEMUA_KATEGORI);
    setUrutan("default");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              Katalog Produk
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Kelola pencarian, filter kategori, dan urutan harga dalam satu
              dashboard.
            </p>
          </div>

          {/* Tombol reset hanya muncul ketika ada filter aktif. */}
          {adaFilterAktif && (
            <button
              type="button"
              onClick={resetFilter}
              className={kelasTombolReset}
            >
              Reset Filter
            </button>
          )}
        </div>

        <SummaryCards daftarProduk={dataProduk} />

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <SearchBar nilai={kataKunci} onUbah={setKataKunci} />
            <div className="lg:w-64">
              <SortSelect nilai={urutan} onUbah={setUrutan} />
            </div>
          </div>

          <div className="mt-5 border-t border-slate-100 pt-5">
            <CategoryFilter
              daftarKategori={daftarKategori}
              kategoriAktif={kategori}
              onPilih={setKategori}
            />
          </div>
        </section>

        <div className="mb-4 mt-8 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-bold text-slate-800">Daftar Produk</h2>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
            Menampilkan {hasilUrut.length} dari {dataProduk.length} produk
          </span>
        </div>

        {/* Conditional rendering: pesan kosong atau grid produk. */}
        {hasilUrut.length === 0 ? (
          <EmptyState
            kataKunci={kataKunci.trim()}
            kategori={kategori}
            onReset={resetFilter}
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hasilUrut.map((produk) => (
              <ProductCard key={produk.id} produk={produk} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
