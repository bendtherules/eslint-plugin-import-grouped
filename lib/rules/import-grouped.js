/**
 * @fileoverview Import statements should be grouped by extensions and groups can have custom order between them
 * @author Abhas Bhattacharya
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

class ImportGrouped {
  // static extensionDelimiter = '.';

  constructor({ options }) {
    this.importNodes = [];
    this.optionsExtOrder = options[0] || [];
    this.optionsExtOrder = this.optionsExtOrder.map((ext) => ext.toLowerCase());
    console.log(options);

  }

  registerNode(newNode) {
    this.importNodes.push(newNode);
  }

  sortNodesByAscending() {
    this.importNodes.sort((node1, node2) => node1.start > node2.start)
  }

  getExtension(node) {
    let extensionWithDot = '';

    if (node.source && node.source.value) {
      const path = node.source.value;

      if (path.includes(ImportGrouped.extensionDelimiter)) {
        const startPos = path.lastIndexOf(ImportGrouped.extensionDelimiter);
        extensionWithDot = path.substr(startPos);
      }
    }

    return extensionWithDot;
  }

  findBrokenNodes() {
    const brokenNodes = [];

    let lastMatchedIndexInOptions = -1;

    for (const tmpImportNode of this.importNodes) {
      const tmpExt = this.getExtension(tmpImportNode).toLowerCase();
      console.log(`Got ext with ${tmpExt}`);

      if (this.optionsExtOrder.includes(tmpExt)) {
        console.log(`which is there in options`);
        const newMatchIndex = this.optionsExtOrder.indexOf(tmpExt);
        console.log(`at index ${newMatchIndex}`);
        if (newMatchIndex >= lastMatchedIndexInOptions) {
          console.log(`which is greater than last matched index`);
          lastMatchedIndexInOptions = newMatchIndex;
        } else {
          console.log(`which is less than last matched index. PROBLEM`);
          brokenNodes.push(tmpImportNode)
        }
      }
    }

    return brokenNodes
  }

}

ImportGrouped.importNodeSelector = 'ImportDeclaration';
ImportGrouped.extensionDelimiter = '.';

module.exports = {
  meta: {
    docs: {
      description: "Import statements should be grouped by extensions and groups can have custom order between them",
      category: "Fill me in",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
    ]
  },

  create: function (context) {

    // variables should be defined here
    const importGrouped = new ImportGrouped(context);

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      [ImportGrouped.importNodeSelector]: function handleImports(node) {
        importGrouped.registerNode(node);
      },
      'Program:exit': function reportAndReset() {
        // console.log(importGrouped.importNodes);

        // Calc problems and report stuff here
        const brokenNodes = importGrouped.findBrokenNodes();

        brokenNodes.forEach((eachBrokenNode) => {
          context.report({
            node: eachBrokenNode,
            message: 'Node doesn\'t match import order',
            // fix: canFix && (fixer =>
            //   fixer.replaceTextRange(
            //     [firstRootStart, secondRootEnd],
            //     newCode + sourceCode.text.substring(firstRootStart, secondRootStart)
            //   )),
          })
        })

      },

    };
  }
};
