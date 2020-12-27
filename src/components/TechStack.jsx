import React from "react";

const LIBS = [
  { id: 1, icon: "https://placecorgi.com/30" },
  { id: 2, icon: "https://placecorgi.com/30" },
  { id: 3, icon: "https://placecorgi.com/30" },
  { id: 4, icon: "https://placecorgi.com/30" },
  { id: 5, icon: "https://placecorgi.com/30" },
  { id: 6, icon: "https://placecorgi.com/30" },
];

const TechStack = ({ list }) => (
  <div className="flex">
    {/* TODO: replace with reduce */}
    {list.map((x) => {
      const { id, icon } = LIBS.find((y) => y.id.toString() === x);
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
);

export default TechStack;
