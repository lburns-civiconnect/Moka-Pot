// This is an example for how to display a strapi single type. Follow the comments:

import React from "react";

// Import all the functions we need
import { useSelector } from "react-redux";
import { pullData } from "../util/pullData";
import { renderSingleType } from "../util/renderSingleType";

// import all the components we want to display
import Accordion from "../components/Accordion";
import RichText from "../components/RichText";
import Slider from "../components/Slider";

function ExampleDisplaySingleType() {
  // Make sure endpointSlug is the proper database table slug from strapi
  const endPointSlug = "example-single-type";
  const { data } = useSelector((state) => state.cms);
  const displayData = data[endPointSlug];

  return (
    <div>
      {/* You can place any static JSX/html before or after your single type component */}
      <h2>An example for how to display database single types</h2>
      <h4>located in /src/examples/ExampleDisplaySingleType.js</h4>

      {/* This next line causes the code from below marked =>HERE<=  to be displayed*/}
      {renderSingleType(SingleType, displayData, endPointSlug)}
    </div>
  );
}

// =>HERE<=
const SingleType = (props) => {
  // we can now access any of our strapi fields using data.fieldName
  let data = pullData(props);

  // This is what gets displayed as our single type on the page. It will be linked to strapi
  return (
    <div style={{ backgroundColor: "lightgrey", margin: 10, padding: 20 }}>
      {/* rendering a regular text field */}
      <h1>{data.exampleHeader}</h1>

      {/* rendering a rich text field */}
      <RichText text={data.exampleBody} />

      {/* rendering an accordion component */}
      {/* some changes may need to be made to the <Accordion /> component */}
      {data.exampleAccordion && <Accordion data={data.exampleAccordion.items} />}

      {/* rendering a slider component */}
      {/* some changes may need to be made to the <Slider /> component */}
      {data.exampleSlider && <Slider data={data.exampleSlider.items} />}
    </div>
  );
};

export default ExampleDisplaySingleType;
