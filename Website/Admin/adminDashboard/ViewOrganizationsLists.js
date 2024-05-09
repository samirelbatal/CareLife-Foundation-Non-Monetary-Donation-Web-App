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



function addRow(id, name, email, Category, address, contact) {
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
        editRow(id, name, email, Category, address, contact);
    });

    // Add click event listener to "View Details" button in this row
    cell6.querySelector('.view-details-button').addEventListener('click', function() {
        // Call a function to show organization details
        showOrganizationDetails(id, name, email, Category, address, contact);
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

// Function to handle editing a row
function editRow(id, name, email, Category) {
    // Get the modal
    var modal = document.getElementById("editModal");
    // Fill the form fields with current data
    document.getElementById("editId").value = id;
    document.getElementById("editName").value = name;
    document.getElementById("editEmail").value = email;

    // Select the correct option in the dropdown
    var typeSelect = document.getElementById("editType");
    for (var i = 0; i < typeSelect.options.length; i++) {
        if (typeSelect.options[i].value === type.toLowerCase()) {
            typeSelect.options[i].selected = true;
            break;
        }
    }

    // Show the modal
    modal.style.display = "block";
}


document.getElementById("editForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var id = document.getElementById("editId").value;
    var newName = document.getElementById("editName").value;
    var newEmail = document.getElementById("editEmail").value;
    var newType = document.getElementById("editType").value;

    userData.forEach((user)=>{
        if(user.id == id){
            user.name = newName;
            user.email = newEmail;
            user.type = newType;
        }

    })
    document.getElementById("editModal").style.display = "none";
    deleteAllRows();
    InsertAllRows()


});

document.getElementById("closeModal").addEventListener("click", function() {
   document.getElementById("editModal").style.display = "none";
});






// Function to handle clicking on "View Details"
function showOrganizationDetails(id, name, email, Category,address, contact) {
    // Get the modal
    var modal = document.getElementById("detailsModal");
    
    // Populate organization details
    var detailsContent = `
        <p><strong>ID:</strong> ${id}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Category:</strong> ${Category}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Contact Information:</strong> ${contact}</p>
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
        addRow(user.id, user.name,user.email, user.Category,user.address,user.contact);
    });
}

var userData = [
    { 
        id: 1, 
        name: "Good 360", 
        Category: "International needs",
        address: "New York", 
        contact: "0105555333",
        email: "john@example.com" 
    },
    { 
        id: 2, 
        name: "Cru", 
        Category: "Religious",
        address: "Los Angeles", 
        contact: "0101234567",
        email: "Cru@example.com" 
    },
    { 
        id: 3, 
        name: "Easter Seals", 
        Category: "Health",
        address: "Chicago", 
        contact: "0109876543",
        email: "EasterSeals@example.com" 
    },

    { 
        id: 4, 
        name: "Make-A-Wish", 
        Category: "Youth", 
        address: "Chicago", 
        contact: "0109876543",
        email: "Make-A-Wish@example.com", 
    },

    { 
        id: 5, 
        name: "Feeding America", 
        Category: "Domestic needs", 
        address: "Chicago", 
        contact: "0109876543",
        email: "FeedingAmerica@example.com", 
    },

    { 
        id: 6, 
        name: "Scolarship America", 
        Category: "Education", 
        address: "Chicago", 
        contact: "0109876543",
        email: "ScolarShipAmerica@example.com", 
    },
    { 
        id: 7, 
        name: "American Cancer Societyt", 
        Category: "Health", 
        address: "Chicago", 
        contact: "0109876543",
        email: "Cancer@example.com", 
    },
];

InsertAllRows();
