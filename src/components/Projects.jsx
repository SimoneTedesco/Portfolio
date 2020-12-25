import React from "react";

const LIBS = [
  { id: 1, icon: "https://placecorgi.com/30" },
  { id: 2, icon: "https://placecorgi.com/30" },
  { id: 3, icon: "https://placecorgi.com/30" },
  { id: 4, icon: "https://placecorgi.com/30" },
  { id: 5, icon: "https://placecorgi.com/30" },
  { id: 6, icon: "https://placecorgi.com/30" },
];

const ProjectCard = ({ info: { image, description, name, techStack } }) => (
  <div className="p-8 bg-gray-500 rounded">
    <div
      style={{
        "background-image": `url(${image})`,
        height: "200px",
      }}
      className="bg-transparent bg-no-repeat bg-top transition-all delay-200 duration-1000 hover:bg-bottom"
    />
    <h3 className="text-2xl">{name}</h3>
    {/* quick and awful stuff i'll fix later i promise */}
    <div className="flex">
      {techStack.map((x) => {
        const { id, icon } = LIBS.find((y) => y.id === x);
        return (
          <img
            alt={id}
            src={icon}
            className="rounded-full pr-2"
            width="30px"
            height="30px"
          />
        );
      })}
    </div>
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
    techStack: [1, 2, 3, 4],
  };
  const list = new Array(10).fill(project);
  return (
    <div>
      <h2 className="text-4xl">Projects</h2>
      <div className="grid grid-cols-4 gap-4">
        {list.map((x) => (
          <ProjectCard key={x.id} info={x} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
