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


function addRow(id, name, email, Category, address , status , contact , history , dateAdded , website , legalStatus) {
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
    cell4.innerHTML = Category;
    
    if (status === "Pending") {
        // If status is pending, add a button
        cell5.innerHTML = "<button class='view-details-button'>Pending</button>";
        // Add click event listener to the button
        cell5.querySelector('.view-details-button').addEventListener('click', function() {
            // Call a function to show organization details
            showOrganizationDetails(id, name, email, Category, address , status , contact , history , dateAdded , website , legalStatus);
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



function showOrganizationDetails(id, name, email, Category, address , status , contact , history , dateAdded , website , legalStatus) {
    // Get the modal
    var modal = document.getElementById("detailsModal");
    
    // Construct the image source path
    var imagePath = "/Website\\Admin\\adminDashboard\\OrganizationImages\\" + name + ".jpg";
    
    // Populate organization details
    var detailsContent = `
        <button id="downloadBtn" onclick="downloadDocument('${name}')">Download Document</button>
        <p><img src="${imagePath}" alt="Photo"></p>
        <p><strong> Request ID:</strong> ${id}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Category:</strong> ${Category}</p>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>History:</strong> ${history}</p>
        <p><strong>Date Added:</strong> ${dateAdded}</p>
        <p><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></p>
        <p><strong>Legal Status:</strong> ${legalStatus}</p>

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
        addRow(user.id, user.name, user.email, user.Category, user.address , user.status , user.contact , user.history , user.dateAdded , user.website , user.legalStatus);
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
        status: "Pending",
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
        status: "Pending",
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
        status: "Pending",
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
        status: "Pending",
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
        status: "Pending",
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
        status: "Pending",
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
        status: "Pending",
        history: "The American Cancer Society is a nationwide voluntary health organization dedicated to eliminating cancer.",
        dateAdded: "2024-05-09",
        website: "https://www.cancer.org/",
        legalStatus: "Nonprofit",
    }
];


InsertAllRows();
