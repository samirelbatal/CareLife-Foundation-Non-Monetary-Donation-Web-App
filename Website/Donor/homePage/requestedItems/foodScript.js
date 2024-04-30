document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds

  // Sample data for demonstration
  const data = [
    {
      id: 1,
      name: "Apple",
      type: "Fruits & Vegetables",
      organization: "Food for All Foundation"
    },
    {
      id: 2,
      name: "Banana",
      type: "Fruits & Vegetables",
      organization: "Hope Food Bank"
    },
    {
      id: 3,
      name: "Carrot",
      type: "Fruits & Vegetables",
      organization: "Feeding America"
    },
    {
      id: 4,
      name: "Spinach",
      type: "Fruits & Vegetables",
      organization: "Nutrition Nation"
    },
    {
      id: 5,
      name: "Tomato",
      type: "Fruits & Vegetables",
      organization: "The Hunger Project"
    },
    {
      id: 6,
      name: "Canned Soup",
      type: "Canned Foods",
      organization: "Feeding America"
    },
    {
      id: 7,
      name: "Canned Tuna",
      type: "Canned Foods",
      organization: "Second Harvest"
    },
    {
      id: 8,
      name: "Canned Beans",
      type: "Canned Foods",
      organization: "Action Against Hunger"
    },
    {
      id: 9,
      name: "Canned Corn",
      type: "Canned Foods",
      organization: "Bread for the World"
    },
    {
      id: 10,
      name: "Canned Pineapple",
      type: "Canned Foods",
      organization: "Direct Relief"
    },
    {
      id: 11,
      name: "Grilled Chicken Salad",
      type: "Fresh Meals",
      organization: "Feeding America"
    },
    {
      id: 12,
      name: "Chicken Teriyaki",
      type: "Fresh Meals",
      organization: "Action Against Hunger"
    },
    {
      id: 13,
      name: "Baked Salmon with Roasted Potatoes",
      type: "Fresh Meals",
      organization: "World Central Kitchen"
    },
    {
      id: 14,
      name: "Vegetable and Quinoa Stir-Fry",
      type: "Fresh Meals",
      organization: "UNICEF USA"
    },
    {
      id: 15,
      name: "Shrimp Pasta with Garlic Bread",
      type: "Fresh Meals",
      organization: "The Hunger Project"
    },
    {
      id: 16,
      name: "Baguette",
      type: "Baked Goods",
      organization: "Action Against Hunger"
    },
    {
      id: 17,
      name: "Croissant",
      type: "Baked Goods",
      organization: "Feeding America"
    },
    {
      id: 18,
      name: "Blueberry Muffin",
      type: "Baked Goods",
      organization: "The Hunger Project"
    },
    {
      id: 19,
      name: "Chocolate Chip Cookies",
      type: "Baked Goods",
      organization: "World Central Kitchen"
    },
    {
      id: 20,
      name: "Cinnamon Rolls",
      type: "Baked Goods",
      organization: "Direct Relief"
    }
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
  function filterCardsByOptions(type) {
    const filteredCards = data.filter((card) => {
      return type === "" || card.type === type;
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
            <p class="card-text">Requested by: ${card.organization}</p>
            <a href="./detailsItems.html" class="btn btn-primary btn-block">View Details</a>
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
    filterCardsByOptions(selectedType);
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
