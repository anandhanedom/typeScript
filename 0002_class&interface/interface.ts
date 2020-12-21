// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;

  greet?(msg: string): void;
}

interface Greetable extends Named {
  greet(message: string): void;
}

//you can implement multiple interfaces

class Person implements Greetable {
  name?: string;

  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(message: string) {
    if (this.name) {
      console.log(message + ' ' + this.name);
    } else {
      console.log('Hi');
    }
  }
}

let user1: Greetable;

user1 = new Person();

// user1.school = 10; ERROR

user1.greet('Hi there I am');
console.log(user1);
