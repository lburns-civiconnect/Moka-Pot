// This component is the base for every page displayed on the screen
// It ensures that each page has the head tags, footer, navbar, and Banner componentes
import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Head from "./Head";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

function Page(props) {
  return (
    <>
      <Banner />
      <Head />
      <Navbar />
      <NavbarMobile />
      {props.children}
      <Footer />
    </>
  );
}

export default Page;
