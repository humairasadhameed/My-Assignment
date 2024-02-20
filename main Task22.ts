// Intentional Error Program
// Author: Your Name
// Date: 2024-02-21

let colors: string[] = ["Red", "Blue", "Green"];

// Intentionally access an invalid array index
console.log(colors[3]);  // This will produce an "IndexError"

//we will correct the error by checking the array length before accessing
if (colors.length > 3) {
    console.log(colors[3]);  // This won't be executed due to the corrected error
} else {
    console.log("Invalid index. Array length is:3", colors.length);
}
