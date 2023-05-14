import React from "react";

import classes from "./Work.module.css";

const Work = () => {
  return (
    <section className={classes.work}>
      <div className={classes["title-wrap"]}>
        <h1 className={classes.title}>Work</h1>
      </div>
      <div className={classes["content-wrap"]}>
        <div className={classes["content-point"]}>
          <h2 className={classes["company"]}>MTT printing house</h2>
          <h3 className={classes.position}>Graphic designer</h3>
          <ul>
            <li>Adobe software (Illustrator, Photoshop, Adobe InDesign)</li>
            <li>creating of leaflets, magazines, visitcards etc.</li>
          </ul>
        </div>
        <div className={classes["content-point"]}>
          <h2 className={classes["company"]}>PANFLEX, s. r. o.</h2>
          <h3 className={classes.position}>DTP operator</h3>
          <ul>
            <li>Prepress</li>
            <li>ArtPro</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </ul>
          <h3 className={classes.position}>Technical Support Specialist</h3>
          <ul>
            <li>customer support</li>
            <li>customer and employee training</li>
            <li>technical printing support</li>
            <li>problem solver</li>
          </ul>
          <h3 className={classes.position}>Technician</h3>
          <ul>
            <li>Creating automated worklflows</li>
            <li>creating ways to production efficiency</li>
            <li>ESKO sw: Automation Engine, ArtPro+</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
