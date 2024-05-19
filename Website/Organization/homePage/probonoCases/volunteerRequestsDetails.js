// Function to get URL query parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Retrieve query parameters
const category = getQueryParam("category");
const id = getQueryParam("id");
const organization = getQueryParam("organization");
const noOfStudents = getQueryParam("noOfStudents");
const governorate = getQueryParam("governorate");
const area = getQueryParam("area");
const googleMap = getQueryParam("googleMap");
const subject = getQueryParam("subject");
const address = getQueryParam("address");
const age = getQueryParam("age");
const gender = getQueryParam("gender");
const weight = getQueryParam("weight");
const nameofpatient = getQueryParam("nameofpatient");
const caseDescription = getQueryParam("caseDescription");
const status1 = getQueryParam("status");

const type = getQueryParam("type");
const name1 = getQueryParam("name");
const use = getQueryParam("use");

document.addEventListener("DOMContentLoaded", function () {
  var cancelButtons = document.querySelectorAll(".btn1.donate-btn#return");

  // Loop through each "Cancel" button and add a click event listener
  cancelButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default action of the button

      // Navigate back to the previous page
      window.history.back();
    });
  });
});


// Modify the "View Donor's Profile" link to include query parameters
const viewDonorProfileLink = document.getElementById("viewDonorProfile");
// Select the button element
var btn = document.getElementById('viewDonorProfile');

// Change the text of the button



if (status1 === "Unfulfilled") {
  viewDonorProfileLink.style.display = "none";
}

// Select the <h2> element with class "heading"
var headingElement = document.querySelector('.organization-info .heading h2');

// Check if the element exists
if (category === "Pro Bono Teacher") {
    // Change the text content of the <h2> element
    headingElement.textContent = 'Teaching Case Details';
    btn.innerText = 'View Teacher Profile';
}else{
  headingElement.textContent = 'Medical Case Details';
  btn.innerText = 'View Doctor Profile';
}

if (viewDonorProfileLink) {
  if (category === "Pro Bono Teacher") {
    viewDonorProfileLink.href = "../volunteerDonors/teacherprofile.html" + `?category=${category}` + `&id=${id}`;
  } else {
    viewDonorProfileLink.href = "../volunteerDonors/doctorProfile.html" + `?category=${category}` + `&id=${id}`;
  }
}

if (category === "Pro Bono Teacher") {
  var randomNumber = Math.floor(Math.random() * 5) + 1;
  document.getElementById("label1-1").innerText = subject;
  document.getElementById("label1-2").innerText = randomNumber;
  document.getElementById("label1-3").innerText = noOfStudents;
  document.getElementById("label1-4").innerText = address;
  document.getElementById("label1").innerText = "Subject:";
  document.getElementById("label2").innerText = "Classes per Week:";
  document.getElementById("label3").innerText = "Number of Students:";
  document.getElementById("label4").innerText = "Address:";
} else if (category === "Pro Bono Doctor") {
  document.getElementById("label1-1").innerText = nameofpatient;
  document.getElementById("label1-2").innerText = age + " Years";
  document.getElementById("label1-3").innerText = gender;
  document.getElementById("label1-4").innerText = weight + " kg";
  document.getElementById("label1-5").innerText = caseDescription;
  document.getElementById("label1-6").innerText = address;

 
  document.getElementById("label1").innerText = "Patient Name:";
  document.getElementById("label2").innerText = "Age:";
  document.getElementById("label3").innerText = "Gender:";
  document.getElementById("label4").innerText = "Weight:";
  document.getElementById("label5").innerText = "Case Description:";
  document.getElementById("label6").innerText = "Address:";
}

document.addEventListener("DOMContentLoaded", function () {
  // Hide loader after 2 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 1000); // 2000 milliseconds = 2 seconds
});

$(document).ready(function () {
  $(".navbar-nav .nav-item:nth-child(3)").addClass("active");

  $(".navbar-nav .nav-item .nav-link").click(function () {
    $(".navbar-nav .nav-item").removeClass("active");

    $(this).closest(".nav-item").addClass("active");
  });
});

var subMenu1 = document.getElementById("subMenu1");
var subMenu2 = document.getElementById("subMenu2");

function toggleMenu() {
  // Check if subMenu2 is open, if yes, close it
  if (subMenu2.classList.contains("open-menu")) {
    subMenu2.classList.remove("open-menu");
  }
  // Toggle open-menu class for subMenu1
  subMenu1.classList.toggle("open-menu");
}

function toggleBell() {
  // Check if subMenu2 is open, if yes, close it
  if (subMenu1.classList.contains("open-menu")) {
    subMenu1.classList.remove("open-menu");
  }
  // Toggle open-menu class for subMenu1
  subMenu2.classList.toggle("open-menu");
}



document.addEventListener("DOMContentLoaded", function () {
  var deleteProfileLink = document.querySelector(".delete-profile");

  if (deleteProfileLink) {
    deleteProfileLink.addEventListener("click", function (e) {
      e.preventDefault();
      // Show a confirmation popup
      var confirmDelete = confirm("Are you sure you want to delete your profile?");
      if (confirmDelete) {
        window.location.href = "../../../../index.html"; // Replace "deleted-profile.html" with the actual URL of the page you want to redirect to
      }
    });
  }
});
