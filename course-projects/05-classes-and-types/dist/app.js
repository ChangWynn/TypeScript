"use strict";
class Department {
    id;
    name;
    employees = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.id = id;
        this.name = name;
    }
    describe() {
        console.log(this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeDetails() {
        console.log(this.employees);
    }
}
class ITDept extends Department {
    constructor(id) {
        super(id, "IT");
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
//
//
// const accounting = new Department(1, "Accounting");
// accounting.addEmployee("Max");
// accounting.printEmployeeDetails();
// const it = new ITDept(2);
// it.describe();
// it.addEmployee("Manu");
// it.printEmployeeDetails();
