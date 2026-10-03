import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  categories,
  categoryBrands,
  products,
} from "../data/products";

import ProductCard from "../components/categories/ProductCard";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get values from URL
  const categoryFromUrl = searchParams.get("category") || "all";
  const brandFromUrl = searchParams.get("brand") || "all";

  const currentCategory = categoryFromUrl;

  // Brands according to selected category
  const brands =
    currentCategory === "all"
      ? Object.values(categoryBrands).flat()
      : categoryBrands[currentCategory] || [];

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        currentCategory === "all" ||
        product.category?.toLowerCase() === currentCategory.toLowerCase();

      const brandMatch =
        brandFromUrl === "all" ||
        product.brand?.toLowerCase() === brandFromUrl.toLowerCase();

      return categoryMatch && brandMatch;
    });
  }, [currentCategory, brandFromUrl]);

  // Current category data
  const currentCategoryData = categories.find(
    (item) => item.slug === currentCategory
  );

  // Change category
  const handleCategoryChange = (slug) => {
    if (slug === "all") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: slug,
      });
    }
  };

  // Change brand
  const handleBrandChange = (brand) => {
    if (brand === "all") {
      if (currentCategory === "all") {
        setSearchParams({});
      } else {
        setSearchParams({
          category: currentCategory,
        });
      }
    } else {
      setSearchParams({
        category: currentCategory,
        brand,
      });
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-4 rounded-xl border border-gray-200 p-4">
          <p className="mb-2 text-sm font-bold uppercase tracking-[3px] text-red-500">
            Products
          </p>

          <div className="flex items-center">
            <h1 className="text-lg font-semibold text-gray-900 sm:text-xl">
              {currentCategoryData?.name || "All Products"}
            </h1>
          </div>
        </div>

        {/* Category */}
        <div className="mb-4 rounded-xl border border-gray-100 bg-gray-200 p-5">
          <h2 className="mb-4 text-md font-bold uppercase text-gray-900">
            Shop by Category
          </h2>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((item) => (
              <button
                key={item.slug}
                onClick={() => handleCategoryChange(item.slug)}
                className={`flex items-center rounded-full border px-4 py-2 text-center text-[12px] font-semibold transition ${
                  currentCategory === item.slug
                    ? "border-red-500 bg-red-500 text-white shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-red-400 hover:text-red-500"
                }`}
              >
                <span>{item.name}</span>

                <span className="ps-3 text-xs">
                  {item.hindi}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className="mb-10 rounded-xl border border-gray-100 bg-gray-200 p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-md font-bold uppercase text-gray-900">
              Shop by Brand
            </h2>

            <span className="text-sm text-gray-500">
              {filteredProducts.length} Products
            </span>
          </div>

          <div className="flex md:flex-wrap gap-2 overflow-x-auto">

            {/* All Brands */}
            <button
              onClick={() => handleBrandChange("all")}
              className={`rounded-full border text-nowrap px-3 py-2 text-[12px] font-semibold transition ${
                brandFromUrl === "all"
                  ? "border-red-500 bg-red-600 text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-red-400 hover:text-red-500"
              }`}
            >
              All Brands
            </button>

            {/* Brands */}
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => handleBrandChange(brand)}
                className={`cursor-pointer rounded-full text-nowrap border px-3 py-2 text-[12px] font-semibold transition ${
                  brandFromUrl === brand
                    ? "border-red-500 bg-red-500 text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-red-400 hover:text-red-500"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
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
          <div className="rounded-2xl bg-white py-20 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              No products found
            </h3>

            <p className="mt-2 text-gray-500">
              Try selecting another brand.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;