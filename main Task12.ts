const names: string[] = ["Ali", "Hassam", "Shayan", "Dawod"];

const messageTemplate: string = "Hello, {}! Thank you for coming.";

for (const name of names) {
    const personalizedMessage: string = messageTemplate.replace("{}", names);
    console.log(personalizedMessage);
}
