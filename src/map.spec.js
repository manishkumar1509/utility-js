const cube = require('./cube');
const identity = require('./identity');

describe('Map', () => {

    it('map([], cube) should give []', () => {
        expect([].map(cube)).toEqual([]);
    });

    it('map([1,2,3], cube) should give [1,8,27]', () => {
        expect([1,2,3].map(cube)).toEqual([1,8,27]);
    });

    it('map([1,2,3], identity) should give [1,2,3]', () => {
        expect([1,2,3].map(identity)).toEqual([1,2,3]);
    });

    it('mmap([a{x : 10}],someObject => someObject.x + 1) -> [11]', () => {
        expect([{x : 10}].map(someObject => someObject.x+1)).toEqual([11]);
    });

})