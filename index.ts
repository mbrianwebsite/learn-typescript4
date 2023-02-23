// class Car {
//   model: string;
//   color: string;
//   age: number;
//   private peopleInPolicy: string[] = [];
//   readonly manufactureDate: string = "2019-01-05";

//   constructor(model, color, age) {
//     this.model = model;
//     this.color = color;
//     this.age = age;
//   }

//   describe() {
//     console.log(`A ${this.age} year old ${this.color} ${this.model}`);
//   }

//   addToPolicy(name: string) {
//     this.peopleInPolicy.push(name);
//   }

//   getPolicy() {
//     console.log(this.peopleInPolicy);
//     // myJaguar.manufactureDate = "2019-07-05"; cannot because readonly
//   }
// }

// const myJaguar = new Car("Jaguar", "Red", 4);
// myJaguar.addToPolicy("Muhammad Brian");
// // myJaguar.peopleInPolicy.push("ivan"); cannot because private
// // myJaguar.manufactureDate = "2019-07-05"; cannot because readonly
// myJaguar.manufactureDate;

// myJaguar.getPolicy();

//////////////////////////////////////////////

class Vehicle {
  private peopleInPolicy: string[] = [];
  readonly manufactureDate: string = "2019-01-05";

  constructor(public model: string, public color: string, public age: number) {}

  describe() {
    console.log(`A ${this.age} year old ${this.color} ${this.model}`);
  }

  addToPolicy(name: string) {
    this.peopleInPolicy.push(name);
  }

  getPolicy() {
    console.log(this.peopleInPolicy);
    // myJaguar.manufactureDate = "2019-07-05"; cannot because readonly
  }
}

const myJag = new Vehicle("Jaguar", "green", 25);
myJag.addToPolicy("Brian");
myJag.getPolicy();
