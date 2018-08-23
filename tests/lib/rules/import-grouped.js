/**
 * @fileoverview Import statements should be grouped by extensions and groups can have custom order between them
 * @author Abhas Bhattacharya
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/import-grouped"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("import-grouped", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "`import 'a'; import 'style.css';import 'b';`",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
