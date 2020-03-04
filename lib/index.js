/**
 * @fileoverview find keywords
 * @author caoweiju
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");

module.exports = {
    rules: {
        'find-keyword': require('./rules/find-keyword'),
        'find-keyword': require('./rules/find-keyword-waimaiknb'),
    },
    configs: {
        recommended: {
            rules: {
                'findkeywords/find-keyword': 1, // 可以省略 eslint-plugin 前缀
                'findkeywords/find-keyword-waimaiknb': 1, // 可以省略 eslint-plugin 前缀
            },
        },
    },
};

