import React from "react";
import Page from "../components/Page";

function Index() {
  return <Page>
    <div
  data-w-id="303b551e-6224-f13e-fa6b-b84c0a90a58d"
  className="preloader div-block"
>
  <div
    data-w-id="303b551e-6224-f13e-fa6b-b84c0a90a58e"
    data-animation-type="lottie"
    data-src="https://uploads-ssl.webflow.com/633475500459966986cd8a2e/6337542f8cabb022747c7d30_57944-brewing-coffee.json"
    data-loop={0}
    data-direction={1}
    data-autoplay={1}
    data-is-ix2-target={0}
    data-renderer="svg"
    data-default-duration="7.291666666666667"
    data-duration={0}
  />
</div>

  <div className="content-body">
    <div className="hero-section">
      <div className="hero-greet">
        <h1 className="heading-hero">
          Welcome to <br />
          Moka Pot Café!
        </h1>
        <p className="paragraph-hero">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo
          cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
          posuere.
        </p>
        <a href="/contact" className="light-button w-button">
          Connect With Us
        </a>
        <a href="#about-us" className="sliding-bar w-inline-block">
          <div className="html-embed w-embed">
            <svg
              width={64}
              height={64}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d="M0 0H64V64H0V0Z" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}
                >
                  <use
                    xlinkHref="#image0_499_1103"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_499_1103"
                  width={128}
                  height={128}
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAOKAAADigGnjPUfAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wOS0yM1QxMzo0Nzo0NS0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDktMjNUMTM6NDk6MjItMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDktMjNUMTM6NDk6MjItMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmVjMzgzMmY3LTAyYmYtNzU0Ni05OGQzLWRjZjQ4MTFjNTNlZiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDplYzM4MzJmNy0wMmJmLTc1NDYtOThkMy1kY2Y0ODExYzUzZWYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplYzM4MzJmNy0wMmJmLTc1NDYtOThkMy1kY2Y0ODExYzUzZWYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVjMzgzMmY3LTAyYmYtNzU0Ni05OGQzLWRjZjQ4MTFjNTNlZiIgc3RFdnQ6d2hlbj0iMjAyMi0wOS0yM1QxMzo0Nzo0NS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtIkKJsAAALPSURBVHja7d25axRAHEfxbRQDHk1Q0omVlYUXFrtepWgl+h/Y2VoGYmOjlaCtYKHWNqJoZ9BasbHRTrTwiNoEdfwNZmExG3aT7DG78/nCa8IyE+Y9kiJFGimlBurFIwjAIwgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAwqQH0WnxoV3A6uBJcCy4E+xpW1MLJnuBsMB9cDo4F2zZ76KXgW+q+e8Gspx+7+O3BreBPF0cfg/MbPfRR6r1PwSkaxib/aPC+D0/3+/5pEB/cETxP/e+nCMYm/+s6PD3uGcGK/MW0/omgbPntPQlm1jp0Z/AibXwiKFt+e09XRZC/ELxMm58Iypbf3rNgS+fB19PgJoKy5be30HnwrzTYiaBs+XnLwYF8+O00nImgXPnt3WwM6He/CCZPft5ivmQpDXciKFN+3lK+6FUa/nIEJ2ktSn7em3zZnTSaiaA/+UdGJD/vbr7wXBrdRFCO/LyL7YsfiKA6+Q87L58N3omgGvkfgrn/v4m9ff5pUQSTL3//Wt+MCEYv/0sR8kVA/rgjOEF+AfLHGMGPGiKYCPkiGJr8wxMjXwTki4B8EZAvAvJFQL4IyC8iguPkFyBfBOSLYPU7HKpOvgjIrz4C8iuOYEX+Z/IrjID8iiMgv9wIWuSLoEW+CFrki6BFft0RfB9EBHHGQfIrjYD8iiMgv+IIyK84AvKnP4Im+SJoki+CJvkiaJIvAvIrj4B8EZAvAvJFQL4IyBcB+SIgXwTki4B8EZAvAvJFQL4IyBcB+SIgv/oIyK84AvIrjoD8iiMgv+IIyK84AvIrjoD8KY3gdR/y35I/vRFsDa4Gy13E/w5uBDNeavpD2B2cCeaDhfTvH2jP1foYqBiPIACPIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAsCE8he+NxQKCd8VqgAAAABJRU5ErkJggg=="
                ></image>
              </defs>
            </svg>
          </div>
        </a>
      </div>
    </div>
    <div id="about-us" className="div-section wf-section">
      <div className="w-container">
        <h2 className="heading-about-us">About Us</h2>
        <div className="div-about-us">
          <img
            src="images/about-us-photo.jpg"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, 300px"
            srcSet="images/about-us-photo-p-500.jpg 500w, images/about-us-photo-p-800.jpg 800w, images/about-us-photo-p-1080.jpg 1080w, images/about-us-photo-p-1600.jpg 1600w, images/about-us-photo-p-2000.jpg 2000w, images/about-us-photo-p-2600.jpg 2600w, images/about-us-photo-p-3200.jpg 3200w"
            id="about-us-image"
            alt=""
            className="about-us-img"
          />
          <div className="div-about-us-text">
            <p className="paragraph-about-us">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean
              faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
              sem vitae risus tristique posuere.
            </p>
            <a href="/blog-list" className="light-button w-button">
              View Our Blogs
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="div-section section-white-bg wf-section">
      <div className="container-centered w-container">
        <h2 className="text-upcoming-events">Upcoming Events</h2>
        <div className="calendar w-embed w-iframe">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FToronto&src=bWFoYW1mMTAwQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTAwNjkyMjg2MTEwMDQ5OTE3NzUzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4uaXNsYW1pYyNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aHQzamxmYWFjNWxmZDYyNjN1bGZoNHRxbDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%2333B679&color=%23007b83&color=%230B8043&color=%234285F4&color=%23B39DDB"
            style={{ border: "solid 1px #777" }}
            width="100%"
            height={500}
            frameBorder={0}
            scrolling="no"
          />
        </div>
        <div className="calendar-mobile w-embed w-iframe">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FToronto&src=bWFoYW1mMTAwQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTAwNjkyMjg2MTEwMDQ5OTE3NzUzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4uaXNsYW1pYyNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aHQzamxmYWFjNWxmZDYyNjN1bGZoNHRxbDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%2333B679&color=%23007b83&color=%230B8043&color=%234285F4&color=%23B39DDB"
            style={{ border: "solid 1px #777" }}
            width="100%"
            height={400}
            frameBorder={0}
            scrolling="no"
          />
        </div>
      </div>
    </div>
  </div>

  </Page>;
}

export default Index;
