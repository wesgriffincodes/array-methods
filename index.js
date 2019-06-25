const arr = [2,4,6,7,8];

function map(arr, callback) {
    const mapped = [];
    for (let i = 0; i < arr.length; i++) {
        mapped[i] = callback(arr[i]);
    };
    return mapped;
};

const newArray = map(arr, (num) => num * 2);

function filter(arr, callback){
    const filtered = [];
    for (let i = 0; i < arr.length; i++) {
      if(callback(arr[i])) {
        filtered[filtered.length] = arr[i];
      }
    };
    return filtered;
};

const filteredArray = filter(arr, (num) => num % 2 === 0)

module.exports = { map, filter}