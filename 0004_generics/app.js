// const names: Array<string> = []; // string[]
// // names[0].split(' ');
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function countAndDescribe(element) {
    var descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
// console.log(countAndDescribe('Hi there!'));
// console.log(countAndDescribe(['Sports', 'Cooking']));
// console.log(countAndDescribe(2)); //ERROR
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
// console.log(extractAndConvert({}, 'name')); //ERROR
// console.log(extractAndConvert({ name: 'Victor' }, 'name'));
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        //PRIMITVE TYPES
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); //-1 if nothings found
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArrays(this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
// textStorage.addItem(10); //ERROR
textStorage.addItem('Victor');
textStorage.addItem('Navoski');
textStorage.removeItem('Navoski');
// console.log(textStorage.getItems());
var numberStorage = new DataStorage();
function courseGoal(title, description, date) {
    var courseGoal = {}; //OPTIONAL parameter feature added here
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal; //typecasting
}
var names = ['Max', 'Anna'];
names.push('Victor'); //ERROR
names.pop(); //ERROR again
