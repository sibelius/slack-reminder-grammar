"use strict";

var _nearley = _interopRequireDefault(require("nearley"));

var _Grammar = _interopRequireDefault(require("./Grammar"));

var _debugConsole = require("./debugConsole");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async () => {
  try {
    const chunk = process.argv[2];

    if (!chunk) {
      console.log('Usage: yarn w ./scr/Parse "user is sad"');
      return;
    } // Create a Parser object from our grammar.


    const parser = new _nearley.default.Parser(_nearley.default.Grammar.fromCompiled(_Grammar.default)); // Parse something!

    parser.feed(chunk); // parser.results is an array of possible parsings.

    (0, _debugConsole.debugConsole)(parser.results);
  } catch (err) {
    // eslint-disable-next-line
    console.log('err: ', err);
  }

  process.exit();
})();