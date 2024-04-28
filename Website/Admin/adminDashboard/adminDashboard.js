// Function to add a new row to the table with specified data
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
    // Change the account management icon to "user-cog"
    cell4.innerHTML = '<i class="fas fa-user-cog edit-icon" title="Account Management"></i>&nbsp;&nbsp;<i class="fas fa-trash-alt delete-icon" title="Delete"></i>';
}

// Example data
var userData = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Michael Johnson", email: "michael@example.com" }
];

// Fill the table with example data
userData.forEach(function(user) {
    addRow(user.id, user.name, user.email);
});
