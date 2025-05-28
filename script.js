class password {
    constructor() {
        this.lowercase = "abcdefghijklmnopqrstuvwxyz";
        this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.specialCharacters = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
    }
    generatepassword(length){
        let Password=""
        let allCharacters=this.lowercase+this.uppercase+this.specialCharacters
        
        for (let i = 0; i < length; i++) {
            let randomIndex=Math.floor(Math.random()*allCharacters.length)
            Password+=allCharacters[randomIndex]
        }
        return Password;
    }
        


}

let Pass=new password()
console.log(Pass.generatepassword(6));

