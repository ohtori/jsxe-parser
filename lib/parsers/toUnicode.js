"use strict";
function toUnicode(str) {
    return str.split('').map(function (value, index, array) {
        var temp = value.charCodeAt(0).toString(16).toUpperCase();
        if (temp.length > 2) {
            return '\\u0' + temp;
        }
        return value;
    }).join('');
}
module.exports = toUnicode;
