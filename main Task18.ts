let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Marrakech"];

// Print original order
console.log("Original Order:", placesToVisit);

// Print in alphabetical order without modifying the original list
let alphabeticalOrder = [...placesToVisit].sort();
console.log("Alphabetical Order:", alphabeticalOrder);

// Show that the original array is still in its original order
console.log("Original Order:", placesToVisit);

// Print in reverse alphabetical order without modifying the original list
let reverseAlphabeticalOrder = [...placesToVisit].sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);

// Show that the original array is still in its original order
console.log("Original Order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
