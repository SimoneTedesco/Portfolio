import React from "react";
import Labels from "../components/Labels";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

const IndexPage = () => (
  // <main className="container mx-auto max-w-screen-xl my-32 px-4">
  <main>
    <section className="h-screen w-full bg-blue-500">
      <h1 className="text-4xl mb-4">
        Io sono{" "}
        <span className="text-6xl" contentEditable>
          Simone Tedesco
        </span>
      </h1>
      <p>
        Sono uno sviluppatore front-end specializzato nella realizzazione di web
        application. Ho competenze approfondite in HTML5, CSS3 e JavaScript.
        Sono sempre entusiasta nell&apos;imparare nuove tecnologie e
        nell&apos;approfondire quelle che già conosco.
      </p>
    </section>

    <Labels />
    <Projects />
    <AboutMe />
  </main>
);

export default IndexPage;
