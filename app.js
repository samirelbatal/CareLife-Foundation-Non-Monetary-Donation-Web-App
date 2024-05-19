const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const donor_sign_up_btn = document.getElementById("sign-up-btn");
const charity_sign_up_btn = document.getElementById("charity-sign-up-btn");
const container = document.querySelector(".container");
const donor_sign_up_form = document.querySelector("#donor_sign_up_form");
const charity_sign_up_form = document.querySelector("#charity_sign_up_form");
const sign_in_form = document.querySelector(".sign-in-form");

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  donor_sign_up_form.style.display = "none";
  charity_sign_up_form.style.display = "none";
});

donor_sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  charity_sign_up_form.style.display = "none";
  // sign_in_form.style.display = "none";
  setTimeout(() => {
    donor_sign_up_form.style.display = "block";
  }, 700); // Show the donor sign-up form
});

charity_sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  //sign_in_form.style.display = "none";
  donor_sign_up_form.style.display = "none";
  setTimeout(() => {
    charity_sign_up_form.style.display = "block";
  }, 700); // Show the charity sign-up form
});

function authenticateAndRedirect() {
  // Here you would have your authentication logic
  var username = document.getElementById("username").value; // Assuming you have input fields with IDs "username" and "password"
  var password = document.getElementById("password").value;

  // Example of simple authentication logic (replace with your actual logic)
  if (username === "donor" && password === "password") {
    window.location.href = "Website/Donor/homePage/homePage.html"; // Redirect to the home page if authentication is successful
  } else if (username === "organization" && password === "password") {
    window.location.href = "Website/Organization/homePage/homePage.html";
  } else if (username === "admin" && password === "password") {
    window.location.href = "Website/Admin/adminDashBoard/adminDashBoard.html";
  } else {
    alert("Incorrect username or password. Please try again."); // Show an error message if authentication fails
  }
}
