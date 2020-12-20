class Department {
  //   private id: string;
  //   private name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.name = n;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}) : ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Messi');
accounting.addEmployee('Xavi');

// accounting.employees[2] = 'Puyol';

accounting.describe();
accounting.printEmployeeInfo();

// console.log(accounting);
// console.log(accounting.describe());

// const accountingCopy = { describe: accounting.describe }; //add name key here
// accountingCopy.describe();
