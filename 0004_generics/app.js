var names = []; //string[]
// // names[0].split(' ');
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is done!');
    }, 3000);
});
// promise.then((data) => {
//   data.split(' ');
// });
function merge(objA, objB) {
    //instead of unknown objects
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'John Doe' }, { age: 10 });
// const mergedObj1 = merge({ name: 'John Doe' }, 30); //ERROR
mergedObj.name;
function countAndDescribe(element) {
    var desc = 'Got no value';
    if (element.length === 1) {
        desc = 'Got 1 element.';
    }
    else if (element.length > 1) {
        desc = 'Got ' + element.length + ' elements';
    }
    return [element, desc];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'John' }, 'name'));
