const array = [2,4,6,8];

function map(array, callback) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        mappedArray.push(callback(num))
    };
    return mappedArray;
};

const newArray = map(array, (num) => num * 2);

module.exports = { map, array }