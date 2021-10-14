// Created by suryansh882

var check = false;

function genPass() {
  var long = document.getElementById("pass-length").value;

  check = true;
  var password = "";
  var s =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%!-&*abcdefghijklmnopqrstuvwxyz";
  var i = 0;

  while (i < long) {
    gen = s[Math.floor(Math.random() * s.length)];
    password += gen;
    i++;
  }

  document.getElementById("pass").value = password;
}

function copy() {
  if (check == false) return;

  var copyText = document.getElementById("pass");
  navigator.clipboard.writeText(copyText.value);

  // Get the toast container
  var x = document.getElementById("toast");

  // Add the "show" class to the container
  x.className = "show";

  //Show toast for 2.5sec
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 2500);
}

document.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    genPass();
  }
});
