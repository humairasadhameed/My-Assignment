// Define the function orderSandwich
function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("   Please specify items for your sandwich.");
    } else {
        console.log("   Sandwich with:");
        for (let item of items) {
            console.log(`      - ${item}`);
        }
    }
    console.log("\n");
}

// Call the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss");
orderSandwich(); // Empty call
