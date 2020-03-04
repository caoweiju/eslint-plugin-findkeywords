/**
 * @fileoverview find all keywords knb use waimai
 * @author caoweiju
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/find-keyword-waimaiknb"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("find-keyword-waimaiknb", rule, {

    valid: [
        'KNB.use(\'acds\')',
        'knb.use(\'waimai\')',
        'knb.pv()',
        'test.data = 1',
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "KNB.use('waimai.test')",
            errors: 1
        },
        {
            code: "KNB.use('waimai.abc')",
            errors: 1
        },
        {
            code: "KNB.use('waimai.aert')",
            errors: 1
        },
    ]
});
