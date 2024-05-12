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

const type = getQueryParam("type");
const name1 = getQueryParam("name");
const use = getQueryParam("use");

// Modify the "View Donor's Profile" link to include query parameters
const viewDonorProfileLink = document.getElementById("viewDonorProfile");
if (viewDonorProfileLink) {
  if(category === "Pro Bono Teacher"){
    viewDonorProfileLink.href = "../volunteerDonors/teacherprofile.html" + `?category=${category}` + `&id=${id}`;

  }else{
    viewDonorProfileLink.href = "../volunteerDonors/doctorProfile.html" + `?category=${category}` + `&id=${id}`;
  }
  
}

if (category === "Pro Bono Teacher") {
  document.getElementById("label1-1").innerText = organization;
  document.getElementById("label1-2").innerText = subject;
  document.getElementById("label1-3").innerText = noOfStudents;
  document.getElementById("label1-4").innerText = address;
  document.getElementById("label1").innerText = "Requested by:";
  document.getElementById("label2").innerText = "Subject:";
  document.getElementById("label3").innerText = "Number of Students:";
  document.getElementById("label4").innerText = "Address:";
} else if (category === "Pro Bono Doctor") {
  document.getElementById("label1-1").innerText = organization;
  document.getElementById("label1-2").innerText = nameofpatient;
  document.getElementById("label1-3").innerText = age;
  document.getElementById("label1-4").innerText = gender;
  document.getElementById("label1-5").innerText = weight + " kg";
  document.getElementById("label1-6").innerText = caseDescription;
  document.getElementById("label1-7").innerText = address;

  document.getElementById("label1").innerText = "Requested by:";
  document.getElementById("label2").innerText = "Patient Name:";
  document.getElementById("label3").innerText = "Age:";
  document.getElementById("label4").innerText = "Gender:";
  document.getElementById("label5").innerText = "Weight:";
  document.getElementById("label6").innerText = "Case Description:";
  document.getElementById("label7").innerText = "Address:";
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
  const viewDetailsButtons = document.querySelectorAll(".view-details-btn");

  // Loop through each "View Details" button and add a click event listener
  viewDetailsButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default action of the button

      // Get the URL of the page you want to navigate to
      const detailsPageUrl = "../delivery/delivery.html"; // Replace 'YOUR_DETAILS_PAGE_URL_HERE' with the actual URL

      // Navigate to the details page
      window.location.href = detailsPageUrl;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var deleteProfileLink = document.querySelector(".delete-profile");

  if (deleteProfileLink) {
    deleteProfileLink.addEventListener("click", function (e) {
      e.preventDefault();
      // Show a confirmation popup
      var confirmDelete = confirm("Are you sure you want to delete your profile?");
      if (confirmDelete) {
        window.location.href = "../../login/login.html"; // Replace "deleted-profile.html" with the actual URL of the page you want to redirect to
      }
    });
  }
});
