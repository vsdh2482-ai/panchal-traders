
import { useState } from "react";
import {
  ClipboardList,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import MenuLogo from '../../assets/Panchal-Traders.png'
const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Wholesale", path: "/wholesale" },
  { label: "About", path: "/our-company" },
  { label: "Contact", path: "/contact" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Mobile Header Actions */}
      <div className="flex items-center gap-2">
        <a
          href="https://wa.me/918810580045"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0da34f] text-white"
        >
          <MessageCircle size={20} />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-[#1c3780]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Left Side Mobile Menu */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-2 bg-[#1c3780]">
          <h2 className="text-lg border-2 rounded-full border-white">
           <img src={MenuLogo} alt="Logo" className="w-10" />
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-[#1c3780]"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 px-4 py-5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-4 py-3 font-semibold text-[#171d2d] transition hover:bg-[#edf2fa] hover:text-[#1c3780]`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom Actions */}
        {/* <div className="mx-4 border-t border-gray-100 pt-4">
          <div className="flex flex-col gap-2">
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-3 text-sm font-semibold">
              <ClipboardList size={18} />
              Enquiry

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d71929] text-xs text-white">
                1
              </span>
            </button>

            <a
              href="https://wa.me/918810580045"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0da34f] px-3 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MobileMenu;

