document.addEventListener("DOMContentLoaded", function () {
  // Sample data for demonstration
  const data = [
    {
      id: 1,
      name: "Organization 1",
      Hospital: "Hospital 1",
      Area: "Area 2",
      Governorate: "Governorate 1"
    },
    {
      id: 2,
      name: "Organization 1",
      Hospital: "Hospital 1",
      Area: "Area 1",
      Governorate: "Governorate 2"
    },
    {
      id: 3,
      name: "Organization 1",
      Hospital: "Hospital 2",
      Area: "Area 2",
      Governorate: "Governorate 1"
    },
    {
      id: 4,
      name: "Organization 1",
      Hospital: "Hospital 2",
      Area: "Area 1",
      Governorate: "Governorate 2"
    },

    // Add more organizations here if needed
  ];

  // Function to populate dropdown options
  function populateDropdownOptions(dropdownId, propertyName) {
    const dropdown = document.getElementById(dropdownId);
    const options = [...new Set(data.map((item) => item[propertyName]))]; // Get unique values
    options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.textContent = option;
      optionElement.value = option;
      dropdown.appendChild(optionElement);
    });
  }

  // Populate dropdown options
  populateDropdownOptions("hospital-dropdown", "Hospital");
  populateDropdownOptions("governorate-dropdown", "Governorate");
  populateDropdownOptions("type-dropdown", "Area");

  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(hospital, governorate, type) {
    const filteredCards = data.filter((card) => {
      return (
        (hospital === "" || card.Hospital === hospital) &&
        (governorate === "" || card.Governorate === governorate) &&
        (type === "" || card.Area === type)
      );
    });
    renderCards(filteredCards);
  }

  function createCardHTML(card) {
    return `
      <div class="col-lg-4 mb-4">
        <div class="card toy-donation-requests text-center"> <!-- Updated class to 'toy-donation-requests' and added 'text-center' class -->
          <div class="card-body">
            <img src="../img/don/bloodDonation.jpg" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">Type: ${card.Area}</p>
            <p class="card-text">Hospital: ${card.Hospital}</p>
            <p class="card-text">Governorate: ${card.Governorate}</p>
            <a href="organizationProfile.html" class="btn btn-primary btn-block">View Details</a>
          </div>
        </div>
      </div>
    `;
  }

  // Function to render cards
  function renderCards(cards) {
    const container = document.getElementById("cardContainer");
    container.innerHTML = ""; // Clear existing cards

    cards.forEach((card) => {
      const cardHTML = createCardHTML(card);
      container.innerHTML += cardHTML;
    });
  }

  // Initial rendering of all cards
  renderCards(data);

  // Event listener for search/filter button
  const filterButton = document.getElementById("filter-button");
  filterButton.addEventListener("click", () => {
    const selectedArea = document.getElementById("hospital-dropdown").value;
    const selectedGovernorate =
      document.getElementById("governorate-dropdown").value;
    const selectedType = document.getElementById("type-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedArea, selectedGovernorate, selectedType);
  });

  // Function to filter cards based on search input
  function filterCards(searchTerm) {
    const filteredCards = data.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderCards(filteredCards);
  }
});
