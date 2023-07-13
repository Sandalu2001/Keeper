import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer fixed-bottom">
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
