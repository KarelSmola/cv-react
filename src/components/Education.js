import React, { useContext } from "react";
import { Transition } from "react-transition-group";
import GlobalContext from "../store/GlobalContext";

import SectionWrapper from "./UI/SectionWrapper";
import ButtonTitle from "./UI/ButtonTitle";
import classes from "./Education.module.css";
import globalClasses from "../components/UI/GlobalClasses.module.css";

const Education = () => {
  const globalCtx = useContext(GlobalContext);
  const educationData = globalCtx.data.education;

  return (
    <SectionWrapper id="education">
      <Transition
        in={globalCtx.visibleContent.education}
        timeout={globalCtx.transitionTimes}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          const contentClasses = `${globalClasses["left-content-wrap"]} ${
            state === "entering"
              ? globalClasses["show-content"]
              : state === "exiting"
              ? globalClasses["hide-content"]
              : null
          }`;

          return (
            <div className={contentClasses}>
              {educationData.educationParts.map((study) => (
                <div className={classes.school}>
                  <h2 className={classes["school-title"]}>{study.school}</h2>
                  <div className={classes["field-title-box"]}>
                    <p className={classes["field-title"]}>
                      {study.specialization}
                    </p>
                    <p className={classes["school-time"]}>
                      {study.studyTime.from} - {study.studyTime.to}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          );
        }}
      </Transition>

      <div className={globalClasses["title-wrap-right"]}>
        <ButtonTitle
          className={classes.title}
          onClick={() => {
            globalCtx.showContent(educationData.id);
          }}
        >
          Education
        </ButtonTitle>
      </div>
    </SectionWrapper>
  );
};

export default Education;
