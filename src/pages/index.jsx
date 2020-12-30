import React from "react";
import Labels from "../components/Labels";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

const IndexPage = () => (
  <main>
    <h1>Io sono Simone Tedesco</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      iusto consectetur, veniam nemo esse excepturi sint non deleniti
      repellendus veritatis eaque, quisquam debitis repellat quod explicabo
      dolorem suscipit in dolores!
    </p>

    <Labels />
    <Projects />
    <AboutMe />
  </main>
);

export default IndexPage;
