// Define the function show_magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magician_names: string[] = ["Merlin", "David Copperfield", "Houdini", "Penn", "Teller"];

// Call the show_magicians function with the array
show_magicians(magician_names);
