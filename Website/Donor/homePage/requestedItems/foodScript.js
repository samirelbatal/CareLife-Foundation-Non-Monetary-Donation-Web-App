document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds

  // Sample data for demonstration
  const data = [
    {
      id: 1,
      name: "Organization 1",
      type: "Fruits and Vegetables"
    },
    {
      id: 2,
      name: "Organization 2",
      type: "Canned Foods"
    },
    {
      id: 3,
      name: "Organization 3",
      type: "Fresh Meals"
    },
    {
      id: 4,
      name: "Organization 4",
      type: "Baked Goods"
    },
    
    {
      id: 5,
      name: "Organization 2",
      type: "Canned Foods"
    },
    {
      id: 6,
      name: "Organization 3",
      type: "Fresh Meals"
    },
    {
      id: 7,
      name: "Organization 4",
      type: "Baked Goods"
    },
    
    {
      id: 8,
      name: "Organization 2",
      type: "Canned Foods"
    },
    {
      id: 9,
      name: "Organization 3",
      type: "Fresh Meals"
    },
    {
      id: 10,
      name: "Organization 4",
      type: "Baked Goods"
    },
    
    {
      id: 1,
      name: "Organization 2",
      type: "Canned Foods"
    },
    {
      id: 1,
      name: "Organization 3",
      type: "Fresh Meals"
    },
    {
      id: 1,
      name: "Organization 4",
      type: "Baked Goods"
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
  populateDropdownOptions("type-dropdown", "type");
  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions( type) {
    const filteredCards = data.filter((card) => {
      return (
        (type === "" || card.type === type)
      );
    });
    renderCards(filteredCards);
  }

  function createCardHTML(card) {
    return `
      <div class="col-lg-4 mb-4">
        <div class="card toy-donation-requests text-center"> <!-- Updated class to 'toy-donation-requests' and added 'text-center' class -->
          <div class="card-body">
            <img src="../img/don/shopping-bag.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">Type: ${card.type}</p>
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
      const selectedType = document.getElementById("type-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions( selectedType);
  });

  // Event listener for search/filter button
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value.trim();

    // If search term is not empty, filter by search term
    filterCards(searchTerm);
  });

  // Function to filter cards based on search input
  function filterCards(searchTerm) {
    const filteredCards = data.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderCards(filteredCards);
  }
});
