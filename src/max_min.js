describe('Max Min', () => {

    it('max([1,2,3,4]) should be 4', () => {
        expect([1,2,3,4].max()).toEqual(4);
    });

    it('min([1,2,3,4]) should be 1', () => {
        expect([1,2,3,4].min()).toEqual(1);
    });

})