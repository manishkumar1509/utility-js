const head = require("./head");
const tail = require("./tail");

const max = (list) => {
    if( list.length == 1 ) return head(list);
    return head(list) > max( tail(list) ) ? head(list) : max(tail(list)) ;
}

module.exports = max;