const React = require("react");
const PropTypes = require("prop-types");

const Button = ({ children, ...props }) =>
  React.createElement("button", props, children);
Button.propTypes = {
  children: PropTypes.node.isRequired,
};

const BackgroundGradientAnimation = ({ children, ...props }) =>
  React.createElement("div", props, children);
BackgroundGradientAnimation.propTypes = {
  children: PropTypes.node.isRequired,
};

module.exports = { Button, BackgroundGradientAnimation };
