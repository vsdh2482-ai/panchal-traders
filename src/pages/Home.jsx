import React from "react";
import HeroSection from "../components/hero/HeroSection";
import WholeSale from "../components/wholesale/WholeSale";
import OurCategories from "../components/categories/OurCategories";
import ShopByBrand from "../components/ShopByBrand/ShopByBrand";
import AboutUs from "../components/aboutus/AboutUs";

import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

const Home = () => {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <>
      <HeroSection t={t} />
      <WholeSale t={t} />
      <OurCategories t={t} />
      <ShopByBrand t={t} />
      <AboutUs t={t} />
    </>
  );
};

export default Home;