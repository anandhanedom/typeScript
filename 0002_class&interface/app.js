var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (message) {
        console.log(message + ' ' + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person('Victor');
user1.greet('Hi there I am');
console.log(user1);
