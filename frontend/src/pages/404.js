import React from "react";
import Page from "../components/Page";

function ErrorPage() {
  return <Page><div className="content-body">
  <div className="div-section section-white-bg wf-section">
    <div className="container-404 w-container">
      <div className="div-404">
        <img
          src="images/404-img.png"
          alt=""
          sizes="(max-width: 767px) 75vw, (max-width: 1919px) 37vw, 100vw"
          height={500}
          srcSet="images/404-img-p-500.png 500w, images/404-img.png 646w"
          id="w-node-_24909bfe-96d3-d3a2-7aa0-f74839d12b6f-aa1afc14"
          className="image-404"
        />
        <div className="div-404-text">
          <div
            id="w-node-_24909bfe-96d3-d3a2-7aa0-f74839d12b70-aa1afc14"
            className="text-page-not-found"
          >
            Page not found.
          </div>
          <h2
            id="w-node-_24909bfe-96d3-d3a2-7aa0-f74839d12b6d-aa1afc14"
            className="page-not-found"
          >
            404
          </h2>
        </div>
      </div>
    </div>
  </div>
</div>
</Page>;
}

export default ErrorPage;
