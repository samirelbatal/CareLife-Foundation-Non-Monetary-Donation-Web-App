
function searchUser() {
    var input, filter, table, tr, tdId, tdName, tdEmail, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("users");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        tdId = tr[i].getElementsByTagName("td")[0]; // Column index for ID
        tdName = tr[i].getElementsByTagName("td")[1]; // Column index for Name
        tdEmail = tr[i].getElementsByTagName("td")[2]; // Column index for Email
        if (tdId || tdName || tdEmail) {
            var idMatch = tdId && tdId.textContent.toUpperCase().indexOf(filter) > -1;
            var nameMatch = tdName && tdName.textContent.toUpperCase().indexOf(filter) > -1;
            var emailMatch = tdEmail && tdEmail.textContent.toUpperCase().indexOf(filter) > -1;
            tr[i].style.display = (idMatch || nameMatch || emailMatch) ? "" : "none";
        }
    }
}




// Function to add a row to the table
function addRow(id, name, email) {
    var table = document.getElementById("users");
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = id;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    // Change the account management icon to "user-cog" and trash icon for edit and delete respectively
    cell4.innerHTML = '<i class="fas fa-user-cog edit-icon" title="Account Management"></i>&nbsp;&nbsp;<i class="fas fa-trash-alt delete-icon" title="Delete"></i>';
    
    // Add click event listener to the delete icon in this row
    cell4.querySelector('.delete-icon').addEventListener('click', function() {
        // Call a function to delete the row
        deleteRow(newRow);
    });
    
    // Add click event listener to the edit icon in this row
    cell4.querySelector('.edit-icon').addEventListener('click', function() {
        // Call a function to edit the row
        editRow(id, name, email);
    });
}




// Function to delete a row
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


// Add click event listener to the "x" button in the delete confirmation modal
document.getElementById("closeDeleteConfirmationModal").addEventListener("click", function () {
    document.getElementById("deleteConfirmationModal").style.display = "none";
});

// Function to handle editing a row
function editRow(id, name, email) {
    // Get the modal
    var modal = document.getElementById("editModal");
    // Fill the form fields with current data
    document.getElementById("editId").value = id;
    document.getElementById("editName").value = name;
    document.getElementById("editEmail").value = email;
    // Show the modal
    modal.style.display = "block";
}

document.getElementById("editForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var id = document.getElementById("editId").value;
    var newName = document.getElementById("editName").value;
    var newEmail = document.getElementById("editEmail").value;

    userData.forEach((user)=>{
        if(user.id == id){
            user.name = newName;
            user.email = newEmail
        }

    })
    document.getElementById("editModal").style.display = "none";
    deleteAllRows();
    InsertAllRows()


});


// Add click event listener to the "x" button
document.getElementById("closeModal").addEventListener("click", function() {
   document.getElementById("editModal").style.display = "none";
});



function deleteAllRows() {

    var table = document.getElementById("users");

    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

function InsertAllRows() {
    userData.forEach(function(user) {
        addRow(user.id, user.name, user.email);
    });
}

var userData = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 4, name: "Michael Johnson", email: "michael@example.com" },
    { id: 5, name: "Ahmed Johnson", email: "michael@example.com" },
    { id: 6, name: "Ahmed Hany", email: "michael@example.com" },
    { id: 7, name: "yousef khalid", email: "michael@example.com" },
    { id: 8, name: "john yousef", email: "michael@example.com" }

];


InsertAllRows()


