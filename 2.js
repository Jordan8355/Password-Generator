function generatePassword(
    length=10,
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase = "abcdefghijklmnopqrstuvwxyz",
    specialCharacters = "!@#$%^&*()_+-=[]{}|;:',.<>/?",
    numbers = "0123456789",
) {
    let allCharacters = uppercase + lowercase + specialCharacters + numbers
    let password = ""
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * allCharacters.length)
        password += allCharacters[random]
// that is how you create a password generator simple and easy

    }
    return password;
}
let a = generatePassword(11)
console.log(a);

