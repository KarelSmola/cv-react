import React, { useContext } from "react";
import { Transition } from "react-transition-group";
import GlobalContext from "../store/GlobalContext";

import ButtonTitle from "./UI/ButtonTitle";
import classes from "./Work.module.css";
import transClasses from "../components/UI/Content.module.css";

const Work = () => {
  const globalCtx = useContext(GlobalContext);
  const workData = globalCtx.data.work;
  const company = workData.jobs;

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
              {company.map((job) => {
                return (
                  <div className={transClasses["content-point"]}>
                    <h2 className={classes.company}>{job.company}</h2>
                  </div>
                );
              })}
            </div>
            // <div className={contentClasses}>
            //   <div className={transClasses["content-point"]}>
            //     <h2 className={classes["company"]}>MTT printing house</h2>
            //     <h3 className={classes.position}>Graphic designer</h3>
            //     <ul>
            //       <li>
            //         Adobe software (Illustrator, Photoshop, Adobe InDesign)
            //       </li>
            //       <li>creating of leaflets, magazines, visitcards etc.</li>
            //     </ul>
            //   </div>
            //   <div className={transClasses["content-point"]}>
            //     <h2 className={classes["company"]}>PANFLEX, s. r. o.</h2>
            //     <h3 className={classes.position}>DTP operator</h3>
            //     <ul>
            //       <li>Prepress</li>
            //       <li>ArtPro</li>
            //       <li>Adobe Photoshop</li>
            //       <li>Adobe Illustrator</li>
            //     </ul>
            //     <h3 className={classes.position}>
            //       Technical Support Specialist
            //     </h3>
            //     <ul>
            //       <li>customer support</li>
            //       <li>customer and employee training</li>
            //       <li>technical printing support</li>
            //       <li>problem solver</li>
            //     </ul>
            //     <h3 className={classes.position}>Technician</h3>
            //     <ul>
            //       <li>Creating automated worklflows</li>
            //       <li>creating ways to production efficiency</li>
            //       <li>ESKO sw: Automation Engine, ArtPro+</li>
            //     </ul>
            //   </div>
            // </div>
          );
        }}
      </Transition>
    </div>
  );
};

export default Work;
