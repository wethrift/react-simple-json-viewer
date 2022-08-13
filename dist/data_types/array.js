"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _type = _interopRequireDefault(require("./type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ArrayType = props => {
  const {
    value
  } = props;
  return /*#__PURE__*/_react.default.createElement("ul", null, value.map((v, i) => /*#__PURE__*/_react.default.createElement("li", {
    key: i
  }, /*#__PURE__*/_react.default.createElement(_type.default, {
    value: v
  }))));
};

var _default = ArrayType;
exports.default = _default;