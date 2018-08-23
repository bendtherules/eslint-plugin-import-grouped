/**
 * @fileoverview Import statements should be grouped by extensions and groups can have custom order between them
 * @author Abhas Bhattacharya
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------


const importNodes = [];
function registerNode(importNode) {
    importNodes.push(importNode);
}

module.exports = {
    meta: {
        docs: {
            description: "Import statements should be grouped by extensions and groups can have custom order between them",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            ImportDeclaration: function handleImports(node) {
                registerNode(node);
            },
            'Program:exit': function reportAndReset() {
                // Calc problems and report stuff here

                // context.report({
                //     node: secondNode.node,
                //     message: message,
                //     fix: canFix && (fixer =>
                //         fixer.replaceTextRange(
                //             [firstRootStart, secondRootEnd],
                //             newCode + sourceCode.text.substring(firstRootStart, secondRootStart)
                //         )),
                // })
            },

        };
    }
};
