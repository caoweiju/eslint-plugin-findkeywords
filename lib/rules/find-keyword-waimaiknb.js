/**
 * @fileoverview find all keywords knb use waimai
 * @author caoweiju
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "find all keywords knb use waimai",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here
        const keywordRegex = /^waimai\./;

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // give me methods
            'CallExpression': (node) => {
                const { callee = {}, arguments: args = [] } = node;
                if (typeof callee !== 'object' || typeof args !== 'object') return;

                const { object = {}, property = {} } = callee;
                if (!object || !property || (property.name !== 'use' && object.name !== 'KNB')) return;

                const [argOne = {}] = args;
                if (!argOne || !argOne.value) return;
                const {value = ''} = argOne;
                // 如果在ast中满足以下条件，就用 context.report() 进行对外警告⚠️
                if (keywordRegex.test(value)) {
                    context.report({
                        node,
                        message: `find KNB.use('${value}')`,
                        // messageId: 'findKeywords',
                        // data: {
                        //     name: 'KNB.use',
                        //     value,
                        // },
                    });
                }
            }
        };
    }
};
