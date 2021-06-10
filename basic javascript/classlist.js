// Classlist properties: Trả về DOMTokenList giúp quản lý class của Element.      

// add: thêm class vào Element.
// contains: kiểm tra 1 class có nằm trong Element không?
// remove: xóa class của Element.
// toggle: thêm hoặc xóa class trong Element.

var boxElement = document.querySelector('.box');
console.log(boxElement.classList.value);
console.log(boxElement.classList.length);
console.log(boxElement.classList[0]);

boxElement.classList.add('red', 'bg');
console.log(boxElement.classList.contains('blue'));
boxElement.classList.remove('bg');
boxElement.classList.toggle('red');
