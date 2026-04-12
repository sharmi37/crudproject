import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Layout";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import Footer from "./Footer";
import EditLogin from "./EditLogin ";
import Dashboard from "./Dashboard";
import ReturnOrder from "./ReturnOrder";
import ShippingDelivery from "./ShippingDelivery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shippingdelivery" element={<ShippingDelivery />} />
          <Route path="returnorder" element={<ReturnOrder />} />
          <Route path="footer" element={<Footer />} />
          <Route path="about" element={<About />} />

          {/* Admin Pages */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/edit/:id" element={<EditLogin />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
