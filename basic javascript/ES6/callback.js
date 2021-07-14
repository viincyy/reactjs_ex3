// Callback: Là hàm được truyền qua đối số khi gọi hàm khác.
/*
    function func(arg) {
    if(typeof arg === 'function'){
        arg('arg nek`');
    }
    }
    function callBack(params) {
        console.log('arg: ', params);
    }
 */

var courses = ["JavaScript", "PHP", "Ruby"];
var courses2 = [
  {
    name: "JavaScipt",
    coin: 300,
    isFinish: true,
  },
  {
    name: "PHP",
    coin: 1200,
    isFinish: false,
  },
  {
    name: "Ruby",
    coin: 1000,
    isFinish: true,
  },
];
Array.prototype.filter2 = function (callback) {
  var output = [];
  if (typeof callback === "function") {
    for (var index in this) {
      if (this.hasOwnProperty(index)) {
        var rst = callback(this[index], index, this);
        if (rst) {
          output.push(this[index]);
        }
      }
    }
  }
  return output;
};
Array.prototype.map2 = function (callback) {
  var output = [];
  if (typeof callback === "function") {
    for (var index in this) {
      if (this.hasOwnProperty(index)) {
        output.push(callback(this[index], index));
      }
    }
  }
  return output;
};
Array.prototype.forEach2 = function (callback) {
  if (typeof callback === "function") {
    for (var index in this) {
      if (this.hasOwnProperty(index)) {
        callback(this[index], index, this);
      }
    }
  }
};

Array.prototype.some2 = function (callback) {
  if (typeof callback === "function") {
    for (var index in this) {
      if (this.hasOwnProperty(index)) {
        callback(this[index], index, this);
        if (callback(this[index], index, this)) {
          return true;
        }
      }
    }
  }
  return false;
};

Array.prototype.every2 = function (callback) {
  if (typeof callback === "function") {
    for (var index in this) {
      if (this.hasOwnProperty(index)) {
        if (!callback(this[index], index, this)) {
          return false;
        }
      }
    }
  }
  return true;
};

courses.forEach2((course, index, originArr) => {
  console.log(index, course, originArr);
});
courses.map2((course, index) => {
  console.log(index, course);
});
var htmls = courses2.filter2((course, index, origin) => {
  return course.coin > 700;
});
// console.log(htmls);

var r = courses2.some2((course, index, originArr) => {
  return course.isFinish;
});
// console.log(r);

var r2 = courses2.every2((course, index, originArr) => {
  return course.isFinish;
});
console.log(r2);
