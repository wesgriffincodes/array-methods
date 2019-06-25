const arr = [2, 4, 6, 7, 8];

function map(arr, callback) {
  const mapped = [];
  for(let i = 0; i < arr.length; i++) {
    mapped[i] = callback(arr[i]);
  }
  return mapped;
}

const newArray = map(arr, (num) => num * 2);


function filter(arr, callback){
  const filtered = [];
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      filtered[filtered.length] = arr[i];
    }
  }
  return filtered;
}

const filteredArray = filter(arr, (num) => num % 2 === 0);



function findIndex(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])){
      return i;
    }
  }
  return -1;
}

const indexNumber = findIndex(arr, (num) => num > 3);


function reduce(arr, callback, initialValue) {
  let acc = initialValue;
  let i = 0;
  if(initialValue === undefined) {
    i = 1;
    acc = arr[0];
  }
  for(let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }
  return acc;
}

const reduceNumber = reduce(arr, (acc, item) => acc + item, 0);
console.log(reduceNumber);

module.exports = { map, filter, findIndex, reduce };
