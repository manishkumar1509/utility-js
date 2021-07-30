const head = require("./head");
const tail = require("./tail");

const reduce = (list, customFunction, accumulator) => {
    return head(list) === null ? accumulator : 
        reduce(tail(list), customFunction, customFunction(accumulator, head(list)));
}

module.exports = reduce;