import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import companyLogo from '../../assets/Panchal-Traders.png'
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
        <div className="mx-auto flex h-20 w-full max-w-360 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo + Company Name */}
          <a href="/" className="flex items-center gap-3">
          
            <div className="flex h-14 w-14 shrink-0 items-center justify-center text-xl font-bold text-white rounded-full">
             <img src={companyLogo} className="w-60" alt="Company " />
            </div>
            <div>
             
              <h1 className="text-lg font-extrabold tracking-wide text-[#1c3780] sm:text-xl hidden md:flex">
                PANCHAL TRADERS
              </h1>

              <p className="mt-0.5 text-sm font-semibold text-red-600 hidden md:flex">
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