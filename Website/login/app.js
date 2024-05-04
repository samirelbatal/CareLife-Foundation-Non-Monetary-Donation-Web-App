const sign_in_btn = document.querySelector("#sign-in-btn");
const login_btn = document.querySelector("#login-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
login_btn.addEventListener("click", () => {
    window.location.href = "test.html";
  });

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
function authenticateAndRedirect() {
    // Here you would have your authentication logic
    var username = document.getElementById("username").value; // Assuming you have input fields with IDs "username" and "password"
 var password = document.getElementById("password").value;

    // Example of simple authentication logic (replace with your actual logic)
    if (username === "user" && password === "password") {
    window.location.href = "../Donor/homePage/homePage.html"; // Redirect to the home page if authentication is successful
    } else {
    alert("Incorrect username or password. Please try again."); // Show an error message if authentication fails
    }
}