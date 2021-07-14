// API: Cổng giao tiếp giữa các phần mềm
// Backend -> API -> Fetch -> JSON/XML
// JSON.parse -> JS types -> Render ra giao diện với HTML

var postApi = "https://jsonplaceholder.typicode.com/posts";
fetch(postApi)
  .then((response) => response.json())
  .then((posts) => {
    var htmls = posts.map((post) => {
      return `<li>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        </li>`;
    });
    var html = htmls.join("");
    document.querySelector("#post-block").innerHTML = html;
  })
  .catch(function (err) {
    console.log("Co loi~!");
  });
