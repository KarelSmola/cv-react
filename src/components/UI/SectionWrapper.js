import React from "react";

import classes from "./SectionWrapper.module.css";

const SectionWrapper = (props) => {
  return (
    <section className={`${classes["section-wrapper"]} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default SectionWrapper;
