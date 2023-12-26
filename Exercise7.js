class PasswordGenerator {
    get password() {
        return this._password
    }
    generateStrongPassword() {
        this._password = ""
        for (let i = 0; i < 8; i++) {
            // let capitalLetters=Math.floor(Math.random() * ((90-65)+1) + 65)
            let letters = Math.floor(Math.random() * ((122 - 97) + 1) + 97)
            let digits = Math.floor(Math.random() * ((57 - 48) + 1) + 48)
            let symbols = Math.floor(Math.random() * ((38 - 35) + 1) + 35)
            if (i < 4) {
                this._password += `${String.fromCharCode(letters)}`
            } else if (i < 6) {
                this._password += `${String.fromCharCode(digits)}`
            } else {
                this._password += `${String.fromCharCode(symbols)}`
            }
        }
        this._password = this._password.charAt(0).toUpperCase() + this._password.substring(1, 3) + this._password.charAt(3).toUpperCase() + this._password.substring(4, 9)
    }
    generateWeakPassword() {
        this._password = ""
        for (let i = 1; i <= 8; i++) {
            // let capitalLetters=Math.floor(Math.random() * ((90-65)+1) + 65)
            let letters = Math.floor(Math.random() * ((122 - 97) + 1) + 97)
            this._password += `${String.fromCharCode(letters)}`
        }

    }
    generateSuperStrongPassword() {
        this._password = ""
        for (let i = 1; i <= 12; i++) {
            // let capitalLetters=Math.floor(Math.random() * ((90-65)+1) + 65)
            let letters = Math.floor(Math.random() * ((122 - 97) + 1) + 97)
            let digits = Math.floor(Math.random() * ((57 - 48) + 1) + 48)
            let symbols = Math.floor(Math.random() * ((38 - 35) + 1) + 35)
            if (i <= 8) {
                this._password += `${String.fromCharCode(letters)}`
            } else if (i > 8 && i <= 10) {
                this._password += `${String.fromCharCode(digits)}`
            } else {
                this._password += `${String.fromCharCode(symbols)}`
            }
        }
        this._password = this._password.charAt(0).toUpperCase() + this._password.substring(1, 5) + this._password.charAt(5).toUpperCase() + this._password.substring(6, 13)
    }
    generateFunnyPassword() {
        let funnyP = ["password", "ineedapassword", "changeme", "secret", "iamforgetful", "newpassword", "IamACompleteIdiot", "nothing", "nothingagain", "iforgot", "whydoialwaysforget", "qwerty", "asdf", "aslpls", "user", "YouWontGuessThisOne", "PasswordShmashword", "youmoron", "doubleclick", "iamnottellingyoumypw", "masterpassword", "yetanotherpassword", "nomorepasswords", "password123", "myonlypassword", "cantremember", "dontaskdonttell", "memorysucks", "earlyalzheimers", "passwordforoldpeople"]
        this._password = funnyP[Math.floor(Math.random() * funnyP.length)]
    }
}

const gbtn=document.getElementById("generate")
gbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    var selectValue
    var radiobtns=document.getElementsByName("exampleRadios")
    var output=document.getElementById("password")
    for(let i=0;i< radiobtns.length;i++){
        if(radiobtns[i].checked){
            selectValue=radiobtns[i].value
        }
    }
    if(selectValue==="strong"){
        let p=new PasswordGenerator()
        p.generateStrongPassword()
        output.value=p.password
    }else if(selectValue==="weak"){
        let p=new PasswordGenerator()
        p.generateWeakPassword()
        output.value=p.password
    }else if(selectValue==="super"){
        let p=new PasswordGenerator()
        p.generateSuperStrongPassword()
        output.value=p.password
    }else{
        let p=new PasswordGenerator()
        p.generateFunnyPassword()
        output.value=p.password
    }
    document.getElementById("added").classList.remove("d-none")
    setTimeout(() => {
        document.getElementById("added").classList.add("d-none")
    }, 1000)
})
