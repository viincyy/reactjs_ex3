// - DOM: Document Object Modal.
// - DOM là quy chuẩn của W3C đưa ra.
/*
    - Có 3 thành phần
    1. Element
    2. Attribute
    3. Text
    - Muốn truy xuất được 3 thành phần trên cần phải đi qua đối tượng Document
*/

/*
    // GET ELEMENT
    var headingNode5 = document.getElementById('article');
    var headingNodes = document.getElementsByClassName('heading');
    var headingNode2 = document.getElementsByTagName('p');
    var headingNode3 = document.querySelector('.box .heading-2'); 
    var headingNodes4 = document.querySelectorAll('.box .heading-2');
*/ 
/*
    // GET ATTRIBUTE
    var listItemNodes = document.querySelectorAll('.box-1 li');
    // 1. Sử dụng tới `box-1`
    var boxNode = document.querySelector('.box-1');

    // 2. Sử dụng các li element là con của `box-1` 
    var liBoxNode = boxNode.querySelectorAll('li');
    console.log(boxNode);
    console.log(liBoxNode);
*/

/*
    1. getElementById
    2. getElementsByClassName
    3. getElementsByTagNa4. querySelector
    5. querySelectorAll
    - Trả trực tiếp ELEMENT: 1, 4
    - 2, 3 trả HTML COLLECTION
    - 6 trả NodeList
    6. HTML collection(a, img, form) -> Trả HTML collection
    7. document.write
*/

/*
    // DOM ATTRIBUTE
    var headingElement = document.querySelector('h1');

    headingElement.title = 'title'
    headingElement.setAttribute('data', 'heading');

    console.log(headingElement.getAttribute('data'));
    console.log(headingElement.getAttribute('title'));
    console.log(headingElement.title); // attribute phải thuộc Element đó


    var aElement = document.querySelector('a')
    // aElement.href = 'https://www.google.com.vn';
    aElement.setAttribute('href', 'https://www.google.com');
*/

/*
    // TEXT NODE

    var headingElement = document.querySelector('.heading');

    // Lấy nội dung text node
    console.log(headingElement.innerText);
    console.log(headingElement.textContent);

    // Thay đổi nội dung
    headingElement.innerText = 'new heading';
    headingElement.textContent = 'new heading';

    // innerText: những gì nhìn thấy
    // textContent: những gì thực sự tồn tại trong text node.
*/

/*
    // innerHTML, outnerHTML
    var heading = document.querySelector('.heading');
    heading.innerHTML = '<h2>New heading</h2>';
    console.log(heading.innerHTML);

    // innerHTML: thêm HTML
    // outnerHTML: ghi đè
*/

/*
    var boxElement = document.querySelector('.box');
    Object.assign(boxElement.style, {
        width: '200px',
        height: '50px',
        backgroundColor: 'green'
    })

    console.log(boxElement.style.backgroundColor); // Lay ra thuoc tinh CSS
*/


