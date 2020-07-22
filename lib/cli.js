"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = void 0;

require("@babel/polyfill");

var _yargs = _interopRequireDefault(require("yargs"));

var _nearley = _interopRequireDefault(require("nearley"));

var _Grammar = _interopRequireDefault(require("./Grammar"));

var _debugConsole = require("./debugConsole");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usage = 'Usage: $0 input <arg1>';
const docs = 'Documentation: https://github.com/sibelius/slack-reminder-grammar';

const run = async argv => {
  argv = (0, _yargs.default)(argv || process.argv.slice(2)).usage(usage).epilogue(docs).help().argv;

  const input = argv._.join(' '); // eslint-disable-next-line


  console.log('input: ', input); // Create a Parser object from our grammar.

  const parser = new _nearley.default.Parser(_nearley.default.Grammar.fromCompiled(_Grammar.default)); // Parse something!

  parser.feed(input); // parser.results is an array of possible parsings.

  (0, _debugConsole.debugConsole)(parser.results);
};

exports.run = run;