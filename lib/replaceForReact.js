"use strict";
var replaceForReact;
(function (replaceForReact_1) {
    const toUnicode = require('./parsers/toUnicode');
    const predecorateString = require('./parsers/predecorateString');
    const parseProps = require('./parsers/parseProps');
    const decorateTextAndExp = require('./parsers/decorateTextAndExp');
    const parseElems = require('./parsers/parseElems');
    const finallyReplace = require('./parsers/finallyReplace');
    function replaceForReact(data) {
        const unicodeStr = toUnicode(data.toString());
        const predecoratedStr = predecorateString(unicodeStr);
        const propsParsedStr = parseProps(predecoratedStr);
        const decoratedTextNodesStr = decorateTextAndExp(propsParsedStr);
        const parsedElemsStr = parseElems(decoratedTextNodesStr);
        const finallyReplaced = finallyReplace(parsedElemsStr);
        return finallyReplaced;
    }
    module.exports = replaceForReact;
})(replaceForReact || (replaceForReact = {}));
