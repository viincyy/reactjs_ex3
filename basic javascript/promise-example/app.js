var users = [
  {
    id: 1,
    name: "Suu Nguyen",
  },
  {
    id: 2,
    name: "Minh Nguyen",
  },
  {
    id: 3,
    name: "Dang Nguyen",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "anh Sơn chưa ra video :(",
  },
  {
    id: 2,
    user_id: 3,
    content: "Vừa ra xong em ei :D",
  },
];

// 1. Lấy comment
// 2. Từ comments lấy ra user_id
// 3. từ user_id lấy ra user tương ứng

// Fake API
function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUserByIds(userIds) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var result = users.filter(function (user) {
        return userIds.includes(user.id);
      });
      resolve(result);
    }, 1000);
  });
}

getComments()
  .then(function (comments) {
    var userIds = comments.map((comment) => {
      return comment.user_id;
    });
    return getUserByIds(userIds).then(function (users) {
      return {
        users,
        comments,
      };
    });
  })
  .then(function (data) {
    var commentBlock = document.querySelector("#comment-block");
    var html = "";
    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name}: ${comment.content}</li>`;
    });
    commentBlock.innerHTML = html;
  });
