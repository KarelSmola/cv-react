import React from "react";

import classes from "./SectionWrapper.module.css";

const SectionWrapper = (props) => {
  return (
    <section
      className={`${classes["section-wrapper"]} ${props.className}`}
      id={props.id}
    >
      {props.children}
    </section>
  );
};

export default SectionWrapper;
