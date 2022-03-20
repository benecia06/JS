let obj={}; //empty object
console.log(obj);
//person object
let person = {
    //key(property,method()) : value 
    name: "bleh",
    age: 28,
    phone: 9999999999,
    gender: "ehhs",
    height: "170cm"
};

console.log(`Hey ${person.name}, thank you for signing up !`);
console.log(person.gender);
console.log(person["gender"]);

let str = "Hello";
console.log(str.length); //dot notation
console.log(str["length"]); //square bracket notation

//nesting of objects
let captainAmerica = {
    firstName: "Steve",
    lastName: "Rogers",
    friends: ["Bucky", "Tony Stark", "Brue Banner"],
    age: 102,
    isAvenger: true,
    address: {
        state: "Manhattan",
        city: "New York",
        country: "USA"
    },
    sayHi: function () {
        console.log(`Hello my name is ${this.firstName}`);
    }
};

console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]); 
console.log("printed using bracket notation "+captainAmerica["friends"][0]);
captainAmerica.sayHi(); //method accessing 
//nested objects 
console.log(captainAmerica.address.city); 

//for loop 
// in keyword in JS is used to get keys from that object
for (let getkey in captainAmerica) {
    //to get the names of the key
    console.log(getkey);
    // get key variable contains the values of the keys of the object
    //to get the values of the key bound in the variable
    console.log(captainAmerica[getkey]); //bracket notation usage
}

console.log(typeof captainAmerica.friends);

//deleting the key of an object
delete captainAmerica.lastName;
console.log(captainAmerica.lastName);



// str{
//     length: // 
//     toUpperCase: function() {

//         for()
//     }
// }


let car = {
    name: "Ferrari",
    model: 2022,
    startEngine: function () {
        console.log(`Starting the engine of the car ${this.name}`);
    }


};
for (let getkey1 in car) {
    //to get the names of the key
   console.log(getkey1);
    // get key variable contains the values of the keys of the object
    //to get the values of the key bound in the variable
    console.log(car[getkey1]); //bracket notation usage
    car.startEngine();
}
// methods-> functions inside an object
// console.log(str.toUpperCase());


let arr = ["a", "b", 1, true];
// an array is essentially an object as well
let arrobject = {
    0: "a",
    1: "b",
    2: 1,
    3:true
}
