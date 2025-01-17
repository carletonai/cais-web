const React = require('react');

const Button = ({ children, ...props }) => React.createElement('button', props, children);

const BackgroundGradientAnimation = ({ children, ...props }) => React.createElement('div', props, children);

module.exports = { Button, BackgroundGradientAnimation };