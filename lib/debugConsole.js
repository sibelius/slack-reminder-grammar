"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debugConsole = void 0;

var _util = _interopRequireDefault(require("util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const debugConsole = obj => {
  // eslint-disable-next-line
  console.log(_util.default.inspect(obj, false, null, true));
};

exports.debugConsole = debugConsole;