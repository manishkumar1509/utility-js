describe('Reduce', () => {

    it('reduce([],(x,y)=>x+y) should be undefined', () => {
        expect([].reduce((x,y) => x+y )).toEqual(undefined);
    });

    it('reduce([],v(x,y)=>x+y,10) should be 10', () => {
        expect([].reduce((x,y) => x+y, 10 )).toEqual(10);
    });

    it('reduce([a,b,c],(x,y)=>x+y) should be abc', () => {
        expect(['a','b','c'].reduce((x,y) => x+y )).toEqual('abc');
    });

    it('reduce([a,b,c],(x,y)=>x+y,’z’)', () => {
        expect(['a','b','c'].reduce((x,y) => x+y, 'z' )).toEqual('zabc');
    });

})