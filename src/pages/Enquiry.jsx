import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useEnquiry } from "../context/EnquiryContext";

const Enquiry = () => {
  const {
    enquiries,
    removeEnquiry,
    updateQuantity,
    clearEnquiries,
  } = useEnquiry();

  const createWhatsAppMessage = () => {
    const products = enquiries
      .map(
        (product) =>
          `${product.name} (${product.sizes?.[0] || "Standard"}) - ${
            product.quantity
          } pcs`
      )
      .join("\n");

    return `Namaste Panchal Traders,

I want a quotation for:

${products}

Please share your best price.

Thank you.`;
  };

  const whatsappUrl = `https://wa.me/916390080551?text=${encodeURIComponent(
    createWhatsAppMessage()
  )}`;

  if (enquiries.length === 0) {
    return (
      <section className="min-h-[60vh] px-4 py-16">
        <div className="mx-auto max-w-3xl text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-gray-900">
            Your Enquiry List
          </h1>

          <p className="mt-3 text-gray-500">
            You haven't added any products yet.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 px-4 py-6">
      <div className="mx-auto max-w-360 lg:px-8">

        {/* Heading */}
        <div className="mb-5 border border-gray-300 p-5 rounded-md md:flex items-center justify-between">
         <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-[#1c3780] mb-2">
            Enquiry List
          </h1>
          <p className="text-sm">Add as many products as you like. When you are ready, send the whole list in one WhatsApp message to request a quotation.</p>
          </div>
          <p className="mt-2 text-sm p-2 bg-red-600 text-white rounded-md">
            {enquiries.length} product
            {enquiries.length > 1 ? "s" : ""} selected
          </p>
        </div>

        {/* Products */}
        <div className="space-y-4">
          {enquiries.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-24 w-24 rounded-lg object-cover"
              />

              {/* Product info */}
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase text-red-600">
                  {product.brand}
                </span>

                <h2 className="mt-1 font-semibold text-gray-900">
                  {product.name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {product.category}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Available: {product.sizes?.join(", ")}
                </p>
              </div>

              {/* Quantity */}
              <div className="flex items-center rounded-lg border border-gray-200">
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(product.id, product.quantity - 1)
                  }
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus size={15} />
                </button>

                <span className="min-w-10 text-center text-sm font-semibold">
                  {product.quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(product.id, product.quantity + 1)
                  }
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus size={15} />
                </button>
              </div>

              {/* Delete */}
              <button
                type="button"
                onClick={() => removeEnquiry(product.id)}
                className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                title="Remove product"
              >
                <Trash2 size={19} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">

          <button
            type="button"
            onClick={clearEnquiries}
            className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            Clear All
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            <MessageCircle size={19} />
            Request Quotation on WhatsApp
          </a>

        </div>
      </div>
    </section>
  );
};

export default Enquiry;