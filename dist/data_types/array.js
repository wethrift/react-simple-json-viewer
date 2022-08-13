"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = _interopRequireDefault(require("./type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ArrayType = props => {
  const {
    value
  } = props;
  return /*#__PURE__*/React.createElement("ul", null, value.map((v, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement(_type.default, {
    value: v
  }))));
};

var _default = ArrayType;
exports.default = _default;