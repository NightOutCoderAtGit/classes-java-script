carTestFunction();

class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStart() {
        return `This car has ${this.doors} doors, a ${this.engine} and a in ${this.color} color`;
    }
}

// Uncaught ReferenceError: Cannot access 'Car' before initialization

const carData = new Car(4, 'V6', 'grey');
console.log(carData);
console.log(carData.engine);


function carTestFunction() {
    console.log('car functions'); // return console('car functions');
}




// --> classes are functions them selves
// --> classes - Not hoisted, can't be overwrittten : on the other hand functions hoisted and can be overwritten
// --> when we delcare a class it is automatically in strict mode
// --> strict mode introduce in es5. one of the benefit of this is it adds some errors as throw errors 
// that were silent before so we are more aware of certain types of errors that we didn't have access to before


