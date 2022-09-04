import Contact from './contact.js';
import Bus from './bus.js';

let c1 = new Contact("raMon Alejandro AGUIRRE", new Date(1990, 1, 5), 1234567890);
let b1 = new Bus("123", 20, 5, 'Guadalajara', 100);

console.log(c1.getPhoneNumber());
console.log(c1.getAge());
console.log(c1.getDaysToBirthDay());
console.log(c1.getPhoneNumber());

console.log(b1.getMaxPassenger());
console.log(b1.getMinPassenger());
console.log(b1.addPassengers(15));
console.log(b1.removePassengers(5));
console.log(b1.removePassengers(5));
console.log(b1.removePassengers(15));

