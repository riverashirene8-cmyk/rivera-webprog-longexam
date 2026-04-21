import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';

// category images
import uniformImg from '../../assets/img/uniform.png';
import essentialsImg from '../../assets/img/essentials.png';
import studyImg from '../../assets/img/study.png';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">

            {/* HERO */}
            <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-zinc-900 bg-zinc-900 px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt="BulldogEx Shop"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-zinc-900/50" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-200">
                            Campus Marketplace
                        </p>

                        <h1 className="text-3xl font-bold text-zinc-50 sm:text-4xl">
                            Welcome to BulldogEx Shop
                        </h1>

                        <p className="mt-4 text-sm text-zinc-100">
                            Explore uniforms, essentials, and student lifestyle items.
                        </p>

                        <div className="mt-6 flex justify-end gap-3">
                            <Button to="/products">Shop Now</Button>
                            <Button to="/about" variant="primary">About Store</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* STORE OVERVIEW (BINALIK) */}
            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 lg:px-8">

                <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                        Store Overview
                    </p>
                    <h2 className="text-2xl font-semibold text-zinc-900">
                        Daily school items
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-2xl font-bold text-zinc-900">12</p>
                        <p className="text-xs text-zinc-500 mt-2 uppercase">
                            Products
                        </p>
                    </div>

                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-2xl font-bold text-zinc-900">3</p>
                        <p className="text-xs text-zinc-500 mt-2 uppercase">
                            Categories
                        </p>
                    </div>

                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-2xl font-bold text-zinc-900">Uniform</p>
                        <p className="text-xs text-zinc-500 mt-2 uppercase">
                            Main Focus
                        </p>
                    </div>

                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-2xl font-bold text-zinc-900">Campus</p>
                        <p className="text-xs text-zinc-500 mt-2 uppercase">
                            Target Market
                        </p>
                    </div>

                </div>
            </section>

            {/* SHOP SECTIONS */}
            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-8 lg:px-8">

                <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                        Explore Collections
                    </p>
                    <h2 className="text-2xl font-semibold text-zinc-900">
                        Find what you need by category
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">

                    {/* UNIFORMS */}
                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 hover:shadow-lg transition">

                        <div className="h-48 flex items-center justify-center bg-zinc-200 rounded-xl overflow-hidden">
                            <img
                                src={uniformImg}
                                alt="Uniforms"
                                className="max-h-full object-contain"
                            />
                        </div>

                        <h3 className="mt-4 text-lg font-semibold">
                            Uniforms
                        </h3>

                        <p className="text-sm text-zinc-600">
                            School uniforms and official wear.
                        </p>

                        <Button to="/products?category=uniform" className="mt-4" variant="primary">
                            Browse Uniforms
                        </Button>
                    </div>

                    {/* ESSENTIALS */}
                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 hover:shadow-lg transition">

                        <div className="h-48 flex items-center justify-center bg-zinc-200 rounded-xl overflow-hidden">
                            <img
                                src={essentialsImg}
                                alt="Essentials"
                                className="max-h-full object-contain"
                            />
                        </div>

                        <h3 className="mt-4 text-lg font-semibold">
                            Essentials
                        </h3>

                        <p className="text-sm text-zinc-600">
                            Bags, lanyards, and daily items.
                        </p>

                        <Button to="/products?category=essentials" className="mt-4" variant="primary">
                            View Essentials
                        </Button>
                    </div>

                    {/* STUDY */}
                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 hover:shadow-lg transition">

                        <div className="h-48 flex items-center justify-center bg-zinc-200 rounded-xl overflow-hidden">
                            <img
                                src={studyImg}
                                alt="Study"
                                className="max-h-full object-contain"
                            />
                        </div>

                        <h3 className="mt-4 text-lg font-semibold">
                            Study
                        </h3>

                        <p className="text-sm text-zinc-600">
                            Tumblers, mugs, and study items.
                        </p>

                        <Button to="/products?category=study" className="mt-4" variant="primary">
                            Shop Study
                        </Button>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default HomePage;