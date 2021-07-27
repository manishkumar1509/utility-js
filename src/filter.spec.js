const filterUpperCase = require("./filterUpperCase");

describe('Filter', () => {

    it('filter([], x => true) should give []', () => {
        expect([].filter(x => true)).toEqual([]);
    });

    it('filter([1,2,3],x => true) should give [1,2,3]', () => {
        expect([1,2,3].filter(x => true)).toEqual([1,2,3]);
    });

    it('filter([1,2,3],x => false) should give []', () => {
        expect([1,2,3].filter(x => false)).toEqual([]);
    });

    it('filter([1,2,3],x => x > 1) should give [2,3]', () => {
        expect([1,2,3].filter(x => x>1)).toEqual([2,3]);
    });

    it('filter([a,B,c,D], filterUpperCase) should be [B,D]', () => {
        expect(['a','B','c','D'].filter(filterUpperCase)).toEqual(['B','D']);
    });

})