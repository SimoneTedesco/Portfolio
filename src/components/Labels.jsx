import React from "react";

const Label = ({ info: { color, icon, name } }) => (
  <div
    style={{ backgroundColor: color }}
    className="flex rounded-full mb-4 mr-4 py-2 px-4 flex-grow"
  >
    <div>
      <img
        src={icon}
        alt={name}
        className="rounded-full"
        width="40px"
        height="40px"
      />
    </div>
    <span className="ml-2 my-auto">{name}</span>
  </div>
);

const Labels = () => {
  const label = {
    id: Math.random(),
    icon: "https://placecorgi.com/40",
    name: "label 1",
    color: "#FFF4DB",
  };
  const list = new Array(20).fill(label);
  return (
    <div className="flex flex-wrap">
      {list.map((x) => (
        <Label key={x.id} info={x} />
      ))}
    </div>
  );
};

export default Labels;
