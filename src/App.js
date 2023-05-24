import React from "react";
import Navigation from "./components/Navigation";
import Wrapper from "./components/UI/Wrapper";
import Personal from "./components/Personal";
import Stack from "./components/Stack";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Work from "./components/Work";
import FreeTime from "./components/FreeTime";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Navigation />
      <Wrapper>
        <Personal />
        <Stack />
        <Skills />
        <Education />
        <Work />
        <FreeTime />
      </Wrapper>
      <Footer />
    </main>
  );
};

export default App;
