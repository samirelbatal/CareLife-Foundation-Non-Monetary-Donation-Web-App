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
    document.getElementById("label1-2").innerText = telephone + ", " + email;
    document.getElementById("label1-3").innerText = address;
    document.getElementById("label1-4").innerText = type;
    document.getElementById("label1").innerText = "Name:";
    document.getElementById("label2").innerText = "Contact Details:";
    document.getElementById("label3").innerText = "Address:";
    document.getElementById("label4").innerText = "Type:";
  
  
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

var subMenu = document.getElementById('subMenu');
function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}