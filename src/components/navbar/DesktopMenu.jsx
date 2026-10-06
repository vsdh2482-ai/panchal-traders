import { Link, NavLink } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";
import { ClipboardList } from "lucide-react";
import {useEnquiry} from '../../context/EnquiryContext'
const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Wholesale", path: "/wholesale" },
  { label: "About", path: "/our-company" },
  { label: "Contact", path: "/contact" },
];

const DesktopMenu = () => {
  const {enquiries} = useEnquiry()
  return (
    <>
    <div className="hidden items-center gap-5 lg:flex">
      <nav className="flex items-center gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 text-[14px] font-semibold transition ${
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
    </div>
    <div className="md:flex items-center gap-3 hidden">
       <Link
          to="/enquiry"
          className="relative flex items-center gap-2 rounded-lg border border-red-500 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
        >
          <ClipboardList size={18} />

          <span>Enquiry</span>

          {enquiries.length > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
              {enquiries.length}
            </span>
          )}
       </Link>

      <a
        href="https://wa.me/918810580045"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-xl bg-[#0da34f] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#078b43]"
      >
        <IoLogoWhatsapp size={20} />
        WhatsApp
      </a>
    </div>
    </>
  );
};

export default DesktopMenu;