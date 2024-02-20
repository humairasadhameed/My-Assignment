// Conference of inventors
// Date: 2024-02-21

// Create a guest list with at least three people
let guestList: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];

// Print an invitation message for each person
for (let i = 0; i < guestList.length; i++) {
    let invitationMessage: string = `Dear ${guestList[i]},\nYou are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(invitationMessage);
}
