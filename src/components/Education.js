import React, { useContext } from "react";
import { Transition } from "react-transition-group";
import GlobalContext from "../store/GlobalContext";

import ButtonTitle from "./UI/ButtonTitle";
import classes from "./Education.module.css";
import transClasses from "../components/UI/Content.module.css";

const Education = () => {
  const globalCtx = useContext(GlobalContext);
  const educationData = globalCtx.data.education;

  return (
    <div className={classes["section-wrap"]}>
      <Transition
        in={globalCtx.visibleContent.education}
        timeout={globalCtx.transitionTimes}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          const contentClasses = `${transClasses["left-content-wrap"]} ${
            state === "entering"
              ? transClasses["show-content"]
              : state === "exiting"
              ? transClasses["hide-content"]
              : null
          }`;

          return (
            <div className={contentClasses}>
              <p className={transClasses["content-point"]}>
                Printing Industry High School of Prague
              </p>
              <p className={transClasses["content-point"]}>2000 - 2005</p>
              <p className={transClasses["content-point"]}>graphic designer</p>
              <p className={transClasses["content-point"]}>printing industry</p>
            </div>
          );
        }}
      </Transition>

      <div className={classes["title-wrap"]}>
        <ButtonTitle
          className={classes.title}
          onClick={() => {
            globalCtx.showContent(educationData.id);
          }}
        >
          Education
        </ButtonTitle>
      </div>
    </div>
  );
};

export default Education;
