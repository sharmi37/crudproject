import React from "react";
import "./ShippingDelivery.css";

const ShippingDelivery = () => {
  return (
    <div className="shipping-page">
      <h1>Shipping & Delivery</h1>
      <p className="intro">
        We aim to provide fast and reliable shipping to ensure your order arrives safely and on time.
      </p>

      {/* Shipping Methods */}
      <section className="section">
        <h2>Shipping Methods</h2>
        <ul>
          <li><strong>Standard Shipping:</strong> 5-7 business days</li>
          <li><strong>Express Shipping:</strong> 2-3 business days</li>
          <li><strong>Overnight Shipping:</strong> 1 business day</li>
        </ul>
      </section>

      {/* Processing Times */}
      <section className="section">
        <h2>Order Processing</h2>
        <p>
          All orders are processed within 1–2 business days. Orders placed on weekends or holidays
          will be processed on the next business day.
        </p>
      </section>

      {/* Shipping Costs */}
      <section className="section">
        <h2>Shipping Costs</h2>
        <p>
          Shipping costs are calculated at checkout based on your location and the shipping method selected.
        </p>
      </section>

      {/* Tracking */}
      <section className="section">
        <h2>Tracking Your Order</h2>
        <p>
          Once your order has shipped, you will receive a confirmation email containing your tracking number.
        </p>
      </section>

      {/* International Shipping */}
      <section className="section">
        <h2>International Shipping</h2>
        <p>
          We offer worldwide shipping. Delivery times vary depending on the destination country.
        </p>
      </section>
    </div>
  );
};

export default ShippingDelivery;
