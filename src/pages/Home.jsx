import React from 'react'
import HeroSection from '../components/hero/HeroSection';
import WholeSale from '../components/wholesale/WholeSale';
import OurCategories from '../components/categories/OurCategories';
import ShopByBrand from '../components/ShopByBrand/ShopByBrand';
import AboutUs from '../components/aboutus/AboutUs';

const Home = () => {
  return (
    <>
    <HeroSection/>
    <WholeSale/>
    <OurCategories/>
    <ShopByBrand/>
    <AboutUs/>
    </>
  )
}

export default Home