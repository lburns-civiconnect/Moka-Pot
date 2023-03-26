// An example for how to create a lightbox
// I've included this since webflow lightboxes don't seem to work once exported

// instead of placing an <a><img/></a> tag on the screen you place a <Lightbox/> component.
// <Lightbox /> Attributes:
//    group = allows you to make multiple lightboxes on one page. If items have the same groupo, theyre in the same lightbox
//    aClass = the class on webflows link surrounding the image
//    imgClass = the class on webflows image
//    imgSrc = the url or path of the image

import React from "react";
import Lightbox from "../components/Lightbox";

const ExampleLightbox = () => {
  return (
    <div>
      <h2>An example for how to display lightboxes</h2>
      <h4>located in /src/examples/ExampleLightbox.js</h4>
      <Lightbox group="a" aClass="w-inline-block w-lightbox" imgClass="image-10" imgSrc="images/1-13.png" />
      <Lightbox group="b" aClass="w-inline-block w-lightbox" imgClass="image-10" imgSrc="images/1-15.png" />
      <Lightbox group="a" aClass="w-inline-block w-lightbox" imgClass="image-10" imgSrc="images/1-14.png" />
      <Lightbox group="b" aClass="w-inline-block w-lightbox" imgClass="image-10" imgSrc="images/1-15.png" />
      <Lightbox group="b" aClass="w-inline-block w-lightbox" imgClass="image-10" imgSrc="images/1-15.png" />
      <Lightbox group="b" aClass="w-inline-block w-lightbox" imgClass="image-10" imgSrc="images/1-15.png" />
      <Lightbox group="b" aClass="w-inline-block w-lightbox" imgClass="image-10" imgSrc="images/1-15.png" />
    </div>
  );
};

export default ExampleLightbox;
