type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'victor',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number; //union
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //intersection

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    //type guard
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log('Name: ', emp.name);

  if ('privileges' in emp) {
    console.log('Privileges: ', emp.privileges);
  }

  if ('startDate' in emp) {
    console.log('Start date: ', emp.startDate);
  }
}

printEmployeeInfo(e1);

class Car {
  drive() {
    console.log('Driving a car...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ... ', amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  //   if ('loadCargo' in vehicle) {
  //     vehicle.loadCargo(1000);
  //   }

  //BETTER WAY --
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  flying: number;
}

interface Horse {
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {}
