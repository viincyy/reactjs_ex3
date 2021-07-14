// Value types: STRING, NUMBER, BOOLEAN, UNDEFINED, NULL */
// value: tạo ô nhớ mới, chép giá trị của ô nhớ sang ô nhớ mới
// Reference types: OBJECT, ARRAY, FUNCTION
// Ref: Truy xuất đến địa chỉ chứa giá trị của ô nhớ đó, chỉ lưu giá trị vùng nhớ, k lưu hẵn giá trị
// Khi gán cho biến một giá trị mới thì đồng thời cũng sẽ cung cấp cho nó một
// địa chỉ, vùng nhớ mới
// Khi gán b = a thì b có cùng địa chỉ vùng nhớ với a -> reference type -> sửa trên a thì b đổi, sửa b thì a đổi

const student = {
  name: "Oanh Ha",
  profile: {
    firstname: "Oanh",
    lastname: "Ha",
    introduction: "Girl",
  },
};

// data types with function
function sum(a, b) {}
const c = 1;
const d = 2;
sum(c, d);

// tham trị: mỗi giá trị được lưu vào mỗi vùng nhớ khác nhau, việc sửa ô nhớ này k liên quan đến ô nhớ khá

function func(obj) {
  obj.name = "Mercedes";
}
const a = {
  name: "BMW",
};

func(a);
console.log(a);

// side effect
function createCar(obj) {
  //   obj = JSON.parse(JSON.stringify(obj));
  obj = { ...obj }; // chỉ sử dụng khi chỉ có 1 cấp object
  obj.name = "Mercedes";
  return obj;
}

const car = {
  name: "BMW",
};

var newCar = new createCar(car);
console.log(car);
console.log(newCar);
