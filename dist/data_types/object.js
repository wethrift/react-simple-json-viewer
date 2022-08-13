"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _type = _interopRequireDefault(require("./type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const KeyExpander = props => {
  const {
    keyName,
    value,
    startExpanded = false
  } = props;
  const [expanded, setExpanded] = (0, _react.useState)(startExpanded);

  if (typeof value !== 'object' && !Array.isArray(value)) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, keyName, ": "), /*#__PURE__*/React.createElement(_type.default, {
      value: value
    }));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "rsjv-expander",
    onClick: () => setExpanded(prev => !prev)
  }, "[", expanded ? '-' : '+', "]", ' '), /*#__PURE__*/React.createElement("span", null, keyName, ": "), expanded && /*#__PURE__*/React.createElement(_type.default, {
    value: value
  }));
};

const ObjectType = props => {
  const {
    value
  } = props;
  return /*#__PURE__*/React.createElement("ul", null, Object.keys(value || {}).map(k => /*#__PURE__*/React.createElement("li", {
    key: k
  }, /*#__PURE__*/React.createElement(KeyExpander, {
    keyName: k,
    value: value[k]
  }))));
};

var _default = ObjectType;
exports.default = _default;