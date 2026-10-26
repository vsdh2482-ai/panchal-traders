import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  categories,
  categoryBrands,
  products,
} from "../../data/products";

import ProductCard from "../categories/ProductCard";

const CategoryProducts = ({ categorySlug }) => {
  const [selectedBrand, setSelectedBrand] = useState("all");

  const categoryData = categories.find(
    (item) => item.slug === categorySlug
  );

  const brands = categoryBrands[categorySlug] || [];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = product.category === categorySlug;

      const brandMatch =
        selectedBrand === "all" ||
        product.brand === selectedBrand;

      return categoryMatch && brandMatch;
    });
  }, [categorySlug, selectedBrand]);

  return (
    <section className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="mb-5 border border-gray-200 rounded-xl p-4">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-orange-500">
            Products
          </p>
          <div className="flex items-center">
            <h1 className="text-lg font-semibold text-gray-900 sm:text-xl">
                {categoryData?.name}
            </h1>

            <p className="mt-2 text-gray-500 ps-4">
                {categoryData?.hindi}
            </p>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mb-5 border border-gray-200 bg-gray-200 p-5 rounded-xl">
          <h2 className="mb-4 text-sm uppercase font-semibold text-gray-900">
            Shop by Category 
          </h2>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={
                  category.slug === "all"
                    ? "/products"
                    : `/products/${category.slug}`
                }
                onClick={() => setSelectedBrand("all")}
                className={`rounded-full border flex items-center text-[12px] px-4 py-2 text-center transition ${
                  category.slug === categorySlug
                    ? "border-orange-500 bg-orange-500 text-white shadow-lg"
                    : "border-gray-200 bg-white text-gray-700 hover:border-orange-400 hover:text-orange-500"
                }`}
              >
                <span className="block font-semibold">
                  {category.name}
                </span>

                <span className="mt-1 block text-xs ps-3">
                  {category.hindi}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div className="mb-6 border border-gray-200 bg-gray-200 p-5 rounded-xl">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-sm uppercase font-semibold text-gray-900">
              Shop by Brand
            </h2>

            <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
              {filteredProducts.length} Products
            </span>
          </div>

          <div className="flex flex-wrap gap-2">

            {/* All Brands */}
            <button
              type="button"
              onClick={() => setSelectedBrand("all")}
              className={`rounded-full border px-5 py-2.5 text-[12px] cursor-pointer font-semibold transition ${
                selectedBrand === "all"
                  ? "border-orange-500 bg-orange-500 text-white shadow-md"
                  : "border-gray-200 bg-white text-gray-700 hover:border-orange-400 hover:text-orange-500"
              }`}
            >
              All Brands
            </button>

            {/* Category Brands */}
            {brands.map((brand) => (
              <button
                key={brand}
                type="button"
                onClick={() => setSelectedBrand(brand)}
                className={`rounded-full border px-5 py-2 text-[12px] cursor-pointer font-semibold transition ${
                  selectedBrand === brand
                    ? "border-orange-500 bg-orange-500 text-white shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-orange-400 hover:text-orange-500"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-20 text-center">
            <h3 className="text-xl font-bold text-gray-900">
              No Products Found
            </h3>

            <p className="mt-2 text-gray-500">
              No products are available for this brand.
            </p>

            <button
              type="button"
              onClick={() => setSelectedBrand("all")}
              className="mt-6 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryProducts;