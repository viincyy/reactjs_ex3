// preventDefault: dùng để loại bỏ hành vi mặc định của trình duyệt trên thẻ html
// stopPropagation: dùng để loại bỏ sự kiện nổi bọt

/*
  var aElement = document.links;
  for (var i = 0; i < aElement.length; ++i) {
    aElement[i].onclick = function (e) {
      if (!e.target.href.startsWith("https://www.f8.edu.vn")) {
        e.preventDefault();
      }
    };
  }
*/
/*
  var ulElement = document.querySelector("ul");

  ulElement.onmousedown = function (e) {
    e.preventDefault();
  };

  ulElement.onclick = function (e) {
    console.log(e.target);
  };
*/

/*
  divElement = document.querySelector("div");
  divElement.onclick = function (e) {
    e.stopPropagation();
    console.log("DIV");
  };

  btnElement = document.querySelector("button");
  btnElement.onclick = function (e) {
    e.stopPropagation();
    console.log("Click me");
  };
*/
