import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { strapiEndpoints } from "./endpoints";
import Navigation from "./navigation/Navigation";
import * as CmsActions from "./store/actions/cms";

function App() {
  const dispatch = useDispatch();

  // fix webflow animation bug
  useEffect(()=> {
    window.WebFlow && window.WebFlow.destroy();
    window.WebFlow && window.WebFlow.ready();
    window.WebFlow && window.WebFlow.require("ix2").init();
    document.dispatchEvent(new Event("readystatechange"));
  });

  // fetch all of our data on app load from Strapi.
  // To edit what endpoints are accessed, edit the ./endpoints.js file
  useEffect(() => {
    strapiEndpoints.forEach((el) => dispatch(CmsActions.fetchCms(el.slug, el.populate)));
  }, []);

  // Display our app navigator component from ./navigation/Navigation.js
  return <Navigation />;
}

export default App;
