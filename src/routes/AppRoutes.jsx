import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Wholesale from "../pages/Wholesale";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Plumbing from '../pages/Plumbing'
import Paints from "../pages/Paints";
import Electrical from '../pages/Electrical'
import Sanitary from "../pages/Sanitary";
import Hardware from "../pages/Hardware";
import ProductDetails from "../pages/ProductDetails";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/plumbing" element={<Plumbing />}/>
        <Route path="/products/paints" element={<Paints/>}/>
        <Route path="/products/electrical" element={<Electrical />}/>
        <Route path="/products/sanitary" element={<Sanitary />}/>
        <Route path="/products/hardware" element={<Hardware />}/>
        <Route path="/products/:category/:slug" element={<ProductDetails />}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;