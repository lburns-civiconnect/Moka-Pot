import React from "react";
import Page from "../components/Page";

function BlogPost() {
  return <Page>
  <div className="content-body">
  <div className="heading-block">
    <h1 className="heading-block-text">The Way to Coffee</h1>
  </div>
  <div className="div-section section-white-bg wf-section">
    <div className="container-back-to-list w-container">
      <a href="/blog-list" className="back-to-list-link w-inline-block">
        <img
          src="images/left-arrow_1left-arrow.png"
          loading="lazy"
          alt=""
          className="back-arrow"
        />
        <div className="back-to-list-text">BACK&nbsp;TO&nbsp;LIST</div>
      </a>
    </div>
  </div>
  <div className="div-section blog-post wf-section">
    <div className="container-back-to-list w-container">
      <img
        src="images/featured.jpg"
        loading="lazy"
        srcSet="images/featured-p-500.jpg 500w, images/featured-p-800.jpg 800w, images/featured-p-1080.jpg 1080w, images/featured-p-1600.jpg 1600w, images/featured-p-2000.jpg 2000w, images/featured-p-2600.jpg 2600w, images/featured-p-3200.jpg 3200w"
        alt=""
        sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 182px, (max-width: 1279px) 18vw, 235px"
        className="blog-post-cover-photo"
      />
      <div className="blog-list-contents">
        <h2 className="blog-heading">
          What’s going on with the price of coffee?
        </h2>
        <h3 className="font-black">September 2022</h3>
        <h3 className="font-black">Dionysia Lemonkaa</h3>
        <div className="div-blog-post-tags">
          <div className="blog-post-tag">BLENDS</div>
          <div className="blog-post-tag">COFFEE</div>
          <div className="blog-post-tag">MORNING</div>
        </div>
        <p className="blog-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco...
        </p>
      </div>
    </div>
  </div>
</div>

</Page>;
}

export default BlogPost;
