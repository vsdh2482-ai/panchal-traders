
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import heroProduct from "../../assets/images/panchaltradersBanner.jpg";

const HeroSection = ({ t }) => {
  return (
    <section
      className="relative min-h-[calc(100vh-128px)] overflow-hidden"
      style={{
        backgroundImage: `url(${heroProduct})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0d2b68]/30" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0b2b69]/95 via-[#123879]/85 to-[#163d7c]/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-128px)] w-full max-w-360 items-center px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            {/* Location Badge */}
            <div className="mb-5 inline-flex rounded-full bg-red-600 px-4 py-2">
              <span className="text-xs font-extrabold tracking-wide text-white sm:text-sm">
                {t?.location}
              </span>
            </div>

            {/* Main Title */}
            <h3 className="text-lg font-semibold leading-[1.05] tracking-tight sm:text-lg lg:text-2xl uppercase mb-3 text-gray-200">
              {t?.mainTitle}
            </h3>
            <h1 className="text-3xl font-semibold tracking-wide leading-[1.05] text-gray-200 sm:text-6xl lg:text-5xl">Hardware, Electrical & Plumbing in Khetasarai Jaunpur</h1>

            {/* Hero Title */}
            <div className="mt-4 md:mt-7">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                {t?.heroTitle}
              </h2>
            </div>

            {/* Description */}
            <div className="mt-4 md:mt-7">
              <p className="text-base font-medium leading-8 text-white sm:text-lg">
                {t?.tagline}
              </p>

              <p className="text-base font-bold text-red-400 sm:text-lg">
                {t?.wholesale}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-3 hidden flex-col gap-3 md:flex sm:flex-row sm:flex-wrap md:mt-6">

              {/* Products */}
              <Link
                to="/products"
                className="group inline-flex min-h-[60px] items-center justify-center gap-3 rounded-xl bg-red-600 px-7 text-base font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-red-500"
              >
                <span>{t?.view}</span>

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918810580045"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[60px] items-center justify-center gap-3 rounded-xl bg-[#0aa650] px-7 text-base font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#078d45]"
              >
                <MessageCircle size={21} />

                <span>{t?.whatsapp}</span>
              </a>

              {/* Call */}
              <a
                href="tel:+918810580045"
                className="inline-flex min-h-[60px] items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-7 text-base font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <Phone size={20} />

                <span>{t?.callNow}</span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[680px]">
              <div className="overflow-hidden rounded-[26px] border-[5px] border-gray-50 bg-white shadow-2xl">
                <img
                  src={heroProduct}
                  alt="Panchal Traders Products"
                  className="h-[300px] w-full object-cover sm:h-[400px] md:h-[450px] lg:h-[510px]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

