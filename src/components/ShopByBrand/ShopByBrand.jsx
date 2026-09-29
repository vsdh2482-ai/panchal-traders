import React from "react";
import { Link } from "react-router-dom";
import { categoryBrands } from "../../data/products";

const categoryNames = {
  plumbing: "Plumbing",
  paints: "Paints",
  electrical: "Electrical",
  sanitary: "Sanitary",
  hardware: "Hardware",
};

const categoryIcons = {
  plumbing: "P",
  paints: "Pa",
  electrical: "E",
  sanitary: "S",
  hardware: "H",
};

const ShopByBrand = () => {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center justify-start gap-3">
                <span className="h-0.5 w-10 rounded-full bg-red-800"></span>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-800">
                    Trusted Brands
                </span>
                <span className="h-0.5 w-10 rounded-full bg-red-800"></span>
           </div>

            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Shop by Brand
            </h2>

            <p className="mt-1.5 text-sm text-gray-500">
              Explore our available brands category by category.
            </p>
          </div>

          <p className="text-xs text-gray-400">
            Ask on WhatsApp for your preferred brand
          </p>
        </div>

       
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(categoryBrands).map(
            ([category, brands]) => (
              <div
                key={category}
                className="group rounded-2xl border border-gray-200 bg-gray-50/70 p-4 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50/30 hover:shadow-md"
              >
                {/* Category Header */}
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-sm font-bold text-orange-600">
                      {categoryIcons[category]}
                    </div>

                    <div>
                      <h3 className="text-base font-semibold capitalize text-gray-900">
                        {categoryNames[category] || category}
                      </h3>

                      <p className="text-[11px] text-gray-400">
                        {brands.length} brands available
                      </p>
                    </div>
                  </div>

                  {/* Category Link */}
                  <Link
                    to={`/products?category=${category}`}
                    className="text-xs font-semibold text-orange-500 transition hover:text-orange-700"
                  >
                    View All →
                  </Link>
                </div>

                {/* Brands */}
                <div className="flex flex-wrap gap-2">
                 {brands.map((brand) => (
                    <Link
                        key={brand}
                        to={`/products?category=${category}&brand=${encodeURIComponent(brand)}`}
                        className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition-all duration-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                    >
                        {brand}
                    </Link>
                    ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Bottom Note */}
        <p className="mt-5 text-center text-[11px] text-gray-400">
          Brand names indicate the materials we stock; no dealership is
          claimed.
        </p>
      </div>
    </section>
  );
};

export default ShopByBrand;

