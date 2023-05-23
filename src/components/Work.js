import React, { useContext } from "react";
import { Transition } from "react-transition-group";
import GlobalContext from "../store/GlobalContext";

import ButtonTitle from "./UI/ButtonTitle";
import classes from "./Work.module.css";
import transClasses from "../components/UI/Content.module.css";

const Work = () => {
  const globalCtx = useContext(GlobalContext);
  const workData = globalCtx.data.work;
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
              <div className={classes.companies}>
                <div className={classes.company}>
                  <h2 className={classes["company-title"]}>
                    {company_01.company}
                  </h2>
                  <ul className={classes.positions}>
                    {company_01.positions.map((position) => (
                      <li className={classes.position}>
                        <div className={classes["position-title-box"]}>
                          <p className={classes["position-title"]}>
                            {position.position}
                          </p>
                          <p className={classes["position-time"]}>
                            {position.positionTime.from} -{" "}
                            {position.positionTime.to}
                          </p>
                        </div>
                        <ul className={classes["position-content"]}>
                          {position.points.map((point) => (
                            <li className={classes["position-content-point"]}>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={classes.company}>
                  <h2 className={classes["company-title"]}>
                    {company_02.company}
                  </h2>
                  <ul className={classes.positions}>
                    {company_02.positions.map((position) => (
                      <li className={classes.position}>
                        <div className={classes["position-title-box"]}>
                          <p className={classes["position-title"]}>
                            {position.position}
                          </p>
                          <p className={classes["position-time"]}>
                            {position.positionTime.from} -{" "}
                            {position.positionTime.to}
                          </p>
                        </div>
                        <ul className={classes["position-content"]}>
                          {position.points.map((point) => (
                            <li className={classes["position-content-point"]}>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        }}
      </Transition>
    </div>
  );
};

export default Work;
