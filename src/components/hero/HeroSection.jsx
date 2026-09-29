import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import heroBg from "../../assets/images/hero-shop-BVaPkhuU.jpg";
import heroProduct from "../../assets/images/hero-shop-BVaPkhuU.jpg";

const HeroSection = () => {
  return (
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2b69]/95 via-[#123879]/85 to-[#163d7c]/70" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-128px)] max-w-[1440px] w-full mx-auto items-center px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-2xl">

            {/* Location Badge */}
            <div className="mb-5 inline-flex rounded-full bg-[#f8bd32] px-4 py-2">
              <span className="text-xs font-extrabold tracking-wide text-[#17254b] sm:text-sm">
                KHETASARAI, JAUNPUR
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Panchal Traders
            </h1>

            {/* Hindi Title */}
            <p className="mt-4 text-2xl font-bold text-[#f8bd32] sm:text-3xl">
              पांचाल ट्रेडर्स
            </p>

            {/* Tagline */}
            <div className="mt-7">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Best Quality • Best Price • Best Choice
              </h2>

              <p className="mt-2 text-base font-medium text-white/85 sm:text-lg">
                उत्तम सामान • उचित दाम • बेहतर चुनाव
              </p>
            </div>

            {/* Categories */}
            <div className="mt-7">
              <p className="text-base font-medium leading-8 text-white sm:text-lg">
                Plumbing • Paints • Electrical • Sanitary • Hardware
              </p>

              <p className="text-base font-bold text-[#f8bd32] sm:text-lg">
                Wholesale & Retail Trader / Supplier
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              {/* View Products */}
              <Link
                to="/products"
                className="group inline-flex min-h-[60px] items-center justify-center gap-3 rounded-xl bg-[#f8bd32] px-7 text-base font-bold text-[#17213c] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#ffca42]"
              >
                <span>View Products</span>

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

                <span>Ask on WhatsApp</span>
              </a>

              {/* Call */}
              <a
                href="tel:8810580045"
                className="inline-flex min-h-[60px] items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-7 text-base font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <Phone size={20} />

                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Image Wrapper */}
            <div className="relative w-full max-w-[680px]">

              {/* Yellow Border */}
              <div className="overflow-hidden rounded-[26px] border-[5px] border-[#f8bd32] bg-white shadow-2xl">

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