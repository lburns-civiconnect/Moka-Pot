// Our Navbar component
// Thsi will need to be modified to match the JSX coming from webflow

import React from "react";
import { Link } from "react-router-dom";

function NavbarMobile() {
  return (
<div
  data-animation="default"
  data-collapse="medium"
  data-duration={400}
  data-easing="ease"
  data-easing2="ease"
  role="banner"
  className="navbar-mobile w-nav"
>
  <div className="w-container">
    <nav role="navigation" className="nav-menu w-nav-menu">
      <a
        href="/"
        aria-current="page"
        className="navbar-link w-nav-link w--current"
      >
        Home
      </a>
      <a href="/blog-list" className="navbar-link w-nav-link">
        Blog
      </a>
      <a
        href="/contact"
        className="navbar-link navbar-bottom w-nav-link"
      >
        Contact
      </a>
    </nav>
    <div className="menu-button-mobile w-nav-button">
      <div className="menu-icon w-icon-nav-menu" />
    </div>
  </div>
</div>


  );
}

export default NavbarMobile;