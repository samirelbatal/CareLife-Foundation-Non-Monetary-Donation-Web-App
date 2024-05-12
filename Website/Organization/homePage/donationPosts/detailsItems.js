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

let counterValue;
let selectedFoodType;
let selectedGovernorate;
let selectedGender;
let quantityCounterValue;

if (category === "Clothes") {
  // Use the retrieved data to populate the page dynamically

  // Add counter input below label1-3
  const counterInput = document.createElement("input");
  counterInput.type = "number";
  counterInput.id = "counter";
  counterInput.style.width = "430px"; // Set the width here
  counterInput.style.height = "30px"; // Set the width here
  counterInput.value = parseInt(age); // assuming quantity is defined somewhere

  const label13 = document.getElementById("label1-1");
  label13.parentNode.insertBefore(counterInput, label13.nextSibling);

  // Add event listener to the counter input
  counterInput.addEventListener("change", function () {
    // Update the counterValue variable when the value changes
    counterValue = counterInput.value;
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
  const label2 = document.getElementById("label1-2");
  label2.parentNode.insertBefore(genderDropdown, label2.nextSibling);

  // Event listener to update the selectedGender variable when the value changes
  genderDropdown.addEventListener("change", function () {
    selectedGender = genderDropdown.value;
  });

  document.getElementById("label1-1").querySelector("strong").innerText = "Age:";
  document.getElementById("label1-2").querySelector("strong").innerText = "Gender:";
  document.getElementById("label1-3").querySelector("strong").innerText = "Season:";
  document.getElementById("label1-4").querySelector("strong").innerText = "Material:";
  document.getElementById("label1-5").querySelector("strong").innerText = "Type of Clothing:";
  document.getElementById("field6").style.display = "none";
  document.getElementById("field7").style.display = "none";

  document.getElementById("field1").style.display = "none";
  document.getElementById("field2").style.display = "none";
  document.getElementById("field3").value = season;
  document.getElementById("field4").value = material;
  document.getElementById("field5").value = typeofclothing;
} else if (category === "Blood") {
  const foodTypeDropdown = document.createElement("select");
  foodTypeDropdown.id = "foodType";
  foodTypeDropdown.className = "form-control";

  // Add options for food types
  const foodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  foodTypes.forEach((foodType) => {
    const option = document.createElement("option");
    option.value = foodType;
    option.textContent = foodType;
    if (foodType === bloodtype) {
      option.selected = true;
    }
    foodTypeDropdown.appendChild(option);
  });

  // Add the dropdown menu to the page
  const label1 = document.getElementById("label1-2");
  label1.parentNode.insertBefore(foodTypeDropdown, label1.nextSibling);

  foodTypeDropdown.addEventListener("change", function () {
    // Update the selectedFoodType variable when the value changes
    selectedFoodType = foodTypeDropdown.value;
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
    "Kafr ElSheikh",
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

  // Update other field values
  document.getElementById("field1").value = nameofpatient;
  document.getElementById("field3").value = hospital;
  document.getElementById("field4").value = governorate;
  document.getElementById("field5").value = hospitaladdress;
  document.getElementById("field6").value = area;

  document.getElementById("label1-1").querySelector("strong").innerText = "Patient Name:";
  document.getElementById("label1-2").querySelector("strong").innerText = "Blood Type:";
  document.getElementById("label1-3").querySelector("strong").innerText = "Hospital Name:";
  document.getElementById("label1-4").querySelector("strong").innerText = "Hospital Governorate:";
  document.getElementById("label1-5").querySelector("strong").innerText = "Hospital Address:";
  document.getElementById("label1-6").querySelector("strong").innerText = "Hospital Area:";
  document.getElementById("field7").style.display = "none";
  document.getElementById("field4").style.display = "none";
  document.getElementById("field2").style.display = "none";
} else if (category === "Food") {
  const foodTypeDropdown = document.createElement("select");
  foodTypeDropdown.id = "foodType";
  foodTypeDropdown.className = "form-control";

  // Add options for food types
  const foodTypes = ["Fruits & Vegetables", "Canned Foods", "Fresh Meals", "Baked Goods"];
  foodTypes.forEach((foodType) => {
    const option = document.createElement("option");
    option.value = foodType;
    option.textContent = foodType;
    if (foodType === type) {
      option.selected = true;
    }
    foodTypeDropdown.appendChild(option);
  });

  // Add the dropdown menu to the page
  const label1 = document.getElementById("label1-2");
  label1.parentNode.insertBefore(foodTypeDropdown, label1.nextSibling);

  document.getElementById("field3").style.display = "none";
  document.getElementById("field1").value = name2;
  document.getElementById("field2").style.display = "none";
  document.getElementById("field4").style.display = "none";
  document.getElementById("field5").style.display = "none";
  document.getElementById("field6").style.display = "none";
  document.getElementById("field7").style.display = "none";
  if (type == "Fruits & Vegetables") {
    document.getElementById("label1-3").querySelector("strong").innerText = "Quantity:";
  } else {
    document.getElementById("label1-3").querySelector("strong").innerText = "Quantity:";
  }
  document.getElementById("label1-1").querySelector("strong").innerText = "Name:";
  document.getElementById("label1-2").querySelector("strong").innerText = "Food Type:";

  // Add counter input below label1-3
  const counterInput = document.createElement("input");
  counterInput.type = "number";
  counterInput.id = "counter";
  counterInput.style.width = "430px"; // Set the width here
  counterInput.style.height = "30px"; // Set the width here
  counterInput.value = quantity; // assuming quantity is defined somewhere

  const label13 = document.getElementById("label1-3");
  label13.parentNode.insertBefore(counterInput, label13.nextSibling);

  // Add event listener to the counter input
  counterInput.addEventListener("change", function () {
    // Update the counterValue variable when the value changes
    counterValue = counterInput.value;
  });

  foodTypeDropdown.addEventListener("change", function () {
    // Update the selectedFoodType variable when the value changes
    selectedFoodType = foodTypeDropdown.value;
  });
} else if (category === "Toys") {


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
    const label2 = document.getElementById("label1-4");
    label2.parentNode.insertBefore(genderDropdown, label2.nextSibling);

    // Event listener to update the selectedGender variable when the value changes
  genderDropdown.addEventListener("change", function () {
    selectedGender = genderDropdown.value;
  });


  const foodTypeDropdown = document.createElement("select");
  foodTypeDropdown.id = "food-type";
  foodTypeDropdown.className = "form-control";

  // Add options for food types
  const foodTypes = ["Doll", "Board Games", "Stuffed Toys", "Sports", "Cars", "Outdoor"];
  foodTypes.forEach((foodType) => {
    const option = document.createElement("option");
    option.value = foodType;
    option.textContent = foodType;
    foodTypeDropdown.appendChild(option);
  });

  // Add the dropdown menu to the page
  const label1 = document.getElementById("label1-2");
  label1.parentNode.insertBefore(foodTypeDropdown, label1.nextSibling);

  document.getElementById("field1").value = name2;
  document.getElementById("field2").style.display = "none";
  document.getElementById("field3").style.display = "none";
  document.getElementById("field4").style.display = "none";
  document.getElementById("field5").style.display = "none";
  document.getElementById("label1-1").querySelector("strong").innerText = "Name:";
  document.getElementById("label1-2").querySelector("strong").innerText = "Game Category:";
  document.getElementById("label1-3").querySelector("strong").innerText = "Age:";
  document.getElementById("label1-4").querySelector("strong").innerText = "Gender:";
  document.getElementById("label1-5").querySelector("strong").innerText = "Quantity:";
  document.getElementById("field6").style.display = "none";
  document.getElementById("field7").style.display = "none";

  // Add counter input below label1-3
  const counterInput = document.createElement("input");
  counterInput.type = "number";
  counterInput.id = "counter";
  counterInput.style.width = "430px"; // Set the width here
  counterInput.style.height = "30px"; // Set the width here
  counterInput.value = parseInt(age); // assuming quantity is defined somewhere
  const label13 = document.getElementById("label1-3");
  label13.parentNode.insertBefore(counterInput, label13.nextSibling);

  // Add event listener to the counter input
  counterInput.addEventListener("change", function () {
    // Update the counterValue variable when the value changes
    counterValue = counterInput.value;
  });





  // Add counter input below label1-3
const quantityCounterInput = document.createElement("input");
quantityCounterInput.type = "number";
quantityCounterInput.id = "quantityCounter";
quantityCounterInput.style.width = "430px"; // Set the width here
quantityCounterInput.style.height = "30px"; // Set the width here
quantityCounterInput.value = parseInt(quantity); // assuming age is defined somewhere
const label14 = document.getElementById("label1-5");
label14.parentNode.insertBefore(quantityCounterInput, label14.nextSibling);

// Add event listener to the quantity counter input
quantityCounterInput.addEventListener("change", function () {
  // Update the quantityCounterValue variable when the value changes
  quantityCounterValue = quantityCounterInput.value;
});



} else if (category === "Medical Supplies") {

  const foodTypeDropdown = document.createElement("select");
  foodTypeDropdown.id = "foodType";
  foodTypeDropdown.className = "form-control";

  // Add options for food types
  const foodTypes = ["Medical Device", "Medical Equipment", "Medication"];
  foodTypes.forEach((foodType) => {
    const option = document.createElement("option");
    option.value = foodType;
    option.textContent = foodType;
    if (foodType === type) {
      option.selected = true;
    }
    foodTypeDropdown.appendChild(option);
  });

  // Add the dropdown menu to the page
  const label1 = document.getElementById("label1-2");
  label1.parentNode.insertBefore(foodTypeDropdown, label1.nextSibling);

  foodTypeDropdown.addEventListener("change", function () {
    // Update the selectedFoodType variable when the value changes
    selectedFoodType = foodTypeDropdown.value;
  });



  document.getElementById("field4").style.display = "none";
  document.getElementById("field5").style.display = "none";
  document.getElementById("field6").style.display = "none";
  document.getElementById("field7").style.display = "none";
  document.getElementById("field1").value = name2;
  document.getElementById("field2").style.display = "none";
  document.getElementById("field3").value = use;
  document.getElementById("label1-1").querySelector("strong").innerText = "Name:";
  document.getElementById("label1-2").querySelector("strong").innerText = "Type:";
  document.getElementById("label1-3").querySelector("strong").innerText = "Use:";
} else if (category === "School Supplies") {
  if (type === "Stationary") {

     // Add counter input below label1-3
  const counterInput = document.createElement("input");
  counterInput.type = "number";
  counterInput.id = "counter";
  counterInput.style.width = "430px"; // Set the width here
  counterInput.style.height = "30px"; // Set the width here
  counterInput.value = parseInt(quantity); // assuming quantity is defined somewhere

  const label13 = document.getElementById("label1-2");
  label13.parentNode.insertBefore(counterInput, label13.nextSibling);

  // Add event listener to the counter input
  counterInput.addEventListener("change", function () {
    // Update the counterValue variable when the value changes
    counterValue = counterInput.value;
  });




    document.getElementById("field1").value = stationaryName;
    document.getElementById("label1-1").querySelector("strong").innerText = "Stationary Name:";
    document.getElementById("label1-2").querySelector("strong").innerText = "Quantity needed:";

    document.getElementById("field2").style.display = "none";
    document.getElementById("field3").style.display = "none";
    document.getElementById("field4").style.display = "none";
    document.getElementById("field5").style.display = "none";
    document.getElementById("field6").style.display = "none";
    document.getElementById("field7").style.display = "none";
  } else {
    document.getElementById("field6").style.display = "none";
    document.getElementById("field7").style.display = "none";
    document.getElementById("field1").value = name1;
    document.getElementById("field2").value = author;
    document.getElementById("field3").value = language;
    document.getElementById("field4").value = edition;
    document.getElementById("field5").value = summary;
    document.getElementById("label1-1").querySelector("strong").innerText = "Book Name:";
    document.getElementById("label1-2").querySelector("strong").innerText = "Book Author:";
    document.getElementById("label1-3").querySelector("strong").innerText = "Book Language:";
    document.getElementById("label1-4").querySelector("strong").innerText = "Book Edition:";
    document.getElementById("label1-5").querySelector("strong").innerText = "Book Summary:";

    // Increase the height of field5 and set wrapping behavior
    // Increase the height of field5 and set wrapping behavior
const field5 = document.getElementById("field5");
field5.style.height = "100px"; // Adjust the height as needed
field5.style.overflowWrap = "break-word"; // Set CSS property to force text wrapping

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

  if (category === "Medical Supplies") {
    // Get the card details
    const card = {
      id: id,
      category: category,
      name: field1Value,
      type: selectedFoodType,
      use: field3Value,
    };

    // Construct the URL with query parameters
    const url = `./medicalSupplies.html?id=${encodeURIComponent(card.id)}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&type=${encodeURIComponent(
      card.type
    )}&use=${encodeURIComponent(card.use)}`;

    // Navigate to the URL
    window.location.href = url;
  } else if (category === "Toys") {
    const card = {
      id: id,
      category: category,
      name: field1Value,
      type: selectedFoodType,
      age: counterValue,
      gender: selectedGender,
      quantity: quantityCounterValue,
    };

    // Construct the URL with query parameters
    const queryString = `?id=${encodeURIComponent(card.id)}&category=${encodeURIComponent(card.category)}&type=${encodeURIComponent(card.type)}&name=${encodeURIComponent(
      card.name
    )}&age=${encodeURIComponent(card.age)}&quantity=${encodeURIComponent(card.quantity)}&gender=${encodeURIComponent(card.gender)}`;

    const url = baseUrl + previousPageName + queryString;

    // Navigate to the URL
    window.location.href = url;
  } else if (category === "School Supplies") {
    let card = {};
    if (type === "Book") {
      // Get the card details
      card = {
        id: id,
        category: category,
        type: type,
        author: field2Value,
        bookName: field1Value,
        edition: field4Value,
        language: field3Value,
        summary: field5Value,
      };
    } else {
      // Get the card details
      card = {
        id: id,
        category: category,
        type: type,
        stationaryName: field1Value,
        quantity: counterValue,
      };
    }

    // Construct the URL with query parameters
    const queryString = `?id=${encodeURIComponent(card.id)}&category=${encodeURIComponent(card.category)}&author=${encodeURIComponent(card.author)}&edition=${encodeURIComponent(
      card.edition
    )}&summary=${encodeURIComponent(card.summary)}&quantity=${encodeURIComponent(card.quantity)}&language=${encodeURIComponent(card.language)}&bookName=${encodeURIComponent(card.bookName)}&type=${encodeURIComponent(
      card.type
    )}&stationaryName=${encodeURIComponent(card.stationaryName)}`;

    const url = baseUrl + previousPageName + queryString;

    // Navigate to the URL
    window.location.href = url;
  } else if (category === "Blood") {
    const card = {
      id: id,
      category: category,
      //  type: type,
      nameofpatient: field1Value,
      bloodtype: selectedFoodType,
      hospital: field3Value,
      hospitaladdress: field5Value,
      governorate: selectedGovernorate,
      area: field6Value,
    };

    const queryString = `?id=${encodeURIComponent(card.id)}&category=${encodeURIComponent(card.category)}&hospitaladdress=${encodeURIComponent(card.hospitaladdress)}&hospital=${encodeURIComponent(
      card.hospital
    )}&governorate=${encodeURIComponent(card.governorate)}&bloodtype=${encodeURIComponent(card.bloodtype)}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&area=${encodeURIComponent(
      card.area
    )}`;

    const url = baseUrl + previousPageName + queryString;

    // Navigate to the URL
    window.location.href = url;
  } else if (category === "Clothes") {
    card = {
      id: id,
      category: category,
      age: counterValue,
      gender: selectedGender,
      season: field3Value,
      material: field4Value,
      typeofclothing: field5Value,
    };

    // Construct the URL with query parameters
    const queryString = `?id=${encodeURIComponent(card.id)}&category=${encodeURIComponent(card.category)}&typeofclothing=${encodeURIComponent(card.typeofclothing)}&material=${encodeURIComponent(
      card.material
    )}&season=${encodeURIComponent(card.season)}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(card.gender)}`;
    const url = baseUrl + previousPageName + queryString;

    // Navigate to the URL
    window.location.href = url;
  } else if (category === "Food") {
    card = {
      id: id,
      category: category,
      type: selectedFoodType,
      name: field1Value,
      quantity: counterValue,
    };

    // Construct the URL with query parameters
    const queryString = `?id=${encodeURIComponent(card.id)}&category=${encodeURIComponent(card.category)}&quantity=${encodeURIComponent(card.quantity)}&name=${encodeURIComponent(
      card.name
    )}&type=${encodeURIComponent(card.type)}`;

    const url = baseUrl + previousPageName + queryString;

    // Navigate to the URL
    window.location.href = url;
  }
});
