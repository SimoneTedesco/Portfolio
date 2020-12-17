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
  <div>
    <img src={image} alt={name} />
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
    image: "https://placecorgi.com/200",
    name: "project 1",
    description: "project 1 Loremasd asda sdasd asda sda sda",
    // link: "?"
    libraries: [1, 2, 3, 4],
  };
  const list = new Array(10).fill(project);
  return (
    <div>
      {list.map((x) => (
        <ProjectCard key={x.id} info={x} />
      ))}
    </div>
  );
};

export default Projects;
