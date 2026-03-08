import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <h3 style={styles.title}>Saree Store</h3>

        <p style={styles.text}>
          Premium handcrafted sarees made with love by skilled artisans across India.
        </p>
        <div style={styles.links}>
          <a href="/about" style={styles.link}>About Us</a>
          <a href="/contact" style={styles.link}>Contact</a>
          <a href="/login" style={styles.link}>Login</a>
        </div>

        <p style={styles.copyright}>
          © {new Date().getFullYear()} Saree Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#138104ff",
    color: "white",
    padding: "20px 10px",
    marginTop: "20px",
  },
  content: {
    maxWidth: "2000px",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    lineHeight: 0.6,
    marginBottom: "20px",
  },
  links: {
    marginBottom: "20px",
  },
  link: {
    margin: "0 15px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  copyright: {
    fontSize: "14px",
    opacity: 0.7,
    marginTop: "10px",
  },
};

export default Footer;
