// Define the function show_magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the function make_great
function make_great(magicians: string[]): string[] {
    // Modify the array by adding " the Great" to each magician's name
    return magicians.map(magician => magician + " the Great");
}

// Array of magician's names
let magician_names: string[] = ["Merlin", "David Copperfield", "Houdini", "Penn", "Teller"];

// Call the make_great function to modify the array
let great_magicians: string[] = make_great(magician_names);

// Call the show_magicians function with the modified array
show_magicians(great_magicians);
