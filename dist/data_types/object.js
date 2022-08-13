"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _type = _interopRequireDefault(require("./type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const KeyExpander = props => {
  const {
    keyName,
    value,
    startExpanded = false
  } = props;
  const [expanded, setExpanded] = (0, _react.useState)(startExpanded);

  if (typeof value !== 'object' && !Array.isArray(value)) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, keyName, ": "), /*#__PURE__*/_react.default.createElement(_type.default, {
      value: value
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "rsjv-expander",
    onClick: () => setExpanded(prev => !prev)
  }, "[", expanded ? '-' : '+', "]", ' '), /*#__PURE__*/_react.default.createElement("span", null, keyName, ": "), expanded && /*#__PURE__*/_react.default.createElement(_type.default, {
    value: value
  }));
};

const ObjectType = props => {
  const {
    value
  } = props;
  return /*#__PURE__*/_react.default.createElement("ul", null, Object.keys(value || {}).map(k => /*#__PURE__*/_react.default.createElement("li", {
    key: k
  }, /*#__PURE__*/_react.default.createElement(KeyExpander, {
    keyName: k,
    value: value[k]
  }))));
};

var _default = ObjectType;
exports.default = _default;