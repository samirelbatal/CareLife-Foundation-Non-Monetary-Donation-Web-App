// Function to get URL query parameters





  
const data = [
  {
      id: 1,
      name: "Red Crescent",
      governorate: "Cairo",
      area: "Garden City",
      type: "Humanitarian",
      address: "3, Near IT Park, GT Road, Lahore 440000",
      telephone: "+20 300599959",
      email: "foundation@carelife.com"
  },
  {
      id: 2,
      name: "Save the Children",
      governorate: "Alexandria",
      area: "Raml Station",
      type: "Non-profit",
      address: "5th Floor, Building 15, El-Nozha St, Roushdy, Alexandria",
      telephone: "+20 312345678",
      email: "info@savethechildren.org.eg"
  },
  {
      id: 3,
      name: "UNICEF",
      governorate: "Giza",
      area: "Mohandessin",
      type: "Non-profit",
      address: "2 El Hegaz St., Mohandessin, Giza",
      telephone: "+20 298765432",
      email: "cairo@unicef.org"
  },
  {
      id: 4,
      name: "Doctors Without Borders",
      governorate: "Giza",
      area: "Dokki",
      type: "Non-profit",
      address: "16 Ismail Mohamed St., Dokki, Giza",
      telephone: "+20 211223344",
      email: "contact@egypt.msf.org"
  },
  {
      id: 5,
      name: "Egyptian Food Bank",
      governorate: "Cairo",
      area: "Zamalek",
      type: "Non-profit",
      address: "32 Abdel Moneim Riyad Square, Mohandessin, Giza",
      telephone: "+20 255556666",
      email: "info@foodbank.com.eg"
  },
  {
      id: 6,
      name: "Islamic Relief",
      governorate: "Cairo",
      area: "Nasr City",
      type: "Non-profit",
      address: "27 Ahmed Heshmat St., Zamalek, Cairo",
      telephone: "+20 277778888",
      email: "info@islamic-relief.org.eg"
  },
  {
      id: 7,
      name: "Orman Charity Association",
      governorate: "Giza",
      area: "Orman",
      type: "Non-profit",
      address: "20 El-Khalifa El-Maamoun St., Giza",
      telephone: "+20 299990000",
      email: "info@orman.org.eg"
  },
  {
      id: 8,
      name: "Misr El Kheir Foundation",
      governorate: "Cairo",
      area: "Heliopolis",
      type: "Non-profit",
      address: "Building #6, Block #17, Nasr City, Cairo",
      telephone: "+20 211112222",
      email: "info@misrelkheir.org"
  },
  {
      id: 9,
      name: "Egyptian Cancer Network",
      governorate: "Giza",
      area: "Sheikh Zayed",
      type: "Non-profit",
      address: "Building 1, 4th floor, Sodic East, Sheikh Zayed, Giza",
      telephone: "+20 233334444",
      email: "info@egyptiancancernetwork.org"
  },
  {
      id: 10,
      name: "Egyptian Red Crescent",
      governorate: "Alexandria",
      area: "Smouha",
      type: "Non-profit",
      address: "11 El Nasr St., Cleopatra, Alexandria",
      telephone: "+20 377776666",
      email: "info@egyptianredcrescent.org.eg"
  },
  {
      id: 11,
      name: "Egyptian Food Bank",
      governorate: "Alexandria",
      area: "Roushdy",
      type: "Non-profit",
      address: "15 Ahmed Shawky St., Roushdy, Alexandria",
      telephone: "+20 399998888",
      email: "info@efbalex.org.eg"
  },
  {
      id: 12,
      name: "Coptic Orphans",
      governorate: "Giza",
      area: "Zamalek",
      type: "Non-profit",
      address: "23 Abu El Feda St., Zamalek, Cairo",
      telephone: "+20 288887777",
      email: "info@copticorphans.org"
  }
];


function getInfoById(id) {
  return data.find(entry => entry.id === parseInt(id));
}

// Retrieve query parameters
const id = getQueryParam("id");
const info = getInfoById(id);

if (info) {
  document.getElementById("label1-1").innerText = info.name;
  document.getElementById("label1-2").innerText = info.telephone;
  document.getElementById("label1-3").innerText = info.email;
  document.getElementById("label1-4").innerText = info.address;
  document.getElementById("label1-5").innerText = info.governorate;
  document.getElementById("label1").innerText = "Name:";
  document.getElementById("label2").innerText = "Telephone Number:";
  document.getElementById("label3").innerText = "Email:";
  document.getElementById("label4").innerText = "Address:";
  document.getElementById("label5").innerText = "Governorate:";
} else {
  console.error("No information found for the provided ID.");
}




function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
 
  const name = getQueryParam("name");
  const address = getQueryParam("address");
  const area = getQueryParam("area");
  const governorate = getQueryParam("governorate");
  const type = getQueryParam("type");
  const email = getQueryParam("email");
  const telephone = getQueryParam("telephone");
  const googleMap = getQueryParam("googleMap");


  
  document.addEventListener("DOMContentLoaded", function() {
      // Hide loader after 2 seconds
      setTimeout(function() {
        document.getElementById("loader").style.display = "none";
      }, 1000); // 2000 milliseconds = 2 seconds
    });
    

    
$(document).ready(function() {
  $('.navbar-nav .nav-item:nth-child(3)').addClass('active');

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


document.addEventListener('DOMContentLoaded', function () {
  const exitButtons = document.querySelectorAll('.donate-btn');

  // Loop through each "Exit" button and add a click event listener
  exitButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default action of the button

      // Navigate back to the previous page
      window.history.back();
    });
  });
});