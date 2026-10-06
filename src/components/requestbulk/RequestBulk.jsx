import { ArrowRight, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";

const RequestBulk = () => {
  return (
    <section className="bg-[#1c3780]">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl p-6 text-center backdrop-blur-sm sm:p-8 lg:flex-row lg:text-left">

          {/* Content */}
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
              <PackageCheck size={18} />
              Wholesale & Bulk Supply
            </div>

            <h2 className="text-xl font-semibold leading-tight text-white sm:text-3xl">
              Need Bulk Materials for Your Project?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-red-50 sm:text-sm">
              Panchal Traders supplies hardware, plumbing, sanitaryware,
              paints and electrical products for contractors, retailers,
              plumbers, electricians, builders and bulk buyers.
            </p>
          </div>

          {/* Button */}
          <div className="shrink-0">
            <Link
              to="/wholesale"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-red-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-xl"
            >
              Request Bulk Pricing
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RequestBulk;