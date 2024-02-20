// Guest List Program
// Author: Your Name
// Date: 2024-02-21

// Original guest list
let guestList: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];

// Print an invitation message for each person
for (let i = 0; i < guestList.length; i++) {
    let invitationMessage: string = `Dear ${guestList[i]},\nYou are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(invitationMessage);
    console.log("\n"); // Separate invitations with a newline for better readability
}

// Changing Guest List
let guestCantMakeIt: string = guestList[1]; // Assume Ada Lovelace can't make it
console.log(`${guestCantMakeIt} can't make it to the dinner.\n`);

// Modify the list, replacing the person who can't make it
guestList[1] = "Marie Curie"; // Replace Ada Lovelace with Marie Curie

// Print a second set of invitation messages
console.log("Updated Invitation Messages:");
for (let i = 0; i < guestList.length; i++) {
    let updatedInvitationMessage: string = `Dear ${guestList[i]},\nYou are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(updatedInvitationMessage);
}

// More Guests
console.log("Good news! Found a bigger dinner table.\n");

// Add one new guest to the beginning of the array
guestList.unshift("Isaac Newton");

// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Galileo Galilei");

// Use push() to add one new guest to the end of the list
guestList.push("Leonardo da Vinci");

// Print a new set of invitation messages
console.log("Additional Invitation Messages:");
for (let i = 0; i < guestList.length; i++) {
    let additionalInvitationMessage: string = `Dear ${guestList[i]},\nYou are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(additionalInvitationMessage);
}
