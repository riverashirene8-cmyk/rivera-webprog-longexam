import Button from '../../components/Button';

import logo from '../../assets/img/nubdexchange_logo.png';
import shopImg from '../../assets/img/bulldogexshop.png';

import browseImg from '../../assets/img/browse.png';
import addToCartImg from '../../assets/img/addtocart.png';
import pickupImg from '../../assets/img/pick-up.png';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-10 pb-10">

      {/* HERO */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-6 py-14">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* IMAGE */}
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6 overflow-hidden">
            <img
              src={shopImg}
              alt="BulldogEx Shop"
              className="w-full h-[22rem] object-cover rounded-2xl"
            />
          </div>

          {/* TEXT */}
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              About Store
            </p>

            <h1 className="text-4xl font-bold mt-3 text-zinc-900 leading-tight">
              BulldogEx Shop
            </h1>

            <p className="mt-5 text-base text-zinc-600 leading-7">
              A campus-based marketplace designed for students to easily access uniforms,
              essentials, and school supplies through a simple ordering system.
            </p>

            <div className="mt-8 flex gap-3">
              <Button to="/">Back Home</Button>
              <Button to="/products" variant="primary">Open Products</Button>
            </div>
          </div>

        </div>

      </section>

      {/* STORE OVERVIEW */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-6 py-10">

        <div className="mb-8 text-left">
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            Store Overview
          </p>

          <h2 className="text-3xl font-semibold mt-2 text-zinc-900">
            Built for Fast & Simple Student Shopping
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="rounded-2xl border-2 border-zinc-900 bg-zinc-100 p-6 text-center">
            <p className="text-3xl font-bold">12+</p>
            <p className="text-xs text-zinc-500 mt-2 uppercase">Products</p>
          </div>

          <div className="rounded-2xl border-2 border-zinc-900 bg-zinc-100 p-6 text-center">
            <p className="text-3xl font-bold">3</p>
            <p className="text-xs text-zinc-500 mt-2 uppercase">Categories</p>
          </div>

          <div className="rounded-2xl border-2 border-zinc-900 bg-zinc-100 p-6 text-center">
            <p className="text-3xl font-bold">Fast</p>
            <p className="text-xs text-zinc-500 mt-2 uppercase">Checkout</p>
          </div>

          <div className="rounded-2xl border-2 border-zinc-900 bg-zinc-100 p-6 text-center">
            <p className="text-3xl font-bold">NU</p>
            <p className="text-xs text-zinc-500 mt-2 uppercase">Campus Store</p>
          </div>

        </div>

      </section>

      {/* STORE FLOW */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-6 py-12">

        <div className="mb-10 text-left">
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            Store Flow
          </p>

          <h2 className="text-3xl font-semibold mt-2 text-zinc-900">
            How Students Use BulldogEx
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* STEP 1 */}
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6 overflow-hidden">
            <img
              src={browseImg}
              alt="Browse Products"
              className="h-48 w-full object-cover rounded-2xl"
            />
            <h3 className="mt-5 text-lg font-semibold">Browse Products</h3>
            <p className="text-sm text-zinc-600 mt-2">
              Students explore available school items.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6 overflow-hidden">
            <img
              src={addToCartImg}
              alt="Add to Cart"
              className="h-48 w-full object-cover rounded-2xl"
            />
            <h3 className="mt-5 text-lg font-semibold">Select Items</h3>
            <p className="text-sm text-zinc-600 mt-2">
              Students choose items they want to purchase.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6 overflow-hidden">
            <img
              src={pickupImg}
              alt="Pickup Order"
              className="h-48 w-full object-cover rounded-2xl"
            />
            <h3 className="mt-5 text-lg font-semibold">Pickup Order</h3>
            <p className="text-sm text-zinc-600 mt-2">
              Students claim items at campus pickup area.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default AboutPage;