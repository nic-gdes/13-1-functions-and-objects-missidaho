// Nothing here yet...
// Make sure to link your JS in index.html!

// Create a Car class, with a constructor that accepts 3 parameters: make (ex: Chevy, Ford, Toyota), model (ex: Camero, F150, Rav4), and year.
class Car {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
       
    }

    // Car should also include a method, .describe which simply returns "This is a YEAR MODEL, made by MAKE." replacing YEAR, MODEL and MAKE with the correct information from the Car object.
    describe () {
        console.log('This is a' + ' ' + this.year +  ' ' + this.model, 'made by' +  ' ' + this.make);


}


}
const chevyTahoe = new Car("Chevrolet", "Tahoe", "2017");





// You will need to create 4 new variables, using the const {{carname}} = new Car() syntax. {{ carname }} is just whatever variable name you'll choose.
const car1 = new Car ('Chevy', 'Camero', '2004');
const car2 = new Car ('Porsche', 'Carreera', '2006');
const car3 = new Car ('Toyota', ' Camry', '2023');
const car4 = new Car ('Ford ', 'Mustang', '1999');


// Create a new array called allCars.
const allCars = [car1, car2, car3, car4];

// Write a function with a single parameter car that, when called, will console.log the Car.describe method for the car used in the parameter.
// Inside the function's code block, simply return car.describe; so the function returns the describe phrase for the car in the parameters.

// Declare the function using function {{ functionName }} (car) {};
function callIt (car) {
    console.log(car.describe());
};

callIt(car1);

// Loop through allCars and call the function to log each car's describe method to the console one by one.
// You can use a for(), or forEach loop to achieve this. Remember to use allCars.length in your end condition if you use a for() loop.
// Remember you can call a function by simply writing the function with parenthesis around the parameters:

for (var i = 0; i < allCars.length ; i++) {
 
    callIt(allCars[i]);

}



