// Function to get URL query parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Retrieve query parameters
const category = getQueryParam("category");
const id = getQueryParam("id");
const organization = getQueryParam("organization");
const age = getQueryParam("age");
const gender = getQueryParam("gender");
const season = getQueryParam("season");
const material = getQueryParam("material");
const typeofclothing = getQueryParam("typeofclothing");
const nameofpatient = getQueryParam("nameofpatient");
const bloodtype = getQueryParam("bloodtype");
const hospitaladdress = getQueryParam("hospitaladdress");
const governorate = getQueryParam("governorate");
const area = getQueryParam("area");
const hospital = getQueryParam("hospital");
const type = getQueryParam("type");
const name1 = getQueryParam("bookName");
const name2 = getQueryParam("name");
const use = getQueryParam("use");
const author = getQueryParam("author");
const language = getQueryParam("language");
const edition = getQueryParam("edition");
const summary = getQueryParam("summary");
const quantity = getQueryParam("quantity");
const stationaryName = getQueryParam("stationaryName");
const status = getQueryParam("status");
const condition = getQueryParam("condition");

const dropoff = document.getElementById("dropoff");
const viewdonor = document.getElementById("viewDonorProfile");
const returnn = document.getElementById("return");

// Modify the "View Donor's Profile" link to include query parameters
const viewDonorProfileLink = document.getElementById("viewDonorProfile");
if (viewDonorProfileLink) {
  viewDonorProfileLink.href = "../volunteerDonors/donorProfile.html" + `?category=${category}` + `&id=${id}`;
}
if (status === "Unfulfilled") {
  dropoff.style.display = "none";
  viewdonor.style.display = "none";
  returnn.style.display = "block";
} else {
  returnn.style.display = "none";
}

if (category === "Clothes") {
  document.getElementById("label1-1").innerText = age;
  document.getElementById("label1-2").innerText = gender;
  document.getElementById("label1-3").innerText = season;
  document.getElementById("label1-4").innerText = material;
  document.getElementById("label1-5").innerText = typeofclothing;

  document.getElementById("label1").innerText = "Age:";
  document.getElementById("label2").innerText = "Gender:";
  document.getElementById("label3").innerText = "Season:";
  document.getElementById("label4").innerText = "Material:";
  document.getElementById("label5").innerText = "Type of Clothing:";
} else if (category === "Blood") {
  document.getElementById("label1-2").innerText = nameofpatient;
  document.getElementById("label1-3").innerText = bloodtype;
  document.getElementById("label1-4").innerText = hospital;
  document.getElementById("label1-5").innerText = hospitaladdress;
  document.getElementById("label1-6").innerText = governorate;
  document.getElementById("label2").innerText = "Patient Name:";
  document.getElementById("label3").innerText = "Blood Type:";
  document.getElementById("label4").innerText = "Hospital Name:";
  document.getElementById("label5").innerText = "Hospital Address:";
  document.getElementById("label6").innerText = "Hospital Governorate:";
} else if (category === "Food") {
  document.getElementById("label1-1").innerText = name2;
  document.getElementById("label1-2").innerText = type;
  if (type === "Fruits & Vegetables") {
    document.getElementById("label1-3").innerText = quantity + " kg";
  } else {
    document.getElementById("label1-3").innerText = quantity;
  }

  document.getElementById("label1").innerText = "Food Name:";
  document.getElementById("label2").innerText = "Food Type:";
  document.getElementById("label3").innerText = "Quantity:";
} else if (category === "Toys") {
  document.getElementById("label1-1").innerText = name2;
  document.getElementById("label1-2").innerText = type;
  document.getElementById("label1-3").innerText = age ;
  document.getElementById("label1-4").innerText = gender;
  document.getElementById("label1-5").innerText = quantity;
  document.getElementById("label1").innerText = "Game Name:";
  document.getElementById("label2").innerText = "Game Type:";
  document.getElementById("label3").innerText = "Age:";
  document.getElementById("label4").innerText = "Gender:";
  document.getElementById("label5").innerText = "Quantity:";
} else if (category === "Medical Supplies") {
  document.getElementById("label1-1").innerText = name2;
  document.getElementById("label1-2").innerText = type;
  document.getElementById("label1-3").innerText = use;
  document.getElementById("label1").innerText = "Name:";
  document.getElementById("label2").innerText = "Type:";
  document.getElementById("label3").innerText = "Use:";
} else if (category === "School Supplies") {
  if (type === "Stationary") {
    document.getElementById("label1-1").innerText = stationaryName;
    document.getElementById("label1-2").innerText = quantity;
    document.getElementById("label1-3").innerText = condition;
    document.getElementById("label1").innerText = "Stationary Name:";
    document.getElementById("label2").innerText = "Quantity:";
    document.getElementById("label3").innerText = "Condition:";
  } else if (type === "Book") {
    document.getElementById("label1-1").innerText = name1;
    document.getElementById("label1-2").innerText = author;
    document.getElementById("label1-3").innerText = language;
    document.getElementById("label1-4").innerText = edition;
    document.getElementById("label1-5").innerText = summary;
    document.getElementById("label1-6").innerText = quantity;
    document.getElementById("label1").innerText = "Book Name:";
    document.getElementById("label2").innerText = "Author:";
    document.getElementById("label3").innerText = "Language:";
    document.getElementById("label4").innerText = "Edition:";
    document.getElementById("label5").innerText = "Summary:";
    document.getElementById("label6").innerText = "Quantity:";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Hide loader after 2 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 1000); // 2000 milliseconds = 2 seconds
});

$(document).ready(function () {
  $(".navbar-nav .nav-item:nth-child(2)").addClass("active");

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
        window.location.href = "../../../login/login.html"; // Replace "deleted-profile.html" with the actual URL of the page you want to redirect to
      }
    });
  }
});

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
