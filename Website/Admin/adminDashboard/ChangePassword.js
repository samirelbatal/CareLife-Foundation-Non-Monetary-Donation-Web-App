function togglePasswordVisibility(inputId) {
  const inputField = document.getElementById(inputId);
  const eyeIcon = document.getElementById(inputId + "-toggle");
  if (inputField.type === "password") {
    inputField.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    inputField.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}

document
  .getElementById("change-password-btn")
  .addEventListener("click", function () {
    //     var originalPassword = "Ahmedhany"; // Original password

    //     // Get the current password, new password, and confirm password fields
    //     var currentPassword = document.getElementById("current-password").value;
    //     var newPassword = document.getElementById("new-password").value;
    //     var confirmPassword = document.getElementById("confirm-password").value;

    //     // Check if the current password matches the original password
    //     if (currentPassword !== originalPassword) {
    //         alert("Current password is incorrect.");
    //         return; // Exit the function if current password is incorrect
    //     }

    //     // Check if the new password and confirm password match
    //     if (newPassword !== confirmPassword) {
    //         alert("New password and confirm password do not match.");
    //         return; // Exit the function if passwords don't match
    //     }

    //     // Validate the password (e.g., length, character requirements)
    //     if (!isValidPassword(newPassword)) {
    //         alert("Please enter a valid password.");
    //         return; // Exit the function if password is not valid
    //     }

    //     // If all validations pass, proceed with changing the password
    //     // You can implement your password change logic here
    //     // For demonstration purposes, let's log the passwords to console
    //     console.log("Current Password:", currentPassword);
    //     console.log("New Password:", newPassword);
    //     console.log("Confirm Password:", confirmPassword);

    //     // Clear the password fields after changing the password
    //     document.getElementById("current-password").value = "";
    //     document.getElementById("new-password").value = "";
    //     document.getElementById("confirm-password").value = "";

    //     // Optionally, display a success message
    //     alert("Password changed successfully!");
    // });

    // function isValidPassword(password) {
    //     // Implement your password validation logic here
    //     // For example, check for length, character requirements, etc.
    //     // Return true if password is valid, false otherwise
    //     // This is just a placeholder function, you need to customize it as per your requirements
    //     return password.length >= 8; // For demonstration, just checking if password length is at least 8 characters
    document.querySelector(".main").style.display = "none";
    document.querySelector(".navbar").style.display = "none";
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector(".message").style.display = "flex";
  });

document.getElementById("b1").addEventListener("click", function () {
  window.location.href = "../../Login/login.html";
});
