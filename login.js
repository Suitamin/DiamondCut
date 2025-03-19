function validateData() {
    const full = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const number = document.getElementById("phoneNumber").value
    const confpass = document.getElementById("confpass").value
    const male = document.getElementById("dot-1")
    const female = document.getElementById("dot-2")
    const country = document.getElementById("confpass").value

    check = 1

    if (full.length < 3 || full.length > 15) {
        alert("Username must be between 3 - 15 characters")
        check = 0
    } else if (!email.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com")
        check = 0
    } else if (!checkAlphanumeric(password)) {
        alert("Password must be alphanumeric")
        check = 0
    } else if (password != confpass) {
        alert("Password missmatch")
        check = 0
    } else if (!male.checked && !female.checked) {
        alert("Gender must be selected")
        check = 0
    } else if ((country != "ID" && country == "US") || (country == "ID" && country != "US")) {
        alert("Country must be selected")
        check = 0 
    } else if ( number < 999999) {
        alert("Phone number must be more than 6 digits")
        check = 0
    }
    
    if (check == 1)
        alert("Registration Succesfull")
}

function checkAlphanumeric(password) {
    var isAlpha = false
    var isNumber = false
    
    for (let i = 0; i < password.length; i++) {
        if (isNaN(password[i])) {
            isAlpha = true
        } else {
            isNumber = true
        }

        if (isAlpha && isNumber) {
            return true
        }
    }
    return false
}