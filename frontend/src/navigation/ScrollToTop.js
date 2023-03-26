// This fixes a react navigation bug.
// When navigating between pages, this ensures that we scroll to the top of the page
import React from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop(props) {
  let location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
}

export default ScrollToTop;
