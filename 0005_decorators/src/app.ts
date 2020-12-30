//Decorator - executes when the class is defined and NOT when its instantiated
//Bottom up execution ,  creation happens in order
// function Logger(constructor: Function) {
//   console.log('Logging');
//   console.log(constructor);
// }

//DECORATOR FACTORY
function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// function WithTemplate(template: string, hookId: string) {
//   console.log('TEMPLATE FACTORY');
//   return function (constructor: any) {
//     console.log('Rendering template');

//     const hookEl = document.getElementById(hookId);

//     const p = new constructor();

//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector('h1')!.textContent = p.name;
//     }
//   };
// }

//RETURNING DECORATOR

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  //{new.....} for constructor type
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        //ignore args
        super();

        console.log('Rendering template');

        const hookEl = document.getElementById(hookId);

        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger('LOGGING - PERSON')

//Bottom up execution of decorators, creation happens in order

@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

//If commented nothing will be rendered on the DOM - only return when the class instantiated

const pers = new Person();

console.log(pers);

//******************* PROPERTY DECORATORS *********************************************** */

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

//Can implement returning decorators
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator');

  console.log(target);
  console.log(name);
  console.log(descriptor);
}

//Can implement returning decorators
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator');

  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator');

  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  //Can implement returning decorators
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  //Can implement returning decorators
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 20);

// Button example - AUTO BIND DECORATOR

//decorator
function Autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDecorator
) {
  const originalMethod = descriptor.value;
}

class Printer {
  message = 'This works!';

  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector('button')!; //NOT NULL

// button.addEventListener('click', p.showMessage.bind(p)); VANILLA JS
