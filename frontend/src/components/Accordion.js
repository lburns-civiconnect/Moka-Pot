// Weblfow Accordions tend not to work well once exported
// This allows us to have a Strapi CMS linked Accordion
// May need some modificatons to match your webflow code structure

import React, { useState } from "react";
import RichText from "./RichText";
import { v4 as uuid } from "uuid";
import "../css/Accordion.css";

const Accordion = ({ data }) => {
  if (!data) return null;
  return (
    <div className="Accordion">
      {data.map((el) => {
        return <AccordionItem key={uuid()} header={el.header} body={el.body} />;
      })}
    </div>
  );
};

const AccordionItem = ({ header, body }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`AccordionItem ${open ? "active" : null}`}>
      <div className="AccordionHeader" onClick={() => setOpen(!open)}>
        {header}
      </div>
      <div className="AccordionBody">
        <RichText text={body} />
      </div>
    </div>
  );
};

export default Accordion;
