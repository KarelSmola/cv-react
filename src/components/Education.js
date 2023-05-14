import React from "react";

import classes from "./Education.module.css";

const Education = () => {
  return (
    <section className={classes.education}>
      <div className={classes["content-wrap"]}>
        <p className={classes["content-point"]}>
          Printing Industry High School of Prague
        </p>
        <p className={classes["content-point"]}>2000 - 2005</p>
        <p className={classes["content-point"]}>graphic designer</p>
        <p className={classes["content-point"]}>printing industry</p>
      </div>
      <div className={classes["title-wrap"]}>
        <h1 className={classes.title}>Education</h1>
      </div>
    </section>
  );
};

export default Education;
