const head = require("./head");
const tail = require("./tail");

const reduce = (list, customFunction, initialValue) => {
    if (list.length === 0 && initialValue === undefined) return undefined;
    return applyReduce(list, customFunction, initialValue)
}

const applyReduce = (list, customFunction ,initialValue) => {
    const accumulator = initialValue !== undefined ? initialValue : '';
    return head(list) === null ? accumulator : 
        applyReduce(tail(list), customFunction, customFunction(accumulator, head(list)));
}

module.exports = reduce;