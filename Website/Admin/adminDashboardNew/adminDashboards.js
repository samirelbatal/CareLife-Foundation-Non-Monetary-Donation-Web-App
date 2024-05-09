


// Function to check if an element is the dropdown or its parent
function isDropdownOrParent(element) {
    var dropdown = document.getElementById('profile-dropdown');
    return (element === dropdown || dropdown.contains(element));
}

// Add event listener to toggle the dropdown
document.getElementById('admin-navbar-click').addEventListener('click', function(event) {
    var dropdown = document.getElementById('profile-dropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    event.stopPropagation();
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



document.getElementById('Requests-sidebar-View-Button').addEventListener('click',()=>{
    document.querySelectorAll('.Requests-Click-options').forEach(function(element){
        if (element.style.display === 'flex') {
            element.style.display = 'none';
            document.querySelector('.Requests-Arrow-Element').innerHTML = '<i class="fas fa-caret-down" title="Down"></i>';
        } else {
            element.style.display = 'flex';
            document.querySelector('.Requests-Arrow-Element').innerHTML = '<i class="fas fa-caret-up" title="Up"></i>';
        }

    })
})

document.getElementById('Requests-Donors-Click-Options').addEventListener('click', () => {
    
    window.location.href = "ManageDonorRequest.html";

    
});

document.getElementById('Requests-Organizations-Click-Options').addEventListener('click', () => {

    window.location.href = "ManageOrganizationRequest.html";
    
});


document.getElementById('Lists-sidebar-View-Button').addEventListener('click',()=>{
    document.querySelectorAll('.Lists-Click-options').forEach(function(element){
        if (element.style.display === 'flex') {
            element.style.display = 'none';
            document.querySelector('.Lists-Arrow-Element').innerHTML = '<i class="fas fa-caret-down" title="Down"></i>';
        } else {
            element.style.display = 'flex';
            document.querySelector('.Lists-Arrow-Element').innerHTML = '<i class="fas fa-caret-up" title="Up"></i>';
        }

    })
})

document.getElementById('Lists-Donors-Click-Options').addEventListener('click', () => {
    
    window.location.href = "ManageDonorRequest.html";

    
});

document.getElementById('Lists-Organizations-Click-Options').addEventListener('click', () => {

    window.location.href = "ManageOrganizationRequest.html";
    
});



