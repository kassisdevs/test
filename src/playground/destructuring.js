// // ES6 new features

// const customer = {
//   name: 'Kassis',
//   age: 28,
//   membership: 'VIP',
//   location: {
//     state: 'TX',
//     city: 'DALLAS',
//     tem: 100
//   }
// }
// // ES6 distructuring
// const { name, age, membership } = customer;
// const { city, state, tem: temp } = customer.location;

// console.log(`${name} is ${age} and he is from ${membership}`);
// console.log(` state of ${state} ${city} its hot ${temp}`);

// const book = {
//   title: 'Blue Whale',
//   author: 'DZ',
//   publisher: {
//   //  name: 'ENNAHAR'
//   }
// }

// const { name: publisherName = 'Self-Publisher' } = book.publisher;

// console.log(publisherName)

// ES6 ARRAY DISTRUCTURING

// const address = ['380 Vista Court DR', '306', 'Texas', 'Plano', '75074'];

// const [street, appt, state, city, zip] = address;

// console.log(`I am from ${state} city of ${city}`)

const coffeeMenu = ['coffee Hot', '$2.99', '$3.50', '$4.00'];
const [name, , medium = 'out'] = coffeeMenu;

console.log(` a medium ${name} costs ${medium}`)