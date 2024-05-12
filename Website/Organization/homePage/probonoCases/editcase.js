// Function to get URL query parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Retrieve query parameters
const category = getQueryParam("category");
const id = getQueryParam("id");
const medicalSpeciality = getQueryParam("medicalSpeciality");
const quantity = getQueryParam("quantity");
const governorate = getQueryParam("governorate");
const area = getQueryParam("area");
const nameofpatient = getQueryParam("nameofpatient");
const subject = getQueryParam("subject");
const noOfStudents = getQueryParam("noOfStudents");
const age = getQueryParam("age");
const gender = getQueryParam("gender");
const weight = getQueryParam("weight");
const caseDescription = getQueryParam("caseDescription");

const organization = getQueryParam("organization");

const bloodtype = getQueryParam("bloodtype");
const hospitaladdress = getQueryParam("hospitaladdress");

const hospital = getQueryParam("hospital");
const type = getQueryParam("type");
const name1 = getQueryParam("bookName");
const name2 = getQueryParam("name");

let counterValue;
let counterVal;
let selectedFoodType;
let selectedGovernorate;
let selectedGender;

if (category === "Pro Bono Doctor") {
  // Use the retrieved data to populate the page dynamically

  // Add counter input below label1-3
  const counter = document.createElement("input");
  counter.type = "number";
  counter.id = "counter";
  counter.style.width = "430px"; // Set the width here
  counter.style.height = "30px"; // Set the width here
  counter.value = parseInt(age); // assuming quantity is defined somewhere

  const label = document.getElementById("label1-4");
  label.parentNode.insertBefore(counter, label.nextSibling);

  // Add event listener to the counter input
  counter.addEventListener("change", function () {
    counterVal = counter.value;
  });

  const governorateDropdown = document.createElement("select");
  governorateDropdown.id = "governorate";
  governorateDropdown.className = "form-control";

  // Add options for governorates in Egypt
  const governorates = [
    "Cairo",
    "Alexandria",
    "Giza",
    "Dakahlia",
    "Sharqia",
    "Gharbia",
    "Minya",
    "Beheira",
    "Qalyubia",
    "Fayoum",
    "Sohag",
    "Qena",
    "Asyut",
    "Ismailia",
    "Damietta",
    "Luxor",
    "Aswan",
    "Kafr El Sheikh",
    "Port Said",
    "Beni Suef",
    "Marsa Matrouh",
    "Red Sea",
    "New Valley",
    "North Sinai",
    "South Sinai",
  ];

  governorates.forEach((governoratee) => {
    const option = document.createElement("option");
    option.value = governoratee;
    option.textContent = governoratee;
    if (governoratee === governorate) {
      option.selected = true;
    }
    governorateDropdown.appendChild(option);
  });

  // Add the dropdown menu to the page after field4
  const field4 = document.getElementById("field6");
  field4.parentNode.insertBefore(governorateDropdown, field4.nextSibling);

  governorateDropdown.addEventListener("change", function () {
    // Update the selectedGovernorate variable when the value changes
    selectedGovernorate = governorateDropdown.value;
  });

  // Create the dropdown menu for gender
  const genderDropdown = document.createElement("select");
  genderDropdown.id = "gender";
  genderDropdown.className = "form-control";

  // Add options for gender
  const genders = ["Male", "Female"];
  genders.forEach((selectedgender) => {
    const option = document.createElement("option");
    option.value = selectedgender;
    option.textContent = selectedgender;
    if (selectedgender === gender) {
      option.selected = true;
    }
    genderDropdown.appendChild(option);
  });

  // Add the dropdown menu after "field2"
  const label2 = document.getElementById("label1-5");
  label2.parentNode.insertBefore(genderDropdown, label2.nextSibling);

  // Event listener to update the selectedGender variable when the value changes
  genderDropdown.addEventListener("change", function () {
    selectedGender = genderDropdown.value;
  });

  // Add counter input below label1-3
  const counterInput = document.createElement("input");
  counterInput.type = "number";
  counterInput.id = "counter";
  counterInput.style.width = "430px"; // Set the width here
  counterInput.style.height = "30px"; // Set the width here
  counterInput.value = parseInt(weight); // assuming quantity is defined somewhere

  const label13 = document.getElementById("label1-3");
  label13.parentNode.insertBefore(counterInput, label13.nextSibling);

  // Add event listener to the counter input
  counterInput.addEventListener("change", function () {
    counterValue = counterInput.value;
  });

  document.getElementById("label1-1").querySelector("strong").innerText = "Medical Speciality:";
  document.getElementById("label1-2").querySelector("strong").innerText = "Patient Name:";
  document.getElementById("label1-3").querySelector("strong").innerText = "Weight:";
  document.getElementById("label1-4").querySelector("strong").innerText = "Age:";
  document.getElementById("label1-5").querySelector("strong").innerText = "Gender:";
  document.getElementById("label1-6").querySelector("strong").innerText = "Governorate:";
  document.getElementById("label1-7").querySelector("strong").innerText = "Case Description:";
  document.getElementById("field6").style.display = "none";

  document.getElementById("field3").style.display = "none";
  document.getElementById("field4").style.display = "none";
  document.getElementById("field5").style.display = "none";

  document.getElementById("field1").value = medicalSpeciality;
  document.getElementById("field2").value = nameofpatient;
  document.getElementById("field7").value = caseDescription;
} else if (category === "Pro Bono Teacher") {
  const governorateDropdown = document.createElement("select");
  governorateDropdown.id = "governorate";
  governorateDropdown.className = "form-control";

  // Add options for governorates in Egypt
  const governorates = [
    "Cairo",
    "Alexandria",
    "Giza",
    "Dakahlia",
    "Sharqia",
    "Gharbia",
    "Minya",
    "Beheira",
    "Qalyubia",
    "Fayoum",
    "Sohag",
    "Qena",
    "Asyut",
    "Ismailia",
    "Damietta",
    "Luxor",
    "Aswan",
    "Kafr El Sheikh",
    "Port Said",
    "Beni Suef",
    "Marsa Matrouh",
    "Red Sea",
    "New Valley",
    "North Sinai",
    "South Sinai",
  ];

  governorates.forEach((governoratee) => {
    const option = document.createElement("option");
    option.value = governoratee;
    option.textContent = governoratee;
    if (governoratee === governorate) {
      option.selected = true;
    }
    governorateDropdown.appendChild(option);
  });

  // Add the dropdown menu to the page after field4
  const field4 = document.getElementById("field4");
  field4.parentNode.insertBefore(governorateDropdown, field4.nextSibling);

  governorateDropdown.addEventListener("change", function () {
    // Update the selectedGovernorate variable when the value changes
    selectedGovernorate = governorateDropdown.value;
  });

  // Add counter input below label1-3
  const counterInput = document.createElement("input");
  counterInput.type = "number";
  counterInput.id = "counter";
  counterInput.style.width = "410px"; // Set the width here
  counterInput.style.height = "30px"; // Set the width here
  counterInput.value = noOfStudents; // assuming quantity is defined somewhere

  const label13 = document.getElementById("label1-2");
  label13.parentNode.insertBefore(counterInput, label13.nextSibling);

  // Add event listener to the counter input
  counterInput.addEventListener("change", function () {
    // Update the counterValue variable when the value changes
    counterValue = counterInput.value;
  });

  // Update other field values
  document.getElementById("field1").value = subject;
  document.getElementById("field3").value = area;
  document.getElementById("field4").value = governorate;
  document.getElementById("field5").value = hospitaladdress;
  document.getElementById("field6").value = area;

  document.getElementById("label1-1").querySelector("strong").innerText = "Subject:";
  document.getElementById("label1-2").querySelector("strong").innerText = "Number of Students:";
  document.getElementById("label1-3").querySelector("strong").innerText = "Area:";
  document.getElementById("label1-4").querySelector("strong").innerText = "Governorate:";
  document.getElementById("label1-5").querySelector("strong").innerText = "Address:";
  document.getElementById("label1-6").querySelector("strong").innerText = "Google Map Marker:";
  document.getElementById("field7").style.display = "none";
  document.getElementById("field4").style.display = "none";
  document.getElementById("field2").style.display = "none";
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
  var cancelButtons = document.querySelectorAll(".btn1.donate-btn#cancel");

  // Loop through each "Cancel" button and add a click event listener
  cancelButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default action of the button

      // Navigate back to the previous page
      window.history.back();
    });
  });
});

// Get reference to the button
const updateButton = document.getElementById("updateButton");

// Add click event listener
updateButton.addEventListener("click", function () {
  const field1Value = document.getElementById("field1").value;
  const field2Value = document.getElementById("field2").value;
  const field3Value = document.getElementById("field3").value;
  const field4Value = document.getElementById("field4").value;
  const field5Value = document.getElementById("field5").value;
  const field6Value = document.getElementById("field6").value;
  const field7Value = document.getElementById("field7").value;

  // Get the URL of the previous page
  const previousPageUrl = document.referrer;

  // Extract the page name from the URL
  const previousPageName = previousPageUrl.substring(previousPageUrl.lastIndexOf("/") + 1);

  const baseUrl = "./";

  if (category === "Pro Bono Teacher") {
    // Get the card details
    const card = {
      id: id,
      category: category,
      subject: field1Value,
      area: field3Value,
      noOfStudents: counterValue,
      address: "",
      governorate: selectedGovernorate,
    };

    // Construct the URL with query parameters
    const queryString = `?id=${encodeURIComponent(card.id)}&category=${encodeURIComponent(card.category)}&subject=${encodeURIComponent(card.subject)}&noOfStudents=${encodeURIComponent(
      card.noOfStudents
    )}&governorate=${encodeURIComponent(card.governorate)}&area=${encodeURIComponent(card.area)}&address=${encodeURIComponent(card.address)}`;

    // Navigate to the URL
    const url = baseUrl + previousPageName + queryString;

    // Navigate to the URL
    window.location.href = url;
  } else {
    const card = {
      id: id,
      category: category,
      medicalSpeciality: field1Value,
      nameofpatient: field2Value,
      governorate: selectedGovernorate,
      weight: counterValue,
      age: counterVal,
      gender: selectedGender,
      caseDescription: field7Value,
    };

    // Construct the URL with query parameters
    const queryString = `?id=${encodeURIComponent(card.id)}&category=${encodeURIComponent(card.category)}&medicalSpeciality=${encodeURIComponent(
      card.medicalSpeciality
    )}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&governorate=${encodeURIComponent(card.governorate)}&weight=${encodeURIComponent(card.weight)}&caseDescription=${encodeURIComponent(
      card.caseDescription
    )}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(card.gender)}`;

    const url = baseUrl + previousPageName + queryString;

    // Navigate to the URL
    window.location.href = url;
  }
});

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
