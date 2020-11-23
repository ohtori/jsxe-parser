"use strict";
function predecorateString(str) {
    return str
        .replace(/<([a-z0-9]+[^>]?)[^>]*>/gi, (match, p1) => {
        return match
            .replace(/((?<!=\s*")(?<!\w)['"}]?\s+(\w[a-z0-9]+)\s*\W)|(<\w+\s+\w+\s*\/?>)|(<\w+\s+\w+\s+)/gi, (match) => {
            console.log(match, 11111111111111111);
            return match.replace(/(?<!<)\b\w+\b(?![{}}'"=])/gi, (match) => {
                return `${match}={true}`;
            });
        });
    })
        .replace(/=>/gi, '__ARROW___FUNCTION__')
        .replace(/<>/gi, '<React.Fragment>')
        .replace(/<\/>/gi, '</React.Fragment>')
        .replace(/<([a-z0-9]+)([^>]+)?\s*(\/\s*>)/gi, (match, p1, p2, p3) => {
        return `<${p1}${p2}></${p1}>`;
    });
}
module.exports = predecorateString;
