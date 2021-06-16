/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 function Person(name, age) {
   this.name = name;
   this.age = age;
   this.stomach = [];
  }
 
 Person.prototype.eat = function(edible){
   if(this.stomach.length <= 10){
   this.stomach.push(edible);
   }
  }

  Person.prototype.poop = function(){
    this.stomach = [];
  }
  
  Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`;
  }
  
  const ryan = new Person('Ryan, 38');

  // const romy = new Person('Romy, 29');
  // const bradly = new Person('Bradly, 27');
  // const jordan = new Person('Jordan, 24');
  
  // console.log('Task 1: ', ryan);
  
  // console.log('Task 1: ', ryan.eat('Taco'));
  // console.log('Task 1: ', ryan.eat('sandwich'));
  // console.log('Task 1: ', ryan.eat('Pizza'));
  // console.log('Task 1: ', ryan.eat('Ramen'));
  // console.log('Task 1: ', ryan.eat('Sushi'));
  // console.log('Task 1: ', ryan.stomach);

  ryan.poop; // I know it's unnecessary, but I had to...
  // console.log('Task 1: ', ryan.stomach);
  // console.log('Task 1: ', ryan.toString());

  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  
  Car.prototype.fill = function(gas){
    this.tank += gas;
  }

  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
  }
  
  Baby.prototype = Object.create(Person.prototype);
  
  Baby.prototype.play = function(){
    return `Playing with ${this.favoriteToy}`;
  }

  const baby = new Baby('Poopsie', 1, 'Rattle');
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. Window Binding - This refers to the scope, Global scope in particular. .this cannot operate on this scope, because it doesn't have context for what this is. It's like saying "I want this!" and not indicating anything, what you want could be anything in the room. 
    2. Implicit Binding - This happens when you invoke a method with dot notation. What's left of the dot in the invocation is what 'this' is referring to.
    3. New Binding - Here, .this is going to specifically refer to the instance of an object, such as a constructor.
    4. Explicit Binding - .this is explicitly defined when we use .call or .apply to override a constructor object  
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}