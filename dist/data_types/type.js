"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _object = _interopRequireDefault(require("./object"));

var _value = _interopRequireDefault(require("./value"));

var _array = _interopRequireDefault(require("./array"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Type = props => {
  const {
    value,
    ...rest
  } = props;

  if (Array.isArray(value)) {
    return /*#__PURE__*/_react.default.createElement(_array.default, _extends({
      value: value
    }, rest));
  }

  if (typeof value === 'object') {
    return /*#__PURE__*/_react.default.createElement(_object.default, _extends({
      value: value
    }, rest));
  }

  return /*#__PURE__*/_react.default.createElement(_value.default, _extends({
    value: value
  }, rest));
};

var _default = Type;
exports.default = _default;