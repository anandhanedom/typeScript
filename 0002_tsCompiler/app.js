var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //   private id: string;
        //   private name: string;
        this.employees = [];
        // this.name = n;
        // this.id = id;
    }
    Department.prototype.describe = function () {
        console.log("Department (" + this.id + ") : " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Messi');
accounting.addEmployee('Xavi');
// accounting.employees[2] = 'Puyol';
accounting.describe();
accounting.printEmployeeInfo();
// console.log(accounting);
// console.log(accounting.describe());
// const accountingCopy = { describe: accounting.describe }; //add name key here
// accountingCopy.describe();
