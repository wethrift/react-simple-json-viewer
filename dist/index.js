"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _css = require("@emotion/css");

const JsonViewer = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _css.css)({
      fontFamily: 'monospace',
      color: '#333',
      'span.rsjv-expander': {
        color: '#888'
      },
      'span.rsjv-expander:hover': {
        pointer: 'cursor'
      },
      'span.rsjv-value': {
        color: '#3d94bf',
        overflowWrap: 'anywhere'
      },
      ...props.css
    })
  }, /*#__PURE__*/React.createElement(Type, {
    value: props.data
  }));
};

var _default = JsonViewer;
exports.default = _default;