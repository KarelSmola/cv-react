import React, { useState } from "react";
import { Transition } from "react-transition-group";
import MapPin from "./UI/icons/MapPin";
// import SectionWrapper from "./UI/SectionWrapper";
import classes from "./Personal.module.css";

const About = () => {
  const [visibleContent, setVisibleContent] = useState(false);

  const toggleContent = () => {
    setVisibleContent((prevState) => !prevState);
  };

  // const contentClasses = visibleContent
  //   ? `${classes["content-wrap"]} ${classes["show-content"]}`
  //   : `${classes["content-wrap"]}`;

  const personalClasses = visibleContent
    ? `${classes["personal"]} ${classes["personal-visible-content"]}`
    : `${classes["personal"]}`;
  console.log(visibleContent);

  return (
    <div className={classes["personal"]}>
      <div className={classes["title-wrap"]}>
        <h1 className={classes.title} onClick={toggleContent}>
          Personal
        </h1>
      </div>

      <Transition in={visibleContent} timeout={1000} mountOnEnter unmountOnExit>
        {(state) => {
          const contentClasses = `${classes["content-wrap"]} ${
            state === "entering"
              ? classes["show-content"]
              : state === "exiting"
              ? classes["hide-content"]
              : null
          }`;

          return (
            <div className={contentClasses}>
              <p className={classes["content-point"]}>
                <MapPin /> Prague
              </p>
              <p className={classes["content-point"]}>21. 11. 1984</p>
              <p className={classes["content-point"]}>
                <a href="mailto:karelsmola21@gmail.com">
                  karelsmola21@gmail.com
                </a>
              </p>
              <p className={classes["content-point"]}>
                <a href="+420776709339">+420 776 709 339</a>
              </p>
              <p className={classes["content-point"]}>github</p>
            </div>
          );
        }}
      </Transition>
    </div>
  );
};

export default About;
