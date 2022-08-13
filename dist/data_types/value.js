"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ValueType = props => {
  const {
    value
  } = props;
  const [showFull, setShowFull] = (0, _react.useState)(false); // shorten long strings until clicked

  if (typeof value === 'string' && !showFull) {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "rsjv-value",
      onClick: () => setShowFull(true)
    }, value.length > 100 ? `${value.substring(0, 100)}...` : value);
  }

  return /*#__PURE__*/_react.default.createElement("span", {
    className: "rsjv-value",
    onClick: () => setShowFull(false)
  }, value);
};

var _default = ValueType;
exports.default = _default;