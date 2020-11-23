function decorateTextAndExp(str: string): string {
  return str
    .replace(/\>(\s*)([\\]?\w+?[^<]+)(\s*)</gs, (match, p1, p2, p3) => {
      if (p2.length) {
        return `>${p1}___TEXTNODE___START___${p2}___TEXTNODE___END___<`
      }
      return `>${p1}${p3}<`;
    })
    .replace(/\>(\s*){([^}]+)}(\s*)</gs, (match, p1, p2, p3) => {
      if (p2.length) {
        return `>${p1}___PROPERTYNODE___START___${p2}___PROPERTYNODE___END___<`
      }
      return `>${p1}${p3}<`;
    })
    .replace(/[^=]\>(\s*){([^]+)}(\s*)</gs, (match, p1, p2, p3) => {
      if (p2.length) {
        return `>${p1}___PROPERTYNODE___START___${p2}___PROPERTYNODE___END___<`
      }
      return `>${p1}${p3}<`;
    })
    .replace(/\>(\s*){(\w+?[^<]+)}(\s*)</gs, (match, p1, p2, p3) => {
      if (p2.length) {
        return `>${p1}___PROPERTYNODE___START___${p2}___PROPERTYNODE___END___<`
      }
      return `>${p1}${p3}<`;
    }); 
}

module.exports = decorateTextAndExp;