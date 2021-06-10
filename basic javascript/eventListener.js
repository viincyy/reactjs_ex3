/*
    1. DOM event/ Event listener
    2. JSON
    3. Fetch
    4. DOM location
    5. Local storage
    6. Session storage
    7. Coding convention
    8. Best practices
    9. Mistakes
    10. Performace
*/

// 1. Xử lý nhiểu việc khi 1 event xảy ra
// 2. Lắng nghe/ hủy bỏ lắng nghe
btnElement = document.querySelector("button");

/*
    btnElement.onclick = function () {
    console.log("01 working");
    console.log("02 working");
    alert("03 working");
    };

    setTimeout(function () {
    btnElement.onclick = function () {};
    }, 3000);
*/
function Event1() {
  console.log("Event 1");
}
btnElement.addEventListener("click", Event1);
setTimeout(function () {
  btnElement.removeEventListener("click", Event1);
}, 3000);
