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
const name1 = getQueryParam("name");
const use = getQueryParam("use");

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
  document.getElementById("label1-1").innerText = name1;
  document.getElementById("label1-2").innerText = type;
  document.getElementById("label1-3").innerText = use;
  document.getElementById("label1").innerText = "Name:";
  document.getElementById("label2").innerText = "Type:";
  document.getElementById("label3").innerText = "Use:";
}
