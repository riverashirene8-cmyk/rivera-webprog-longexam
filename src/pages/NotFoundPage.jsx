import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex w-full flex-col gap-10">

        {/* 404 MAIN */}
        <section className="border-y-2 border-zinc-900 bg-zinc-50 py-14">
          <div className="mx-auto w-full max-w-3xl px-4 text-center">

            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Error
            </p>

            <h1 className="mt-2 text-6xl font-bold text-zinc-900 sm:text-7xl">
              🚫 404
            </h1>

            <p className="mt-4 text-lg text-zinc-600">
              Oops! The page you're looking for doesn’t exist or might have been moved.
            </p>

            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <Button to="/">Back Home</Button>
              <Button to="/products">View Products</Button>
            </div>

          </div>
        </section>

        {/* QUICK LINKS */}
        <section className="border-y-2 border-zinc-900 bg-zinc-50 py-10">
          <div className="mx-auto w-full max-w-3xl px-4">

            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Quick Links
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Explore the site
            </h2>

            <div className="mt-6 space-y-4">

              {/* HOME */}
              <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Home</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Return to the homepage.
                </p>
                <Button to="/" className="mt-4">
                  Go Home
                </Button>
              </div>

              {/* PRODUCTS */}
              <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Products</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Browse all available store items.
                </p>
                <Button to="/products" className="mt-4">
                  View Products
                </Button>
              </div>

              {/* ABOUT */}
              <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">About</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Learn more about BulldogEx Shop.
                </p>
                <Button to="/about" className="mt-4">
                  About Page
                </Button>
              </div>

              {/* SIGN IN */}
              <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Sign In</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Access your account.
                </p>
                <Button to="/signin" className="mt-4">
                  Sign In
                </Button>
              </div>

              {/* SIGN UP */}
              <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Sign Up</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Create a new account.
                </p>
                <Button to="/signup" className="mt-4">
                  Sign Up
                </Button>
              </div>

            </div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default NotFoundPage;