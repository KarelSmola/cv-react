import React from "react";

import SectionWrapper from "./UI/SectionWrapper";
import ButtonTitle from "./UI/ButtonTitle";
import classes from "./Education.module.css";

const Education = () => {
  return (
    <SectionWrapper className={classes.education}>
      <div className={classes["content-wrap"]}>
        <p className={classes["content-point"]}>
          Printing Industry High School of Prague
        </p>
        <p className={classes["content-point"]}>2000 - 2005</p>
        <p className={classes["content-point"]}>graphic designer</p>
        <p className={classes["content-point"]}>printing industry</p>
      </div>
      <div className={classes["title-wrap"]}>
        <ButtonTitle className={classes.title}>Education</ButtonTitle>
      </div>
    </SectionWrapper>
  );
};

export default Education;
