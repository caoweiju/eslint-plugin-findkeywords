/**
 * @fileoverview find key word
 * @author caoweiju
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/find-keyword"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("find-keyword", rule, {

    valid: [
        'KNB.use(\'acds\')',
        'knb.use()',
        'knb.pv()',
        'test.data = 1',
        // "KNB.use('waimai.waimaiGetPushToken')"
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "KNB.use('waimai.waimaiGetPushToken')",
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
        {
            code: "KNB.use('waimai.waimaiPayForWMVIP')",
            errors: 1
        },
        {
            code: "KNB.use('waimai.waimaiSetTitleImageURL')",
            errors: 1
        },
        {
            code: "KNB.use('waimai.hertzMetric')",
            errors: 1
        },
        {
            code: "KNB.use('waimai.getRiderMessage')",
            errors: 1
        },
        {
            code: "KNB.use('waimai.shareCommon')",
            errors: 1
        },
        {
            code: "KNB.use('waimai.clearRiderMessage')",
            errors: 1
        },
        {
            code: "KNB.use('waimai.clearHistory')",
            errors: 1
        },
        {
            code: "KNB.use('waimai.passCrawlerVerification')",
            errors: 1
        },
        {
            code: "KNB.use('waimai.waimaieExit')",
            errors: 1
        },
        {
            code: "KNB.use('waimai.waimaieGetBdPhone')",
            errors: 1
        },
        {
            code: "KNB.use('waimai.waimaieGoSettingGuide')",
            errors: 1
        },
        {
            code: "KNB.use('waimai.getPoiMessage')",
            errors: 1
        },
        {
            code: "KNB.use('waimai.dailPrivacyTEL')",
            errors: 1
        },
        {
            code: "KNB.use('waimai.changeStealCouponStatus')",
            errors: [{
                message: "find KNB.use('waimai.changeStealCouponStatus')", // 与rule抛出的错误保持一致
                type: "CallExpression" // rule监听的对应钩子
            }]
        },
    ]
});
