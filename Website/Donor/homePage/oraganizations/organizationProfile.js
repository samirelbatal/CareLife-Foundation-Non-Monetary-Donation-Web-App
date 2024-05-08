// Function to get URL query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Retrieve query parameters
  const id = getQueryParam("id");
  const organization = getQueryParam("organization");
  const address = getQueryParam("address");
  const area = getQueryParam("area");
  const governorate = getQueryParam("governorate");
  const type = getQueryParam("type");
  const email = getQueryParam("email");
  const telephone = getQueryParam("telephone");
  const googleMap = getQueryParam("googleMap");

   
    document.getElementById("label1-1").innerText = organization;
    document.getElementById("label1-2").innerText = telephone ;
    document.getElementById("label1-3").innerText = email;
    document.getElementById("label1-4").innerText = address;
    document.getElementById("label1-5").innerText = type;
    document.getElementById("label1").innerText = "Name:";
    document.getElementById("label2").innerText = "Mobile Number:";
    document.getElementById("label3").innerText = "Email:";
    document.getElementById("label4").innerText = "Address:";
    document.getElementById("label5").innerText = "Type:";
  
  
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