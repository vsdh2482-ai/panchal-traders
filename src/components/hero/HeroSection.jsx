import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import heroBg from "../../assets/images/hero-shop-BVaPkhuU.jpg";
<<<<<<< HEAD
import heroProduct from "../../assets/images/panchal-traders-banner.png";
=======
import heroProduct from "../../assets/images/hero-shop-BVaPkhuU.jpg";
>>>>>>> 074ad932a5e145bebc48c8adbe644a5661c9cb80

const HeroSection = ({t}) => {
  return (
    <>
    <section className="relative min-h-[calc(100vh-128px)] overflow-hidden" style={{
        backgroundImage:`url(${heroProduct})`
    }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#0d2b68]/30" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0b2b69]/95 via-[#123879]/85 to-[#163d7c]/70" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-128px)] max-w-360 w-full mx-auto items-center px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-16">

        
          <div className="max-w-2xl">

            {/* Location Badge */}
            <div className="mb-5 inline-flex rounded-full bg-red-600 px-4 py-2">
              <span className="text-xs font-extrabold tracking-wide text-white sm:text-sm">
                {t.location}
              </span>
            </div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
             {t.mainTitle}
            </h1>
            <div className="mt-4 md:mt-7">
             
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                {t.heroTitle}
              </h2>
            </div>
            <div className="mt-4 md:mt-7">
              <p className="text-base font-medium leading-8 text-white sm:text-lg">
                {t.tagline}
              </p>
              <p className="text-base font-bold text-red-400 sm:text-lg">
                {t.wholesale}
              </p>
            </div>
            <div className="mt-3 md:mt-6 hidden md:flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/products"
                className="group inline-flex min-h-15 items-center justify-center gap-3 rounded-xl bg-red-600 px-7 text-base font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-red-400"
              >
                <span>{t.view}</span>
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <a
                href="https://wa.me/918810580045"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-15 items-center justify-center gap-3 rounded-xl bg-[#0aa650] px-7 text-base font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#078d45]"
              >
                <MessageCircle size={21} />
                <span>{t.whatsapp}</span>
              </a>

              {/* Call */}
              <a
                href="tel:8810580045"
                className="inline-flex min-h-15 items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-7 text-base font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <Phone size={20} />

                <span>{t.callNow}</span>
              </a>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-170">
              <div className="overflow-hidden rounded-[26px] border-[5px] border-gray-50 bg-white shadow-2xl">
                <img
                  src={heroProduct}
                  alt="Panchal Traders Products"
                  className="h-75 w-full object-cover sm:h-100 md:h-112 lg:h-127"
                />

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
     </>
  );
};

export default HeroSection;