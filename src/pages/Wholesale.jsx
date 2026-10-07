import React, { useState } from "react";
import {
  Droplets,
  PaintBucket,
  Zap,
  Bath,
  Wrench,
  ArrowRight,
  X,
  User,
  Mail,
  Phone,
  MessageSquare,
  Check,
  Send,
  ChevronDown,
} from "lucide-react";

import plumbing from "../assets/images/category/whole-plumbing.jpg";
import paints from "../assets/images/category/whole-paint.jpg";

// Add your images here when available
import electrical from "../assets/images/category/whole-electrical.jpg";
import snatry from "../assets/images/category/snatry.jpg";
import wholehard from "../assets/images/category/whole-hard.jpg";
import applianance from "../assets/images/category/HomeAppliances.jpg";

const Wholesale = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // --------------------------------------------------
  // CATEGORY DATA
  // --------------------------------------------------

  const categories = [
    {
      name: "Plumbing",
      slug: "plumbing",
      description:
        "Pipes, fittings, valves & plumbing accessories",
      image: plumbing,
      icon: Droplets,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-700",
      products: [
        "CPVC Pipes",
        "UPVC Pipes",
        "PVC Pipes",
        "Pipe Fittings",
        "CPVC Fittings",
        "UPVC Fittings",
        "Valves",
        "Water Tanks",
        "Plumbing Accessories",
      ],
    },

    {
      name: "Paints",
      slug: "paints",
      description:
        "Interior, exterior paints, primer & putty",
      image: paints,
      icon: PaintBucket,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
      products: [
        "Interior Wall Paint",
        "Exterior Wall Paint",
        "Primer",
        "Wall Putty",
        "Enamel Paint",
        "Wood Paint",
        "Metal Paint",
        "Waterproofing",
        "Paint Accessories",
      ],
    },

    {
      name: "Electrical",
      slug: "electrical",
      description:
        "Wires, switches, sockets, MCB & accessories",
      image: electrical,
      icon: Zap,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-700",
      products: [
        "Electrical Wires",
        "Cables",
        "Switches",
        "Sockets",
        "MCB",
        "DB Box",
        "LED Lights",
        "Fans",
        "Electrical Accessories",
      ],
    },

    {
      name: "Sanitary",
      slug: "sanitary",
      description:
        "Wash basins, WC, faucets, showers & fittings",
      image: snatry,
      icon: Bath,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-700",
      products: [
        "Wash Basin",
        "Western Toilet",
        "Indian Toilet",
        "Faucets",
        "Shower",
        "Health Faucet",
        "Bathroom Accessories",
        "Sanitaryware",
        "Sanitary Fittings",
      ],
    },

    {
      name: "Hardware",
      slug: "hardware",
      description:
        "Tools, fasteners, door hardware & accessories",
      image: wholehard,
      icon: Wrench,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-700",
      products: [
        "Door Locks",
        "Door Handles",
        "Door Hinges",
        "Tower Bolts",
        "Screws",
        "Nails",
        "Hand Tools",
        "Power Tools",
        "Hardware Accessories",
      ],
    },
    {
      name: "Home Appliances",
      slug: "appliances",
      description:
        "Quality home appliances for everyday cooking, cleaning & household needs",
      image: applianance,
      icon: Wrench,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700",
      products: [
        "Mixer Grinder",
        "Electric Kettle",
        "Induction Cooktop",
        "Electric Iron",
        "Room Heater",
        "Ceiling Fan",
        "Table Fan",
        "Exhaust Fan",
        "Water Heater",
        "Kitchen Appliances",
      ],
    },
  ];

  // --------------------------------------------------
  // OPEN MODAL
  // --------------------------------------------------

  const openEnquiry = (category) => {
    setSelectedCategory(category);
    setSelectedProducts([]);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  // --------------------------------------------------
  // CLOSE MODAL
  // --------------------------------------------------

  const closeEnquiry = () => {
    setSelectedCategory(null);
    setSelectedProducts([]);
  };

  // --------------------------------------------------
  // INPUT CHANGE
  // --------------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // --------------------------------------------------
  // CHECKBOX
  // --------------------------------------------------

  const handleProductChange = (product) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((item) => item !== product)
        : [...prev, product]
    );
  };

  // --------------------------------------------------
  // WHATSAPP SUBMIT
  // --------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!formData.phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    if (!selectedCategory) {
      alert("Please select a category.");
      return;
    }

    if (selectedProducts.length === 0) {
      alert("Please select at least one product.");
      return;
    }

    // Product list
    const productsText = selectedProducts
      .map((product) => `• ${product}`)
      .join("\n");

    // WhatsApp message
    const whatsappMessage = `
*PANCHAL TRADERS - WHOLESALE ENQUIRY*

*Customer Details*
Name: ${formData.name}
Email: ${formData.email || "Not provided"}
Phone: ${formData.phone}

*Category*
${selectedCategory.name}

*Products Required*
${productsText}

*Additional Requirement*
${formData.message || "No additional requirement"}

Please share the best wholesale price and availability.
    `.trim();

    // WhatsApp number
    const whatsappNumber = "918810580045";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Optional reset
    closeEnquiry();
  };

  return (
    <>
      {/* =====================================================
          CATEGORY SECTION
      ===================================================== */}

      <section className="bg-slate-50 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-360">

          {/* Heading */}
          <div className="mb-10 text-center">
            <div className="mb-3 flex items-center justify-center gap-3"><span className="h-0.5 w-10 rounded-full bg-red-800"></span><span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-800">Wholesale Enquiry</span><span className="h-0.5 w-10 rounded-full bg-red-800"></span></div>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl lg:text-3xl">
              Select Your Product Category
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Select a category to tell us exactly what products you require.
            </p>
          </div>

          {/* =================================================
              CATEGORY CARDS
          ================================================= */}

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.slug}
                  className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Image */}
                  <div className="relative h-[360px] overflow-hidden">

                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    {/* Icon */}
                    <div
                      className={`absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg ${category.iconColor}`}
                    >
                      <Icon size={25} strokeWidth={2} />
                    </div>

                    {/* Category name */}
                    <h3 className="absolute bottom-5 cursor-pointer left-6 text-2xl font-semibold text-white">
                      {category.name}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">

                    <p className="min-h-[58px] text-[16px] leading-7 text-[#5271a5]">
                      {category.description}
                    </p>

                    <div className="my-5 h-px bg-slate-100" />

                    {/* Button */}
                    <button
                      type="button"
                      onClick={() => openEnquiry(category)}
                      className="group/button flex w-full items-center justify-between cursor-pointer"
                    >
                      <span className="font-semibold text-[#1c4594]">
                        Select Products
                      </span>

                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e9eef8] text-[#1c4594] transition-all duration-300 group-hover/button:bg-[#1c4594] group-hover/button:text-white">
                        <ArrowRight
                          size={20}
                          className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                        />
                      </span>
                    </button>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          MODAL
      ===================================================== */}

      {selectedCategory && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeEnquiry();
            }
          }}
        >

          {/* Modal */}
          <div className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">

            {/* =================================================
                MODAL HEADER
            ================================================= */}

            <div className="relative bg-[#1c4594] px-6 py-6 text-white sm:px-8">

              {/* Close */}
              <button
                type="button"
                onClick={closeEnquiry}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <X size={20} />
              </button>

              <div className="pr-12">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                  Wholesale Enquiry
                </p>

                <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                  {selectedCategory.name} Products
                </h2>

                <p className="mt-2 text-sm leading-6 text-blue-100">
                  Select the products you need and share your requirement.
                </p>

              </div>
            </div>

            {/* =================================================
                FORM AREA
            ================================================= */}

            <div className="max-h-[calc(92vh-150px)] overflow-y-auto">

              <form
                onSubmit={handleSubmit}
                className="p-5 sm:p-8"
              >

                {/* =================================================
                    NAME / EMAIL
                ================================================= */}

                <div className="grid gap-5 md:grid-cols-2">

                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">

                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-[#1c4594] focus:ring-4 focus:ring-[#1c4594]/10"
                      />

                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Email Address
                    </label>

                    <div className="relative">

                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-[#1c4594] focus:ring-4 focus:ring-[#1c4594]/10"
                      />

                    </div>
                  </div>

                </div>

                {/* =================================================
                    PHONE / CATEGORY
                ================================================= */}

                <div className="mt-5 grid gap-5 md:grid-cols-2">

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">

                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-[#1c4594] focus:ring-4 focus:ring-[#1c4594]/10"
                      />

                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Category
                    </label>

                    <div className="relative">

                      <select
                        value={selectedCategory.name}
                        disabled
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-10 text-sm font-semibold text-slate-700 outline-none"
                      >
                        <option>
                          {selectedCategory.name}
                        </option>
                      </select>

                      <ChevronDown
                        size={18}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                    </div>
                  </div>

                </div>

                {/* =================================================
                    PRODUCTS
                ================================================= */}

                <div className="mt-7">

                  <div className="mb-4">

                    <h3 className="text-lg font-semibold text-slate-900">
                      Select Products
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Select one or more products you are interested in.
                    </p>

                  </div>

                  {/* Product checkboxes */}
                  <div className="grid gap-3 sm:grid-cols-2">

                    {selectedCategory.products.map((product) => {

                      const checked =
                        selectedProducts.includes(product);

                      return (
                        <label
                          key={product}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all duration-200 ${
                            checked
                              ? "border-[#1c4594] bg-[#1c4594]/5"
                              : "border-slate-200 bg-white hover:border-[#1c4594]/40 hover:bg-slate-50"
                          }`}
                        >

                          {/* Hidden checkbox */}
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={checked}
                            onChange={() =>
                              handleProductChange(product)
                            }
                          />

                          {/* Custom checkbox */}
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
                              checked
                                ? "border-[#1c4594] bg-[#1c4594] text-white"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {checked && (
                              <Check size={14} strokeWidth={3} />
                            )}
                          </span>

                          <span
                            className={`text-sm font-semibold ${
                              checked
                                ? "text-[#1c4594]"
                                : "text-slate-700"
                            }`}
                          >
                            {product}
                          </span>

                        </label>
                      );
                    })}

                  </div>

                </div>

                {/* =================================================
                    MESSAGE
                ================================================= */}

                <div className="mt-7">

                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Additional Requirement
                  </label>

                  <div className="relative">

                    <MessageSquare
                      size={18}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us quantity, brand, size, delivery location or any other requirement..."
                      className="w-full resize-none rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-[#1c4594] focus:ring-4 focus:ring-[#1c4594]/10"
                    />

                  </div>

                </div>

                {/* =================================================
                    SELECTED PRODUCTS
                ================================================= */}

                {selectedProducts.length > 0 && (
                  <div className="mt-6 rounded-2xl bg-slate-50 p-5">

                    <p className="mb-3 text-sm font-bold text-slate-800">
                      Selected Products ({selectedProducts.length})
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {selectedProducts.map((product) => (
                        <span
                          key={product}
                          className="rounded-full bg-[#1c4594]/10 px-3 py-1.5 text-xs font-bold text-[#1c4594]"
                        >
                          {product}
                        </span>
                      ))}

                    </div>

                  </div>
                )}

                {/* =================================================
                    BUTTONS
                ================================================= */}

                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                  <button
                    type="button"
                    onClick={closeEnquiry}
                    className="rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1c4594] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1c4594]/20 transition hover:-translate-y-0.5 hover:bg-[#163978]"
                  >
                    <Send size={17} />
                    Send Enquiry on WhatsApp
                  </button>

                </div>

              </form>

            </div>
          </div>
        </div>
      )}
       <section className="bg-white py-6 lg:py-10">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">

          {/* Left Content */}
          <div className="lg:col-span-7">
              <div className="mb-3 flex items-center justify-start gap-3"><span className="h-0.5 w-10 rounded-full bg-red-800"></span><span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-800">About Panchal Traders</span><span className="h-0.5 w-10 rounded-full bg-red-800"></span></div>

            {/* Heading */}
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-gray-900 sm:text-2xl lg:text-3xl">
              Hardware & Electrical Store in{" "}
              <span className="text-red-600 block">
                Khetasarai, Jaunpur
              </span>
            </h2>

            {/* Description */}
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-7 text-gray-600 text-[16px]">
              <p>
                Panchal Traders is a trusted hardware, electrical and building
                material store located in Khetasarai, Jaunpur, Uttar Pradesh.
                We offer a wide range of products for all your construction,
                repair and home improvement needs.
              </p>

              <p>
                From plumbing materials, sanitaryware, hardware and tools to
                paints, electrical products and home appliances, we serve
                homeowners, contractors, plumbers, electricians, retailers and
                businesses.
              </p>

              <p>
                We provide both <strong className="text-gray-900">wholesale</strong>{" "}
                and <strong className="text-gray-900">retail</strong> products
                with a focus on quality, competitive pricing and reliable
                service.
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                "Quality Products",
                "Wholesale & Retail",
                "Competitive Prices",
                "Reliable Service",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-4"
                >
                 
                  <p className="text-sm font-semibold leading-5 text-gray-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl bg-[#162556] p-6 shadow-xl sm:p-8">

              {/* Decorative Circle */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20"></div>
              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-primary/10"></div>

              <div className="relative">
                <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                  Panchal Traders
                </span>

                <h3 className="mt-6 text-2xl font-bold leading-snug text-white sm:text-3xl">
                  Everything You Need for
                  <span className="block text-primary">
                    Building & Home Improvement
                  </span>
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-300">
                  Serving Khetasarai and nearby areas with dependable building
                  materials, hardware, electrical products and more.
                </p>

                {/* Product Categories */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    "Plumbing",
                    "Electrical",
                    "Sanitaryware",
                    "Hardware",
                    "Paints",
                    "Home Appliances",
                  ].map((category) => (
                    <div
                      key={category}
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                      {category}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href="/products"
                    className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Explore Products
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default Wholesale;