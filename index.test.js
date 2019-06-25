const { map, filter, findIndex } = require('./index');

const arr = [2, 4, 6, 7, 8];

describe('creates a mapped array function', () => {
  it('creates a new mapped array', () => {
    const newArray = map(arr, (num) => num * 2);
    expect(newArray).toEqual(expect.any(Array));
  });
});

describe('create filter function', () => {
  it('creates a filtered array', () => {
    const newArray = filter(arr, (num) => num % 2 === 0);
    expect(newArray).toEqual([2, 4, 6, 8]);
  });
});

describe('create findIndex function', () => {
  it('finds item in index', () => {
    const indexNumber = findIndex(arr, (num) => num > 3);
    expect(indexNumber).toEqual(1);
  });
});
