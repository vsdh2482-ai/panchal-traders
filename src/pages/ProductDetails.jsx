
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { PiCurrencyInrDuotone } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineQuestionMark } from "react-icons/md";

import { products } from "../data/products";

const ProductDetails = () => {
  const { category, slug } = useParams();

  // Find current product
  const product = products.find((item) => {
    const itemSlug = item.url.split("/").pop();

    return item.category === category && itemSlug === slug;
  });

  // Product not found
  if (!product) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
            <PackageCheck className="text-red-500" size={34} />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Product Not Found
          </h1>

          <p className="mt-3 leading-7 text-gray-500">
            The product you're looking for doesn't exist or may have been
            removed.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white shadow-lg shadow-red-100 transition hover:bg-red-600"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  // WhatsApp message for current product
  const whatsappMessage = `Hello Panchal Traders, I am interested in ${product.name} (${product.brand}). Please share the latest price and availability.`;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Related products
  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <main className="bg-[#f8fafc]">

      {/* =========================================================
          BREADCRUMB
      ========================================================== */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[54px] items-center gap-2 overflow-hidden whitespace-nowrap text-sm">

            <Link
              to="/"
              className="text-gray-500 transition hover:text-red-500"
            >
              Home
            </Link>

            <ChevronRight
              size={15}
              className="shrink-0 text-gray-300"
            />

            <Link
              to={`/products/${product.category}`}
              className="capitalize text-gray-500 transition hover:text-red-500"
            >
              {product.category}
            </Link>

            <ChevronRight
              size={15}
              className="shrink-0 text-gray-300"
            />

            <span className="truncate font-medium text-gray-800">
              {product.name}
            </span>
          </div>
        </div>
      </div>
      <section className="py-5 sm:py-6 lg:py-8">
        <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="order-2 md:order-1">

              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

                {/* Brand Badge */}
                <div className="absolute left-5 top-5 z-10">
                  <span className="inline-flex items-center rounded-full border border-red-100 bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wide text-red-500 shadow-sm backdrop-blur">
                    {product.brand}
                  </span>
                </div>

                {/* Image */}
                <div className="flex min-h-[390px] items-center justify-center bg-gradient-to-br from-white via-white to-red-50/40 p-8 sm:min-h-[520px] sm:p-12">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-[440px] w-full object-contain transition duration-700 hover:scale-105"
                  />

                </div>

                {/* Bottom Image Info */}
                <div className="border-t border-gray-100 bg-white px-5 py-4">
                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-400">
                        Product Category
                      </p>

                      <p className="mt-1 text-sm font-bold capitalize text-gray-800">
                        {product.category}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-xs font-bold text-green-600">
                        Available
                      </span>
                    </div>

                  </div>
                </div>

              </div>

              {/* =================================================
                  TRUST FEATURES
              ================================================== */}
              <div className="mt-4 grid grid-cols-3 gap-3">

                <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
                    <PackageCheck
                      size={20}
                      className="text-red-500"
                    />
                  </div>

                  <p className="mt-2 text-[11px] font-bold text-gray-700 sm:text-xs">
                    Quality Products
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
                    <ShieldCheck
                      size={20}
                      className="text-red-500"
                    />
                  </div>

                  <p className="mt-2 text-[11px] font-bold text-gray-700 sm:text-xs">
                    Trusted Brands
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
                    <Truck
                      size={20}
                      className="text-red-500"
                    />
                  </div>

                  <p className="mt-2 text-[11px] font-bold text-gray-700 sm:text-xs">
                    Easy Enquiry
                  </p>
                </div>

              </div>
            </div>

            {/* =====================================================
                RIGHT - PRODUCT INFORMATION
            ====================================================== */}
            <div className="order-1 md:order-2">
            <div className="flex flex-col justify-center">

              {/* Category */}
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-red-500" />

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-500">
                  {product.category}
                </p>
              </div>

              {/* Product Name */}
              <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-gray-600 sm:text-2xl lg:text-2xl">
                {product.name}
              </h1>

              {/* Brand */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="text-sm text-gray-500">
                  Brand
                </span>

                <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-bold text-gray-600">
                  {product.brand}
                </span>

                <span className="flex items-center gap-1.5 text-sm font-medium text-green-600">
                  <CheckCircle2 size={17} />
                  Available
                </span>
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-gray-200" />

              {/* Description */}
              <div>
                <h2 className="text-lg font-bold text-gray-600">
                  Product Description
                </h2>

                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-gray-600">
                  {product.description}
                </p>
              </div>

              {product.sizes?.length > 0 && (
                <div className="mt-7">

                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-600">
                      Available Sizes
                    </h2>

                    <span className="text-xs font-medium text-gray-400">
                      {product.sizes.length} options
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                      >
                        <Check size={14} />
                        {size}
                      </span>
                    ))}
                  </div>

                </div>
              )}

              <div className="mt-7 rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 to-white p-5">

                <div className="flex gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white">
                    <PiCurrencyInrDuotone size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-600">
                      Looking for the best price?
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Contact us for the latest price, availability and
                      product details.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-green-100 transition hover:bg-green-700"
                >
                  <FaWhatsapp
                    size={20}
                    className="transition group-hover:scale-110"
                  />

                  WhatsApp Enquiry
                </a>

                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3.5 font-bold text-white shadow-lg shadow-red-100 transition hover:bg-red-600"
                >
                  <PiCurrencyInrDuotone size={20} />

                  Get Best Price
                </Link>

              </div>

            </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-gray-200 bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mb-8 flex items-end justify-between gap-5">

            <div>
              <div className="flex items-center gap-2">
                <span className="h-px w-7 bg-red-500" />

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-500">
                  You May Also Like
                </p>
              </div>

              <h2 className="mt-2 text-2xl font-semibold text-gray-800 sm:text-3xl">
                Related Products
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Explore more products from{" "}
                <span className="font-semibold capitalize text-gray-700">
                  {product.category}
                </span>
                .
              </p>
            </div>

            <Link
              to={`/products/${product.category}`}
              className="hidden items-center gap-1 text-sm font-bold text-red-500 transition hover:text-red-600 sm:flex"
            >
              View All
              <ChevronRight size={16} />
            </Link>

          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">

            {relatedProducts.map((item) => {

              const relatedWhatsappMessage =
                `Hello Panchal Traders, I am interested in ${item.name} (${item.brand}). Please share the latest price and availability.`;

              const relatedWhatsappUrl =
                `https://wa.me/?text=${encodeURIComponent(
                  relatedWhatsappMessage
                )}`;

              return (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-gray-100"
                >

                  {/* Image */}
                  <Link to={item.url}>
                    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#fff7f7] p-5 sm:h-56">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                      />

                      <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-gray-700 shadow-sm">
                        {item.brand}
                      </span>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-4">

                    <p className="text-[10px] font-bold uppercase tracking-wider text-red-500">
                      {item.category}
                    </p>

                    <Link to={item.url}>
                      <h3 className="mt-1 line-clamp-2 min-h-[44px] text-sm font-bold leading-5 text-gray-800 transition group-hover:text-red-500 sm:text-base">
                        {item.name}
                      </h3>
                    </Link>

                    {/* Buttons */}
                    <div className="mt-4 grid grid-cols-2 gap-2">

                      <Link
                        to="/contact"
                        className="flex items-center justify-center gap-1.5 rounded-lg bg-red-500 px-2 py-2.5 text-xs font-bold text-white transition hover:bg-red-600"
                      >
                        <PiCurrencyInrDuotone size={16} />
                        Best Price
                      </Link>

                      <a
                        href={relatedWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-lg bg-green-600 px-2 py-2.5 text-xs font-bold text-white transition hover:bg-green-700"
                      >
                        <FaWhatsapp size={16} />
                        WhatsApp
                      </a>

                      <Link
                        to={item.url}
                        className="col-span-2 flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-2 py-2.5 text-xs font-bold text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                      >
                        <MdOutlineQuestionMark size={17} />
                        View Product
                      </Link>

                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Mobile View All */}
          <div className="mt-7 text-center sm:hidden">
            <Link
              to={`/products/${product.category}`}
              className="inline-flex items-center gap-1 rounded-xl border border-red-500 px-5 py-2.5 text-sm font-bold text-red-500 transition hover:bg-red-500 hover:text-white"
            >
              View All Products
              <ChevronRight size={16} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
};

export default ProductDetails;

