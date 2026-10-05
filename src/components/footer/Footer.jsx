import React from 'react'
import {MapPinCheckInside, MessagesSquare, PhoneCall, Mail,  MapPin,
  ArrowUpRight, } from 'lucide-react'
  import { FaWhatsapp } from "react-icons/fa6";
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/Panchal-Traders.png'
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";
import googleReview from '../../assets/Google-Review-Symbol.png'
const Footer = () => {
  return (
    <section className='bg-blue-950 pt-10 xl:pt-15 relative overflow-hidden'>
        <div className='w-full max-w-360 mx-auto px-4'>
            <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className='flex items-center'>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[50%_50%_50%_0] bg-[#d67a26]">
                    <Mail size={19} className="text-white" />
                  </div>

                  <div className="border-l border-white/10 pl-2">
                    <a
                      href="mailto:thepanchaltraders@gmail.com"
                      className="text-md font-semibold tracking-wide text-white transition-colors duration-300 hover:text-[#d67a26] sm:text-md"
                    >
                     thepanchaltraders@gmail.com
                    </a>
                  </div>
                </div>
              </div>
             
              <div className='flex items-center'>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[50%_50%_50%_0] bg-[#d67a26]">
                    <FaWhatsapp size={19} className="text-white" />
                  </div>

                  <div className="border-l border-white/10 pl-3">
                    <span className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-[#d67a26]">
                     WhatsApp
                    </span>

                    <a
                      href="tel:+918810580045"
                      className="text-lg font-semibold tracking-wide text-white transition-colors duration-300 hover:text-[#d67a26] sm:text-md"
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
                    <a
                      href="tel:+918810580045"
                      className="text-md font-semibold tracking-wide text-white transition-colors duration-300 hover:text-[#d67a26] sm:text-md"
                    >
                      +91 6390 0805 51
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-360 py-0 md:py-16">

              <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1.2fr]">

                {/* Company */}
                <div>
                  <Link to={"/"} className="mb-6 inline-flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold shadow-lg">
                      <img src={footerLogo} alt="Panchal Traders" className='w-30 h-auto' />
                    </div>

                    <div>
                      <h2 className="text-xl font-extrabold tracking-wide text-white">
                        PANCHAL TRADERS
                      </h2>

                      <p className="text-sm font-semibold text-[#d67a26]">
                        पांचाल ट्रेडर्स
                      </p>
                    </div>
                  </Link>

                  <p className="max-w-md text-sm leading-7 text-gray-400">
                    Bharti Vidyapeeth, Dobhi Mor,
                    Near SBI Bank, Khetasarai, Jaunpur,
                    Uttar Pradesh - 222139, India
                  </p>

                  {/* Social / Arrow */}
                 <div className="mt-4 flex items-center gap-3">
                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/panchaltraders"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="group flex h-11 w-11 items-center justify-center rounded-full
                                border border-white/20 bg-white/10 text-white
                                backdrop-blur-md transition-all duration-300
                                hover:-translate-y-1 hover:border-[#1877F2]
                                hover:bg-[#1877F2]
                                hover:shadow-lg hover:shadow-[#1877F2]/30"
                    >
                      <BiLogoFacebook
                        size={22}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/thepanchaltraders/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="group flex h-11 w-11 items-center justify-center rounded-full
                                border border-white/20 bg-white/10 text-white
                                backdrop-blur-md transition-all duration-300
                                hover:-translate-y-1
                                hover:border-[#E1306C]
                                hover:bg-gradient-to-tr
                                hover:from-[#F58529]
                                hover:via-[#E1306C]
                                hover:to-[#833AB4]
                                hover:shadow-lg hover:shadow-[#E1306C]/30"
                    >
                      <FaInstagram
                        size={19}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>

                    {/* YouTube */}
                    <a
                      href="https://www.youtube.com/@panchal-traders"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="group flex h-11 w-11 items-center justify-center rounded-full
                                border border-white/20 bg-white/10 text-white
                                backdrop-blur-md transition-all duration-300
                                hover:-translate-y-1
                                hover:border-[#e7000b]
                                hover:bg-[#e7000b]
                                hover:shadow-lg hover:shadow-[#FF0000]/30"
                    >
                      <LuYoutube
                        size={21}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>

                    {/* Google Reviews */}
                    <a
                      href="https://g.page/r/CWlql9QVXxhJEAI/review"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Google Reviews"
                      className="group flex h-11 items-center gap-2 rounded-full
                                border border-white/20 bg-white/10 px-3
                                backdrop-blur-md transition-all duration-300
                                hover:-translate-y-1
                                hover:border-white/40
                                hover:bg-white
                                hover:shadow-lg"
                    >
                      <img
                        src={googleReview}
                        alt="Google Reviews"
                        className="h-7 w-auto object-contain transition-transform
                                  duration-300 group-hover:scale-105"
                      />

                      <span
                        className="text-xs font-semibold text-white transition-colors
                                  duration-300 group-hover:text-[#172f72]"
                      >
                        Reviews
                      </span>
                    </a>
                  </div>
                </div>


                {/* Quick Links */}
                <div>
                  <h3 className="mb-6 text-lg font-semibold text-white">
                    Quick Links
                  </h3>

                  <div className="h-1 w-10 bg-[#e7000b]" />

                  <ul className="mt-6 space-y-1">
                    <li>
                      <Link
                        to={'/'}
                        className="text-sm text-gray-400 transition-colors hover:text-[#d67a26]"
                      >
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={'/our-company'}
                        className="text-sm text-gray-400 transition-colors hover:text-[#e7000b]"
                      >
                        About Us
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={'/products'}
                        className="text-sm text-gray-400 transition-colors hover:text-[#e7000b]"
                      >
                        Products
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={'/contact'}
                        className="text-sm text-gray-400 transition-colors hover:text-[#e7000b]"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>


                {/* Contact */}
                <div>
                  <h3 className="mb-6 text-lg font-semibold text-white">
                    Contact Us
                  </h3>

                  <div className="h-1 w-10 bg-[#e7000b]" />

                  <div className="mt-6 space-y-6">

                    
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7000b]">
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
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7000b] transition-all duration-300 group-hover:bg-white">
                        <Mail
                          size={18}
                          className="text-white transition-colors group-hover:text-[#1c3780]"
                        />
                      </span>

                      <div>
                        <span className="block text-xs uppercase tracking-wider text-gray-500">
                          Email Us
                        </span>

                        <span className="text-sm text-gray-300 transition-colors group-hover:text-[#e7000b]">
                         thepanchaltraders@gmail.com
                        </span>
                      </div>
                    </a>

                  </div>
                </div>

              </div>
            </div>


            {/* Bottom Footer */}
            <div className="border-t border-white/10">
              <div className="mx-auto flex max-w-360 flex-col items-center justify-center gap-3 py-5 text-center md:flex-row md:text-left">

                <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()}{" "}
                  <span className="font-medium text-gray-300">
                    Panchal Traders
                  </span>
                  . All Rights Reserved.
                </p>

                {/* <p className="text-sm text-gray-500">
                  Designed & Developed with ❤️
                </p> */}

              </div>
            </div>
        </div>
         <div className="absolute top-0 -left-4 max-[1800px]:hidden">
            <img
              src={assets.imageFooter1}
              alt="shape"
              className="w-full h-auto"
            />
          </div>

          <div className="absolute top-0 right-0 max-[1800px]:hidden">
            <img
              src={assets.imageFooter2}
              alt="shape"
              className="w-full h-auto"
            />
          </div>
         <div className="mt-0 relative z-40">
            <a
              href="#"
              className="group inline-flex h-11 w-11 z-20 items-center justify-center rounded-full absolute right-10 bottom-20 bg-white transition-all duration-300 hover:bg-[#d67a26]"
            >
              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </a>
          </div>
    </section>
  )
}

export default Footer