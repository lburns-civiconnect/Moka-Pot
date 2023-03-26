import React from "react";
import Page from "../components/Page";

function Contact() {
  return <Page><div className="content-body">
  <div className="heading-block">
    <h1 className="heading-block-text">Contact Us</h1>
  </div>
  <div className="new-div-section wf-section">
    <div className="container-centered w-container">
      <div className="w-layout-grid grid-contact-icons">
        <div className="centre-vertical-div">
          <img
            src="images/imageedit_13_4943186214.png"
            loading="lazy"
            alt=""
            className="contact-us-icon"
          />
          <h3 className="heading-3">Call Us</h3>
          <p className="contact-us-para">123-456-7890</p>
        </div>
        <div
          id="w-node-e24b2ae6-e5cd-10b6-5800-cdc152eb5901-336c3615"
          className="centre-vertical-div"
        >
          <img
            src="images/imageedit_16_5216557504.png"
            loading="lazy"
            alt=""
            className="contact-us-icon"
          />
          <h3 className="heading-3">Service Hours</h3>
          <p className="contact-us-para">
            Mon-Fri: 7am to 8pm
            <br />
            Sat-Sun: 8am to 7pm
          </p>
        </div>
        <div
          id="w-node-e24b2ae6-e5cd-10b6-5800-cdc152eb5909-336c3615"
          className="centre-vertical-div"
        >
          <img
            src="images/imageedit_9_8695079984.png"
            loading="lazy"
            alt=""
            className="contact-us-icon"
          />
          <h3 className="heading-3">Email Us</h3>
          <p className="contact-us-para">mokapot@email.com</p>
        </div>
      </div>
    </div>
  </div>
  <div className="new-div-section wf-section">
    <div className="container-centered w-container">
      <div className="div-find-us">
        <div className="form-block w-form">
          <h2 className="heading-centered">We'd Love Your Feedback!</h2>
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            method="get"
            className="contact-form"
          >
            <div className="w-layout-grid grid-contact-form">
              <div id="w-node-ce7c1543-a09d-00af-1601-a5e3886cf710-336c3615">
                <input
                  type="text"
                  className="text-field-contact-form w-input"
                  maxLength={256}
                  name="name-2"
                  data-name="Name 2"
                  placeholder="Name"
                  id="name-2"
                  required=""
                />
              </div>
              <div id="w-node-ce7c1543-a09d-00af-1601-a5e3886cf712-336c3615">
                <input
                  type="email"
                  className="text-field-contact-form w-input"
                  maxLength={256}
                  name="email-2"
                  data-name="Email 2"
                  placeholder="Email"
                  id="email-2"
                  required=""
                />
              </div>
              <textarea
                placeholder="Your Message"
                maxLength={5000}
                id="field-2"
                name="field-2"
                data-name="field"
                required=""
                className="text-field-contact-form extra-class w-node-ce7c1543-a09d-00af-1601-a5e3886cf714-336c3615 w-input"
                defaultValue={""}
              />
            </div>
            <input
              type="submit"
              defaultValue="Submit"
              data-wait="Please wait..."
              className="light-button brown-button w-button"
            />
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="new-div-section wf-section">
    <div className="container-centered w-container">
      <div className="div-find-us">
        <h2 className="heading-centered">Find Us</h2>
        <div
          className="map w-widget w-widget-map"
          data-widget-style="roadmap"
          data-widget-latlng=""
          aria-label=""
          data-enable-scroll="true"
          role="region"
          title=""
          data-enable-touch="true"
          data-widget-zoom={12}
          data-widget-tooltip=""
        />
      </div>
      <div className="embedded-calendar w-embed w-iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27712.95650330376!2d-79.49253667636259!3d43.16277472533289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882cae0ed34136cd%3A0x19c965e25abfc4cc!2s4996%20Beam%20St%2C%20Beamsville%2C%20ON%20L0R%201B0!5e0!3m2!1sen!2sca!4v1664372363810!5m2!1sen!2sca"
          width="100%"
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="embedded-calendar-mobile w-embed w-iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27712.95650330376!2d-79.49253667636259!3d43.16277472533289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882cae0ed34136cd%3A0x19c965e25abfc4cc!2s4996%20Beam%20St%2C%20Beamsville%2C%20ON%20L0R%201B0!5e0!3m2!1sen!2sca!4v1664372363810!5m2!1sen!2sca"
          width="100%"
          height={300}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
</div>
</Page>;
}

export default Contact;
