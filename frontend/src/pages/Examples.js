import React from "react";
import ExampleForm from "../examples/ExampleForm";
import Page from "../components/Page";
import ExampleDisplayCollection from "../examples/ExampleDisplayCollection";
import ExampleDisplaySingleType from "../examples/ExampleDisplaySingleType";
import ExampleLightbox from "../examples/ExampleLightbox";

function Examples() {
  return (
    <Page>
      <h1>Examples Page</h1>
      <ExampleForm />
      <ExampleDisplayCollection />
      <ExampleDisplaySingleType />
      <ExampleLightbox />
    </Page>
  );
}

export default Examples;
