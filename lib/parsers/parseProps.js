"use strict";
function parseProps(str) {
    return str
        .replace(/(<[^>/\d]+?)(\s([^=]+?)=([{'"`]+\s?)([^'">]+)(\s?[}'"`]\s*))+\s*>/ig, match => {
        return match
            .replace(/=\s*[{]\s*/ig, ' : ')
            .replace(/=\s*(['"`])\s*(.+?)(['"`])/ig, ' : $1 $2 $3,')
            .replace(/([^}><]+)[}]/ig, (match, p1) => {
            if (p1.trim().length <= 0) {
                return `}`;
            }
            return `${p1}, `;
        })
            .replace(/(<\w+\s+)([^>]+?)(\s*>)/igs, (match, p1, p2, p3) => {
            return `${p1} { ${p2} } ${p3}`;
        })
            .replace(/,\s*}/, ' }')
            .replace(/(\$\s*{[^,]+)\s*,/igs, (match, p1) => {
            return '{p1} ,';
        })
            .replace(/{([^]*)}/igs, (match, p1) => {
            return `{${p1.replace(/}/, '}, ')}}`;
        });
    });
}
module.exports = parseProps;
