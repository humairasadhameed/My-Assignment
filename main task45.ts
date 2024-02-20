// Define the function storeCarInfo
function storeCarInfo(manufacturer: string, model: string, ...options: { [key: string]: string }): any {
    let carInfo: { manufacturer: string, model: string, [key: string]: string } = {
        manufacturer: manufacturer,
        model: model,
    };

    // Add additional options to the carInfo object
    for (let key in options) {
        carInfo[key] = options[key];
    }

    return carInfo;
}

// Call the function with required information and additional options
const car1 = storeCarInfo("Toyota", "Camry", color: "Blue", features: "Navigation");
const car2 = storeCarInfo("Honda", "Civic", color: "Red");

// Print the returned objects
console.log(car1);
console.log(car2);
