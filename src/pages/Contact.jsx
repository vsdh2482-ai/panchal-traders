
import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello Panchal Traders,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Category: ${formData.category}

Message:
 ${formData.message}
    `;

    const whatsappUrl = `https://wa.me/918810580045?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      message: "",
    });
  };

  return (
    <main className="bg-slate-50">

    
      <section className="relative overflow-hidden bg-[#172f72]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,189,50,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
<<<<<<< HEAD
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
=======
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-[#f5bd32]">
>>>>>>> 074ad932a5e145bebc48c8adbe644a5661c9cb80
              Contact Panchal Traders
            </span>

            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-5xl">
              Let&apos;s Talk About Your
<<<<<<< HEAD
              <span className="block text-[#e7000b]">
=======
              <span className="block text-[#f5bd32]">
>>>>>>> 074ad932a5e145bebc48c8adbe644a5661c9cb80
                Material Requirements
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Looking for plumbing, paints, electrical, sanitary or hardware
              materials? Get in touch with Panchal Traders for product
              information, availability and best price enquiries.
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-12">

           
            <div className="lg:col-span-5">

              <div className="mb-8">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#172f72]">
                  Get In Touch
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  We&apos;re Here to Help
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Whether you are a homeowner, contractor, builder or
                  business, our team can help you find the right products for
                  your project.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">

                {/* Address */}
                <div className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#172f72] text-white">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Visit Our Store
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Khetasarai, Jaunpur,
                      <br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
<<<<<<< HEAD
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e7000b] text-white">
=======
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5bd32] text-[#172f72]">
>>>>>>> 074ad932a5e145bebc48c8adbe644a5661c9cb80
                    <Phone size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Call Us
                    </h3>

                    <a
                      href="tel:+918810580045"
                      className="mt-1 block text-sm font-medium text-[#172f72] hover:text-[#f0aa00]"
                    >
                      +91 88105 80045
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white">
                    <MessageCircle size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      WhatsApp
                    </h3>

                    <a
                      href="https://wa.me/918810580045"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block text-sm font-medium text-green-600 hover:text-green-700"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#172f72] text-white">
                    <Mail size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Email Us
                    </h3>

                    <a
<<<<<<< HEAD
                      href="mailto:thepanchaltraders@gmail.com"
                      className="mt-1 block text-sm text-slate-600 hover:text-[#172f72]"
                    >
                      thepanchaltraders@gmail.com
=======
                      href="mailto:info@panchaltraders.com"
                      className="mt-1 block text-sm text-slate-600 hover:text-[#172f72]"
                    >
                      info@panchaltraders.com
>>>>>>> 074ad932a5e145bebc48c8adbe644a5661c9cb80
                    </a>
                  </div>
                </div>

                {/* Timing */}
                <div className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
<<<<<<< HEAD
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e7000b] text-white">
=======
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5bd32] text-[#172f72]">
>>>>>>> 074ad932a5e145bebc48c8adbe644a5661c9cb80
                    <Clock size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Business Hours
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
<<<<<<< HEAD
                      Monday – Sunday
=======
                      Monday – Saturday
>>>>>>> 074ad932a5e145bebc48c8adbe644a5661c9cb80
                      <br />
                      9:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ================= FORM ================= */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">

                <div className="mb-8">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#172f72]">
                    Send Enquiry
                  </span>

                  <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    Tell Us What You Need
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Fill out the form and we&apos;ll connect with you through
                    WhatsApp.
                  </p>
                </div>

                {submitted && (
                  <div className="mb-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                    <CheckCircle size={20} />
                    Your enquiry has been sent to WhatsApp.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid gap-5 sm:grid-cols-2">

                    {/* Name */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#172f72] focus:bg-white focus:ring-4 focus:ring-[#172f72]/10"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Phone
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#172f72] focus:bg-white focus:ring-4 focus:ring-[#172f72]/10"
                      />
                    </div>

                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#172f72] focus:bg-white focus:ring-4 focus:ring-[#172f72]/10"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Product Category
                    </label>

                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#172f72] focus:bg-white focus:ring-4 focus:ring-[#172f72]/10"
                    >
                      <option value="">Select category</option>
                      <option value="Plumbing">Plumbing</option>
                      <option value="Paints">Paints</option>
                      <option value="Electrical">Electrical</option>
                      <option value="Sanitary">Sanitary</option>
                      <option value="Hardware">Hardware</option>
<<<<<<< HEAD
                      <option value="HomeAppliances">Home Appliances</option>
=======
>>>>>>> 074ad932a5e145bebc48c8adbe644a5661c9cb80
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about the products or quantity you need..."
                      required
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#172f72] focus:bg-white focus:ring-4 focus:ring-[#172f72]/10"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
<<<<<<< HEAD
                    className="group cursor-pointer flex w-full items-center justify-center gap-3 rounded-xl bg-[#172f72] px-6 py-4 font-semibold text-white transition hover:bg-[#10245a] hover:shadow-lg"
=======
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#172f72] px-6 py-4 font-semibold text-white transition hover:bg-[#10245a] hover:shadow-lg"
>>>>>>> 074ad932a5e145bebc48c8adbe644a5661c9cb80
                  >
                    Send Enquiry on WhatsApp
                    <Send
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Your enquiry will open directly in WhatsApp.
                  </p>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">

              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#172f72]">
                  Find Us
                </span>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Visit Panchal Traders
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Khetasarai, Jaunpur, Uttar Pradesh
                </p>
              </div>

              <a
<<<<<<< HEAD
                href="https://maps.app.goo.gl/d214pKoCMaG2kj5V6"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e7000b] px-5 py-3 font-semibold text-white transition hover:bg-[#805b04]"
=======
                href="https://www.google.com/maps/search/?api=1&query=Panchal+Traders+Khetasarai+Jaunpur"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5bd32] px-5 py-3 font-semibold text-[#172f72] transition hover:bg-[#e9ad20]"
>>>>>>> 074ad932a5e145bebc48c8adbe644a5661c9cb80
              >
                <MapPin size={18} />
                Open in Google Maps
              </a>

            </div>

<<<<<<< HEAD
           <div className="h-87 w-full overflow-hidden rounded-2xl md:h-90 lg:h-100">
            <iframe
              src="https://www.google.com/maps?q=25.9789644,82.682047&z=17&output=embed"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Panchal Traders Location"
            />
          </div>
=======
            <div className="h-[350px] bg-slate-200">
              <iframe
                title="Panchal Traders Location"
                src="https://www.google.com/maps?q=Khetasarai,+Jaunpur,+Uttar+Pradesh&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
>>>>>>> 074ad932a5e145bebc48c8adbe644a5661c9cb80

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#172f72]">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need the Best Price for Your Materials?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Send us your requirement and our team will help you with product
            availability and pricing.
          </p>

          <a
            href="https://wa.me/918810580045"
            target="_blank"
            rel="noreferrer"
<<<<<<< HEAD
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#e7000b] px-7 py-3.5 font-bold text-white transition hover:bg-[#b0030b] hover:shadow-lg"
=======
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#f5bd32] px-7 py-3.5 font-bold text-[#172f72] transition hover:bg-[#e9ad20] hover:shadow-lg"
>>>>>>> 074ad932a5e145bebc48c8adbe644a5661c9cb80
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>

        </div>
      </section>

    </main>
  );
};

export default Contact;

