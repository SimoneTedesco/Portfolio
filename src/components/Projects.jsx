import React from "react";

const LIBS = [
  { id: 1, icon: "https://placecorgi.com/30" },
  { id: 2, icon: "https://placecorgi.com/30" },
  { id: 3, icon: "https://placecorgi.com/30" },
  { id: 4, icon: "https://placecorgi.com/30" },
  { id: 5, icon: "https://placecorgi.com/30" },
  { id: 6, icon: "https://placecorgi.com/30" },
];

const ProjectCard = ({ info: { image, description, name, libraries } }) => (
  <div className="p-8 bg-gray-500 rounded">
    <div
      style={{
        "background-image": `url(${image})`,
        height: "200px",
      }}
      className="bg-transparent bg-no-repeat bg-top transition-all delay-200 duration-1000 hover:bg-bottom"
    />
    <h2>{name}</h2>
    {/* quick and awful stuff i'll fix later i promise*/}
    {libraries.map((x) => (
      <img src={LIBS.find((y) => y.id === x).icon} />
    ))}
    <p>{description}</p>
  </div>
);

const Projects = () => {
  const project = {
    id: Math.random(),
    image: "https://placecorgi.com/400/500",
    name: "project 1",
    description: "project 1 Loremasd asda sdasd asda sda sda",
    // link: "?"
    libraries: [1, 2, 3, 4],
  };
  const list = new Array(10).fill(project);
  return (
    <div>
      <h3>Projects</h3>
      <div className="grid grid-cols-4 gap-4">
        {list.map((x) => (
          <ProjectCard key={x.id} info={x} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
