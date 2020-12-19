class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ', this.name);
  }
}

const accounting = new Department('Accounting');

console.log(accounting);
console.log(accounting.describe());

const accountingCopy = { describe: accounting.describe }; //add name key here
accountingCopy.describe();
