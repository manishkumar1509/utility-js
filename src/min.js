const head = require("./head");
const tail = require("./tail");

const min = (list) => {
    if( list.length == 1 ) return head(list);
    return head(list) < max( tail(list) ) ? head(list) : min(tail(list)) ;
}

module.exports = min;