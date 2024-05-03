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
const use = getQueryParam("use");
const author = getQueryParam("author");
const language = getQueryParam("language");
const edition = getQueryParam("edition");
const summary = getQueryParam("summary");
const quantity = getQueryParam("quantity");
const stationaryName = getQueryParam("stationaryName");

if (category === "Clothes") {
  // Use the retrieved data to populate the page dynamically
  document.getElementById("label1-1").innerText = organization;
  document.getElementById("label1-2").innerText = age;
  document.getElementById("label1-3").innerText = gender;
  document.getElementById("label1-4").innerText = season;
  document.getElementById("label1-5").innerText = material;
  document.getElementById("label1-6").innerText = typeofclothing;
  document.getElementById("label1").innerText = "Requested by:";
  document.getElementById("label2").innerText = "Age:";
  document.getElementById("label3").innerText = "Gender:";
  document.getElementById("label4").innerText = "Season:";
  document.getElementById("label5").innerText = "Material:";
  document.getElementById("label6").innerText = "Type of Clothing:";
} else if (category === "Blood") {
  document.getElementById("label1-2").innerText = nameofpatient;
  document.getElementById("label1-3").innerText = bloodtype;
  document.getElementById("label1-4").innerText = hospitaladdress;
  document.getElementById("label1-5").innerText = governorate;
  document.getElementById("label1-6").innerText = hospital;
  document.getElementById("label2").innerText = "Name of Patient:";
  document.getElementById("label3").innerText = "Blood Type:";
  document.getElementById("label4").innerText = "Hospital Address:";
  document.getElementById("label5").innerText = "Governorate:";
  document.getElementById("label6").innerText = "Hospital:";
} else if (category === "Food") {
  document.getElementById("label1-1").innerText = organization;
  document.getElementById("label1-2").innerText = name1;
  document.getElementById("label1-3").innerText = type;
  document.getElementById("label1").innerText = "Requested by:";
  document.getElementById("label2").innerText = "Name:";
  document.getElementById("label3").innerText = "Type:";
} else if (category === "Toys") {
  document.getElementById("label1-1").innerText = name1;
  document.getElementById("label1-2").innerText = type;
  document.getElementById("label1-3").innerText = age;
  document.getElementById("label1-4").innerText = gender;
  document.getElementById("label1-5").innerText = type;
  document.getElementById("label1").innerText = "Name:";
  document.getElementById("label2").innerText = "Type:";
  document.getElementById("label3").innerText = "Age:";
  document.getElementById("label4").innerText = "Gender:";
  document.getElementById("label5").innerText = "Category:";
} else if (category === "Medical Supplies") {
  document.getElementById("label1-1").innerText = name1;
  document.getElementById("label1-2").innerText = type;
  document.getElementById("label1-3").innerText = use;
  document.getElementById("label1").innerText = "Name:";
  document.getElementById("label2").innerText = "Type:";
  document.getElementById("label3").innerText = "Use:";
} else if (category === "School Supplies") {
  if(type === "Stationary"){
    document.getElementById("label1-1").innerText = stationaryName;
    document.getElementById("label1-2").innerText = quantity;
    document.getElementById("label1").innerText = "Stationary Name:";
    document.getElementById("label2").innerText = "Quantity needed:";
    

  }else if(type === "Books"){
    document.getElementById("label1-1").innerText = name1;
    document.getElementById("label1-2").innerText = author;
    document.getElementById("label1-3").innerText = language;
    document.getElementById("label1-4").innerText = edition;
    document.getElementById("label1-5").innerText = summary;
    document.getElementById("label1-6").innerText = quantity + " Books";
    document.getElementById("label1").innerText = "Book Name:";
    document.getElementById("label2").innerText = "Author:";
    document.getElementById("label3").innerText = "Language:";
    document.getElementById("label4").innerText = "Edition:";
    document.getElementById("label5").innerText = "Summary:";
    document.getElementById("label6").innerText = "Quantity needed:";

  }
 
}


document.addEventListener("DOMContentLoaded", function() {
  // Hide loader after 2 seconds
  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
  }, 1000); // 2000 milliseconds = 2 seconds
});



$(document).ready(function() {
  $('.navbar-nav .nav-item:nth-child(2)').addClass('active');

  $('.navbar-nav .nav-item .nav-link').click(function() {
    $('.navbar-nav .nav-item').removeClass('active');

    $(this).closest('.nav-item').addClass('active');
  });
});


var subMenu = document.getElementById('subMenu');
function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}