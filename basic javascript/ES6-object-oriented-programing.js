class Book{
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSumary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge() {
        const year = new Date().getFullYear() - this.year;
        return `${this.title} is ${year} year olds`;
    }
    setYear(newYear) {
        this.year = newYear;
    }
    getYear(){
        return this.year;
    }
    static topBookStore(){
        return 'A & B';
    }
}

const BookOne = new Book('Book One', 'Joe', 1990);
// console.log(BookOne);
// console.log(Book.topBookStore())

class Magazine extends Book{
    constructor(title, author, year, month){
        super(title, author, year); // gọi hàm khởi tạo của lớp cha
        this.month = month;
    }
}

const MagOne = new Magazine('Mag One', 'Joe', 2020, 6);
console.log(MagOne);

// Tính đóng gói: Che giấu dữ liệu, không cho phép truy cập dữ liệu từ bên ngoài mà phải thông qua các phương thức (getter, setter).
// Tính kế thừa: Đối tượng con sẽ kế thừa các thuộc tính của đối tượng cha mà không cần định nghĩa lại
// Prototype: Mọi object đều chứa một prototype. Chúng ta có thể thay đổi thuộc tính, thêm thuộc tính của object bằng prototype
// Constructor: Tạo mới object từ hàm khởi tạo thông qua từ khóa new