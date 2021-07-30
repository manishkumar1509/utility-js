const head = require("./head");
const tail = require("./tail");

const filter = (list, predicate) => {
    return head(list) === null ? [] : 
        predicate(head(list)) ? [head(list), ...filter(tail(list), predicate)] : [...filter(tail(list),predicate)];
}
module.exports = filter;