document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.pop-image').style.display = 'block';
        document.querySelector('.pop-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.pop-image span').onclick = () => {
    document.querySelector('.pop-image').style.display = 'none';
}



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

