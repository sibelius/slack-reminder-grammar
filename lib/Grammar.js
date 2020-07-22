"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Generated automatically by nearley, version 2.19.5
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d) {
  return d[0];
}

;
;
;
;
const grammar = {
  Lexer: undefined,
  ParserRules: [{
    "name": "_$ebnf$1",
    "symbols": []
  }, {
    "name": "_$ebnf$1",
    "symbols": ["_$ebnf$1", "wschar"],
    "postprocess": d => d[0].concat([d[1]])
  }, {
    "name": "_",
    "symbols": ["_$ebnf$1"],
    "postprocess": function (d) {
      return null;
    }
  }, {
    "name": "__$ebnf$1",
    "symbols": ["wschar"]
  }, {
    "name": "__$ebnf$1",
    "symbols": ["__$ebnf$1", "wschar"],
    "postprocess": d => d[0].concat([d[1]])
  }, {
    "name": "__",
    "symbols": ["__$ebnf$1"],
    "postprocess": function (d) {
      return null;
    }
  }, {
    "name": "wschar",
    "symbols": [/[ \t\n\v\f]/],
    "postprocess": id
  }, {
    "name": "main$string$1",
    "symbols": [{
      "literal": "/"
    }, {
      "literal": "r"
    }, {
      "literal": "e"
    }, {
      "literal": "m"
    }, {
      "literal": "i"
    }, {
      "literal": "n"
    }, {
      "literal": "d"
    }],
    "postprocess": d => d.join('')
  }, {
    "name": "main",
    "symbols": ["main$string$1", "_", "someone_channel", "_", "what", "_", "when"],
    "postprocess": d => {
      return {
        someoneChannel: d[2],
        what: d[4],
        when: d[6]
      };
    }
  }, {
    "name": "someone_channel$ebnf$1",
    "symbols": ["someone"],
    "postprocess": id
  }, {
    "name": "someone_channel$ebnf$1",
    "symbols": [],
    "postprocess": () => null
  }, {
    "name": "someone_channel$ebnf$2",
    "symbols": ["channel"],
    "postprocess": id
  }, {
    "name": "someone_channel$ebnf$2",
    "symbols": [],
    "postprocess": () => null
  }, {
    "name": "someone_channel",
    "symbols": ["someone_channel$ebnf$1", "someone_channel$ebnf$2"],
    "postprocess": d => d[0] || d[1]
  }, {
    "name": "someone$ebnf$1",
    "symbols": [/[a-zA-Z]/]
  }, {
    "name": "someone$ebnf$1",
    "symbols": ["someone$ebnf$1", /[a-zA-Z]/],
    "postprocess": d => d[0].concat([d[1]])
  }, {
    "name": "someone",
    "symbols": [{
      "literal": "@"
    }, "someone$ebnf$1"],
    "postprocess": d => ({
      type: 'someone',
      value: d[1].join('')
    })
  }, {
    "name": "channel$ebnf$1",
    "symbols": [/[a-zA-Z]/]
  }, {
    "name": "channel$ebnf$1",
    "symbols": ["channel$ebnf$1", /[a-zA-Z]/],
    "postprocess": d => d[0].concat([d[1]])
  }, {
    "name": "channel",
    "symbols": [{
      "literal": "#"
    }, "channel$ebnf$1"],
    "postprocess": d => ({
      type: 'channel',
      value: d[1].join('')
    })
  }, {
    "name": "what$ebnf$1",
    "symbols": [/[a-zA-Z]/]
  }, {
    "name": "what$ebnf$1",
    "symbols": ["what$ebnf$1", /[a-zA-Z]/],
    "postprocess": d => d[0].concat([d[1]])
  }, {
    "name": "what",
    "symbols": ["what$ebnf$1"],
    "postprocess": d => d[0].join('')
  }, {
    "name": "when$subexpression$1$string$1",
    "symbols": [{
      "literal": "t"
    }, {
      "literal": "o"
    }, {
      "literal": "d"
    }, {
      "literal": "a"
    }, {
      "literal": "y"
    }],
    "postprocess": d => d.join('')
  }, {
    "name": "when$subexpression$1",
    "symbols": ["when$subexpression$1$string$1"]
  }, {
    "name": "when$subexpression$1$string$2",
    "symbols": [{
      "literal": "t"
    }, {
      "literal": "o"
    }, {
      "literal": "m"
    }, {
      "literal": "o"
    }, {
      "literal": "r"
    }, {
      "literal": "r"
    }, {
      "literal": "o"
    }, {
      "literal": "w"
    }],
    "postprocess": d => d.join('')
  }, {
    "name": "when$subexpression$1",
    "symbols": ["when$subexpression$1$string$2"]
  }, {
    "name": "when$subexpression$1$string$3",
    "symbols": [{
      "literal": "n"
    }, {
      "literal": "e"
    }, {
      "literal": "x"
    }, {
      "literal": "t"
    }, {
      "literal": " "
    }, {
      "literal": "w"
    }, {
      "literal": "e"
    }, {
      "literal": "e"
    }, {
      "literal": "k"
    }],
    "postprocess": d => d.join('')
  }, {
    "name": "when$subexpression$1",
    "symbols": ["when$subexpression$1$string$3"]
  }, {
    "name": "when",
    "symbols": ["when$subexpression$1"],
    "postprocess": d => d[0].join('')
  }],
  ParserStart: "main"
};
var _default = grammar;
exports.default = _default;