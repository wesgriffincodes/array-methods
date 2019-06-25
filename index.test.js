const { array, map } = require('./index');

describe('creates a mapped array function', () => {
    it('creates a new mapped array', () => {
        const newArray = map(array, (num) => num * 2);
        expect(newArray).toEqual([ 4, 8, 12, 16 ]);
    });
});