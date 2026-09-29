import { useState } from "react";
import {
  ClipboardList,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

const navItems = ["Home", "Products", "Wholesale", "About", "Contact"];

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

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-t border-gray-100 bg-white px-4 py-4 shadow-lg sm:px-6">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 font-semibold transition ${
                  item === "Home"
                    ? "bg-[#edf2fa] text-[#1c3780]"
                    : "text-[#171d2d] hover:bg-[#edf2fa] hover:text-[#1c3780]"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-3 flex gap-2 border-t border-gray-100 pt-3">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-3 text-sm font-semibold">
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
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0da34f] px-3 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;