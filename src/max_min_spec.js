const max = require("./max");
const min = require("./min");

describe('Max Min', () => {

    it('max([1,2,3,4]) should be 4', () => {
        expect(max([1,2,3,4])).toEqual(4);
    });

    it('min([1,2,3,4]) should be 1', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });

})