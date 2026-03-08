import React from "react";

function About() {
  return (
    <div style={styles.container}>
      <center><h1>About Page</h1></center>

      <center>
        <p>
          Each saree is thoughtfully sourced and carefully crafted by experienced weavers 
          who pour their passion into every thread. Whether it’s the lustrous 
          Kanchipuram silk, the intricate Banarasi zari, the delicate Chanderi weave, 
          or the vibrant Tussar drape, we ensure that every piece reflects premium 
          quality and true artisanal excellence.
        </p>
      </center>

      <center><h2>Our Promise</h2></center>

      <center>
        <p>
          Our mission is to build useful and modern web applications that help  
          users achieve their goals.
        </p>
      </center>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "White",   // ✅ White Background Added
    fontFamily: "Arial",
    lineHeight: "1.6",
    borderRadius: "10px",
  },
};

export default About;


