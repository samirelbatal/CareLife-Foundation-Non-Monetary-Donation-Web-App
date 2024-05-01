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
const season = getQueryParam("season");
const material = getQueryParam("material");
const typeofclothing = getQueryParam("typeofclothing");
const nameofpatient = getQueryParam("nameofpatient");
const bloodtype = getQueryParam("bloodtype");
const hospitaladdress = getQueryParam("hospitaladdress");

const hospital = getQueryParam("hospital");
const type = getQueryParam("type");
const name1 = getQueryParam("name");
const use = getQueryParam("use");

if (category === "Bro-bono Teacher") {
 
  document.getElementById("label1-2").innerText = subject;
  document.getElementById("label1-3").innerText = noOfStudents;
  document.getElementById("label1-4").innerText = address;
  document.getElementById("label2").innerText = "Subject:";
  document.getElementById("label3").innerText = "Number of Students:";
  document.getElementById("label4").innerText = "Address:";
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
