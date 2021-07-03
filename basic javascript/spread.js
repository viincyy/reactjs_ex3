function logger(a, b, ...rest) {
  console.log(rest);
}
logger(1, 2, 3);

function logger2({ name, price, ...rest }) {
  console.log(name);
}
logger2({
  name: "JS",
  price: 1000, //
  description: "content",
});

// spread: hợp nhất mảng, object
var array = ["Ruby", "JS"];
var array2 = ["ReactJS", "Dart"];
var array3 = [...array2, ...array1];

var obj = {};
var obj2 = {};
var obj3 = { ...obj, ...obj2 };

/*
    - rest parameter: định nghĩa tham Số
    - spread: truyền đối số
*/

var spread = ["JS", "C++"];
function loggerCourse(...rest) {
  for (var i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}

loggerCourse(...spread);
