const head = require("./head");
const tail = require("./tail");

const map = (list, customFunction) => {
    return head(list) === null ? [] : [customFunction(head(list)), ...map(tail(list), customFunction)];
}
module.exports = map;