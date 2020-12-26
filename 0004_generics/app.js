var names = []; //same as string[]
// names[0].split(' ');
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is done!');
    }, 3000);
});
promise.then(function (data) { return data.split(' '); });
