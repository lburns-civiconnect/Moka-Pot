// This is an example for how to display a strapi single type. Follow the comments:

import React from "react";

// Import all the functions we need
import { useSelector } from "react-redux";
import { pullData } from "../util/pullData";
import { renderCollection } from "../util/renderCollection";

// import all the components we want to display
import RichText from "../components/RichText";

function ExampleDisplayCollection() {
  // Make sure endpointSlug is the proper database table slug from strapi
  const endPointSlug = "example-collections";
  const { data } = useSelector((state) => state.cms);
  const displayData = data[endPointSlug];

  return (
    <div>
      {/* You can place any static JSX/html before or after your collection component */}
      <h2>An example for how to display database collection</h2>
      <h4>located in /src/examples/ExampleDisplayCollection.js</h4>

      {/* This next line causes the code from below marked =>HERE<=  to be displayed*/}
      {renderCollection(CollectionEntry, displayData, endPointSlug)}
    </div>
  );
}

// =>HERE<=
const CollectionEntry = (props) => {
  // we can now access any of our strapi fields using data.fieldName
  let data = pullData(props);

  // This code gets repeated once per database entry in strapi.
  return (
    <div style={{ backgroundColor: "lightgrey", margin: 10, padding: 20 }}>
      {/* rendering a regular text field */}
      <p>{data.text}</p>

      {/* rendering a rich text field */}
      <RichText text={data.richText} />

      {/* rendering some various other datatypes */}
      <p>{data.number}</p>
      <p>{data.date}</p>
      <p>{data.boolean ? "true" : "false"}</p>
      <p>{data.email}</p>
      <p>{data.list}</p>

      {/* rendering an image */}
      {data.image.data.attributes.url}
      <img src={data.image.data.attributes.url} style={{ width: 100, height: 100 }} />
    </div>
  );
};

export default ExampleDisplayCollection;
