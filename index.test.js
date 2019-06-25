const { map, filter, findIndex, reduce } = require('./index');

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
    const index = findIndex(arr, (num) => num > 3);
    expect(index).toEqual(expect.any(Number));
  });
});

describe('create reduce function', () => {
  it('iterates through array and envokes callback', () => {
    const callback = jest.fn();
    reduce(arr, callback);
    expect(callback).toHaveBeenCalledTimes(arr.length);
  });
});

it('iterates through the array and sets updates the acc with resultof callback', () => {
  const sum = reduce(arr, (acc,  item) => acc + item, 0);
});

it('iterates through the array and sets updates the acc with resultof callback', () => {
  const sum = reduce(arr, (acc,  item) => acc + item);
});
