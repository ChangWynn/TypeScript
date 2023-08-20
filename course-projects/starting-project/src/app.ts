// class Department {
//   private employees: string[] = [] // cant be accessed directly
//   static year () { return 2023}
//   constructor(
//     private readonly id: number,
//     public name: string
//   ) { }

//   describe() {
//     return 'Department: ' + this.name
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee)
//   }

//   printEmployeeInfo() {
//     return this.employees
//   }
// }

// class ITDepartment extends Department { }

// const accounting = new ITDepartment(1, 'IT')

// console.log(Department.year())
