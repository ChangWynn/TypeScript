// type Manager = {
//   name: string;
//   privileges: string[];
// };

// type Techinician = {
//   name: string;
//   skills: string[];
// };

// type Employee = Manager | Techinician;

// const printDetails = (employee: Employee) => {
//   if ("privileges" in employee) {
//     console.log(employee.name, employee.privileges);
//   } else {
//     console.log(employee.name, employee.skills);
//   }
// };

// const employee = {
//   name: "Max",
//   skills: ["JS", "TS"],
// };

// printDetails(employee);

// /////////////////////////////////////

// class Car {
//   drive(): void {
//     console.log("driving a car...");
//   }
// }

// class Truck {
//   drive(): void {
//     console.log("driving a truck...");
//   }

//   loadCargo(amount: number): void {
//     console.log(`loading ${amount}kg of merchandise.`);
//   }
// }

// type Vehicle = Car | Truck;

// const car = new Car();
// const truck = new Truck();

// const useVehicle = (vehicle: Vehicle): void => {
//   vehicle.drive();

//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(5);
//   }
// };

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// const moveAnimal = (animal: Animal) => {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("Moving at speed: " + speed);
// };

// /////////////////////////////////////

// const h1Element = document.querySelector("h1");

// (<HTMLHeadingElement>h1Element).innerText = "TypeScript!";

// /////////////////////////////////////

// type ErrorMessages = {
//   [type: string]: string;
// };

// const errorMessages: ErrorMessages = {
//   email: "Not a valid email",
//   password: "Not a valid password",
//   download: 404, // compile error
// };

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: string | number, b: string | number) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(add(5, 5));
console.log(add("Max", "Mike"));
