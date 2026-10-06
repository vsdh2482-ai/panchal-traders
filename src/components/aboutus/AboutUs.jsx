import React from "react";
import {
  CheckCircle,
  Plus,
  ArrowRight,
} from "lucide-react";
import { assets } from "../../assets/assets";
import happy from '../../assets/images/smile.png'

const AboutUs = () => {
 
  const pointsLeft = [
    "Quality Products",
    "Trusted Brands",
    "Expert Guidance",
  ];

  const pointsRight = [
    "Your Space Is Our Inspiration",
    "Reliable Products & Materials",
    "Customer Satisfaction",
  ];


  return (
    <section className="overflow-hidden bg-[#f8fafc] py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-3 lg:grid-cols-[4fr_8fr] lg:gap-10">
          <div className="relative mx-auto w-full max-w-150 hidden md:flex">

            <div className="grid grid-cols-2 gap-3">

              {/* Left Large Image */}
              <div className="pt-20">
                <div className="h-40 overflow-hidden rounded-2xl sm:h-55">
                  <img
                     src={assets.aboutImage}
                    alt="Building material products"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {/* Happy Customers */}
                <div className="mt-7 rounded-2xl bg-orange-50 px-5 py-6">
                  <div className="flex items-center justify-center">

                    {/* Customer 1 */}
                    <img
                      src={happy}
                      alt="Customer"
                      className="h-11 w-11 rounded-full border-2 border-white object-cover"
                    />

                    {/* Customer 2 */}
                    <img
                      src={happy}
                      alt="Customer"
                      className="-ml-3 h-11 w-11 rounded-full border-2 border-white object-cover"
                    />

                    {/* Customer 3 */}
                    <img
                       src={happy}
                      alt="Customer"
                      className="-ml-3 h-11 w-11 rounded-full border-2 border-white object-cover"
                    />

                    {/* Customer 4 */}
                    <img
                       src={happy}
                      alt="Customer"
                      className="-ml-3 h-11 w-11 rounded-full border-2 border-white object-cover"
                    />

                    {/* Plus */}
                    <div className="-ml-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-red-600 text-white">
                      <Plus size={21} />
                    </div>
                  </div>

                  <p className="mt-3 text-center text-sm font-semibold text-gray-700">
                    Happy Customers
                  </p>
                </div>
              </div>

              {/* Right Images */}
              <div className="space-y-3">

                <div className="h-40 overflow-hidden rounded-2xl sm:h-55">
                  <img
                    src={assets.aboutImage}
                    alt="Home improvement"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="h-40 overflow-hidden rounded-2xl sm:h-55">
                  <img
                    src={assets.aboutImage}
                    alt="Construction work"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

              </div>
            </div>
          </div>

          <div>

            {/* Label */}
            <div className="mb-5 inline-flex rounded-md bg-orange-50 px-4 py-2">
              <span className="text-sm font-semibold text-red-600">
               About Panchal Traders
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 sm:text-3xl">
               Your Trusted Partner for Quality 
              <span className="block text-red-600">
                Building Materials
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-[15px] leading-7 text-gray-600 sm:text-base">
            Panchal Traders is a trusted wholesale and retail supplier of plumbing, paints, electrical, sanitary, and hardware materials in Khetasarai, Jaunpur. We provide a wide range of quality products to meet the needs of homeowners, contractors, builders, plumbers, electricians, and businesses.
            </p>

            {/* <p className="mt-3 max-w-2xl text-[15px] leading-7 text-gray-600 sm:text-base">
              {aboutText1}
            </p> */}
            <div className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">

              {/* Left */}
              <div className="space-y-4">
                {pointsLeft.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle
                      size={21}
                      fill="currentColor"
                      className="shrink-0 text-red-600"
                    />

                    <span className="text-sm font-medium text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right */}
              <div className="space-y-4">
                {pointsRight.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle
                      size={21}
                      fill="currentColor"
                      className="shrink-0 text-red-600"
                    />

                    <span className="text-sm font-medium text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-gray-200" />
            <div className="flex flex-wrap gap-12">

              <div>
                <h3 className="text-4xl font-semibold text-blue-950">
                  98%
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Customer Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-semibold text-blue-950">
                  500+
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Products Available
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-semibold text-blue-950">
                  25+
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Trusted Brands
                </p>
              </div>

            </div>

            {/* Button */}
            {/* <button
              type="button"
              className="group mt-8 inline-flex items-center gap-3 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
            >
              Contact Us

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;