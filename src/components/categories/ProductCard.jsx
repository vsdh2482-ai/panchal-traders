import {
  MessageCircle,
  IndianRupee,
  Plus,
  PackageCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import {useEnquiry} from '../../context/EnquiryContext';
const ProductCard = ({ product }) => {
  const { enquiries, addEnquiry } = useEnquiry();
  return (
   <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
  {/* Product Image */}
  <div className="h-66 overflow-hidden bg-gray-100">
    <Link to={product.url}>
    <img
      src={product.image}
      alt={product.name}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />
     </Link>
  </div>

  <div className="p-5">
   <div className="flex items-center justify-between gap-2 mb-4">
    <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 ring-1 ring-red-200">
      {product.brand}
    </span>

    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize text-gray-600 ring-1 ring-gray-200">
      {product.category}
    </span>
  </div>
 
      <Link to={product.url} className="text-lg font-semibold line-clamp-1 text-gray-800 transition-all duration-100 hover:text-blue-900">
          {product.name}
      </Link>
 
    <div className="mt-2 flex items-center justify-between">
      {/* <div>
        <p className="text-xs text-gray-400">Starting Price</p>

        <p className="flex items-center text-xl font-bold text-gray-900">
          <IndianRupee size={17} strokeWidth={2.5} />
          {product.price?.replace("₹", "")}
        </p>
      </div> */}
      <div>
        <p className="text-[12px] line-clamp-1"> Available: {product.sizes?.join(", ")}</p>
      </div>

     <span className="flex items-center gap-1 whitespace-nowrap rounded-full bg-green-50 px-3 py-1  text-xs font-medium text-green-600">
      <PackageCheck size={14} className="shrink-0" />
      <span>In Stock</span>
    </span>
    </div>

    {/* Description */}
    {/* <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
      {product.description}
    </p> */}

    {/* WhatsApp Message */}
    {(() => {
      const whatsappMessage = `Namaste Panchal Traders,

      I want the best price for:
      ${product.name}
      Brand: ${product.brand}
      Variant: 1/2"`;

      const whatsappUrl = `https://wa.me/916390080551?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      return (
        <>
          {/* Main Buttons */}
          <div className="mt-5 grid grid-cols-2 gap-2">
            {/* Get Best Price */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-red-500 px-3 py-2 text-[12px] font-semibold text-white transition hover:bg-red-600"
            >
              <IndianRupee size={17} />
              Get Best Price
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-green-500 px-3 py-2 text-[12px] font-semibold text-green-600 transition hover:bg-green-50"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Enquiry */}
          {/* <button
            type="button"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-[12px] font-semibold text-gray-700 transition hover:border-red-500 hover:bg-red-50 hover:text-red-600"
          >
            <Plus size={18} />
            Enquiry
          </button> */}
          <button
            type="button"
            onClick={() => addEnquiry(product)}
            className="mt-2 flex w-full items-center cursor-pointer justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-[12px] font-semibold text-gray-700 transition hover:border-red-500 hover:bg-red-50 hover:text-red-600"
          >
            <Plus size={18} />
            {enquiries.some((item) => item.id === product.id)
              ? "Added to Enquiry"
              : "Enquiry"}
          </button>
        </>
      );
    })()}
  </div>
</div>
  );
};

export default ProductCard;