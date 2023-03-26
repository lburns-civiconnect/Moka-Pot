import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { Helmet } from "react-helmet";

function Head() {
  useEffect(() => {
    // If your head code includes any google fonts, place them here
    WebFont.load({
      google: {
        families: ["Alata:regular", "Quicksand:regular", "Arapey:regular,italic", "Montserrat:regular"],
      },
    });
  }, []);

  //   Depending on the page we're on, we'll want different head tags. make a 'case' for each page slug,
  //   Convert your webflow <head></head> code to JSX and paste it between these <Helmet></Helmet> tags
  switch (window.location.pathname) {

    case "/":
      return(
        <Helmet>
          <meta charSet="utf-8" />
          <title>Welcome to the Moka Pot Café!</title>
          <meta content="More than just coffee." name="description" />
          <meta content="Welcome to the Moka Pot Café!" property="og:title" />
          <meta content="More than just coffee." property="og:description" />
          <meta
            content="https://uploads-ssl.webflow.com/6331b8dd12a93e0fd8dd3a2d/63335f9bef67a75338631790_pexels-afta-putta-gunawan-683039.jpg"
            property="og:image"
          />
          <meta content="Welcome to the Moka Pot Café!" property="twitter:title" />
          <meta content="More than just coffee." property="twitter:description" />
          <meta
            content="https://uploads-ssl.webflow.com/6331b8dd12a93e0fd8dd3a2d/63335f9bef67a75338631790_pexels-afta-putta-gunawan-683039.jpg"
            property="twitter:image"
          />
          <meta property="og:type" content="website" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="Webflow" name="generator" />
          <link href="css/normalize.css" rel="stylesheet" type="text/css" />
          <link href="css/webflow.css" rel="stylesheet" type="text/css" />
          <link href="css/moka-pot-main.webflow.css" rel="stylesheet" type="text/css" />
          {/* [if lt IE 9]><![endif] */}
          <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon" />
          <link href="images/webclip.png" rel="apple-touch-icon" />
        </Helmet>
      )
    case "/contact":
      return(
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Us — Moka Pot Café</title>
          <meta content="Get in touch with us here at Moka Pot!" name="description" />
          <meta content="Contact Us — Moka Pot Café" property="og:title" />
          <meta
            content="Get in touch with us here at Moka Pot!"
            property="og:description"
          />
          <meta content="Contact Us — Moka Pot Café" property="twitter:title" />
          <meta
            content="Get in touch with us here at Moka Pot!"
            property="twitter:description"
          />
          <meta property="og:type" content="website" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="Webflow" name="generator" />
          <link href="css/normalize.css" rel="stylesheet" type="text/css" />
          <link href="css/webflow.css" rel="stylesheet" type="text/css" />
          <link href="css/moka-pot-main.webflow.css" rel="stylesheet" type="text/css" />
          <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon" />
          <link href="images/webclip.png" rel="apple-touch-icon" />

        </Helmet>
      )

      case "/blog-list":
        return(
          <Helmet>
            <meta charSet="utf-8" />
            <title>Our Blog — Moka Pot Café</title>
            <meta
              content="Get the latest insight of what's brewing at Moka Pot Café!"
              name="description"
            />
            <meta content="Our Blog — Moka Pot Café" property="og:title" />
            <meta
              content="Get the latest insight of what's brewing at Moka Pot Café!"
              property="og:description"
            />
            <meta content="Our Blog — Moka Pot Café" property="twitter:title" />
            <meta
              content="Get the latest insight of what's brewing at Moka Pot Café!"
              property="twitter:description"
            />
            <meta property="og:type" content="website" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta content="Webflow" name="generator" />
            <link href="css/normalize.css" rel="stylesheet" type="text/css" />
            <link href="css/webflow.css" rel="stylesheet" type="text/css" />
            <link href="css/moka-pot-main.webflow.css" rel="stylesheet" type="text/css" />
            <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon" />
            <link href="images/webclip.png" rel="apple-touch-icon" />
          </Helmet>
        )

      case "/blog-post":
        return(
          <Helmet>
            <meta charSet="utf-8" />
            <title>What's Going On With The Price of Coffee? — Moka Pot Blog</title>
            <meta
              content="What's going on with the price of coffee? — Dionysia Lemonkaa, September 2022"
              name="description"
            />
            <meta
              content="What's Going On With The Price of Coffee? —  Moka Pot Blog"
              property="og:title"
            />
            <meta
              content="What's going on with the price of coffee? — Dionysia Lemonkaa, September 2022"
              property="og:description"
            />
            <meta
              content="What's Going On With The Price of Coffee? —  Moka Pot Blog"
              property="twitter:title"
            />
            <meta
              content="What's going on with the price of coffee? — Dionysia Lemonkaa, September 2022"
              property="twitter:description"
            />
            <meta property="og:type" content="website" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta content="Webflow" name="generator" />
            <link href="css/normalize.css" rel="stylesheet" type="text/css" />
            <link href="css/webflow.css" rel="stylesheet" type="text/css" />
            <link href="css/moka-pot-main.webflow.css" rel="stylesheet" type="text/css" />
            <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon" />
            <link href="images/webclip.png" rel="apple-touch-icon" />

          </Helmet>
        )
        
    default:
      return         <Helmet>
      <meta charSet="utf-8" />
      <title>Not Found</title>
      <meta content="Not Found" property="og:title" />
      <meta content="Not Found" property="twitter:title" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="Webflow" name="generator" />
      <link href="css/normalize.css" rel="stylesheet" type="text/css" />
      <link href="css/webflow.css" rel="stylesheet" type="text/css" />
      <link href="css/moka-pot-main.webflow.css" rel="stylesheet" type="text/css" />
      <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon" />
      <link href="images/webclip.png" rel="apple-touch-icon" />
    </Helmet>;
  }
}

export default Head;
