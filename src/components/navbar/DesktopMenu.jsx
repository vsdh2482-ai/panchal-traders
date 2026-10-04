import { Link, NavLink } from "react-router-dom";
import { ClipboardList, MessageCircle } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Wholesale", path: "/wholesale" },
  { label: "About", path: "/our-company" },
  { label: "Contact", path: "/contact" },
];

const DesktopMenu = () => {
  return (
    <div className="hidden items-center gap-5 lg:flex">
      <nav className="flex items-center gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 text-[16px] font-semibold transition ${
                isActive
                  ? "bg-[#edf2fa] text-[#1c3780]"
                  : "text-[#171d2d] hover:bg-[#edf2fa] hover:text-[#1c3780]"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Link to={'/contact'} className="relative flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#171d2d] shadow-sm transition hover:border-[#1c3780] hover:shadow-md">
        <ClipboardList size={19} />
        <span>Enquiry</span>
      </Link>

      <a
        href="https://wa.me/918810580045"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-xl bg-[#0da34f] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#078b43]"
      >
        <MessageCircle size={20} />
        WhatsApp
      </a>
    </div>
  );
};

export default DesktopMenu;