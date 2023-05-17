import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";
import { Transition } from "react-transition-group";

import classes from "./Skills.module.css";

const Skills = () => {
  const globalCtx = useContext(GlobalContext);
  const skillsData = globalCtx.data.skills;

  return (
    <div className={classes["section-wrap"]}>
      <div className={classes["title-wrap"]}>
        <h1
          className={classes.title}
          onClick={() => {
            globalCtx.showContent(skillsData.id);
          }}
        >
          Skills
        </h1>
      </div>

      <Transition
        in={globalCtx.visibleContent.skills}
        timeout={globalCtx.transitionTimes}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          const contentClasses = `${classes["content-wrap"]} ${
            state === "entering"
              ? classes["show-content"]
              : state === "exiting"
              ? classes["hide-content"]
              : null
          }`;

          return (
            <ul className={contentClasses}>
              {skillsData.skills.map((item) => (
                <li key={item.index} className={classes["content-point"]}>
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
