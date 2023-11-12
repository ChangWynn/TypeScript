"use strict";
class StaffMember {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        if (age) {
            this.age = age;
        }
    }
    greet() {
        console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old.`);
    }
}
