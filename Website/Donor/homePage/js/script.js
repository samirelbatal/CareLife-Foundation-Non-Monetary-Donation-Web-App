
document.addEventListener("DOMContentLoaded", function() {
  var donationRequests = document.querySelector('a[href="#team"]');
  
  var donationItems = document.querySelector('.dropdown-menu ul.dropdown-menu');

  donationItems.style.display = 'none';

  donationRequests.addEventListener("mouseover", function() {
    donationItems.style.display = 'block';
  });

  donationRequests.addEventListener("mouseout", function() {
    donationItems.style.display = 'none';
  });
});
document.addEventListener("DOMContentLoaded", function() {
var donationItems = document.querySelectorAll('.dropdown-menu ul.dropdown-menu li');

var nestedList = document.querySelector('.dropdown-menu ul.dropdown-menu');

nestedList.style.display = 'none';

donationItems.forEach(function(item) {
item.addEventListener("mouseover", function() {
nestedList.style.display = 'block';
});
});

nestedList.addEventListener("mouseout", function() {
nestedList.style.display = 'none';
});
});

document.addEventListener("DOMContentLoaded", function() {
  // Hide loader after 2 seconds
  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
  }, 1000); // 2000 milliseconds = 2 seconds
});


$(document).ready(function() {
  $('.navbar-nav .nav-item:nth-child(1)').addClass('active');

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

  
    // JavaScript to scroll to the donation section when the specific button is clicked
    document.addEventListener('DOMContentLoaded', function() {
      var specificButton = document.getElementById('specific-button-id');
      specificButton.addEventListener('click', function(event) {
        event.preventDefault();
        var donationSection = document.getElementById('donation');
        donationSection.scrollIntoView({ behavior: 'smooth' });
      });
    });