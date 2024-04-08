const submit = document.getElementById("SBMTbutton");

submit.onclick = function() {
    const includeLowerCase = document.getElementById("Lower").checked;
    const includeUpperCase = document.getElementById("Upper").checked;
    const includeNumbers = document.getElementById("Numbers").checked;
    const includeSymblos = document.getElementById("Symblos").checked;
    const passLength = parseInt(document.getElementById("passLength").value);

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbl = "!@#$%^&*()_+-";

    let allowedChar = "";
    allowedChar += includeLowerCase ? lowercase : "";
    allowedChar += includeUpperCase ? uppercase : "";
    allowedChar += includeNumbers ? number : "";
    allowedChar += includeSymblos ? symbl : "";

    if (passLength <= 3) {
        document.getElementById("hidden2").style.display = "block";
        return; 
    }
    else if(passLength >3){
        document.getElementById("hidden2").style.display = "none";
    }
    if(allowedChar === ""){
        document.getElementById("hidden1").style.display = "block";
    }
    else if(allowedChar !== ""){
        document.getElementById("hidden1").style.display = "none";
    }

    let password = "";
    for (let i = 0; i < passLength; i++) {
        password += allowedChar.charAt(Math.floor(Math.random() * allowedChar.length));
    }

    document.getElementById("Result").value = password; 
}
