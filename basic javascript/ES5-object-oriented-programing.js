// Hàm khởi tạo (constructor)
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// Thêm thuộc tính, phương thức
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// setter, setter
Book.prototype.setYear = function(newYear) {
    this.year = newYear;
}
Book.prototype.getYear = function() {
    return this.year;
}

// Khởi tạo
var bookOne = new Book('Book One', 'Joe', 1991);
 
// Inheritance: Ke' thua`.
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherit Prototype.
Magazine.prototype = Object.create(Book.prototype);

// Sử dụng hàm khởi tạo
Magazine.prototype.constructor = Magazine;

// Khởi tạo đối tượng Magazine
var magazineOne = new Magazine('MagazineOne', 'Joe Biden', 2000, 6);
console.log(magazineOne);

