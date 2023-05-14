import React from "react";

import SectionWrapper from "./UI/SectionWrapper";
import classes from "./Stack.module.css";

const Stack = () => {
  return (
    <SectionWrapper className={classes.stack}>
      <div className={classes["content-wrap"]}>
        <p className={classes["content-point"]}>Seniority: Junior</p>
        <p className={classes["content-point"]}>HTML</p>
        <p className={classes["content-point"]}>CSS (Sass)</p>
        <p className={classes["content-point"]}>JavaScript</p>
        <p className={classes["content-point"]}>React</p>
        <p className={classes["content-point"]}>GitHub</p>
      </div>
      <div className={classes["title-wrap"]}>
        <h1 className={classes.title}>Stack</h1>
      </div>
    </SectionWrapper>
  );
};

export default Stack;
