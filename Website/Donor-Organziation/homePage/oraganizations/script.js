// Define organizations data (sample data)
const organizations = [
    { name: "Organization 1", area: "Area 1", governorate: "Governorate X", type: "Type A" },
    { name: "Organization 2", area: "Area 2", governorate: "Governorate Y", type: "Type B" },
    // Add more organizations here...
];

// Function to display organizations based on search and filters
// Function to display organizations based on search and filters
function displayOrganizations(organizationsToShow) {
    const organizationsContainer = document.getElementById("organizations-container");
    organizationsContainer.innerHTML = ""; // Clear previous content

    organizationsToShow.forEach(org => {
        // Create HTML elements for card
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("col-md-4"); // Bootstrap column class
        cardDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${org.name}</h5>
                    <p class="card-text">Area: ${org.area}</p>
                    <p class="card-text">Governorate: ${org.governorate}</p>
                    <p class="card-text">Type: ${org.type}</p>
                </div>
            </div>
        `;
        // Append cardDiv to organizationsContainer
        organizationsContainer.appendChild(cardDiv);
    });
}


// Function to handle search input
function handleSearchInput() {
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredOrganizations = organizations.filter(org =>
        org.name.toLowerCase().includes(searchTerm)
    );

    displayOrganizations(filteredOrganizations);
}

// Function to handle filter selection
function handleFilterSelection() {
    const areaFilter = document.getElementById("area-filter").value;
    const governorateFilter = document.getElementById("governorate-filter").value;
    const typeFilter = document.getElementById("type-filter").value;

    const filteredOrganizations = organizations.filter(org =>
        (areaFilter === "All" || org.area === areaFilter) &&
        (governorateFilter === "All" || org.governorate === governorateFilter) &&
        (typeFilter === "All" || org.type === typeFilter)
    );

    displayOrganizations(filteredOrganizations);
}

// Event listeners for search input and filter selections
document.getElementById("search-input").addEventListener("input", handleSearchInput);
document.getElementById("area-filter").addEventListener("change", handleFilterSelection);
document.getElementById("governorate-filter").addEventListener("change", handleFilterSelection);
document.getElementById("type-filter").addEventListener("change", handleFilterSelection);

// Initial display of organizations (all organizations)
displayOrganizations(organizations);
