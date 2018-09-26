const correctpw = "bootstrapteacher"

function passwordPrompt() {
  var pw = prompt("Please enter the password:", "");
  if( pw === correctpw ) {
    document.body.style.visibility = "visible";
  } else {
    window.location.replace('incorrect-password.html');
  }
}

window.onload = passwordPrompt;
