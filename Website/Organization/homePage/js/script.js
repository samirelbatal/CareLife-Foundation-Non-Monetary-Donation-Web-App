document.addEventListener("DOMContentLoaded", function () {
  var donationRequests = document.querySelector('a[href="#team"]');

  var donationItems = document.querySelector(".dropdown-menu ul.dropdown-menu");

  donationItems.style.display = "none";

  donationRequests.addEventListener("mouseover", function () {
    donationItems.style.display = "block";
  });

  donationRequests.addEventListener("mouseout", function () {
    donationItems.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var donationItems = document.querySelectorAll(".dropdown-menu ul.dropdown-menu li");

  var nestedList = document.querySelector(".dropdown-menu ul.dropdown-menu");

  nestedList.style.display = "none";

  donationItems.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      nestedList.style.display = "block";
    });
  });

  nestedList.addEventListener("mouseout", function () {
    nestedList.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Hide loader after 2 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 1000); // 2000 milliseconds = 2 seconds
});

$(document).ready(function () {
  $(".navbar-nav .nav-item:nth-child(1)").addClass("active");

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
  const donationSelect = document.getElementById("donation");
  const additionalField2 = document.getElementById("additionalField2");
  const additionalField3 = document.getElementById("additionalField3");
  const additionalField4 = document.getElementById("additionalField4");
  const additionalField5 = document.getElementById("additionalField5");
  const additionalField6 = document.getElementById("additionalField6");
  const additionalField7 = document.getElementById("additionalField7");
  const additionalField8 = document.getElementById("additionalField8");
  const additionalField9 = document.getElementById("additionalField9");
  const additionalField10 = document.getElementById("additionalField10");
  const additionalField12 = document.getElementById("additionalField12");
  const additionalField14 = document.getElementById("additionalField14");
  const additionalField11 = document.getElementById("additionalField11");
  const additionalField15 = document.getElementById("additionalField15");
  const additionalField17 = document.getElementById("additionalField17");
  const additionalField18 = document.getElementById("additionalField18");

  donationSelect.addEventListener("change", function () {
    const selectedOption = donationSelect.value;

    // Reset all fields to default state
    additionalField2.style.display = "block";
    additionalField3.style.display = "block";
    additionalField4.style.display = "block";
    additionalField5.style.display = "block";
    additionalField6.style.display = "block";
    additionalField7.style.display = "block";
    additionalField8.style.display = "block";
    additionalField9.style.display = "block";
    additionalField10.style.display = "block";
    additionalField17.style.display = "none";
    

    // Reset all placeholders to default values
    additionalField3.querySelector("input").placeholder = "Enter Age";
    additionalField5.querySelector("input").placeholder = "Enter Material";
    additionalField6.querySelector("input").placeholder = "Enter Type of Clothing";
    additionalField7.querySelector("input").placeholder = "additionalField7";
    additionalField8.querySelector("input").placeholder = "additionalField8";
    additionalField9.querySelector("input").placeholder = "additionalField9";
    additionalField10.querySelector("input").placeholder = "additionalField10";


    // Handle visibility and placeholders based on selected option
    switch (selectedOption) {
      case "clothes":
        additionalField7.style.display = "none";
        additionalField8.style.display = "none";
        additionalField9.style.display = "none";
        additionalField10.style.display = "none";
        additionalField14.style.display = "none";
        additionalField12.style.display = "none";
        additionalField11.style.display = "none";
        additionalField15.style.display = "none";
        break;
      case "blood":
        additionalField2.style.display = "none";
        additionalField4.style.display = "none";
        additionalField3.querySelector("input").placeholder = "Entrer Name of Patient";
        additionalField5.style.display = "none";
        additionalField6.querySelector("input").placeholder = "Enter Hospital Name";
        additionalField7.style.display = "none";
        additionalField8.querySelector("input").placeholder = "Enter Hospital Area";
        additionalField9.querySelector("input").placeholder = "Enter Governorate";
        additionalField10.querySelector("input").placeholder = "Enter Hospital Address";
        additionalField11.style.display = "none";
        additionalField12.style.display = "none";
        additionalField14.style.display = "none";
        additionalField18.style.display = "none";
        break;
      case "food":   
      additionalField2.style.display = "none";
      additionalField3.style.display = "none";
      additionalField4.style.display = "none";
      additionalField5.style.display = "none";
      additionalField6.querySelector("input").placeholder = "Enter Food Name";
      additionalField7.style.display = "none";
      additionalField8.style.display = "none";
      additionalField9.style.display = "none";
      additionalField10.style.display = "none";
      additionalField12.style.display = "block";
      additionalField11.style.display = "none";
      additionalField15.style.display = "none";
      additionalField18.style.display = "none";
        break;
        case "medical":   
        additionalField4.style.display = "none";
        additionalField3.style.display = "none";
        additionalField5.style.display = "none";
        additionalField6.querySelector("input").placeholder = "Enter Item Name";
        additionalField7.style.display = "none";
        additionalField8.style.display = "none";
        additionalField9.style.display = "none";
        additionalField10.style.display = "none";        
        additionalField11.style.display = "none";
        additionalField15.style.display = "none";
        additionalField12.style.display = "none";
        additionalField2.style.display = "none";
        additionalField17.style.display = "block";
        additionalField18.style.display = "none";
        break;
        case "school":   
        additionalField4.style.display = "none";
        additionalField3.style.display = "none";
        additionalField5.style.display = "none";
        additionalField6.style.display = "none";
        additionalField7.style.display = "none";
        additionalField8.style.display = "none";
        additionalField9.style.display = "none";
        additionalField10.style.display = "none";        
        additionalField11.style.display = "none";
        additionalField15.style.display = "none";
        additionalField12.style.display = "none";
        additionalField2.style.display = "none";
        additionalField17.style.display = "none";
        additionalField18.style.display = "block";
        
    
        break;
        case "toys":   
        additionalField4.style.display = "none";
        additionalField3.querySelector("input").placeholder = "Enter Toy Name";
        additionalField5.style.display = "none";
        additionalField6.querySelector("input").placeholder = "Enter Age";
        additionalField7.style.display = "none";
        additionalField8.style.display = "none";
        additionalField9.style.display = "none";
        additionalField10.style.display = "none";
        additionalField14.style.display = "none";
        additionalField15.style.display = "none";
        additionalField12.style.display = "none";
        additionalField18.style.display = "none";
        break;
      default:
        // For other donation categories, no special action needed
        break;
    }
  });
});
