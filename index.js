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
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
      if(callback(arr[i])) {
        filtered[j] = arr[i]; j++;
      }
    };
    return filtered;
};

const filteredArray = filter(arr, (num) => num % 2 === 0)
console.log(filteredArray);

module.exports = { map, arr, filter}