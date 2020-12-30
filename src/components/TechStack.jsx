import React from "react";
import PropTypes from "prop-types";

const trimExt = (fileName) =>
  fileName.indexOf(".") === -1
    ? fileName
    : fileName.split(".").slice(0, -1).join(".");

const TechStack = ({ list }) => (
  <div className="flex">
    {list.map((x) => {
      const alt = trimExt(x.split("/images/")[1]);
      return (
        <img
          alt={alt}
          src={x}
          className="rounded-full pr-2"
          width="30px"
          height="30px"
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
