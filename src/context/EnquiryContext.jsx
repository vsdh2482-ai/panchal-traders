import { createContext, useContext, useState } from "react";

const EnquiryContext = createContext();

export const EnquiryProvider = ({ children }) => {
  const [enquiries, setEnquiries] = useState([]);

  const addEnquiry = (product) => {
    setEnquiries((prev) => {
      // Don't add duplicate product
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev;
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeEnquiry = (id) => {
    setEnquiries((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setEnquiries((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, quantity),
            }
          : item
      )
    );
  };

  const clearEnquiries = () => {
    setEnquiries([]);
  };

  return (
    <EnquiryContext.Provider
      value={{
        enquiries,
        addEnquiry,
        removeEnquiry,
        updateQuantity,
        clearEnquiries,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => {
  return useContext(EnquiryContext);
};