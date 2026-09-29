import TopBar from "./TopBar";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative z-50 bg-white">
      <TopBar />

      <div  className={`left-0 right-0 z-50 border-b border-gray-100 bg-white transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 shadow-md"
            : "relative"
        }`}>
        <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo + Company Name */}
          <a href="/" className="flex items-center gap-3">
            {/* PT Logo */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border-2 border-red-600 bg-[#1c3780] text-xl font-bold text-white shadow-sm">
              PT
            </div>

            {/* Company Name */}
            <div>
              <h1 className="text-lg font-extrabold tracking-wide text-[#1c3780] sm:text-xl">
                PANCHAL TRADERS
              </h1>

              <p className="mt-0.5 text-sm font-semibold text-red-600">
                पांचाल ट्रेडर्स
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <DesktopMenu />

          {/* Mobile Navigation */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;