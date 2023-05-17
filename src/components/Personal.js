import React from "react";
import TitleLeft from "./TitleLeft";

const contentData = [
  "Prague",
  "21. 11. 1984",
  "karelsmola21@gmail.com",
  "+420 776 709 339",
  "GitHub",
];

const About = () => {
  return <TitleLeft title={"Personal"} data={contentData} />;
};

export default About;
