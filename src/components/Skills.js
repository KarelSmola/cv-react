import React from "react";
import TitleLeft from "./TitleLeft";

const contentData = [
  "Optimistic",
  "Team player",
  "Reliable",
  "Critical thinking",
];

const Skills = () => {
  return (
    <TitleLeft title={"Skills"} data={contentData} />
  );
};

export default Skills;
