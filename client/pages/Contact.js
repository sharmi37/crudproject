import React, { useState } from "react";
import axios from "axios";
import { getDropdownMenuPlacement } from "react-bootstrap/esm/DropdownMenu";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/contact", form);
      alert(res.data.message);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Error storing contact data");
      console.error(err);
    }
  };

  return (
    
    <div style={styles.container}>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: "350px",
    margin: "40px auto",
    fontFamily: "Arial",
    padding: "20px",
    border: "3px solid #0f0303",
    borderRadius: "8px",
    backgroundColor:  "#edf3eb",
   

  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  button: {
    backgroundColor: "#f3faf4",
    color:"#0f0303" ,
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Contact;
