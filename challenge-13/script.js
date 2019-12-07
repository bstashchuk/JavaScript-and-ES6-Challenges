/* CHALLENGE 13 - Template Literals
Create carInfo() function that
will return info about each car.
Car is considered cheap if it's price is <= 20000
Car is considered expensive it it's price is > 20000
*/

'use strict';

const cars = [
    { 
        brand: 'Honda', 
        price: 13000 
    },
    { 
        brand: 'Rolls-Royce', 
        price: 120000 
    }
];

const carInfo = (car) => {
    let value = car.price <= 20000 ? "cheap" : "expensive";
    return `${car.brand} = ${value}`;
}

cars.forEach(car => console.log(carInfo(car)));