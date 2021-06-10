/*Built in function
    1. Alert
    2. Console
    3. Confirm
    4. Prompt
    5. Set timeout
    6. Set interval
*/

// confirm('Xac nhan ban du tuoi!');
// prompt('Xac nhan ban du tuoi!');
// setTimeout(function() {
//     console.log('1000s');
// }, 1000)
// setInterval(function() {
//     console.log('Random number: ' + Math.random());
// }, 1000)

/*
    - Alert, Confirm, Prompt: Bật lên cửa sổ hộp thoại
        + Alert: Hiện thông báo
        + Confirm: Hiện thông báo xác nhận
        + Prompt: Kết hợp cả Alert và Confirm, hiển thị thêm ô input để chúng ta nhập
    - setTimeout(): Chạy function sau một khoảng thời gian được thiết lập, chỉ chạy 1 lần
    - setInterval(): Chạy function sau một khoảng thời gian được thiết lập, chạy nhiều lần
*/ 

/*
    Giới thiệu về toán tử trong Javascript
    1. Toán tử số học
    2. Toán tử gán
    3. Toán tử so sánh
    4. Toán tử logic
*/

/*
    Toán tử số học
    +
    -
    *
    **: lũy thừa
    /
    %
    ++
    --
           *prefix:
            Eg: value=5; ++value; console.log(value);
            Bước 1: +1 cho value, khi đó value mang giá trị là 6.
            Bước 2: Trả về value sau khi được cộng.
           *postfix
           Eg: value=5; value++; console.log(value);
            Bước 1: Copy biến value, VALUE_COPY=5
            Bước 2: +1 cho value => value = 6
            Bước 3: Trả về VALUE_COPY
        var numb = 3
        var rst = numb++ - --numb;
        // 3 - (3) = 6

        var numb = 6
        var rst = ++numb * 2 - numb-- * 2;
        // 7*2 - 7*2 = 0
*/
// console.log(2**3);

/*
    Kiểu dữ liệu - Data type
    - Undefined
        var age;
        console.log(age);
    - Symbol
        var id = Symbol('id') // unique: duy nhất
    Kiểu dữ liệu phức tạp
    - Function
    - Object
*/

/*
    * Các giá trị khi convert sang boolean đều trả về false
    - 0
    - ''
    - undefined
    - null
    - false
    - NaN
*/

/*
    Chuỗi trong JavaScript

*/
/* 
    var str = new String("Hello");
    console.log(str);
    var str = 'I am a \'Superhero\'';
    console.log(str);

    Template string
    var name = 'SuperHero'
    console.log(`Toi la: ${name}`);
*/
/*
    var str = 'I am a SuperHero';
    // Làm việc với chuỗi.
    // 1. length
    console.log(str.length);

    // 2. indexOf
    console.log(str.indexOf('SuperHero'));
    console.log(str.search('SuperHero'));
    // - Search không cho truyền vào tham số thứ 2
    // - Search cho phép tìm kiếm theo biểu thức chính quy

    // 3. Slice
    console.log(str.slice(0));

    // 4. Replace
    console.log(str.replace(/I am a/g, 'You\'re'));

    // 5. toUpperCase
    console.log(str.toUpperCase());

    // 6. toLowerCase
    console.log(str.toLowerCase());

    // 7. Trim: xóa khoảng trắng thừa 2 đầu
    var str_2 = "   I'm a supper hero   ";
    console.log(str_2.trim());

    // 8. Split: cắt chuỗi thành array
    var languages = 'JS, C++, C#';
    console.log(languages.split(', '));

    // 9. CharAt: trả về chỉ mục bắt đầu của chuỗi được truyền vào.
    console.log(languages.charAt(0));
*/

/*
    // Làm việc với số
    var numb = new Number(50);
    console.log(typeof numb);

    var rst = 20 / 'ABC';
    console.log(rst);

    // Hàm kiểm tra NaN: isNaN(value);
    // toString(): chuyển số thành chuỗi
    // toFixed(): làm tròn số

    var PI = 3.1415297;
    console.log(PI.toFixed(4));
*/

/*
    // Làm việc với mảng
    var languages = ['JavaScript', 'PHP', 'Ruby'];
    // Kiểm tra Array và Object: Array.isArray(valueToCheck);
    // 1. toString(): Chuyển mảng thành chuỗi
    console.log(typeof languages.toString());

    // 2. Join
    console.log(languages.join(', '));

    // 3. Pop: Xóa và trả phần tử cuối mảng
    console.log(languages.pop());

    // 4. Push: Thêm phần tử vào cuối mảng và trả về số phần tử trong mảng
    console.log(languages.push('Java', 'Python'));
    console.log(languages);

    // 5. Shift: xóa phần tử đầu mảng và trả về phần tử đó
    console.log(languages.shift());

    // 6. Unshift: thêm phần tử vào đầu mảng và trả về số lượng phần tử
    console.log(languages.unshift('Golang'));
    console.log(languages);

    // 7. Splicing: Xóa, chèn phần tử mới vào mảng
    // Xóa
    languages.splice(1, 2);
    // Chèn
    languages.splice(0, 0, 'Inserted');
    console.log(languages);

    // 8. Concat: Nối array
    var languages_2 = ['Dart', 'Ruby'];
    console.log(languages.concat(languages_2));

    // 9. Slicing
    console.log(languages.slice(1));
    // Copy array
    var languages_3 = languages.slice(0);
    console.log(languages_3);
*/

/*
    // arguments
    function log(){
        console.log(arguments);
        var arr = [];
        for(var index of arguments){
            arr.push(index);
        }
        console.log(arr.join('-'));
    }
    log('1', '2', '3');
*/

/*
    Có 3 loại function
    1. Declaration function
        function A() {}
    2. Expression function
        var A = function() {}
    3. Arrow function
        var A = () => {}
*/

// Polyfill: trình duyệt không hỗ trợ includes

/*
    // Object
    var info = {
        name: 'Nguyen Thanh Suu',
        age: 24,
        adr: 'Phu Yen',
        getName: function() {
            return this.name;
        }
    }

    info.name = 'Nguyen Thanh Cong';
    info['age'] = 30;

    // Xóa
    // delete info['name'];
    console.log(info.getName());

    // Object constructor: Mô tả thiết kế của đối tượng
    function User(firstName, lastName, avatar){
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
        this.getName = function() {
            return `${firstName} ${lastName}`;
        }
    }
    // Tạo đối tượng
    var author = new User('Son', 'Dang', './avatar.png');
    var user = new User('Suu', 'Nguyen', './avatar2.png');

    // Thêm thuộc tính
    author.title = 'Hoc JavaScript';
    user.comment = 'Hay qua ad oi!';

    // Object prototype: Thêm thuộc tính vào hàm tạo
    User.prototype.className = 'F8';
    User.prototype.getClassName = function() {
        return this.className;
    }
    console.log(author.getClassName());
    // Tất cả các thuộc tính được tạo ra từ prototype sẽ nằm trong thẻ __proto__
*/

/*
    // Đối tượng Date
    var date = new Date();
    console.log("Nam: " + date.getFullYear() + 
                " Thang: " + (date.getMonth() + 1) +
                " Ngay: " + date.getDate());
*/

/*
    // For in: Dùng để lấy key của đổi tượng object.
    var info = {
        name: 'Suu',
        age: 24,
        addr: 'Phu Yen'
    }
    var courses = ['C++', 'Dart', 'JavaScript'];

    // for(var i in courses){
    //     console.log(i);
    //     console.log(courses[i]);
    // }

    // For of: Dùng để lấy phần tử của mảng. Không áp dụng với object.
    for(var index of courses){
        console.log(index);
    }
    // Để áp dụng cho object cần biến đổi như sau
    for(var index of Object.keys(courses)){
        console.log(courses[index]);
    }
*/ 

/*
    Array methos:


*/
/*
    var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0   
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }
    ]
    // 1. forEach()
    courses.forEach((course, index) => {
        console.log(index, course);
    })

    // 2. every(): Kiểm tra tất cả các phần tử thỏa điều kiện nào đó
    var isFree = courses.every((course) => {
        return course.coin === 0;
    })
    console.log(isFree);

    // 3. some()
    var isFree_2 = courses.some((course) => {
        return course.coin === 0;
    })
    console.log(isFree_2);

    // - every(): Kiểm tra TẤT CẢ các phần tử thỏa điều kiện nào đó
    // - some(): Chỉ kiểm tra đến khi nào PHẦN TỬ THỎA ĐIỀU KIỆN là dừng


    // 4. find(): Tìm kiếm phần tử trong mảng, không có trả về undefined
    var course = courses.find((course) => {
        return course.name === 'Ruby';
    })
    console.log(course);

    // 5. filter(): Tìm kiếm pt trong mảng, trả về tất cả pt hợp lệ
    var list_free_course = courses.filter((course) => {
        return course.coin === 0;
    })
    console.log(list_free_course);

    // find(): trả về 1 phần tử thỏa đk
    // filter(): trả về tất cả các phần tử thỏa đk

    // 6. map(): thay đổi phần tử trong mảng
    // - Map sẽ trả về một mảng mới, có số lượng bằng với mảng cũ

    var courseHandler = (course, index, originArr) => {
        return {
            id: course.id,
            name: `Khóa học: ${course.name}`,
            coin: course.coin,
            textCoint: `Giá: ${course.coin}`,
            index, // chân phương
            originArr
        }
    }
    var newCourses = courses.map(courseHandler)
    console.log(newCourses);


    // 7. reduce()
    var tocalCoin = courses.reduce((total, course) => {
        return total + course.coin;
    }, 0) // initial value

    // Nếu không truyền trước giá trị khởi tạo thì mặc định định phương thức
    // sẽ lấy phần tử đầu tiên làm giá trị khởi tạo => initial value = object => false.
    console.log(tocalCoin);

    var depthArray =  [1, 2, [3, 4], 5, [6, 7 ,8]];
    var flatArray = depthArray.reduce((flatOut, depthItem) => {
        return flatOut.concat(depthItem);
    }, [])
    console.log(flatArray);

    var topics = [
        {
            topic: 'Front-end',
            courses: [
                {
                    id: 1,
                    title: 'HTML, CSS'   
                },
                {
                    id: 2,
                    title: 'JavaScript'
                }
            ]

        },
        {
            topic: 'Back-end',
            courses: [
                {
                    id: 1,
                    title: 'NodeJS'
                },
                {
                    id: 2,
                    title: 'PHP'
                }
            ]
        }
    ]

    var newCourses = topics.reduce((courses, oldItem) => {
        return courses.concat(oldItem.courses);
    }, [])
    console.log(newCourses);

    var htmls = newCourses.map((courses) => {
        return `
            <div>
                <h2>${courses.id}</h2>
                <h2>${courses.title}</h2>  
            </div>
        `;
    })
    console.log(htmls); 

*/

/*
    // includes
    var title = 'Responsive web design';
    console.log(title.includes('web', 0));

    var courses = ['JS', 'C++'];
    console.log(courses.includes('JS', 0));
*/

// Math
// PI
console.log(Math.PI);

// round(): tron`
console.log(Math.round(1.3));

// abs()
console.log(Math.abs(-1));

// ceil(): tron` tren
console.log(Math.ceil(1.3));

// floor(): tron` duoi'
console.log(Math.floor(1.9));

// random(): tra ve so thap phan < 1
var random = Math.floor(Math.random() * 100);
if(random < 50){
    console.log('Cường hóa thành công!');
}

// min()
console.log(Math.min(1, 3));

// max()
console.log(Math.max(2, 5, 3, 4));
