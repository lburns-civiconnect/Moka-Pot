// This banner display displays whether or not a form was submitted successfully.
// Its pretty generic and likely wont need to be modified.
// If you want to change the way it looks or what it says you can do so below
import React, { useEffect, useState } from "react";

// Success settings
let success = {
  message: "Thanks for your message! We'll get back to you as soon as we can",
  backgroundColor: "#4BB543",
  textColor: "white",
};

// Error Settings
let error = {
  message: "Oops, something went wrong! Please try again",
  backgroundColor: "#ED4337",
  textColor: "white",
};

// General Banner CSS Styles
let cssStyles = {
  display: "flex",
  position: "absolute",
  top: 30,
  left: 0,
  width: "80%",
  marginLeft: "10%",
  marginRight: "10%",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
  borderRadius: 20,
  fontSize: 22,
};

function Banner() {
  const [display, setDisplay] = useState(false);
  const [content, setContent] = useState("");
  const [background, setBackground] = useState("white");
  const [color, setColor] = useState("black");

  let params = new URL(document.location).searchParams;
  let form = params.get("form");

  useEffect(() => {
    if (form === "success") {
      setDisplay(true);
      setContent(success.message);
      setBackground(success.backgroundColor);
      setColor(success.textColor);
      setTimeout(() => {
        setDisplay(false);
        window.location = window.location.origin;
      }, 1000);
    }
    if (form === "error") {
      setDisplay(true);
      setContent(error.message);
      setBackground(error.backgroundColor);
      setColor(error.textColor);
      setTimeout(() => {
        setDisplay(false);
        window.location = window.location.origin;
      }, 1000);
    }
  }, [form]);

  return (
    <div
      style={
        display
          ? {
              ...cssStyles,
              backgroundColor: background,
              color: color,
            }
          : { display: "none" }
      }
    >
      {content}
    </div>
  );
}

export default Banner;
