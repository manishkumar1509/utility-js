const head = require("./head");
const tail = require("./tail");

const map = (list1, customFunction) => {
    return head(list1) === null ? [] : [customFunction(head(list1)), ...map(tail(list1), customFunction)];
}
module.exports = map;