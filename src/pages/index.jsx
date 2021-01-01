import React from "react";
import Labels from "../components/Labels";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

const IndexPage = () => (
  <main className="container mx-auto max-w-screen-xl my-32">
    <h1 className="text-4xl mb-4">
      Io sono <span className="text-6xl">Simone Tedesco</span>
    </h1>
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
