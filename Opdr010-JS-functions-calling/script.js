/* EXERCISE 1: GREET USER */

// This function checks if user is an adult and then returns the age to the other function:
const checkIfAdult = function(age) {
 if (age >= 18) {
     return age;
 };
};

// This function greets the user:
const greetUser = function(age) {
    const isAdult = checkIfAdult(age);
    if (isAdult) {
         return "Hi there!";
    } else {
         return "Hey kiddo!";
    };
}

const greeting = greetUser(40);
console.log(greeting);

/* EXERCISE 2: VAT CALCULATION */

/* PART 1 */
const calculateVat = function(price) {
    const vat = price * 0.21;
    return vat;
}

const calculatePriceIncludingVat = function (price) {
    const priceIncludingVat = calculateVat(price) + price;
    return priceIncludingVat;
}

const response = calculatePriceIncludingVat(40);
console.log(response);


/* PART 2 */
const calculateBasePrice = function(price) {
    const basePrice = price / 1.21;
    return basePrice;
}

const calculateBasePriceAndVat = function(price) {
    const basePrice = calculateBasePrice(price);
    const vat = price - basePrice;
    const basePriceAndVat = [basePrice, vat];
    return basePriceAndVat;
}

const displayPriceAndVat = calculateBasePriceAndVat(90);
console.log(displayPriceAndVat);