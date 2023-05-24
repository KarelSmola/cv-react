import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";
import { Transition } from "react-transition-group";

import SectionWrapper from "./UI/SectionWrapper";
import ButtonTitle from "./UI/ButtonTitle";
import classes from "./Skills.module.css";
import globalClasses from "../components/UI/GlobalClasses.module.css";

const Skills = () => {
  const globalCtx = useContext(GlobalContext);
  const skillsData = globalCtx.data.skills;

  return (
    <SectionWrapper id="skills">
      <div className={globalClasses["title-wrap-left"]}>
        <ButtonTitle
          className={classes.title}
          onClick={() => {
            globalCtx.showContent(skillsData.id);
          }}
        >
          Skills
        </ButtonTitle>
      </div>

      <Transition
        in={globalCtx.visibleContent.skills}
        timeout={globalCtx.transitionTimes}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          const contentClasses = `${globalClasses["right-content-wrap"]} ${
            state === "entering"
              ? globalClasses["show-content"]
              : state === "exiting"
              ? globalClasses["hide-content"]
              : null
          }`;

          return (
            <div className={contentClasses}>
              <ul className={globalClasses["right-content-list"]}>
                {skillsData.skills.map((item) => (
                  <li
                    className={globalClasses["right-content-list-point"]}
                    key={Math.random().toString()}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Transition>
    </SectionWrapper>
  );
};

export default Skills;
