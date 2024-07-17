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

if (category === "Clothes") {
  document.getElementById("label1-1").innerText = organization;
  document.getElementById("label1-2").innerText = age;
  document.getElementById("label1-3").innerText = gender;
  document.getElementById("label1-4").innerText = season;
  document.getElementById("label1-5").innerText = material;
  document.getElementById("label1-6").innerText = typeofclothing;
  document.getElementById("label1-7").innerText = quantity + " pieces";
  document.getElementById("label1").innerText = "Organization:";
  document.getElementById("label2").innerText = "Age:";
  document.getElementById("label3").innerText = "Gender:";
  document.getElementById("label4").innerText = "Season:";
  document.getElementById("label5").innerText = "Material:";
  document.getElementById("label6").innerText = "Type of Clothing:";
  document.getElementById("label7").innerText = "Quantity Needed:";
} else if (category === "Blood") {
  document.getElementById("label1-2").innerText = nameofpatient;
  document.getElementById("label1-3").innerText = bloodtype;
  document.getElementById("label1-4").innerText = hospital;
  document.getElementById("label1-5").innerText = hospitaladdress;
  document.getElementById("label1-6").innerText = governorate;
  document.getElementById("label2").innerText = "Name of Patient:";
  document.getElementById("label3").innerText = "Blood Type:";
  document.getElementById("label4").innerText = "Hospital:";
  document.getElementById("label5").innerText = "Hospital Address:";
  document.getElementById("label6").innerText = "Governorate:";
} else if (category === "Food") {
  document.getElementById("label1-1").innerText = organization;
  document.getElementById("label1-2").innerText = name2;
  document.getElementById("label1-3").innerText = type;
  document.getElementById("label1").innerText = "Organization:";
  document.getElementById("label2").innerText = "Name:";
  document.getElementById("label3").innerText = "Type:";
  if (type === "Fruits & Vegetables") {
    document.getElementById("label1-4").innerText = quantity + " kg";
  } else {
    document.getElementById("label1-4").innerText = quantity;
  }
  document.getElementById("label4").innerText = "Quantity Needed:";
} else if (category === "Toys") {
  document.getElementById("label1-1").innerText = name2;
  document.getElementById("label1-2").innerText = type;
  document.getElementById("label1-3").innerText = age;
  document.getElementById("label1-4").innerText = gender;
  document.getElementById("label1-5").innerText = type;
  document.getElementById("label1-6").innerText = quantity;
  document.getElementById("label1").innerText = "Name:";
  document.getElementById("label2").innerText = "Type:";
  document.getElementById("label3").innerText = "Age:";
  document.getElementById("label4").innerText = "Gender:";
  document.getElementById("label5").innerText = "Category:";
  document.getElementById("label6").innerText = "Quantity Needed:";
} else if (category === "Medical Supplies") {
  document.getElementById("label1-1").innerText = name2;
  document.getElementById("label1-2").innerText = type;
  document.getElementById("label1-3").innerText = use;
  document.getElementById("label1-4").innerText = quantity;
  document.getElementById("label1").innerText = "Name:";
  document.getElementById("label2").innerText = "Type:";
  document.getElementById("label3").innerText = "Use:";
  document.getElementById("label4").innerText = "Quantity Needed:";
} else if (category === "School Supplies") {
  if (type === "Stationary") {
    document.getElementById("label1-1").innerText = organization;
    document.getElementById("label1-2").innerText = stationaryName;
    document.getElementById("label1-3").innerText = quantity;
    document.getElementById("label1").innerText = "Organization:";
    document.getElementById("label2").innerText = "Stationary Name:";
    document.getElementById("label3").innerText = "Quantity needed:";
  } else if (type === "Book") {
    document.getElementById("label1-1").innerText = organization;
    document.getElementById("label1-2").innerText = name1;
    document.getElementById("label1-3").innerText = author;
    document.getElementById("label1-4").innerText = language;
    document.getElementById("label1-5").innerText = edition;
    document.getElementById("label1-6").innerText = summary;
    document.getElementById("label1-7").innerText = quantity;
    document.getElementById("label1").innerText = "Organization:";
    document.getElementById("label2").innerText = "Book Name:";
    document.getElementById("label3").innerText = "Book Author:";
    document.getElementById("label4").innerText = "Book Language:";
    document.getElementById("label5").innerText = "Book Edition:";
    document.getElementById("label6").innerText = "Book Summary:";
    document.getElementById("label7").innerText = "Quantity needed:";
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

function validateDonationForm() {
  var quantityInput = document.getElementById("quantity");

  if (quantityInput.checkValidity()) {
    return true;
  } else {
    quantityInput.classList.add("is-invalid"); // Add invalid class for styling
    return false; // Form submission prevented
  }
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
