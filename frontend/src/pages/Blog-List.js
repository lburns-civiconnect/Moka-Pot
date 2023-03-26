import React from "react";
import Page from "../components/Page";

function BlogList() {
  return (
    <Page>
      <div className="content-body">
        <div className="heading-block">
          <h1 className="heading-block-text">Our Blog</h1>
        </div>
        <div className="div-section section-white-bg wf-section">
          <div className="container-tags w-container">
            <div className="div-radio">
              <div className="text-all-caps">BY&nbsp;TAGS</div>
              <div className="radio-button-tags w-form">
                <form id="email-form" name="email-form" data-name="Email Form" method="get" className="radio-tags-form">
                  <label className="radio-tags-field w-radio">
                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-tags-button w-radio-input" />
                    <input type="radio" id="blends-2" name="blog-list-tags" defaultValue="blends" data-name="blog-list-tags" style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span className="radio-button-tags-label w-form-label" htmlFor="blends-2">
                      BLENDS
                    </span>
                  </label>
                  <label className="radio-tags-field w-radio">
                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-tags-button w-radio-input" />
                    <input type="radio" id="blends-2" name="blog-list-tags" defaultValue="blends" data-name="blog-list-tags" style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span className="radio-button-tags-label w-form-label" htmlFor="blends-2">
                      COFFEE
                    </span>
                  </label>
                  <label className="radio-tags-field w-radio">
                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-tags-button w-radio-input" />
                    <input type="radio" id="blends-2" name="blog-list-tags" defaultValue="blends" data-name="blog-list-tags" style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span className="radio-button-tags-label w-form-label" htmlFor="blends-2">
                      MORNING
                    </span>
                  </label>
                  <label className="radio-tags-field w-radio">
                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-tags-button w-radio-input" />
                    <input type="radio" id="blends-2" name="blog-list-tags" defaultValue="blends" data-name="blog-list-tags" style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span className="radio-button-tags-label w-form-label" htmlFor="blends-2">
                      FOOD
                    </span>
                  </label>
                  <label className="radio-tags-field w-radio">
                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-tags-button w-radio-input" />
                    <input type="radio" id="blends-2" name="blog-list-tags" defaultValue="blends" data-name="blog-list-tags" style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span className="radio-button-tags-label w-form-label" htmlFor="blends-2">
                      TIPS
                    </span>
                  </label>
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            <div data-hover="false" data-delay={300} className="dropdown w-dropdown">
              <div className="dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                <div className="w-icon-dropdown-toggle" />
                <div className="text-all-caps size-16">SORT&nbsp;BY</div>
              </div>
              <nav className="dropdown-list w-dropdown-list" id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
                <div className="div-dropdown-item">
                  <img src="images/newest.png" loading="lazy" alt="" className="filter-icon" />
                  <div className="text-all-caps size-16">NEWEST</div>
                </div>
                <div className="div-dropdown-item">
                  <img src="images/oldest.png" loading="lazy" srcSet="images/oldest-p-500.png 500w, images/oldest.png 512w" sizes="(max-width: 479px) 0px, 100vw" alt="" className="filter-icon" />
                  <div className="text-all-caps size-16">OLDEST</div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="div-section div-blog-listing wf-section">
          <div className="container-blog-list w-container">
            <div className="w-layout-grid grid-blog-listing">
              <a id="w-node-_54344150-1b2b-03ca-d836-e209f1a53d78-016c3613" href="/blog-post" className="blog-listing featured-post w-inline-block">
                <img
                  src="images/featured.jpg"
                  loading="lazy"
                  srcSet="images/featured-p-500.jpg 500w, images/featured-p-800.jpg 800w, images/featured-p-1080.jpg 1080w, images/featured-p-1600.jpg 1600w, images/featured-p-2000.jpg 2000w, images/featured-p-2600.jpg 2600w, images/featured-p-3200.jpg 3200w"
                  alt=""
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 542px"
                  className="blog-listing-cover"
                />
                <div className="blog-listing-details">
                  <div className="blog-listing-tags">
                    <div className="blog-listing-flair">
                      <div className="blog-listing-flair-text">BLENDS</div>
                    </div>
                    <div className="blog-listing-flair">
                      <div className="blog-listing-flair-text">COFFEE</div>
                    </div>
                    <div className="blog-listing-flair">
                      <div className="blog-listing-flair-text">MORNING</div>
                    </div>
                  </div>
                  <div className="html-pin is-pinned w-embed">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M0 0H16V16H0V0Z" fill="url(#pattern0)" />
                      <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                          <use xlinkHref="#image0_484_1957" transform="scale(0.00195312)" />
                        </pattern>
                        <image
                          id="image0_484_1957"
                          width={512}
                          height={512}
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA3XAAAN1wFCKJt4AAAFu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wOS0yM1QxNDozMTozNC0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDktMjNUMTQ6MzU6MDctMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDktMjNUMTQ6MzU6MDctMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE0ZmM2N2QyLWE5NGUtMzg0NS04MzQyLWVlMWYyYTNkMDM0OSIgeG1wTU06RG9jdW1lbnRJRD0i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"
                        ></image>
                      </defs>
                    </svg>
                  </div>
                  <div className="text-featured is-featured">featured</div>
                </div>
                <h4 className="blog-listing-title">THE&nbsp;WAY&nbsp;TO&nbsp;COFFEE</h4>
                <div className="blog-listing-featured-text">
                  mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec
                  ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras
                  pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut
                  placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit
                  euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt ...
                </div>
                <div className="blog-listing-text">DIONYSIA, L.</div>
                <div className="blog-listing-text">MONDAY, SEPTEMBER&nbsp;19, 2022</div>
              </a>
              <div id="w-node-a6913d0c-c976-9262-dfab-72e1062d7f23-062d7f23" className="blog-listing">
                <img
                  src="images/placeholder-1.jpg"
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 542px"
                  srcSet="images/placeholder-1-p-500.jpg 500w, images/placeholder-1-p-800.jpg 800w, images/placeholder-1-p-1080.jpg 1080w, images/placeholder-1-p-1600.jpg 1600w, images/placeholder-1-p-2000.jpg 2000w, images/placeholder-1-p-2600.jpg 2600w, images/placeholder-1-p-3200.jpg 3200w"
                  className="blog-listing-cover"
                />
                <div className="blog-listing-details">
                  <div className="blog-listing-tags">
                    <div className="blog-listing-flair">
                      <div className="blog-listing-flair-text">BLENDS</div>
                    </div>
                    <div className="blog-listing-flair">
                      <div className="blog-listing-flair-text">COFFEE</div>
                    </div>
                    <div className="blog-listing-flair">
                      <div className="blog-listing-flair-text">MORNING</div>
                    </div>
                  </div>
                  <img src="images/pin.png" loading="lazy" alt="This is a pinned post!" className="blog-listing-special-trait" />
                </div>
                <h4 className="blog-listing-title">PLACEHOLDER TITLE PLACEHOLDER TITLE PLACEHOLDER TITLE PLACEHOLDER TITLE</h4>
                <div className="blog-listing-text">FIRST L.</div>
                <div className="blog-listing-text">MONDAY, SEPTEMBER 28, 2022</div>
              </div>
              <div id="w-node-a6913d0c-c976-9262-dfab-72e1062d7f23-062d7f23" className="blog-listing">
                <img
                  src="images/placeholder-2.jpg"
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 542px"
                  srcSet="images/placeholder-2-p-500.jpg 500w, images/placeholder-2-p-800.jpg 800w, images/placeholder-2-p-1080.jpg 1080w, images/placeholder-2-p-1600.jpg 1600w, images/placeholder-2-p-2000.jpg 2000w, images/placeholder-2.jpg 2437w"
                  className="blog-listing-cover"
                />
                <div className="blog-listing-details">
                  <div className="blog-listing-tags">
                    <div className="blog-listing-flair">
                      <div className="blog-listing-flair-text">BLENDS</div>
                    </div>
                    <div className="blog-listing-flair">
                      <div className="blog-listing-flair-text">COFFEE</div>
                    </div>
                    <div className="blog-listing-flair">
                      <div className="blog-listing-flair-text">MORNING</div>
                    </div>
                  </div>
                  <img src="images/blank-square.png" loading="lazy" alt="" className="blog-listing-special-trait" />
                </div>
                <h4 className="blog-listing-title">PLACEHOLDER TITLE PLACEHOLDER TITLE PLACEHOLDER TITLE PLACEHOLDER TITLE</h4>
                <div className="blog-listing-text">FIRST L.</div>
                <div className="blog-listing-text">MONDAY, SEPTEMBER 28, 2022</div>
              </div>
              <div id="w-node-a6913d0c-c976-9262-dfab-72e1062d7f23-062d7f23" className="blog-listing">
                <img
                  src="images/placeholder-3.jpg"
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 542px"
                  srcSet="images/placeholder-3-p-500.jpg 500w, images/placeholder-3-p-800.jpg 800w, images/placeholder-3-p-1080.jpg 1080w, images/placeholder-3-p-1600.jpg 1600w, images/placeholder-3-p-2000.jpg 2000w"
                  className="blog-listing-cover"
                />
                <div className="blog-listing-details">
                  <div className="blog-listing-tags">
                    <div className="blog-listing-flair">
                      <div className="blog-listing-flair-text">BLENDS</div>
                    </div>
                    <div className="blog-listing-flair">
                      <div className="blog-listing-flair-text">COFFEE</div>
                    </div>
                    <div className="blog-listing-flair">
                      <div className="blog-listing-flair-text">MORNING</div>
                    </div>
                  </div>
                  <img
                    src="images/blank-square.png"
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 542px"
                    srcSet="images/blank-square-p-500.png 500w, images/blank-square.png 512w"
                    className="blog-listing-special-trait"
                  />
                </div>
                <h4 className="blog-listing-title">PLACEHOLDER TITLE PLACEHOLDER TITLE PLACEHOLDER TITLE PLACEHOLDER TITLE</h4>
                <div className="blog-listing-text">FIRST L.</div>
                <div className="blog-listing-text">MONDAY, SEPTEMBER 28, 2022</div>
              </div>
              <div id="w-node-a6913d0c-c976-9262-dfab-72e1062d7f23-062d7f23" className="blog-listing">
                <img
                  src="images/placeholder-4.jpg"
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 542px"
                  srcSet="images/placeholder-4-p-500.jpg 500w, images/placeholder-4-p-800.jpg 800w, images/placeholder-4-p-1080.jpg 1080w, images/placeholder-4-p-1600.jpg 1600w, images/placeholder-4-p-2000.jpg 2000w, images/placeholder-4-p-2600.jpg 2600w, images/placeholder-4-p-3200.jpg 3200w"
                  className="blog-listing-cover"
                />
                <div className="blog-listing-details">
                  <div className="blog-listing-tags">
                    <div className="blog-listing-flair">
                      <div className="blog-listing-flair-text">BLENDS</div>
                    </div>
                    <div className="blog-listing-flair">
                      <div className="blog-listing-flair-text">COFFEE</div>
                    </div>
                    <div className="blog-listing-flair">
                      <div className="blog-listing-flair-text">MORNING</div>
                    </div>
                  </div>
                  <img src="images/blank-square.png" loading="lazy" alt="" className="blog-listing-special-trait" />
                </div>
                <h4 className="blog-listing-title">PLACEHOLDER TITLE PLACEHOLDER TITLE PLACEHOLDER TITLE PLACEHOLDER TITLE</h4>
                <div className="blog-listing-text">FIRST L.</div>
                <div className="blog-listing-text">MONDAY, SEPTEMBER 28, 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default BlogList;
