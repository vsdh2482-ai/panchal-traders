import React from 'react'
import AboutUs from '../components/aboutus/AboutUs';
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import SEO from '../components/SEO';
const OurCompany = ({t}) => {
   const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Panchal Traders",
    url: "https://panchaltraders.com/about-us",
  };
  return (
    <>
     <SEO
        title="About Panchal Traders | Hardware Store in Khetasarai, Jaunpur"
        description="Learn about Panchal Traders, a wholesale and retail hardware, plumbing, sanitaryware, paint, electrical and home appliances store in Khetasarai, Jaunpur."
        ogDescription="Learn about Panchal Traders, a wholesale and retail hardware, plumbing, sanitaryware, paint, electrical and home appliances store in Khetasarai, Jaunpur."
        canonical="https://panchaltraders.com/about-us"
        image="https://panchaltraders.com/images/about-og.jpg"
        schema={schema}
      />
   
    <div>
       <Breadcrumb title={'Panchal Traders'}/>
        <AboutUs/>
    </div>
     </>
  )
}

export default OurCompany
