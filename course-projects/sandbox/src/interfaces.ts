interface Person {
  name?: string;
  age?: number;

  greet(): void;
  showAge?(): void;
}

class StaffMember implements Person {
  constructor(public name: string, public age?: number) {
    this.name = name;
    if (age) {
      this.age = age;
    }
  }

  greet() {
    console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old.`);
  }
}

const max = new StaffMember("Max");
