import React from "react";
import Navigation from "./components/Navigation";
import Wrapper from "./components/UI/Wrapper";
import About from "./components/About";
import Stack from "./components/Stack";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Work from "./components/Work";
import FreeTime from "./components/FreeTime";

const App = () => {
  return (
    <main>
      <Navigation />
      <Wrapper>
        <About />
        <Stack />
        <Skills />
        <Education />
        <Work />
        <FreeTime />
      </Wrapper>
    </main>
  );
};

export default App;
