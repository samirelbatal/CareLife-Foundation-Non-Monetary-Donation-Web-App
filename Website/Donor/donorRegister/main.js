const inputs = document.querySelectorAll(".input");
const form = document.querySelector("form");

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

  // Check if any input field is empty
  let isEmpty = false;
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      isEmpty = true;
      return;
    }
  });

  if (isEmpty) {
    // Display error message for empty fields
    displayErrorMessage("Please fill in all the fields.");
    return;
  }

  // Validate email format
  const emailInput = document.querySelector(".input[type='text']");
  const email = emailInput.value.trim();
  /* if (validateEmail(email)) {
    displayErrorMessage("Please enter a valid email address.", emailInput);
    return;
  } */

  // Validate password length
  const passwordInput = document.querySelector(".input[type='password']");
  const password = passwordInput.value.trim();
  /* if (password.length < 6) {
    displayErrorMessage("Password must be at least 6 characters long.", passwordInput);
    return;
  } */

  // Redirect to another page
  window.location.href = "../homePage/homePage.html";
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function displayErrorMessage(message) {
  var errorMessageLabel = document.querySelector(".error-message-label");
  errorMessageLabel.textContent = message;
  errorMessageLabel.classList.add("error-message");

  // Fade away after 3 seconds
  setTimeout(function () {
    errorMessageLabel.textContent = ""; // Clear the error message
    errorMessageLabel.classList.remove("error-message");
  }, 5000);
}

form.addEventListener("submit", login);