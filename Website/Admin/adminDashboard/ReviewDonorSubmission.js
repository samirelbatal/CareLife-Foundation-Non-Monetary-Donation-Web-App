function searchUser() {
    var input, filter, table, tr, tdId, tdName, tdEmail, i , ttype;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("users");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        tdId = tr[i].getElementsByTagName("td")[0]; // Column index for ID
        tdName = tr[i].getElementsByTagName("td")[1]; // Column index for Name
        tdEmail = tr[i].getElementsByTagName("td")[2]; // Column index for Email
        ttype = tr[i].getElementsByTagName("td")[3];
        if (tdId || tdName || tdEmail || ttype) {
            var idMatch = tdId && tdId.textContent.toUpperCase().indexOf(filter) > -1;
            var nameMatch = tdName && tdName.textContent.toUpperCase().indexOf(filter) > -1;
            var emailMatch = tdEmail && tdEmail.textContent.toUpperCase().indexOf(filter) > -1;
            var typeMatch = ttype && ttype.textContent.toUpperCase().indexOf(filter) > -1;

            tr[i].style.display = (idMatch || nameMatch || emailMatch || typeMatch) ? "" : "none";
        }
    }
}

function filterByVolunteer() {
    var selectElement = document.getElementById("volunteerSelect");
    var selectedValue = selectElement.value;
    deleteAllRows();

    if (selectedValue === 'all') {
        InsertAllRows();
    } else if (selectedValue === "Accepted" || selectedValue === "Rejected" || selectedValue === "Pending") {
        userData.forEach(function(user) {
            if (user.status === selectedValue) {
                addRow(user.id, user.name, user.email, user.volunteer, user.comment, user.status);
            }
        });
    }
}



function addRow(id, name, email, volunteer, comment, status) {
    var table = document.getElementById("users");
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    
    cell1.innerHTML = id;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = volunteer;
    
    if (status === "Pending") {
        // If status is pending, add a button
        cell5.innerHTML = "<button class='view-details-button'>Pending</button>";
        // Add click event listener to the button
        cell5.querySelector('.view-details-button').addEventListener('click', function() {
            // Call a function to show organization details
            showOrganizationDetails(id, name, email, volunteer, comment, status);
        });
    } else if(status === "Accepted") {
        // If status is accepted, display "Accepted" with green color
        cell5.innerHTML = "Accepted";
        cell5.classList.add('accepted'); // Add accepted class for green color
    } else {
        // If status is rejected, display "Rejected" with red color
        cell5.innerHTML = "Rejected";
        cell5.classList.add('rejected'); // Add rejected class for red color
    }
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






// Function to handle clicking on "View Details"
function showOrganizationDetails(id, name, email, volunteer, comment, status) {
    // Get the modal
    var modal = document.getElementById("detailsModal");
    
    // Populate organization details
    var detailsContent = `
        <button id="downloadBtn" onclick="downloadDocument('${name}')">Download Document</button>
        <p><strong>ID:</strong> ${id}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Volunteer:</strong> ${volunteer}</p>
        <p><strong>Message:</strong> ${comment}</p>
        <button class="accept-button" onclick="accept(${id})">Accept</button>
        <button class="reject-button" onclick="reject(${id})">Reject</button>
    `;
    document.getElementById("organizationDetails").innerHTML = detailsContent;

    // Show the modal
    modal.style.display = "block";
}


function downloadDocument(name) {
    // You need to replace 'your_document_url' with the actual URL of the document you want to download
    var documentUrl = "/path/to/your/document/" + name + ".pdf";
    var a = document.createElement('a');
    a.href = documentUrl;
    a.download = name + ".pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


function accept(id){

    document.getElementById("acceptConfirmationModal").style.display = "block";

    document.getElementById("confirmAccept").addEventListener("click", function() {
        acceptConfirmed(id);
        document.getElementById("acceptConfirmationModal").style.display = "none";
        document.getElementById("detailsModal").style.display = "none";
    });


}

function reject(id){

    document.getElementById("rejectConfirmationModal").style.display = "block";

    document.getElementById("confirmReject").addEventListener("click", function() {
        rejectConfirmed(id);
        document.getElementById("rejectConfirmationModal").style.display = "none";
        document.getElementById("detailsModal").style.display = "none";
    });
}


function acceptConfirmed(id) {
    // Find the user in the userData array by id
    var user = userData.find(function(user) {
        return user.id === id;
    });

    // If the user is found, update the status to "Accepted"
    if (user) {
        user.status = "Accepted";
    }

    // Update the UI to reflect the status change
    deleteAllRows();
    InsertAllRows();
}

// Function to handle reject after confirmation
function rejectConfirmed(id) {
    // Find the user in the userData array by id
    var user = userData.find(function(user) {
        return user.id === id;
    });

    // If the user is found, update the status to "Rejected"
    if (user) {
        user.status = "Rejected";
    }

    // Update the UI to reflect the status change
    deleteAllRows();
    InsertAllRows();

    // Close the rejection confirmation modal
}



//Close the modal when clicking on the close button
document.getElementById("closeDetailsModal").addEventListener("click", function () {
    document.getElementById("detailsModal").style.display = "none";
});

document.getElementById("closeAcceptConfirmationModal").addEventListener("click", function () {
    document.getElementById("acceptConfirmationModal").style.display = "none";

});

document.getElementById("closeRejectConfirmationModal").addEventListener("click", function () {
    document.getElementById("rejectConfirmationModal").style.display = "none";

});

function deleteAllRows() {

    var table = document.getElementById("users");

    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}


function InsertAllRows() {
    userData.forEach(function(user) {
        addRow(user.id, user.name,user.email,user.volunteer,user.comment,user.status);
    });
}



var userData = [
    { 
        id: 1, 
        name: "John Doe", 
        email: "john@example.com", 
        volunteer: "Teacher", 
        comment: "I want to become a teacher volunteer in this charity",
        status:"Pending"

    },
    { 
        id: 2, 
        name: "Jane Smith", 
        email: "jane@example.com", 
        volunteer: "Doctor", // Changed volunteer type to Doctor
        comment: "I'm a medical professional and want to volunteer as a doctor.",
        status:"Pending"

    },
    { 
        id: 4, 
        name: "Michael Johnson", 
        email: "michael@example.com", 
        volunteer: "Doctor", // Changed volunteer type to Doctor
        comment: "I'm a doctor and want to volunteer my medical skills.",
        status:"Pending"

    },
    { 
        id: 5, 
        name: "Ahmed Johnson", 
        email: "ahmed@example.com", 
        volunteer: "Teacher", 
        comment: "I want to volunteer as a teacher to help others.",
        status:"Accepted"

    },
    { 
        id: 6, 
        name: "Ahmed Hany", 
        email: "ahmedh@example.com", 
        volunteer: "Doctor", // Changed volunteer type to Doctor
        comment: "I'm a doctor specializing in pediatric care and want to volunteer.",
        status:"Pending"

    },
    { 
        id: 7, 
        name: "Yousef Khalid", 
        email: "yousef@example.com", 
        volunteer: "Teacher", 
        comment: "Teaching is my calling, and I want to volunteer in this charity.",
        status:"Pending"

    },
    { 
        id: 8, 
        name: "John Yousef", 
        email: "johny@example.com", 
        volunteer: "Doctor", // Changed volunteer type to Doctor
        comment: "I'm a surgeon and want to volunteer my expertise for a good cause.",
        status:"Pending"
    }
];

InsertAllRows();


