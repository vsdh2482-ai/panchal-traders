const faqs = [
  {
    question: "What products does Panchal Traders sell?",
    answer:
      "Panchal Traders offers plumbing, sanitaryware, hardware and tools, paints and colours, electrical products and home appliances.",
  },
  {
    question: "Does Panchal Traders provide wholesale supply?",
    answer:
      "Yes. Panchal Traders serves both wholesale and retail customers. Contact us for bulk requirements and pricing.",
  },
  {
    question: "Where is Panchal Traders located?",
    answer:
      "Panchal Traders is located at Bharti Vidyapeeth, Dobhi Mor, near State Bank of India, Khetasarai, Jaunpur, Uttar Pradesh - 222139.",
  },
  {
    question: "How can I contact Panchal Traders?",
    answer:
      "Customers can contact Panchal Traders at 8810580045 or 6390080551, or send an enquiry on WhatsApp.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white py-6 sm:py-10">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600">
            FAQ
          </span>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-gray-800 sm:text-3xl">
            Frequently <span className="text-red-600">Asked Questions</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Find answers to common questions about Panchal Traders,
            our products, wholesale supply and contact information.
          </p>
        </div>

        {/* FAQ Boxes */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
            >
              {/* Number */}
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-600">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Question */}
              <h3 className="text-lg font-semibold leading-7 text-gray-900">
                {faq.question}
              </h3>

              {/* Answer */}
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;