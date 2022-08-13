"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _object = _interopRequireDefault(require("./object"));

var _value = _interopRequireDefault(require("./value"));

var _array = _interopRequireDefault(require("./array"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Type = props => {
  const {
    value
  } = props;

  if (Array.isArray(value)) {
    return /*#__PURE__*/React.createElement(_array.default, {
      value: value
    });
  }

  if (typeof value === 'object') {
    return /*#__PURE__*/React.createElement(_object.default, {
      value: value
    });
  }

  return /*#__PURE__*/React.createElement(_value.default, {
    value: value
  });
};

var _default = Type;
exports.default = _default;