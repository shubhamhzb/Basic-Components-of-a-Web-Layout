let shownPassword = document.getElementById("generated-password");



function generatePassword(passwordLength) {
    var passwordLength = parseInt(document.getElementById("password-length").value);
    console.log(passwordLength)
    if (isNaN(passwordLength)) {
        alert("Please enter how long you want your password")
        return null;
    }
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var symbols = "~`!@#$%^&*()_-+={[}]|:;<,>.?/";

    var allChars = numbers + upperChars + lowerChars + symbols;
    var randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numbers;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray = randPasswordArray.fill(allChars, 3);
    shownPassword.value = shuffleArray(randPasswordArray.map(function(x) {
            return x[Math.floor(Math.random() * x.length)]
        }))
        .join('');
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function copyPassword() {
    var shownPassword = document.getElementById("generated-password");
    shownPassword.select();
    navigator.clipboard.writeText(shownPassword.value);
}