import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-100 text-zinc-900">

      {/* NAVBAR */}
      <NavBar />

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default Layout;