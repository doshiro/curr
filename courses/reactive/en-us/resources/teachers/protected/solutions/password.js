const correctpw = "password"

function passwordPrompt() {
  document.body.style.display = "none";
  var pw = prompt("Please enter the password:", "");
  if( pw === correctpw ) {
    document.body.style.display = "block";
  } else {
    window.location.replace('incorrect-password.html')
  }
}

window.onload = passwordPrompt;
