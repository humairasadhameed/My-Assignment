interface Shirt {
    size: string;
    message: string;
}

function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): Shirt {
    return {
        size: size,
        message: message
    };
}

// Example calls to the function
let largeShirt = make_shirt(); // Large shirt with default message
let mediumShirt = make_shirt('medium'); // Medium shirt with default message
let customShirt = make_shirt('small', 'Custom message for a small shirt'); // Custom-sized shirt with a different message

// Print the shirt details
console.log(largeShirt);
console.log(mediumShirt);
console.log(customShirt);
