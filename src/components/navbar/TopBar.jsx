import { MapPin, Phone, Languages } from "lucide-react";
import { useState } from "react";

const TopBar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
  return (
    <div className={`bg-[#1c3780] text-white ${isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"}`}>
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-2.5 text-xs sm:px-6 lg:px-8">
        {/* Address */}
        <div className="flex min-w-0 items-center gap-2">
          <MapPin size={16} className="shrink-0" />

          <p className="truncate font-medium">
            Bharti Vidyapeeth, Dobhi Mor, Near State Bank of India,
            Khetasarai, Jaunpur, Uttar Pradesh - 222139
          </p>
        </div>

        {/* Contact + Language */}
        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <a
            href="tel:8810580045"
            className="flex items-center gap-2 transition hover:text-yellow-300"
          >
            <Phone size={15} />
            8810580045
          </a>

          <a
            href="tel:6390080551"
            className="flex items-center gap-2 transition hover:text-yellow-300"
          >
            <Phone size={15} />
            6390080551
          </a>

          <div className="flex items-center gap-2 rounded-full border border-white/30 p-0.5">
            <Languages size={14} className="ml-2" />
            <button className="rounded-full bg-[#f5bd32] px-3 py-1 font-semibold text-[#172f72]">
              EN
            </button>
            <button className="px-2 py-1 text-white/80 hover:text-white">
              हिंदी
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;