import React from "react";
import Labels from "../components/Labels";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

const IndexPage = () => (
  // <main className="container mx-auto max-w-screen-xl my-32 px-4">
  <main>
    {/* background: linear-gradient(#3b82f6, #6e */}
    {/* This section has to be redone */}
    <nav className="sticky top-0 bg-transparent">
      <h1 className="">&lt;SimoneTedesco /&gt;</h1>
    </nav>
    <section className="h-screen w-full p-32 bg-blue-500">
      <h1 className="text-4xl mb-4">
        Io sono{" "}
        <span className="text-6xl" contentEditable>
          Simone Tedesco
        </span>
      </h1>
      <p>
        Sono uno sviluppatore front-end specializzato nella realizzazione di web
        application.
      </p>
      <p>
        Ho competenze approfondite in HTML5, CSS3 e JavaScript.
      </p>
      <p>
        Sono sempre entusiasta nell&apos;imparare nuove tecnologie e
        nell&apos;approfondire quelle che già conosco.
      </p>
    </section>
    <Labels />
    <Projects />
    {/* REMOVE */}
    {/* <AboutMe /> */}
  </main>
);

export default IndexPage;
