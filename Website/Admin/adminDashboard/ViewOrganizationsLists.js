function searchUser() {
    var input, filter, table, tr, tdId, tdName, tdEmail, i , tCategory;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("users");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        tdId = tr[i].getElementsByTagName("td")[0]; // Column index for ID
        tdName = tr[i].getElementsByTagName("td")[1]; // Column index for Name
        tdEmail = tr[i].getElementsByTagName("td")[2]; // Column index for Email
        tCategory = tr[i].getElementsByTagName("td")[3];
        if (tdId || tdName || tdEmail || tCategory) {
            var idMatch = tdId && tdId.textContent.toUpperCase().indexOf(filter) > -1;
            var nameMatch = tdName && tdName.textContent.toUpperCase().indexOf(filter) > -1;
            var emailMatch = tdEmail && tdEmail.textContent.toUpperCase().indexOf(filter) > -1;
            var CategoryMatch = tCategory && tCategory.textContent.toUpperCase().indexOf(filter) > -1;

            tr[i].style.display = (idMatch || nameMatch || emailMatch || CategoryMatch) ? "" : "none";
        }
    }
}



function addRow(id, name, email, Category, address, contact, history, dateAdded, website, legalStatus) {
    var table = document.getElementById("users");
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    cell1.innerHTML = id;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = Category;
    cell6.innerHTML = "<button class='view-details-button'>View Details</button>"
    // Change the account management icon to "user-cog" and trash icon for edit and delete respectively
    cell5.innerHTML = '<i class="fas fa-user-cog edit-icon" title="Account Management"></i>&nbsp;&nbsp;<i class="fas fa-trash-alt delete-icon" title="Delete"></i>';
    
    // Add click event listener to the delete icon in this row
    cell5.querySelector('.delete-icon').addEventListener('click', function() {
        // Call a function to delete the row
        deleteRow(newRow);
    });
    
    // Add click event listener to the edit icon in this row
    cell5.querySelector('.edit-icon').addEventListener('click', function() {
        // Call a function to edit the row
        editRow(id, name, email, Category, address, contact, history, dateAdded, website, legalStatus);
    });

    // Add click event listener to "View Details" button in this row
    cell6.querySelector('.view-details-button').addEventListener('click', function() {
        // Call a function to show organization details
        showOrganizationDetails(id, name, email, Category, address, contact, history, dateAdded, website, legalStatus);
    });
}




function deleteRow(row, index) {
    var deleteConfirmationModal = document.getElementById("deleteConfirmationModal");
    var confirmDeleteButton = document.getElementById("confirmDelete");
    var cancelDeleteButton = document.getElementById("cancelDelete");

    // Show the confirmation modal
    deleteConfirmationModal.style.display = "block";

    // Listen for click on the confirm delete button
    confirmDeleteButton.onclick = function () {
        // Delete the row if confirmed
        row.parentNode.removeChild(row);
        // Remove the corresponding object from the array
        userData.splice(index, 1);
        // Close the confirmation modal
        deleteConfirmationModal.style.display = "none";
    };

    // Listen for click on the cancel delete button
    cancelDeleteButton.onclick = function () {
        // Close the confirmation modal without deleting
        deleteConfirmationModal.style.display = "none";
    };
}





document.getElementById("closeDeleteConfirmationModal").addEventListener("click", function () {
    document.getElementById("deleteConfirmationModal").style.display = "none";
});





function editRow(id, name, email, Category, address, contact, history, dateAdded, website, legalStatus) {
    // Get the modal
    var modal = document.getElementById("editModal");
    // Fill the form fields with current data
    document.getElementById("editId").value = id;
    document.getElementById("editName").value = name;
    document.getElementById("editEmail").value = email;
    document.getElementById("editAddress").value = address;
    document.getElementById("editContact").value = contact;
    document.getElementById("editHistory").value = history;
    document.getElementById("editWebsite").value = website;
    document.getElementById("editLegalStatus").value = legalStatus;



    // Select the correct option in the dropdown
    var typeSelect = document.getElementById("editType");
    for (var i = 0; i < typeSelect.options.length; i++) {
        if (typeSelect.options[i].value.toLowerCase() === Category.toLowerCase()) {
            typeSelect.options[i].selected = true;
            break;
        }
    }

    // Show the modal
    modal.style.display = "block";

    // Add event listener to the form submission
    document.getElementById("editForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        

        // Close the modal
        modal.style.display = "none";
    });
}

document.getElementById("editForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var id = document.getElementById("editId").value;
    var newName = document.getElementById("editName").value;
    var newEmail = document.getElementById("editEmail").value;
    var newAddress = document.getElementById("editAddress").value 
    var newContact = document.getElementById("editContact").value 
    var newHistory = document.getElementById("editHistory").value 
    var newWebsite = document.getElementById("editWebsite").value 
    var newCategory = document.getElementById("editType").value;

    // Update userData array
    userData.forEach((user) => {
        if (user.id == id) {
            user.name = newName;
            user.email = newEmail;
            user.Category = newCategory;
            user.address = newAddress;
            user.contact = newContact;
            user.history = newHistory;
            user.newWebsite =newWebsite;
        }
    });

    // Close the modal and update the table
    document.getElementById("editModal").style.display = "none";
    deleteAllRows();
    InsertAllRows(); // Assuming this function is defined to re-insert all rows based on the updated userData array
});




document.getElementById("closeModal").addEventListener("click", function() {
   document.getElementById("editModal").style.display = "none";
});






// Function to handle clicking on "View Details"
function showOrganizationDetails(id, name, email, Category, address, contact, history, dateAdded, website, legalStatus) {
    // Get the modal
    var modal = document.getElementById("detailsModal");

    var imagePath = "/Website\\Admin\\adminDashboard\\OrganizationImages\\" + name + ".jpg";

    
    // Populate organization details
    var detailsContent = `
    <p><img src="${imagePath}" alt="Photo"></p>
    <p><strong> Organization ID:</strong> ${id}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Contact:</strong> ${contact}</p>
    <p><strong>Category:</strong> ${Category}</p>
    <p><strong>History:</strong> ${history}</p>
    <p><strong>Date Added:</strong> ${dateAdded}</p>
    <p><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></p>
    <p><strong>Legal Status:</strong> ${legalStatus}</p>
    `;
    document.getElementById("organizationDetails").innerHTML = detailsContent;
    // Show the modal
    modal.style.display = "block";
}

// Close the modal when clicking on the close button
document.getElementById("closeDetailsModal").addEventListener("click", function () {
    document.getElementById("detailsModal").style.display = "none";
});


function deleteAllRows() {

    var table = document.getElementById("users");

    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}


function InsertAllRows() {
    userData.forEach(function(user) {
        addRow(user.id, user.name, user.email, user.Category, user.address, user.contact, user.history, user.dateAdded, user.website, user.legalStatus);
    });
}

var userData = [
    { 
        id: 1, 
        name: "Good 360", 
        email: "Good360@example.com", 
        Category: "International needs",
        address: "New York", 
        contact: "0105555333",
        history: "Good 360 was founded in 2009 with the goal of providing essential goods to those in need around the world.",
        dateAdded: "2024-05-09",
        website: "https://www.good360.org/",
        legalStatus: "Nonprofit",
    },
    { 
        id: 2, 
        name: "Cru", 
        email: "Cru@example.com", 
        Category: "Religious", 
        address: "Los Angeles", 
        contact: "0101234567",
        history: "Cru is a Christian ministry organization that focuses on sharing the message of Jesus Christ.",
        dateAdded: "2024-05-09",
        website: "https://www.cru.org/",
        legalStatus: "Nonprofit",
    },
    { 
        id: 3, 
        name: "Easter Seals", 
        email: "EasterSeals@example.com", 
        Category: "Health", 
        address: "Chicago", 
        contact: "0109876543",
        history: "Easter Seals provides services to people with disabilities and special needs.",
        dateAdded: "2024-05-09",
        website: "https://www.easterseals.com/",
        legalStatus: "Nonprofit",
    },
    { 
        id: 4, 
        name: "Make-A-Wish", 
        email: "Make-A-Wish@example.com", 
        Category: "Youth",
        address: "Chicago", 
        contact: "0109876543", 
        history: "Make-A-Wish Foundation is a nonprofit organization that arranges experiences described as 'wishes' to children with critical illnesses.",
        dateAdded: "2024-05-09",
        website: "https://wish.org/",
        legalStatus: "Nonprofit",
    },
    { 
        id: 5, 
        name: "Feeding America", 
        email: "FeedingAmerica@example.com", 
        Category: "Domestic needs", 
        address: "Chicago", 
        contact: "0109876543",
        history: "Feeding America is the nation's largest domestic hunger-relief organization.",
        dateAdded: "2024-05-09",
        website: "https://www.feedingamerica.org/",
        legalStatus: "Nonprofit",
    },
    { 
        id: 6, 
        name: "Scholarship America", 
        email: "ScholarshipAmerica@example.com", 
        Category: "Education",
        address: "Minneapolis", 
        contact: "0109876543", 
        history: "Scholarship America mobilizes support for students getting into and graduating from college.",
        dateAdded: "2024-05-09",
        website: "https://scholarshipamerica.org/",
        legalStatus: "Nonprofit",
    },
    { 
        id: 7, 
        name: "American Cancer Society", 
        email: "Cancer@example.com", 
        Category: "Health",
        address: "Atlanta", 
        contact: "0109876543", 
        history: "The American Cancer Society is a nationwide voluntary health organization dedicated to eliminating cancer.",
        dateAdded: "2024-05-09",
        website: "https://www.cancer.org/",
        legalStatus: "Nonprofit",
    }
];

InsertAllRows();
