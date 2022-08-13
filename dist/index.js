"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _css = require("@emotion/css");

var _type = _interopRequireDefault(require("./data_types/type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const JsonViewer = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _css.css)({
      fontFamily: 'monospace',
      color: '#333',
      '& ul, & li': {
        listStyleType: 'none'
      },
      'ul:first-child': {
        padding: 0
      },
      'span.rsjv-expander': {
        color: '#888'
      },
      'span.rsjv-expander:hover': {
        cursor: 'pointer'
      },
      'span.rsjv-value': {
        color: '#3d94bf',
        overflowWrap: 'anywhere'
      },
      ...props.css
    })
  }, /*#__PURE__*/_react.default.createElement(_type.default, {
    value: props.data
  }));
};

var _default = JsonViewer;
exports.default = _default;