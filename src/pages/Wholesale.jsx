import React from "react";
import {
  ArrowRight,
  Box,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Headphones,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
  Droplets,
  PaintBucket,
  Bath,
  ShoppingCart,
} from "lucide-react";
import WholesaleImage from '../assets/images/wholesale.jpg'
const categories = [
  {
    name: "Plumbing",
    slug: "plumbing",
    description: "Pipes, Fittings, Valves & More",
    icon: Droplets,
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    image: "/images/categories/plumbing.jpg",
  },
  {
    name: "Paints",
    slug: "paints",
    description: "Interior & Exterior Paints",
    icon: PaintBucket,
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    image: "/images/categories/paints.jpg",
  },
  {
    name: "Electrical",
    slug: "electrical",
    description: "Wires, Switches, Accessories",
    icon: Zap,
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    image: "/images/categories/electrical.jpg",
  },
  {
    name: "Sanitary",
    slug: "sanitary",
    description: "Fixtures, Fittings, Accessories",
    icon: Bath,
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    image: "/images/categories/sanitary.jpg",
  },
  {
    name: "Hardware",
    slug: "hardware",
    description: "Tools, Fasteners, Building Hardware",
    icon: Wrench,
    bg: "bg-slate-50",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
    image: "/images/categories/hardware.jpg",
  },
];

const features = [
  {
    icon: Box,
    title: "Wide Range",
    description: "of Products",
  },
  {
    icon: ShieldCheck,
    title: "Trusted",
    description: "Brands",
  },
  {
    icon: CircleDollarSign,
    title: "Competitive",
    description: "Wholesale Prices",
  },
  {
    icon: Truck,
    title: "On-Time",
    description: "Delivery",
  },
  {
    icon: Headphones,
    title: "Customer",
    description: "Support",
  },
];

const products = [
  {
    category: "Plumbing",
    brand: "Jindal",
    name: "CPVC Pipe & Fittings",
    description: "Various sizes available",
    image: "/images/products/jindal/CPVCPipe.jpg",
    categoryColor: "bg-blue-600",
    buttonColor: "bg-orange-500",
  },
  {
    category: "Paints",
    brand: "Nerolac",
    name: "Nerolac Interior Emulsion",
    description: "Multiple shades available",
    image: "/images/products/paints/nerolac.jpg",
    categoryColor: "bg-orange-500",
    buttonColor: "bg-orange-500",
  },
  {
    category: "Electrical",
    brand: "Havells",
    name: "Modular Switches & Wires",
    description: "Safe & durable",
    image: "/images/products/electrical/switches.jpg",
    categoryColor: "bg-purple-600",
    buttonColor: "bg-orange-500",
  },
  {
    category: "Sanitary",
    brand: "Cera",
    name: "Sanitaryware Set",
    description: "Premium quality",
    image: "/images/products/sanitary/sanitaryware.jpg",
    categoryColor: "bg-emerald-600",
    buttonColor: "bg-orange-500",
  },
  {
    category: "Hardware",
    brand: "Godrej",
    name: "Door Fittings & Hardware",
    description: "Strong & long lasting",
    image: "/images/products/hardware/door-hardware.jpg",
    categoryColor: "bg-slate-500",
    buttonColor: "bg-orange-500",
  },
];

const Wholesale = () => {
  return (
    <main className="bg-white text-slate-800">
  
      <section  className="relative overflow-hidden bg-[#0b2745] bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: `url(${WholesaleImage})` }}>
        {/* <div className="absolute inset-0 bg-linear-to-r from-[#0b2745] via-[#0b2745]/95 to-[#0b2745]/30" /> */}

        <div className="relative mx-auto grid min-h-90 max-w-360 grid-cols-1 items-center gap-10 px-5 py-8 lg:grid-cols-2 lg:px-8">
        
          <div className="z-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Your Trusted Supplier
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-4xl">
              <span className="text-orange-500">Wholesale</span>{" "}
              Building Materials & Home Solutions
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              We are a wholesale and retail supplier of plumbing, paints,
              electrical, sanitary and hardware material in Khetasarai,
              Jaunpur.
            </p>

            <div className="mt-8 flex flex-wrap gap-5">
              <HeroFeature
                icon={<ShieldCheck size={25} />}
                title="Best Quality"
                text="Products"
              />

              <HeroFeature
                icon={<CircleDollarSign size={25} />}
                title="Fair"
                text="Price"
              />

              <HeroFeature
                icon={<Truck size={25} />}
                title="Dependable"
                text="Service"
              />
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#categories"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Explore Categories
                <ArrowRight size={17} />
              </a>

              <a
                href="#wholesale-enquiry"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#0b2745]"
              >
                Wholesale Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

    
      <section id="categories" className="py-14 sm:py-20">
        <div className="mx-auto max-w-360 px-5 lg:px-8">
          <SectionHeading
            eyebrow="PRODUCT CATEGORIES"
            title="Everything You Need in One Place"
            description="Explore our complete range of building materials and home improvement products."
          />
            

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <a
                  key={category.slug}
                  href={`/products/${category.slug}`}
                  className={`group overflow-hidden rounded-2xl border border-slate-200 ${category.bg} shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${category.iconBg} ${category.iconColor}`}
                      >
                        <Icon size={23} />
                      </div>

                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm ${category.iconColor}`}
                      >
                        <ChevronRight size={18} />
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-[#102a43]">
                      {category.name}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {category.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-360 px-5 lg:px-8">
          <SectionHeading
            eyebrow="WHY CHOOSE US?"
            title="Reliable Products. Reliable Service."
          />

          <div className="mt-10 grid grid-cols-2 divide-x divide-slate-200 sm:grid-cols-3 lg:grid-cols-5">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex flex-col items-center border border-gray-200 px-4 py-5 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#0b2745] text-[#0b2745]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-[#102a43]">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-360 px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-red-600">
                Our Products
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-[#102a43] sm:text-4xl">
                Popular Products
              </h2>
            </div>

            <a
              href="/products"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-red-600 px-5 py-2.5 text-sm font-semibold text-orange-600 transition hover:bg-orange-600 hover:text-white"
            >
              View All Products
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="wholesale-enquiry"
        className="relative overflow-hidden bg-[#0b2745]"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('/images/wholesale/pattern.png')] bg-repeat" />
        </div>

        <div className="relative mx-auto flex max-w-360 flex-col items-center justify-between gap-7 px-5 py-10 sm:flex-row lg:px-8">
          <div className="flex items-center gap-5">
            <div className="hidden h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white sm:flex">
              <PackageCheck size={34} />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white">
                Bulk Orders & Wholesale Enquiries
              </h2>

              <p className="mt-1 text-sm text-slate-300">
                Get the best quotes for your business needs.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-3 font-bold text-white shadow-lg transition hover:bg-red-600"
          >
            <Phone size={18} />
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};



const HeroFeature = ({ icon, title, text }) => {
  return (
    <div className="flex items-center gap-3 text-white">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-500 text-red-700">
        {icon}
      </div>

      <div className="text-sm leading-5">
        <p className="font-bold">{title}</p>
        <p className="text-slate-300">{text}</p>
      </div>
    </div>
  );
};

const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-2 text-2xl font-semibold text-[#102a43] sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
          {description}
        </p>
      )}

      {/* <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-orange-500" /> */}
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative flex h-48 items-center justify-center bg-slate-50 p-5">
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white ${product.categoryColor}`}
        >
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="line-clamp-2 min-h-[48px] text-sm font-bold text-[#102a43]">
          {product.name}
        </h3>

        <p className="mt-2 text-xs text-slate-500">
          Brand: <span className="font-semibold">{product.brand}</span>
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {product.description}
        </p>

        <button
          type="button"
          className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold text-white transition hover:brightness-95 ${product.buttonColor}`}
        >
          Get Best Price
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default Wholesale;