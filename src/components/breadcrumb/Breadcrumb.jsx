import React from 'react'
import BreadcumImage from "../../assets/images/hero-hm2-bg.webp";

const Breadcrumb = ({title}) => {
  return (
     <section style={{ backgroundImage: `url(${BreadcumImage})` }}
      className="relative flex min-h-50 lg:min-h-60 items-center justify-center overflow-hidden bg-cover bg-center"
    >
      <div className="relative z-10 mx-auto w-full max-w-360 px-6">
        <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
            <span className="h-0.5 w-10 bg-red-600"></span>

            <span className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
                Welcome
            </span>
            </div>
            <h1 className="text-3xl font-semibold leading-tight sm:text-3xl md:text-4xl text-white">
                {title}
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 md:text-base hidden lg:flex text-white">
                Explore our website and discover more information about {title}.
            </p>
         </div>
        </div>
    </section>
  )
}

export default Breadcrumb
