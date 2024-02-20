// Conference of creaters
// Date: 2024-02-21

// Original guest list
let guestList: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];

// Print an invitation message for each person
for (let i = 0; i < guestList.length; i++) {
    let invitationMessage: string = `Dear ${guestList[i]},\nYou are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(invitationMessage);
}

// Announce the guest who can't make it
let guestCantMakeIt: string = guestList[1] ; // Assuming Ada Lovelace can't make it
console.log(`${guestCantMakeIt} can't make it to the dinner.\n`);

// Modify the guest list, replacing the person who can't make it
guestList[1] = "Marie Curie"; // Replace Ada Lovelace with Marie Curie

// Print a second set of invitation messages
console.log("Updated Invitation Messages:");
for (let i = 0; i < guestList.length; i++) {
    let updatedInvitationMessage: string = `Dear ${guestList[i]},\nYou are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(updatedInvitationMessage);
}
