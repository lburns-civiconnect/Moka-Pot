// DOCUMENTATION:
// https://reactrouter.com/docs/en/v6

// This file sets up the page navigation or the sitemap of our website.
// This is not our Navbar component

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// Import the necessary page files from ../pages/Something.js
import Index from "../pages/Index";
import ErrorPage from "../pages/404";
import About from "../pages/About";
import Examples from "../pages/Examples";
import Contact from "../pages/Contact";
import BlogList from "../pages/Blog-List";
import BlogPost from "../pages/Blog-Post";

function Navigation(props) {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          {/* We need to add a route for each of our pages. 
          Path is the page slug www.something.com/slug. 
          Element is the React component to display when we get to that slug. */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog-list" element={<BlogList />} />
          <Route path="/blog-post" element={<BlogPost />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Navigation;
