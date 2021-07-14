/*  
    1. Định nghĩa key: value cho object
    2. Định nghĩa method cho Object
    3. Định nghĩa key cho object dưới dạng biến
*/

var _name = "JS";
var price = 1000;
var course = {
  _name,
  price,
  getName() {
    return _name;
  },
};

// 3
var fieldName = "name";
var fieldPrice = "price";
var course = {
  [fieldName]: "JS",
  [fieldPrice]: 1000,
};
