import React from "react";
import "./ReturnOrder.css";

function ReturnOrder() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Return Request Submitted Successfully!");

    // Reset form after submit
    e.target.reset();
  };

  return (
    <div className="return-page">
      <h1>Return & Refund Request</h1>
      <p>Please fill out the form below to submit a return request.</p>

      <form className="return-form" onSubmit={handleSubmit}>

        <label>Order ID</label>
        <input
          type="text"
          name="orderId"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          required
        />

        <label>Reason</label>
        <textarea
          name="reason"
          required
        />

        <label>Product Condition</label>
        <select name="condition">
          <option value="unused">Unused</option>
          <option value="opened">Opened</option>
          <option value="damaged">Damaged</option>
        </select>

        <button type="submit" className="submit-btn">
          Submit Return Request
        </button>

      </form>
    </div>
  );
}

export default ReturnOrder;
