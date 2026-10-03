import { MapPin, Phone, Languages } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";



const TopBar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
    const { language, setLanguage } = useLanguage();
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

        <div className="flex items-center gap-1 rounded-full border border-white/30 p-0.5">
          <Languages
            size={15}
            className="ml-2 text-white"
          />

          {/* English */}
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
              language === "en"
                ? "bg-[#f5bd32] text-[#172f72]"
                : "text-white/80 hover:text-white"
            }`}
          >
            EN
          </button>

          {/* Hindi */}
          <button
            type="button"
            onClick={() => setLanguage("hi")}
            className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
              language === "hi"
                ? "bg-[#f5bd32] text-[#172f72]"
                : "text-white/80 hover:text-white"
            }`}
          >
            हिंदी
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;