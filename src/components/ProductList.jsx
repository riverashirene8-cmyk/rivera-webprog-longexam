import Button from "./Button.jsx";

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {products.length > 0 ? (
        products.map((p) => (
          <div
            key={p.id}
            className="border-2 border-zinc-900 rounded-xl p-4 flex flex-col gap-3"
          >

            <img
              src={p.image}
              alt={p.title}
              className="h-40 object-contain"
            />

            <div>
              <h2 className="font-bold">{p.title}</h2>
              <p className="text-sm text-zinc-600">
                ₱{p.price}
              </p>
            </div>

            <Button to={`/products/${p.name}`}>
              View Product
            </Button>

          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-zinc-600">
          No products found.
        </p>
      )}

    </div>
  );
}

export default ProductList;