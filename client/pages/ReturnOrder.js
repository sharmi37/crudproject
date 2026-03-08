import React, { useState } from "react";
import axios from "axios";
import "./ReturnOrder.css";

const ReturnOrder = () => {
  const [formData, setFormData] = useState({
    orderId: "",
    email: "",
    reason: "",
    condition: "unused",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/return-order",
        formData
      );
      alert(res.data.message);
      setSubmitted(true);
    } catch (err) {
      alert("Error submitting return request");
      console.error(err);
    }
  };

  return (
    <div className="return-page">
      <h1>Return & Refund Request</h1>
      <p>Please fill out the form below to submit a return request.</p>

      {submitted ? (
        <div className="success-message">
          <h2>Request Submitted Successfully</h2>
          <p>Our team will contact you shortly.</p>
        </div>
      ) : (
        <form className="return-form" onSubmit={handleSubmit}>
          <label>Order ID</label>
          <input
            type="text"
            name="orderId"
            value={formData.orderId}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Reason</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          />

          <label>Product Condition</label>
          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
          >
            <option value="unused">Unused</option>
            <option value="opened">Opened</option>
            <option value="damaged">Damaged</option>
          </select>

          <button type="submit" className="submit-btn">
            Submit Return Request
          </button>
        </form>
      )}
    </div>
  );
};

export default ReturnOrder;
