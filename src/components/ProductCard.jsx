import Button from "./Button";

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 hover:shadow-lg transition">

      {/* IMAGE */}
      <div className="aspect-4/3 bg-white rounded-[1.25rem] overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-4 transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* CATEGORY */}
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
        {product.category} {String(index + 1).padStart(2, "0")}
      </p>

      {/* TITLE */}
      <h3 className="mt-2 text-lg font-semibold text-zinc-900">
        {product.title}
      </h3>

      {/* PRICE */}
      <p className="mt-2 font-bold text-zinc-900">
        ₱{product.price}
      </p>

      {/* DESCRIPTION */}
      <p className="mt-3 text-sm text-zinc-600">
        {product.description}
      </p>

      {/* PROMO */}
      {product.promo && (
        <p className="mt-3 inline-block rounded-full bg-zinc-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          {product.promo}
        </p>
      )}

      {/* CUSTOM */}
      {product.customizable && (
        <p className="mt-2 inline-block rounded-full border-2 border-zinc-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
          Customizable
        </p>
      )}

      {/* BUTTON */}
      <Button to={`/products/${product.name}`} className="mt-4">
        View Product
      </Button>

    </article>
  );
};

export default ProductCard;