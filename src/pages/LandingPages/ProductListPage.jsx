import { useState } from "react";
import Button from "../../components/Button.jsx";
import ProductList from "../../components/ProductList.jsx";
import products from "../../assets/product-content.js";

const ProductListPage = () => {
  const [search, setSearch] = useState("");

  // ✅ SAFE + WORKING FILTER
  const filteredProducts = search.trim()
    ? products.filter((p) => {
        const text = search.toLowerCase().trim();

        return (
          p.title?.toLowerCase().includes(text) ||
          p.name?.toLowerCase().includes(text) ||
          p.category?.toLowerCase().includes(text)
        );
      })
    : products;

  return (
    <div className="flex w-full flex-col gap-6">

      {/* HEADER */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Products
        </p>

        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
          Shop campus essentials
        </h1>

        <p className="mt-4 max-w-lg text-sm text-zinc-600">
          Browse items for daily use, study, uniforms, and campus life.
        </p>

        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      {/* ✅ SEARCH BAR (ONLY PLACE NEEDED) */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">

          {/* RESET */}
          <button
            onClick={() => setSearch("")}
            className="px-4 py-2 rounded-full border-2 border-zinc-900 bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest"
          >
            All
          </button>

          {/* INPUT */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border-2 border-zinc-900 rounded-full w-72 focus:outline-none text-sm"
          />

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 lg:px-8">

        <ProductList products={filteredProducts} />

      </section>

    </div>
  );
};

export default ProductListPage;