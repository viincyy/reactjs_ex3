// Tính Tổng
var sums = [1, 2, 3];
const sum = sums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log("sum: " + sum);

//  Flat mảng
var arrays = [1, 2, 3, [4, 5], 6, [10, 11]];
const flatArray = arrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);
console.log("flat: " + flatArray);

// Tính trung bình
var calAvgArray = [1, 2, 3];
const avgArray = calAvgArray.reduce(
  (accumulator, currentValue, index, array) => {
    accumulator += currentValue;
    if (index === array.length - 1) {
      return accumulator / array.length;
    } else {
      return accumulator;
    }
  }
);
console.log("avg:" + avgArray);

// Tìm phần tử lặp
const pounds = [11, 21, 16, 19, 46, 29, 46, 19, 21];
const count = pounds.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(count);

// Loại bỏ phần tử lặp
const loopElementArray = [11, 21, 16, 19, 46, 29, 46, 19, 21];
const arrayAfterRefactor = loopElementArray.reduce(
  (accumulator, currentValue) => {
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue);
    }
    return accumulator;
  },
  []
);
console.log("arrayAfterRefactor: " + arrayAfterRefactor);
