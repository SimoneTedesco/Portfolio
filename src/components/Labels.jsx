import React from "react";

const Label = ({ info: { color, icon, name } }) => (
  <div style={{ backgroundColor: color }}>
    <img src={icon} alt={name} />
    <span>{name}</span>
  </div>
);

const Labels = () => {
  const label = {
    id: Math.random(),
    icon: "https://placecorgi.com/100",
    name: "label 1",
    color: "#FFF4DB",
  };
  const list = new Array(5).fill(label);
  return (
    <div className="flex">
      {list.map((x) => (
        <Label key={x.id} info={x} />
      ))}
    </div>
  );
};

export default Labels;
