//In JavaScript, class inheritance is achieved through the use of the extends keyword. The extends keyword is used to create a new class that is a child of another class, also known as the parent class.
//Let's start with the Vehicle class, which will have some basic properties and methods that all vehicles share, such as make, model, year, and start(). Here's what the Vehicle class might look like:




class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log('Starting the vehicle...');
    }
}


//Next, we can create the Car class, which will inherit from the Vehicle class using the extends keyword. The Car class will have additional properties and methods specific to cars, such as numDoors, drive(), and stop(). Here's what the Car class might look like:

class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
      super(make, model, year);
      this.numDoors = numDoors;
    }
  
    drive() {
      console.log(`Driving the ${this.make}...`);
    }
  
    stop() {
      console.log(`Stopping the ${this.make}...`);
    }
  }

  //In the Car class definition, we use the extends keyword to indicate that the Car class is a child of the Vehicle class. We also call the super() method in the constructor to invoke the constructor of the parent class and pass in the make, model, and year arguments.

//Now, we can create instances of the Car class and call its methods, which will include the start() method inherited from the Vehicle class. For example:


const myCar = new Car('Toyota', 'Camry', 2022, 4);
myCar.start(); // Outputs: "Starting the vehicle..."
myCar.drive(); // Outputs: "Driving the Toyota..."
myCar.stop(); // Outputs: "Stopping the Toyota..."

//In this example, myCar is an instance of the Car class, and we can see that it has access to both the methods defined in the Car class (drive() and stop()) as well as the inherited method from the Vehicle class (start()).


  