import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "TEST"),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
