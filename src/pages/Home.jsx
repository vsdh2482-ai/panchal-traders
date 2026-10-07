import React from "react";
import HeroSection from "../components/hero/HeroSection";
import WholeSale from "../components/wholesale/WholeSale";
import OurCategories from "../components/categories/OurCategories";
import ShopByBrand from "../components/ShopByBrand/ShopByBrand";
import AboutUs from "../components/aboutus/AboutUs";

import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";
import FAQSection from "../components/faqs/FAQSection";
import RequestBulk from "../components/requestbulk/RequestBulk";
import SEO from "../components/SEO";
const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const schema = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    name: "Panchal Traders",
    url: "https://panchaltraders.com/",
    telephone: [
      "+91-8810580045",
      "+91-6390080551",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Bharti Vidyapeeth, Dobhi Mor, Near State Bank of India",
      addressLocality: "Khetasarai",
      addressRegion: "Uttar Pradesh",
      postalCode: "222139",
      addressCountry: "IN",
    },
  };
  return (
    <>
     <SEO
        title="Panchal Traders | Hardware, Electrical & Plumbing Store in Khetasarai, Jaunpur"
        description="Panchal Traders, Khetasarai, Jaunpur – hardware, plumbing, sanitaryware, paints, electrical products and home appliances. Wholesale & retail available."
        canonical="https://panchaltraders.com/"
        image="https://panchaltraders.com/images/homepage-og.jpg"
        schema={schema}
      />
      <main>
        <HeroSection t={t} />
        <WholeSale t={t} />
        <OurCategories t={t} />
        <ShopByBrand t={t} />
        <AboutUs t={t} />
        <RequestBulk/>
        <FAQSection/>
      </main>
    </>
  );
};

export default Home;