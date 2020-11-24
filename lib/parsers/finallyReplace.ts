function finallyReplace(str: string): string {
  return str
    .replace(/null,\s*\),/gi, 'null)')
    .replace(/,\s*(\)?\s*;?\s*})/gi, '$1')
    .replace(/___TEXTNODE___START___/gi, '"')
    .replace(/[\s]*___TEXTNODE___END___/gi, '", ')
    .replace(/___PROPERTYNODE___START___/gi, '')
    .replace(/[\s]*___PROPERTYNODE___END___/gi, ', ')
    .replace(/__ARROW___FUNCTION__/gi, '=>')
    .replace(/___SPREAD___START___([.]{3}\s*[^\s,'"`}]+)___SPREAD___END___/gi, (match, p1) => {      
      return `${p1},`;
    })
    .replace(/,\s*?,/gi, ',');
}

module.exports = finallyReplace;