const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

function login(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.querySelector(".input[type='text']").value;
  var password = document.querySelector(".input[type='password']").value;

  // Check if username and password match
  if (username === "user" && password === "password") {
    // Redirect to another page
    window.location.href = "../HomePage/homepage.html";
    //add other refrences to pages based on user and pass ex admin page
  } else {
    // Display error message or handle invalid credentials
    displayErrorMessage("Invalid username or password. Please try again.");
  }
}
function displayErrorMessage(message) {
  var errorMessageLabel = document.querySelector(".error-message-label");
  errorMessageLabel.textContent = message;
  errorMessageLabel.classList.add("error-message");

  // Fade away after 3 seconds
  setTimeout(function () {
    errorMessageLabel.textContent = ""; // Clear the error message
    errorMessageLabel.classList.remove("error-message");
  }, 3000);
}
/*
This line of code selects an HTML element with the class name "btn" and adds an event listener to it. When this element is clicked, the function login will be executed. */

document.querySelector(".btn").addEventListener("click", login);
