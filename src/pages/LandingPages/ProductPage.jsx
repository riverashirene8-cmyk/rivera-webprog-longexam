import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button.jsx";
import products from "../../assets/product-content.js";

function ProductPage() {
  const { slug } = useParams();

  const product = products.find(
    (p) => p.name?.toLowerCase() === slug?.toLowerCase()
  );

  const [number, setNumber] = useState("");

  if (!product) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-xl font-bold">Product not found</h1>
        <Button to="/products" className="mt-4">
          Back to Products
        </Button>
      </div>
    );
  }

  const isMug = product.name === "nu-mug";

  return (
    <div className="flex flex-col gap-6">

      {/* HEADER */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-6 py-6">
        <Button to="/products">← Back</Button>

        <h1 className="text-3xl font-bold mt-4">
          {product.title}
        </h1>

        <p className="text-zinc-600 mt-2">
          ₱{product.price} • {product.stock}
        </p>
      </section>

      {/* IMAGE */}
      <section className="px-6 py-6">

        {!isMug ? (
          <div className="flex justify-center">
            <img
              src={product.image}
              className="h-80 object-contain"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">

            <div className="w-64 h-64 rounded-full border-4 border-black flex items-center justify-center font-bold">
              NATIONAL UNIVERSITY
            </div>

            <div className="w-64 h-64 rounded-full border-4 border-black flex items-center justify-center text-5xl font-bold">
              {number || "00"}
            </div>

            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              maxLength={2}
              className="border p-2 text-center w-40 rounded"
            />

          </div>
        )}

      </section>

      {/* DESCRIPTION */}
      <section className="px-6">
        <p className="text-zinc-700">
          {product.description}
        </p>
      </section>

      {/* ACTIONS */}
      <section className="px-6 flex gap-3">
        <Button>Add to Cart</Button>
        <Button to="/products">Back</Button>
      </section>

    </div>
  );
}

export default ProductPage;