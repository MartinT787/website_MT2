import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-charcoal selection:bg-accent selection:text-white">
      <Header />
      <main id="main" className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
