// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }
function add(n1, n2) {
    return n1 + n2;
}
function printRes(num) {
    //:void
    console.log('Result : ' + num);
}
function addAndHandle(n1, n2, cb) {
    var res = n1 + n2;
    cb(res);
}
printRes(add(5, 12));
// let combineValues: Function;
var combineValues;
combineValues = add;
// combineValues = printRes; //ERROR
// combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (res) { return console.log(res); });
