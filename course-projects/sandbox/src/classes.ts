abstract class Department {
  static fiscalYear = 2023;

  protected employees: string[] = [];

  constructor(protected readonly id: number, protected name: string) {
    this.id = id;
    this.name = name;
  }

  abstract describe(): void;

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }

  printEmployeeDetails(): string[] {
    return this.employees;
  }
}

// ///////////////////////////////

class ITdept extends Department {
  private constructor(id: number) {
    super(id, "Accounting");
  }

  describe() {
    console.log(this.id);
  }
}

// ///////////////////////////////

class AccountingDept extends Department {
  private static instance: AccountingDept;

  private constructor(id: number) {
    super(id, "Accounting");
  }

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new AccountingDept(1);
    return this.instance;
  }

  describe() {
    console.log(this.id);
  }
}
