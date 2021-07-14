// Hàm gọi lại chính nó.
function countDown(num) {
  if (num > 0) {
    console.log(num);
    return countDown(num - 1);
  }
  return num;
}
countDown(6);
function tinhGT(n) {
  if (n === 0) {
    return 1;
  }
  if (n >= 0) {
    return n * tinhGT(n - 1);
  }
}
var rst = tinhGT(10);
console.log(rst);
