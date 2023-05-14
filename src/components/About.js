import React from "react";

import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes["title-wrap"]}>
        <h1 className={classes.title}>About me</h1>
      </div>
      <div className={classes["content-wrap"]}>
        <p className={classes["content-point"]}>21. 11. 1984</p>
        <p className={classes["content-point"]}>
          <a href="mailto:karelsmola21@gmail.com">karelsmola21@gmail.com</a>
        </p>
        <p className={classes["content-point"]}>
          <a href="+420776709339">+420 776 709 339</a>
        </p>
        <p className={classes["content-point"]}>github</p>
      </div>
    </section>
  );
};

export default About;
