import React from 'react'
import { FaWhatsapp} from "react-icons/fa";

import { MdOutlineQuestionMark } from "react-icons/md";
import { PiCurrencyInrDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import {plumbingProducts} from '../../data/plumbingProducts'
import Breadcrumb from '../breadcrumb/Breadcrumb';

const PlumbingProducts = () => {
  return (
    <>
    <Breadcrumb title={'Product Catalogue'}/>
    <div className='w-full max-w-360 mx-auto px-4'>
      
     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 pb-10">
      {plumbingProducts.map((product) => (
        <div
          key={product.id}
          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm group"
          >
           <div className='overflow-hidden'> 
            <Link to={product.path}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-65 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </Link>  
          </div>
          <div className="p-4">
            <div className="flex flex-col items-start">
            <Link
              to={product.path}
              className="text-lg font-semibold text-gray-900 transition-all duration-300 hover:text-orange-600"
            >
              {product.title}
            </Link>

            <span className="mt-2 inline-block rounded-full bg-red-400 px-3 py-1 text-xs font-medium text-white">
              {product.brand}
            </span>
          </div>

            <p className="mt-2 text-sm text-gray-600">
              {product.description}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={'whatsappUrl'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              <PiCurrencyInrDuotone />
              Get Best Price
            </a>

          {/* WhatsApp */}
          <a
            href='https://www.whatsapp.com/'
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp
          </a>

          {/* Enquiry */}
          <button
            type="button"
            className="col-span-2 flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-[#1c3780] hover:bg-blue-50 hover:text-[#1c3780]"
            onClick={() => {
              console.log("Enquiry:", product.title);
            }}
          >
            <MdOutlineQuestionMark />
            Enquiry
          </button>

          </div>
          </div>
        </div>
      ))}
     </div>
    </div>
    </>
  )
}

export default PlumbingProducts