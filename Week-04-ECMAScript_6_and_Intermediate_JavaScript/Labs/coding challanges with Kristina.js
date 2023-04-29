const customers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "555-1234",
    address: "123 Main St, Anytown USA",
    orders: [
      { id: 101, product: "Apple iPhone 13 Pro", price: 999 },
      { id: 102, product: "Apple Watch Series 7", price: 399 },
    ],
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "555-5678",
    address: "456 Oak St, Anytown USA",
    orders: [
      { id: 103, product: "Samsung Galaxy S22 Ultra", price: 1199 },
      { id: 104, product: "Samsung Galaxy Watch 4", price: 249 },
      { id: 105, product: "Apple iPhone 13", price: 799 },
    ],
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phone: "555-9012",
    address: "789 Elm St, Anytown USA",
    orders: [{ id: 106, product: "Sony PlayStation 5", price: 499 }],
  },
];

// how many customers are in the customers array?

function countCustomers(array) {
  return array.length;
}

console.log("length of customers array: ", countCustomers(customers))

// How do you access the name of the first customer in the customers array?
function customer1Name(array) {
    return array[0].name;
}

console.log("name of first customer in customers array: ", customer1Name(customers))

// How do you access the email of the second customer in the customers array?

function secondCustomer(array) {
    return array[1].email;
}

console.log("email of the second customer: ", secondCustomer(customers))

const secondCustomerAgain = array => array[1].email;
    
console.log("email of the second customer: ", secondCustomerAgain(customers))

// How do you add a new customer object to the end of the customers array?

const addCustomer = (newcustomer, array) => array.push(newCustomer);

let newCustomer = {
    id: 3,
    name: "chris Mendence",
    email: "c.mendence@example.com",
    phone: "555-9012",
    address: "789 Elm St, Anytown USA",
    orders: [
        {
            id: 106,
            product: "Sony Playstation 1",
            price: 499
        }
    ]
}

addCustomer(newCustomer, customers);
console.log(customers);
console.log("00000000000000000000000000000000000")
console.log(countCustomers(customers));
console.log("00000000000000000000000000000000000")

// How do you remove the second customer from the customers array?

// splice
const lostCustomer = (array, index) => array.splice(index, 1);
console.log(lostCustomer(customers, 1));
console.log("----------------!!!!_______________")
console.log(customers)



// How do you loop through all the orders of the first customer and log the product name and price for each order?

console.log("=============================")

function loopCustomers(array) {
    array.forEach(customer => console.log(customer.orders[0].product));
};

loopCustomers(customers);

// function loopCustomer(array) {
//     array.forEach((customer) => {
//         console.log(customer.orders.product)

//     })
// }

// loopCustomer(customers)

// How do you find the customer with the email address 'bob.johnson@example.com'?

// How do you sort the customers array by the total price of all their orders, in ascending order?

// How do you filter the customers array to only include customers with more than one order?

