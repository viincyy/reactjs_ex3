// - Attribute event: Sử dụng attribute để lắng nghe sự kiện
// - Gán sự kiện sử dụng element node.
// Sự kiên nổi bọt

/*
    var h1Element = document.querySelectorAll('h1');
    for(var i = 0; i < h1Element.length; ++i){
        h1Element[i].onclick = function(e) {
            console.log(e.target);
        }
    }
 */

// INPUT/ SELECT
var inputElement = document.querySelector('input[type="text"]');
var input;
inputElement.oninput = function (e) {
  input = e.target.value;
};

var inputElement2 = document.querySelector('input[type="checkbox"]');
var checked = false;
inputElement2.onchange = function (e) {
  checked = e.target.checked;
};

var inputElement3 = document.querySelector("select");
var checked = false;
inputElement3.onchange = function (e) {
  console.log(e.target.value);
};

//KEY UP/ DOWN
var inputElement4 = document.querySelector("input[type='text']");
inputElement4.onkeyup = function (e) {
  console.log(e.which);
  switch (e.which) {
    case 27:
      console.log("exit");
      break;
  }
};

document.onkeydown = function (e) {
  switch (e.which) {
    case 27:
      console.log("EXIT");
      break;
  }
};

document.onkeypress = function (e) {
  switch (e.which) {
    case 13:
      console.log("SEND");
      break;
  }
};
