// type AddFn = (a: number, b: number) => number;
var add;
add = function (n1, n2) {
    return n1 + n2;
};
//you can imlement multiple interfaces
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (message) {
        if (this.name) {
            console.log(message + ' ' + this.name);
        }
        else {
            console.log('Hi');
        }
    };
    return Person;
}());
var user1;
user1 = new Person();
// user1.school = 10; ERROR
user1.greet('Hi there I am');
console.log(user1);
