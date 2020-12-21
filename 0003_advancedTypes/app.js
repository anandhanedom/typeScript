var _a;
var e1 = {
    name: 'victor',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        //type guard
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add('John', ' Doe');
result.split(' ');
var fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
//Avoiding run time errors using plain js
// console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
//NULLISH DATA
var userInput = null;
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT'; //null or undefined?
console.log(storedData);
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInfo(emp: UnknownEmployee) {
//   console.log('Name: ', emp.name);
//   if ('privileges' in emp) {
//     console.log('Privileges: ', emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('Start date: ', emp.startDate);
//   }
// }
// printEmployeeInfo(e1);
// class Car {
//   drive() {
//     console.log('Driving a car...');
//   }
// }
// class Truck {
//   drive() {
//     console.log('Driving a truck...');
//   }
//   loadCargo(amount: number) {
//     console.log('Loading cargo ... ', amount);
//   }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   //   if ('loadCargo' in vehicle) {
//   //     vehicle.loadCargo(1000);
//   //   }
//   //BETTER WAY --
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }
// useVehicle(v1);
// useVehicle(v2);
// //COMING TO INTERFACES
// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }
// interface Horse {
//   type: 'horse'; //GIVE A UNIQUE KEY
//   runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'horse': {
//       speed = animal.runningSpeed;
//       break;
//     }
//     case 'bird': {
//       speed = animal.flyingSpeed;
//       break;
//     }
//   }
//   console.log('Moving with speed: ', speed);
// }
// moveAnimal({ type: 'bird', flyingSpeed: 9999 });
// // const userInputElement = <HTMLInputElement>(
// //   document.getElementById('user-input')!
// // );
// // !- never yields null
// const userInputElement = document.getElementById(
//   'user-input'
// )! as HTMLInputElement;
// userInputElement.value = 'Hi there!';
// //GENERIC prop types
// interface ErrorContainer {
//   //{email:'not a valid email',username:'Must start with a character'}
//   [prop: string]: string;
// }
// const errorBag: ErrorContainer = {
//   email: 'Not a valid email!',
//   username: 'Must start with a capital character',
// };
