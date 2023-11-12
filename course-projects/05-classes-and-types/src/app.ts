class Department {
  protected employees: string[] = [];

  constructor(private readonly id: number, private name: string) {
    this.id = id;
    this.name = name;
  }

  describe() {
    console.log(this.name);
  }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }

  printEmployeeDetails(): void {
    console.log(this.employees);
  }
}

class ITDept extends Department {
  constructor(id: number) {
    super(id, "IT");
  }

  addEmployee(employee: string): void {
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
