"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

const ValueType = props => {
  const {
    value
  } = props;
  const [showFull, setShowFull] = (0, _react.useState)(false); // shorten long strings until clicked

  if (typeof value === 'string' && !showFull) {
    return /*#__PURE__*/React.createElement("span", {
      className: "rsjv-value",
      onClick: () => setShowFull(true)
    }, value.length > 100 ? `${value.substring(0, 100)}...` : value);
  }

  return /*#__PURE__*/React.createElement("span", {
    className: "rsjv-value",
    onClick: () => setShowFull(false)
  }, value);
};

var _default = ValueType;
exports.default = _default;