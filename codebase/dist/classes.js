"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeDetails() {
        return this.employees;
    }
}
Department.fiscalYear = 2023;
// ///////////////////////////////
class ITdept extends Department {
    constructor(id) {
        super(id, "Accounting");
    }
    describe() {
        console.log(this.id);
    }
}
// ///////////////////////////////
class AccountingDept extends Department {
    constructor(id) {
        super(id, "Accounting");
    }
    static getInstance() {
        if (this.instance)
            return this.instance;
        this.instance = new AccountingDept(1);
        return this.instance;
    }
    describe() {
        console.log(this.id);
    }
}
