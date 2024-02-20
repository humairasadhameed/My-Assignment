let favoritePizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// Print the names of each pizza
console.log("Pizza Names:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

// Print a sentence about each pizza
console.log("\nPizza Statements:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza.toLowerCase()} pizza.`);
}

// Print a line about how much you like pizza
console.log("\nI really love pizza!");
