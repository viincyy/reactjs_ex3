/*
    sync
    asyc -> setTimeout, setInterval, fetch,
     XMLHttpRequest, file reading
     request animation frame
     -> dùng callback để xử lý bất đồng bộ

    => js là ngôn ngữ bất đồng bộ chỉ chạy trên 1 luồng, 
    Sự bất đồng bộ trong javascript xuất hiện khi nó thao tác với các WebAPI (ajax, setTimeout(), … ). ...
 */
/*
    *Callback hell
    setTimeout(() => {
    console.log(1); // viec 1
    setTimeout(() => {
        console.log(2); // viec 2
        setTimeout(() => {
        console.log(3); // viec 3
        }, 1000);
    }, 1000);
    }, 1000);


    pyramid of dom
*/

// 1. Khởi tạo Promise
// 2. Tạo ra executor

// Có 3 trạng thái
// 1. Pending
// 2. Fullfilled
// 3. Reject

// Phong van
// - Em co nam ve khai niem Promise khong?
// Promise được sinh ra để xử lý thao tác bất đồng bộ
// Trước khi có promise ta thường sử dụng callback, callback sẽ xảy ra 1 vấn đề đó là callback hell
// Code sẽ bị sâu vào rất khó nhìn, khó hiểu. Promise được sinh ra từ phiên bản JS ES6, sử dụng để khắc phục
// tình trạng callback hell

// Để tạo ra Promise ta dùng từ khóa new Promise, truyền vào 1 executor function
// Trong executor function ta nhận vào 2 tham số đạng hàm là resolve và reject
// Gọi resolve khi thao tác xử lý logic thành công
// Gọi reject khi thao tác xử lý logic thất bại

// Ta sử dụng phương thức .then(tham số nhận vào là một callback function) khi Promise nhận về resolved
// Ta sử dụng phương thức .catch(tham số nhận vào là một callback function) khi Promise nhận về reject

// Sử dụng Promise khi xử lý các thao tác bất đồng bộ

/*
  var promise = new Promise(
    // Executor
    function (resolve, reject) {
      // Logic
      // Thành công: resolve() -> .then sẽ được gọi
      // Thất bại: reject() -> .catch sẽ được gọi, bắt trạng thái lỗi
      resolve();
    }
  );
*/
/*
  promise
    .then(function () {
      return 1;
    })
    .then(function (data) {
      console.log(data);
      return 2;
    })
    .then(function (data) {
      console.log(data);
      return 3;
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function () {
      console.log("Fail");
    })

    // được gọi khi 1 trong 2 thằng resolve hoặc reject đc gọi
    .finally(function () {
      console.log("Done");
    });
*/

// Chain: Tính chất chuỗi, tham số truyền vào của thằng sau là kết quả trả về của thằng trước
/*
  var sleep = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  sleep(1000)
    .then(() => {
      console.log(1);
      return sleep(1000);
    })
    .then(() => {
      console.log(2);
      return new Promise((resolve, reject) => {
        reject("Co loi");
      });
    })
    .then(() => {
      console.log(3);
      return sleep(1000);
    })
    .catch((error) => {
      console.log(error);
    });
*/

// Promise.all: Chay song song cac Promise
// var promise = Promise.resolve("Success");

/*
    var promise = Promise.reject("error");
  promise
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

*/

/*
    var promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2]);
    }, 1000);
  });

  var promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve([3, 4]);
    }, 5000);
  });
  var promise2 = Promise.reject();
  Promise.all([promise1, promise2]).then(([data1, data2]) => {
    console.log(data1.concat(data2));
  });
*/
