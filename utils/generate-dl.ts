export default function generateDriverLicense() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];

    const randomNumber = Math.round(Math.random() * 8999999 + 1000000);

    const dl = randomCharacter + randomNumber;

    return dl.toUpperCase();
}