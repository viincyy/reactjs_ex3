// Destructuring
var courses = ["JS", "C++", "PHP"];
var [a, b, c] = courses;
console.log(a);

// Rest parameter
var [a, ...rest] = courses;
console.log(rest);

var coursesss = {
  name: "JS",
  price: 1000,
};

var { name, ...rest } = coursesss;

// spread
//- Sử dụng rest parameter dưới dạng tham số thì nó là spread, mảng

function logger(...rest) {
  console.log(rest);
}
logger(1, 2, 3);
