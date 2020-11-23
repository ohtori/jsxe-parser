"use strict";
function parseElems(str) {
    return str
        .replace(/<([A-Z][^/{<]*\s*)\s*({[^<>]+})?\s*>/g, (_, p1, p2) => {
        return `React.createElement(${p1}, ${p2 ? p2 : null}, `;
    })
        .replace(/<([a-z0-9]+)\s*({[^>]+})?\s*>/g, (match, p1, p2) => {
        return `React.createElement('${p1}', ${p2 ? p2 : null}, `;
    })
        .replace(/(<\s*\/[^/]+?>)/ig, '),');
}
module.exports = parseElems;
