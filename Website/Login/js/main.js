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
    window.location.href = "../Donor-Organziation/homePage/homePage.html";
  } else if (username === "admin" && password === "123") {
    // Redirect to another page
    window.location.href = "../Admin/adminDashboard/adminDashboard.html";
  } else {
    // Display error message or handle invalid credentials
    displayErrorMessage("Invalid username or password. Please try again.");
  }
} /* */
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
document.querySelector(".btn").addEventListener("click", login);
