let current_users: string[] = ["John", "Alice", "Bob", "Charlie", "Eve"]; // Replace with your current usernames
let new_users: string[] = ["Bob", "Eve", "Mallory", "Trudy", "Dave"]; // Replace with your new usernames

for (let new_username of new_users) {
    // Check if the new username is already in use (case-insensitive)
    if (current_users.some(username => username.toLowerCase() === new_username.toLowerCase())) {
        console.log(`Sorry, the username '${new_username}' is not available. Please choose a different one.`);
    } else {
        console.log(`Great! The username '${new_username}' is available.`);
    }
}
