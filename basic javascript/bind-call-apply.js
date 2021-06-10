/*
    *bind, call, apply là các prototype của function.
    - call: GỌI HÀM và cho phép bạn TRUYỀN MỘT OBJECT. Các đối số phân cách bởi DẤU PHẨY.
    - Eg: function.call(thisArg, arg1, arg2, ...);

    - apply: GỌI HÀM và cho phép TRUYỀN VÀO MỘT OBJECT. Các đối số được truyền thông qua MẢNG.
    - Eg: function.apply(thisArg, [agrsArray])

    - bind: TRẢ VỀ MỘT HÀM MỚI, cho phép truyền một object. Các đối số cách nhau bởi dấu phẩy
    - Eg: var newFunction = function.bind(thisArg[, arg1, arg2[, ...]]);
*/

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting1, greeting2) {
    console.log(
      greeting1 + ',' + greeting2 + ' ' + this.firstName + ' ' + this.lastName
    );
}

// Call
say.call(person1, 'Hello', ' Good morning');
say.call(person2, 'Hello', 'Good norning');

// Apply
say.apply(person1, ['Hello', ' Good morning']);
say.apply(person2, ['Hello', ' Good morning']);

// Bind
var newFunc = say.bind(person1, 'Hello', ' How are you, ');
var newFunc2 = say.bind(person2, 'Hello', ' How are you, ');
newFunc();
newFunc2();