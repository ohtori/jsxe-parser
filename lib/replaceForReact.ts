namespace replaceForReact {
  const toUnicode = require('./parsers/toUnicode');
  const predecorateString = require('./parsers/predecorateString');
  const parseProps = require('./parsers/parseProps');
  const decorateTextAndExp = require('./parsers/decorateTextAndExp');
  const parseElems = require('./parsers/parseElems');
  const finallyReplace = require('./parsers/finallyReplace');

  function replaceForReact(data: Buffer): string {  
    const unicodeStr: string = toUnicode(data.toString());    
    const predecoratedStr: string = predecorateString(unicodeStr);  
    const propsParsedStr: string = parseProps(predecoratedStr);
    const decoratedTextNodesStr: string = decorateTextAndExp(propsParsedStr);
    const parsedElemsStr: string = parseElems(decoratedTextNodesStr);
    const finallyReplaced: string = finallyReplace(parsedElemsStr);
    
    return finallyReplaced;
  }

  module.exports = replaceForReact;
}
