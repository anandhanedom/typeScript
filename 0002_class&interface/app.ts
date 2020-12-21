interface Greetable {
  name: string;

  greet(message: string): void;
}

class Person implements Greetable {
  name: string;

  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(message: string) {
    console.log(message + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Victor');

user1.greet('Hi there I am');
console.log(user1);
