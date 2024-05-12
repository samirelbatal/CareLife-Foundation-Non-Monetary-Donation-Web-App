
// Function to check if an element is the dropdown or its parent
function isDropdownOrParent(element) {
    var dropdown = document.getElementById('profile-dropdown');
    return (element === dropdown || dropdown.contains(element));
}

// Add event listener to toggle the dropdown
document.getElementById('admin-navbar-click').addEventListener('click', function(event) {
    toggleMenu();
});

document.body.addEventListener('click', function(event) {
    var dropdown = document.getElementById('profile-dropdown');

    var target = event.target;
    if (!isDropdownOrParent(target)) {
        dropdown.style.display = 'none';

    }
    

});








document.getElementById('Dashboard-Click-Options').addEventListener('click', () => {
    
    window.location.href = "adminDashboard.html";


});


function toggleMessagesDropdown() {
    var messageDropdown = document.getElementById("message-dropdown");
    var profileDropdown = document.getElementById("profile-dropdown");

    if (messageDropdown.style.display === "none" || messageDropdown.style.display === "") {
        messageDropdown.style.display = "block";
        profileDropdown.style.display = "none"; // Hide profile dropdown
    } else {
        messageDropdown.style.display = "none";
    }
}


document.getElementById('sidebar-View-Button').addEventListener('click', () => {
    document.querySelectorAll('.View-Click-options').forEach(function(element) {
        if (element.style.display === 'flex') {
            element.style.display = 'none';
            document.querySelector('.View-Arrow-Element').innerHTML = '<i class="fas fa-caret-down" title="Down"></i>';
        } else {
            element.style.display = 'flex';
            document.querySelector('.View-Arrow-Element').innerHTML = '<i class="fas fa-caret-up" title="Up"></i>';
        }
    });
});


document.getElementById('Donors-Click-Options').addEventListener('click', () => {
    
    window.location.href = "ViewDonorsLists.html";

    
});

document.getElementById('Organizations-Click-Options').addEventListener('click', () => {

    window.location.href = "ViewOrganizationsLists.html";
    
});




document.getElementById('Submisson-sidebar-View-Button').addEventListener('click',()=>{
    document.querySelectorAll('.Submissions-Click-options').forEach(function(element){
        if (element.style.display === 'flex') {
            element.style.display = 'none';
            document.querySelector('.Submission-Arrow-Element').innerHTML = '<i class="fas fa-caret-down" title="Down"></i>';
        } else {
            element.style.display = 'flex';
            document.querySelector('.Submission-Arrow-Element').innerHTML = '<i class="fas fa-caret-up" title="Up"></i>';
        }

    })
})

document.getElementById('Submissions-Donors-Click-Options').addEventListener('click', () => {
    
    window.location.href = "ReviewDonorSubmission.html";

    
});

document.getElementById('Submissions-Organizations-Click-Options').addEventListener('click', () => {

    window.location.href = "ReviewOrganizationsSubmission.html";
    
});




 function toggleBell() {
    // Check if subMenu2 is open, if yes, close it
    if (subMenu1.classList.contains("open-menu")) {
      subMenu1.classList.remove("open-menu");
    }
    // Toggle open-menu class for subMenu1
    subMenu2.classList.toggle("open-menu");
  }
   function toggleMenu() {
    // Check if subMenu2 is open, if yes, close it
    if (subMenu2.classList.contains("open-menu")) {
      subMenu2.classList.remove("open-menu");
    }
    // Toggle open-menu class for subMenu1
    subMenu1.classList.toggle("open-menu");
  }




