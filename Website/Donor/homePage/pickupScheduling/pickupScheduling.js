
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