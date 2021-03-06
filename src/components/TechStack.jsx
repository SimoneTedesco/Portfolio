import React from "react";
import PropTypes from "prop-types";

const trimExt = (fileName) =>
  fileName.indexOf(".") === -1
    ? fileName
    : fileName.split(".").slice(0, -1).join(".");

const TechStack = ({ list }) => (
  <div className="flex gap-3 justify-center p-4">
    {list.map((x) => {
      const alt = trimExt(x.split("/images/")[1]);
      return (
        <img
          alt={alt}
          src={x}
          key={x}
          // className="rounded-full bg-white"
          width="32px"
          height="32px"
        />
      );
    })}
  </div>
);

export default TechStack;

TechStack.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};

TechStack.defaultProps = {
  list: [],
};
