"use strict";
//Decorator - executes when the class is defined and NOT when its instantiated
// function Logger(constructor: Function) {
//   console.log('Logging');
//   console.log(constructor);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//DECORATOR FACTORY
function Logger(logString) {
    console.log('LOGGER FACTORY');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log('TEMPLATE FACTORY');
    return function (constructor) {
        console.log('Rendering template');
        var hookEl = document.getElementById(hookId);
        var p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
// @Logger('LOGGING - PERSON')
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
    Person = __decorate([
        Logger('LOGGING'),
        WithTemplate('<h1>My Person Object</h1>', 'app')
    ], Person);
    return Person;
}());
var pers = new Person();
console.log(pers);
