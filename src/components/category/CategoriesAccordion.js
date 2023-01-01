import React from "react";
import { Fragment } from "react";

import { Accordion, AccordionHeader, AccordionBody, Radio } from "@material-tailwind/react";
import Nav from "../Nav";

import { useState } from "react";

function CategoriesAccordion() {
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const [open, setOpen] = useState(1);
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>Categories</AccordionHeader>
        <AccordionBody>
          <div className="flex gap-12">
            <Radio id="almonds" name="type" label="Almonds" defaultChecked />
          </div>
          <div className="flex gap-12">
            <Radio id="cashew" name="type" label="Cashew" />
          </div>
          <div className="flex gap-12">
            <Radio id="pista" name="type" label="Pista" />
          </div>
          <div className="flex gap-12">
            <Radio id="dates" name="type" label="Dates" />
          </div>
          <div className="flex gap-12">
            <Radio id="angeer" name="type" label="Anjeer" />
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>Sort</AccordionHeader>
        <AccordionBody>We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.</AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export default CategoriesAccordion;
