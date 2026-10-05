import React from 'react'
import categories from '../../data/categories'
import { Link } from "react-router-dom";
import { assets } from '../../assets/assets';
const OurCategories = ({t}) => {
    
  return (
    <section className='relative w-full bg-no-repeat bg-contain py-6 md:py-12' style={{backgroundImage:`url(${assets.dropBbg})`}}>
    
        <div className='w-full max-w-360 mx-auto px-4'>
          <div className="mb-6 md:mb-12 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
                <span className="h-0.5 w-10 rounded-full bg-red-800"></span>

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-800">
                  {t.subtitle}
                </span>

                <span className="h-0.5 w-10 rounded-full bg-red-800"></span>
                </div>

                <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                    {t.title}
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
                  {t.titleparagraph}
                </p>
            </div>
             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
              const title = t[`categoryTitle${category.id}`];
              const description = t[`categoryParagraph${category.id}`];
             
            return (
              <div
                key={category.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Image */}
                <Link to={category.link}>
                  <div className="relative h-85 overflow-hidden">
                    <img
                      src={category.image}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#1c3780]/10 via-transparent to-transparent opacity-70" />
                  </div>
                </Link>

                {/* Content */}
                <div className="flex min-h-45 flex-col p-6">

                  {/* Title */}
                  <Link to={category.link}
                        className="text-xl font-medium text-gray-900"
                        >
                        {t[`categoryTitle${category.id}`] || category.title}
                      
                    </Link>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-[17px] leading-6 text-gray-600">
                    {description}
                  </p>

                  {/* Button */}
                  <Link
                    to={category.link}
                    className="group/link mt-2 flex w-fit items-center gap-2 py-2.5 text-sm font-semibold text-red-600 transition-all duration-300 hover:text-red-700"
                  >
                    {category.buttonText}

                    <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        </div>
    </section>
  )
}

export default OurCategories