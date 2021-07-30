const head = require("./head");
const tail = require("./tail");

const filter = (list, condition) => {
    return head(list) === null ? [] : 
        condition(head(list)) ? [head(list), ...filter(tail(list), condition)] : [...filter(tail(list),condition)];
}
module.exports = filter;