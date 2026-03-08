import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.js";
import Layout from './Layout.js';
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';
import Login from './Login.js';
import Footer from './Footer.js';
import Loginconnect from './Login connect.js';
import EditLogin from './Edit Login.js';
import ReturnOrder from './ReturnOrder.js';
import ShippingDelivery from './ShippingDelivery.js';

const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shippingdelivery" element={<ShippingDelivery />} />
          <Route path="returnorder" element={<ReturnOrder />} />
          <Route path="Footer" element={<Footer/>} />       
          <Route path="about" element={<About />} />
          <Route path="/loginconnect" element= {<Loginconnect />} />
          <Route path="/edit/:id" element= {<EditLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;