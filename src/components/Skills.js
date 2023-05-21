import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";
import { Transition } from "react-transition-group";

import ButtonTitle from "./UI/ButtonTitle";
import classes from "./Skills.module.css";
import transClasses from "../components/UI/Content.module.css";

const Skills = () => {
  const globalCtx = useContext(GlobalContext);
  const skillsData = globalCtx.data.skills;

  return (
    <div className={classes["section-wrap"]}>
      <div className={classes["title-wrap"]}>
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
          const contentClasses = `${transClasses["right-content-wrap"]} ${
            state === "entering"
              ? transClasses["show-content"]
              : state === "exiting"
              ? transClasses["hide-content"]
              : null
          }`;

          return (
            <ul className={contentClasses}>
              {skillsData.skills.map((item) => (
                <li
                  className={transClasses["content-point"]}
                  key={Math.random().toString()}
                >
                  {item}
                </li>
              ))}
            </ul>
          );
        }}
      </Transition>
    </div>
  );
};

export default Skills;
