const React = require("react");

const motion = {
  div: ({ children, ...props }) => React.createElement("div", props, children),
  img: ({ children, ...props }) => React.createElement("img", props, children),
  h1: ({ children, ...props }) => React.createElement("h1", props, children),
  p: ({ children, ...props }) => React.createElement("p", props, children),
  span: ({ children, ...props }) =>
    React.createElement("span", props, children),
};

module.exports = { motion };
