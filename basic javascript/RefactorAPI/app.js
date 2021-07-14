var courseApi = "http://localhost:3000/courses";

function start() {
  getCourses(renderCourses);
  handleCreateCourse();
}
start();

// functions
function getCourses(callback) {
  fetch(courseApi)
    .then((response) => response.json())
    .then(callback);
}

function createCourses(data, callback) {
  fetch(courseApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(callback);
}
function editCourse(id, data, callback){
    fetch(courseApi + "/" + id, {
        method: "PATCH",
        body: JSON.stringify({data}),
      })
        .then((response) => response.json())
        .then(callback);
}
function handleEditCourse(id){
    var editBtn = document.querySelector('#edit');
    var editName = document.querySelector('#name2').value;
    var editDes = document.querySelector('#description2').value;
    var courseUpdate = {
        name: editName,
        description: editDes
    }
    editBtn.onclick() = function(){
        var id2 = document.querySelector('#id2');
        if(id2 === id){
            editCourse(id, courseUpdate, () => {
                getCourses(renderCourses);
            })
        }
    }
}
function handleCreateCourse() {
  var createBtn = document.querySelector("#create");
  createBtn.onclick = () => {
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;
    var formCreate = {
      name,
      description,
    };
    createCourses(formCreate, () => {
      getCourses(renderCourses);
    });
  };
}

function handleDeleteCourse(id) {
  fetch(courseApi + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((response) => response.json())
    .then(() => {
      var courseItem = document.querySelector(".course-item-" + id);
      if (courseItem) {
        courseItem.remove();    
      }
    });
}
function renderCourses(courses) {
  var listCoursesBLock = document.querySelector("#list-courses");
  var htmls = courses.map(
    (course) => `<li class="course-item-${course.id}">
                    <h3>Khóa học: ${course.name}</h3>
                    <p>Mô tả: ${course.description}</p>
                    <button onclick="handleDeleteCourse(${course.id})">Xoa'</button>
                </li>`
  );
  listCoursesBLock.innerHTML = htmls.join("");
}
