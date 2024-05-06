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
  // Use the retrieved data to populate the page dynamically

  document.getElementById("label1-1").querySelector("strong").innerText = "Requested by:";
  document.getElementById("label1-1").querySelector("strong").innerText = "Age:";
  document.getElementById("label1-2").querySelector("strong").innerText = "Gender:";
  document.getElementById("label1-3").querySelector("strong").innerText = "Season:";
  document.getElementById("label1-4").querySelector("strong").innerText = "Material:";
  document.getElementById("label1-5").querySelector("strong").innerText = "Type of Clothing:";
  document.getElementById("field6").style.display = "none";
  document.getElementById("field7").style.display = "none";


  document.getElementById("field1").value = organization;
  document.getElementById("field1").value = age;
  document.getElementById("field2").value = gender;
  document.getElementById("field3").value = season;
  document.getElementById("field4").value = material;
  document.getElementById("field5").value = typeofclothing;
} else if (category === "Blood") {
  document.getElementById("field1").value = nameofpatient;
  document.getElementById("field2").value = bloodtype;
  document.getElementById("field3").value = hospitaladdress;
  document.getElementById("field4").value = governorate;
  document.getElementById("field5").value = hospital;
  document.getElementById("field6").value = area;
  document.getElementById("field7").style.display = "none";

  document.getElementById("label1-1").querySelector("strong").innerText = "Patient Name:";

  document.getElementById("label1-2").querySelector("strong").innerText = "Blood Type:";
  document.getElementById("label1-3").querySelector("strong").innerText = "Hospital Address:";
  document.getElementById("label1-4").querySelector("strong").innerText = "Hospital Governorate:";
  document.getElementById("label1-5").querySelector("strong").innerText = "Hospital Name:";
  document.getElementById("label1-6").querySelector("strong").innerText = "Hospital Area:";
} else if (category === "Food") {

  const foodTypeDropdown = document.createElement("select");
    foodTypeDropdown.id = "foodType";
    foodTypeDropdown.className = "form-control";

    // Add options for food types
    const foodTypes = ["Fruits & Vegetables", "Canned Foods", "Fresh Meals", "Baked Goods"];
    foodTypes.forEach(foodType => {
        const option = document.createElement("option");
        option.value = foodType;
        option.textContent = foodType;
        foodTypeDropdown.appendChild(option);
    });

    // Add the dropdown menu to the page
    const label1 = document.getElementById("label1-3");
    label1.parentNode.insertBefore(foodTypeDropdown, label1.nextSibling);

    
  document.getElementById("field3").style.display = "none";
  document.getElementById("field1").value = name2;
  document.getElementById("field2").style.display = "none";
  document.getElementById("field4").style.display = "none";
  document.getElementById("field5").style.display = "none";
  document.getElementById("field6").style.display = "none";
  document.getElementById("field7").style.display = "none";
  document.getElementById("label1-3").style.display = "none";
  document.getElementById("label1-1").querySelector("strong").innerText = "Name:";
  document.getElementById("label1-2").querySelector("strong").innerText = "Food Type:";

} else if (category === "Toys") {

  const foodTypeDropdown = document.createElement("select");
  foodTypeDropdown.id = "food-type";
  foodTypeDropdown.className = "form-control";

  // Add options for food types
  const foodTypes = ["Doll", "Board Games", "Stuffed Toys", "Sports","Cars","Outdoor"];
  foodTypes.forEach(foodType => {
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
  document.getElementById("field3").value = age;
  document.getElementById("field4").value = gender;
  document.getElementById("field5").style.display = "none";
  document.getElementById("label1-1").querySelector("strong").innerText = "Name:";
  document.getElementById("label1-2").querySelector("strong").innerText = "Game Category:";
  document.getElementById("label1-3").querySelector("strong").innerText = "Age:";
  document.getElementById("label1-4").querySelector("strong").innerText = "Gender:";
  document.getElementById("label1-5").style.display = "none";
  document.getElementById("field6").style.display = "none";
  document.getElementById("field7").style.display = "none";


} else if (category === "Medical Supplies") {

  
  document.getElementById("field4").style.display = "none";
  document.getElementById("field5").style.display = "none";
  
  document.getElementById("field6").style.display = "none";
  document.getElementById("field7").style.display = "none";

  document.getElementById("field1").value = name2;
  document.getElementById("field2").value = type;
  document.getElementById("field3").value = use;
  document.getElementById("label1-1").querySelector("strong").innerText = "Name:";
  document.getElementById("label1-2").querySelector("strong").innerText = "Type:";
  document.getElementById("label1-3").querySelector("strong").innerText = "Use:";


} else if (category === "School Supplies") {

    if(type === "Stationary"){
      
  
      document.getElementById("field1").value = stationaryName;
      document.getElementById("field2").value = quantity;
      document.getElementById("label1-1").querySelector("strong").innerText = "Stationary Name:";
      document.getElementById("label1-2").querySelector("strong").innerText = "Quantity needed:";

      
  document.getElementById("field3").style.display = "none";
  document.getElementById("field4").style.display = "none";
  
  document.getElementById("field5").style.display = "none";

  document.getElementById("field6").style.display = "none";
  document.getElementById("field7").style.display = "none";
    

    }else{
      
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

    }
      
      
  
  //   }else if(type === "Books"){

  
  //   }

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

var subMenu1 = document.getElementById('subMenu1');
var subMenu2 = document.getElementById('subMenu2');

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
