const customers = [
  {
    name: "Sam",
    address: {
      street: "1234 W Bell Rd",
      city: "Phoenix",
      zip: "85308",
      state: "AZ",
    },
    membershipLevel: "GOLD",
    age: 32,
  },
  {
    name: "Jojo",
    address: {
      street: "4 Tupple Street.",
      city: "Milwaukee",
      zip: "50505",
      state: "WI",
    },
    membershipLevel: "SILVER",
    age: 32,
  },
  {
    name: "Pickle",
    address: {
      street: "4 Tupple Street.",
      zip: "50505",
      state: "WI",
    },
    membershipLevel: "SILVER",
    age: 32,
  },
  {
    name: "cickle",
    address: {
      street: "4 Tupple Street.",
      zip: "50505",
      state: "wi",
    },
    membershipLevel: "SILVER",
    age: 32,
  },
  {
    name: "Jimmy",
    address: {
      street: "4 Tupple Street.",
      city: "Peoria",
      zip: "50505",
      state: "AZ",
    },
    membershipLevel: "SILVER",
    age: 32,
  },
  {
    name: "Debbie",
    address: {
      street: "5678 N Main Street",
      zip: "03055",
      state: "NH",
    },
    membershipLevel: "SILVER",
    age: 21,
  }
];

// console.log(customers)

const matchingCustomers = (custArray) => {
  let resultArray = [];
  for (let customer of custArray) {
    // name starts with a 'C' -- convert to uppercase for comparison
    if (
      customer.name.charAt(0).toUpperCase() == "C" &&
      // address contains no undefined fields
      customer.address.street !== undefined &&
      customer.address.city !== undefined &&
      customer.address.zip !== undefined &&
      customer.address.state !== undefined &&
      // the city is Peoria and the state is AZ
      customer.address.city == "Peoria" &&
      customer.address.state == "AZ" &&
      // membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too
      (customer.membershipLevel == "GOLD" ||
        customer.membershipLevel == "PLATINUM" ||
        (customer.membershipLevel == "SILVER" && customer.age < 29))
    ) {
      resultArray.push(customer);
    } else {
      console.log(`${customer.name} doesn't fit criteria!`);
    }
  }
  return resultArray;
};

console.log(matchingCustomers(customers));