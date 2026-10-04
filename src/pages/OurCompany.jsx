import React from 'react'
import AboutUs from '../components/aboutus/AboutUs';
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
const OurCompany = ({t}) => {
  return (
    <div>
       <Breadcrumb title={'Panchal Traders'}/>
        <AboutUs/>
    </div>
  )
}

export default OurCompany
