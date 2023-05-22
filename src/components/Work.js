import React, { useContext } from "react";
import { Transition } from "react-transition-group";
import GlobalContext from "../store/GlobalContext";

import ButtonTitle from "./UI/ButtonTitle";
import classes from "./Work.module.css";
import transClasses from "../components/UI/Content.module.css";

const Work = () => {
  const globalCtx = useContext(GlobalContext);
  const workData = globalCtx.data.work;
  console.log(workData);
  const company_01 = workData.jobs[0];
  const company_02 = workData.jobs[1];

  return (
    <div className={classes.work}>
      <div className={classes["title-wrap"]}>
        <ButtonTitle
          className={classes.title}
          onClick={() => {
            globalCtx.showContent(workData.id);
          }}
        >
          Work
        </ButtonTitle>
      </div>
      <Transition
        in={globalCtx.visibleContent.work}
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
            <div className={contentClasses}>
              <div className={transClasses["content-point"]}>
                <h2 className={classes.company}>{company_01.company}</h2>
                <div>
                  {company_01.positions.map((position) => (
                    <li>
                      <p className={classes.position}>{position.position}</p>
                      <p className={classes["position-time"]}>
                        {position.positionTime.from} -{" "}
                        {position.positionTime.to}
                      </p>
                      <ul className={classes.list}>
                        {position.points.map((point) => (
                          <li>{point}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </div>
              </div>
              <div className={transClasses["content-point"]}>
                <h2 className={classes.company}>{company_02.company}</h2>
                <ul className={classes.list}>
                  {company_02.positions.map((position) => (
                    <li>
                      <p className={classes.position}>{position.position}</p>
                      <p className={classes["position-time"]}>
                        {position.positionTime.from} -{" "}
                        {position.positionTime.to}
                      </p>
                      <ul className={classes.list}>
                        {position.points.map((point) => (
                          <li>{point}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </Transition>
    </div>
  );
};

export default Work;
