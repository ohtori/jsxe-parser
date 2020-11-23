function finallyReplace(str: string): string {
  return str
    .replace(/null,\s*\),/gi, 'null)')
    .replace(/,\s*(\)?\s*;?\s*})/gi, '$1')
    .replace(/___TEXTNODE___START___/gi, '"')
    .replace(/[\s]*___TEXTNODE___END___/gi, '", ')
    .replace(/___PROPERTYNODE___START___/gi, '')
    .replace(/[\s]*___PROPERTYNODE___END___/gi, ', ')
    .replace(/__ARROW___FUNCTION__/gi, '=>')
    .replace(/,\s*?,/gi, ',');
}

module.exports = finallyReplace;