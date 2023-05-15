import React from "react";

import SectionWrapper from "./UI/SectionWrapper";
import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <SectionWrapper className={classes.skills}>
      <div className={classes["title-wrap"]}>
        <h1 className={classes.title}>Skills</h1>
      </div>
      <div className={classes["content-wrap"]}>
        <p className={classes["content-point"]}>Optimistic</p>
        <p className={classes["content-point"]}>Team player</p>
        <p className={classes["content-point"]}>Reliable</p>
        <p className={classes["content-point"]}>Critical thinking</p>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
