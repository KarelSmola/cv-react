import React from "react";

import SectionWrapper from "./UI/SectionWrapper";
import classes from "./FreeTime.module.css";

const FreeTime = () => {
  return (
    <SectionWrapper className={classes["free-time"]} id="freeTime">
      <div className={classes["content-wrap"]}>
        <p className={classes["content-point"]}>Family</p>
        <p className={classes["content-point"]}>Sport</p>
        <p className={classes["content-point"]}>Reading</p>
        <p className={classes["content-point"]}>Code</p>
      </div>
      <div className={classes["title-wrap"]}>
        <h1 className={classes.title}>Free Time</h1>
      </div>
    </SectionWrapper>
  );
};

export default FreeTime;
