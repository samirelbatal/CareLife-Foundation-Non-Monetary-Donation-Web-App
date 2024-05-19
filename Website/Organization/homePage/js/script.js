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
  const foodtype = document.getElementById("additionalField12");
  const additionalField2 = document.getElementById("additionalField2");
  const additionalField3 = document.getElementById("additionalField3");
  const additionalField4 = document.getElementById("additionalField4");
  const additionalField5 = document.getElementById("additionalField5");
  const additionalField6 = document.getElementById("additionalField6");
  const additionalField7 = document.getElementById("additionalField7");
  const additionalField8 = document.getElementById("additionalField8");
  const additionalField9 = document.getElementById("additionalField9");
  const additionalField10 = document.getElementById("additionalField10");
  const additionalField11 = document.getElementById("additionalField11");
  const additionalField12 = document.getElementById("additionalField12");
  const additionalField13 = document.getElementById("additionalField13");
  const additionalField14 = document.getElementById("additionalField14");
  const additionalField15 = document.getElementById("additionalField15");
  const additionalField16 = document.getElementById("additionalField16");
  const additionalField17 = document.getElementById("additionalField17");
  const additionalField18 = document.getElementById("additionalField18");
  const additionalField19 = document.getElementById("additionalField19");
  const additionalField20 = document.getElementById("additionalField20");
  const additionalField21 = document.getElementById("additionalField21");
  const additionalField22 = document.getElementById("additionalField22");

  // Function to hide all additional fields
  function hideAllFields() {
    const fields = [
      additionalField2,
      additionalField3,
      additionalField4,
      additionalField5,
      additionalField6,
      additionalField7,
      additionalField8,
      additionalField9,
      additionalField10,
      additionalField11,
      additionalField12,
      additionalField13,
      additionalField14,
      additionalField15,
      additionalField16,
      additionalField17,
      additionalField18,
      additionalField19,
      additionalField20,
      additionalField21,
      additionalField22,
    ];
    fields.forEach((field) => {
      if (field) {
        // Check if field exists (some may not exist depending on the initial setup)
        field.style.display = "none";
      }
    });
  }

  // Initially hide all additional fields
  hideAllFields();
  additionalField12.addEventListener("change", function () {
    const foodType = foodtype.value;

    if (foodType === "fruits") {
      additionalField14.style.display = "none";
      additionalField17.style.display = "block";
    } else {
      additionalField17.style.display = "none";
      additionalField14.style.display = "block";
    }
  });

  donationSelect.addEventListener("change", function () {
    const selectedOption = donationSelect.value;

    // Reset all fields to default state
    additionalField2.style.display = "none";
    additionalField3.style.display = "none";
    additionalField4.style.display = "none";
    additionalField5.style.display = "none";
    additionalField6.style.display = "none";
    additionalField7.style.display = "none";
    additionalField8.style.display = "none";
    additionalField9.style.display = "none";
    additionalField10.style.display = "none";
    additionalField11.style.display = "none";
    additionalField12.style.display = "none";
    additionalField13.style.display = "none";
    additionalField14.style.display = "none";
    additionalField15.style.display = "none";
    additionalField16.style.display = "none";
    additionalField17.style.display = "none";
    additionalField19.style.display = "none";
    additionalField18.style.display = "none";
    additionalField20.style.display = "none";
    additionalField21.style.display = "none";
    additionalField22.style.display = "none";

    // Handle visibility and placeholders based on selected option
    switch (selectedOption) {
      case "clothes":
        additionalField2.style.display = "block";
        additionalField4.style.display = "block";
        additionalField5.style.display = "block";
        additionalField6.style.display = "block";
        additionalField22.style.display = "block";
        additionalField6.querySelector("input").placeholder = "Enter Type of Clothing";
        additionalField19.style.display = "block";
        break;
      case "blood":
        additionalField6.querySelector("input").placeholder = "Entrer Patient Name";

        additionalField6.style.display = "block";
        additionalField8.querySelector("input").placeholder = "Enter Hospital Name";

        additionalField8.style.display = "block";
        additionalField18.style.display = "block";
        additionalField21.style.display = "block";
        additionalField10.style.display = "block";
        additionalField15.style.display = "block";
        additionalField14.style.display = "block";
        additionalField8.querySelector("input").placeholder = "Enter Hospital Name";
        additionalField10.querySelector("input").placeholder = "Enter Hospital Area";
        additionalField14.querySelector("input").placeholder = "Enter Hospital Address";
        break;
      case "food":
        additionalField6.querySelector("input").placeholder = "Enter Food Name";
        additionalField6.style.display = "block";
        additionalField14.style.display = "block";
        additionalField12.style.display = "block";

        break;
      case "medical":
        additionalField6.style.display = "block";
        additionalField6.querySelector("input").placeholder = "Enter Item Name";
        additionalField13.style.display = "block";
        additionalField14.style.display = "block";

        break;
      case "school":
        additionalField16.style.display = "block";
        additionalField14.style.display = "none";

        additionalField16.addEventListener("change", function () {
          // Get the selected option
          const selectedOption = additionalField16.value;

          // Perform your logic based on the selected option
          if (selectedOption === "book") {
            additionalField6.style.display = "block";
            additionalField6.querySelector("input").placeholder = "Enter Book Name";

            additionalField8.style.display = "block";
            additionalField8.querySelector("input").placeholder = "Enter Book Author";

            additionalField5.style.display = "block";
            additionalField5.querySelector("input").placeholder = "Enter Book Edition";

            additionalField10.style.display = "block";
            additionalField10.querySelector("input").placeholder = "Enter Book Language";
          } else if (selectedOption === "stationary") {
            additionalField18.style.display = "none";
            additionalField5.style.display = "none";
            additionalField10.style.display = "none";
            additionalField8.style.display = "none";
            additionalField6.style.display = "block";
            additionalField14.style.display = "block";
            additionalField6.querySelector("input").placeholder = "Enter Stationary Name";
          }
        });

        break;
      case "toys":
        additionalField3.querySelector("input").placeholder = "Enter Toy Name";
        additionalField3.style.display = "block";
        additionalField2.style.display = "block";
        additionalField11.style.display = "block";
        additionalField20.style.display = "block";
        additionalField14.style.display = "block";

        break;
      default:
        // For other donation categories, no special action needed
        break;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const caseSelect = document.getElementById("case");
  const field2 = document.getElementById("field2");
  const field3 = document.getElementById("field3");
  const field4 = document.getElementById("field4");
  const field5 = document.getElementById("field5");
  const field6 = document.getElementById("field6");
  const field7 = document.getElementById("field7");
  const field8 = document.getElementById("field8");
  const field9 = document.getElementById("field9");

  // Function to hide all additional fields
  function hideAllFields() {
    const fields = [field2, field3, field4, field5, field6, field7, field8, field9];
    fields.forEach((field) => {
      if (field) {
        // Check if field exists (some may not exist depending on the initial setup)
        field.style.display = "none";
      }
    });
  }

  // Initially hide all additional fields
  hideAllFields();

  caseSelect.addEventListener("change", function () {
    const selectedOption = caseSelect.value;

    // Reset all fields to default state
    hideAllFields();

    // Handle visibility and placeholders based on selected option
    switch (selectedOption) {
      case "teach":
        field2.style.display = "block";
        field3.style.display = "block";
        field4.style.display = "block";
        field5.style.display = "block";
        field6.style.display = "block";
        break;
      case "medical":
        field2.querySelector("input").placeholder = "Enter Patient Name";
        field2.style.display = "block";
        field4.style.display = "block";
        field3.style.display = "block";
        field7.style.display = "block";
        field8.style.display = "block";
        field9.style.display = "block";
        break;
      default:
        break;
    }
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
        window.location.href = "../../../index.html"; // Replace "deleted-profile.html" with the actual URL of the page you want to redirect to
      }
    });
  }
});
