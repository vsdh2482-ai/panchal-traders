import React from 'react'
import {MapPinCheckInside, MessagesSquare, PhoneCall, Mail,  MapPin,
  ArrowUpRight, } from 'lucide-react'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <section className='bg-blue-950 pt-10 xl:pt-15 relative overflow-hidden'>
        <div className='w-full max-w-360 mx-auto px-4'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className='flex items-center'>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[50%_50%_50%_0] bg-[#d67a26]">
                    <Mail size={19} className="text-white" />
                  </div>

                  <div className="border-l border-white/10 pl-5">
                    <span className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-[#d67a26]">
                      E-mail Us:
                    </span>
                    <a
                      href="tel:+918810580045"
                      className="text-lg font-semibold tracking-wide text-white transition-colors duration-300 hover:text-[#d67a26] sm:text-2xl"
                    >
                     bineshkumar@gmail.com
                    </a>
                  </div>
                </div>
              </div>
             
              <div className='flex items-center'>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[50%_50%_50%_0] bg-[#d67a26]">
                    <PhoneCall size={19} className="text-white" />
                  </div>

                  <div className="border-l border-white/10 pl-5">
                    <span className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-[#d67a26]">
                     Requesting A Call
                    </span>

                    <a
                      href="tel:+918810580045"
                      className="text-lg font-semibold tracking-wide text-white transition-colors duration-300 hover:text-[#d67a26] sm:text-2xl"
                    >
                      +91 88105 80045
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[50%_50%_50%_0] bg-[#d67a26]">
                    <PhoneCall size={19} className="text-white" />
                  </div>

                  <div className="border-l border-white/10 pl-5">
                    <span className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-[#d67a26]">
                     Location Here
                    </span>

                    <a
                      href="tel:+918810580045"
                      className="text-md font-semibold tracking-wide text-white transition-colors duration-300 hover:text-[#d67a26] sm:text-2xl"
                    >
                      +91 6390 0805 51
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-360 py-16">

              <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1.2fr]">

                {/* Company */}
                <div>
                  <a href="/" className="mb-6 inline-flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-red-600 bg-gray-200 text-xl font-bold shadow-lg">
                      PT
                    </div>

                    <div>
                      <h2 className="text-xl font-extrabold tracking-wide text-white">
                        PANCHAL TRADERS
                      </h2>

                      <p className="text-sm font-semibold text-[#d67a26]">
                        पांचाल ट्रेडर्स
                      </p>
                    </div>
                  </a>

                  <p className="max-w-md text-sm leading-7 text-gray-400">
                    Bharti Vidyapeeth, Dobhi Mor,
                    Near SBI Bank, Khetasarai, Jaunpur,
                    Uttar Pradesh - 222139, India
                  </p>

                  {/* Social / Arrow */}
                  <div className="mt-7 relative z-40">
                    <a
                      href="#"
                      className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-[#d67a26]"
                    >
                      <ArrowUpRight
                        size={20}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </a>
                  </div>
                </div>


                {/* Quick Links */}
                <div>
                  <h3 className="mb-6 text-lg font-semibold text-white">
                    Quick Links
                  </h3>

                  <div className="h-1 w-10 bg-[#d67a26]" />

                  <ul className="mt-6 space-y-1">
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-400 transition-colors hover:text-[#d67a26]"
                      >
                        Home
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-400 transition-colors hover:text-[#d67a26]"
                      >
                        About Us
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-400 transition-colors hover:text-[#d67a26]"
                      >
                        Products
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-400 transition-colors hover:text-[#d67a26]"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>


                {/* Contact */}
                <div>
                  <h3 className="mb-6 text-lg font-semibold text-white">
                    Contact Us
                  </h3>

                  <div className="h-1 w-10 bg-[#d67a26]" />

                  <div className="mt-6 space-y-6">

                    
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d67a26]">
                        <MapPin size={18} className="text-white" />
                      </span>

                      <div>
                        <span className="block text-xs uppercase tracking-wider text-gray-500">
                          Our Address
                        </span>

                        <p className="mt-1 text-sm leading-6 text-gray-400">
                          Bharti Vidyapeeth, Dobhi Mor,
                          Near SBI Bank, Khetasarai,
                          Jaunpur, Uttar Pradesh - 222139
                        </p>
                      </div>
                    </div>


                    {/* Email */}
                    <a
                      href="mailto:info@example.com"
                      className="group flex items-center gap-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d67a26] transition-all duration-300 group-hover:bg-white">
                        <Mail
                          size={18}
                          className="text-white transition-colors group-hover:text-[#1c3780]"
                        />
                      </span>

                      <div>
                        <span className="block text-xs uppercase tracking-wider text-gray-500">
                          Email Us
                        </span>

                        <span className="text-sm text-gray-300 transition-colors group-hover:text-[#d67a26]">
                          bineshkumar@gmail.com
                        </span>
                      </div>
                    </a>

                  </div>
                </div>

              </div>
            </div>


            {/* Bottom Footer */}
            <div className="border-t border-white/10">
              <div className="mx-auto flex max-w-360 flex-col items-center justify-between gap-3 py-5 text-center md:flex-row md:text-left">

                <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()}{" "}
                  <span className="font-medium text-gray-300">
                    Panchal Traders
                  </span>
                  . All Rights Reserved.
                </p>

                <p className="text-sm text-gray-500">
                  Designed & Developed with ❤️
                </p>

              </div>
            </div>
        </div>
        <div className='absolute top-0 -left-1'>
          <img src={assets.imageFooter1} alt='shape' className='w-full h-auto' />
        </div>
        <div className='absolute top-0 right-0'>
          <img src={assets.imageFooter2} alt='shape' className='w-full h-auto' />
        </div>
    </section>
  )
}

export default Footer