document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds

  // Sample data for demonstration
  const data = [
    {
      id: 1,
      name: "Organization 1",
      age: "10 Years",
      gender: "Boy",
      type: "Doll",
    },
    {
      id: 1,
      name: "Organization 2",
      age: "10 Years",
      gender: "Boy",
      type: "Doll",
    },
    {
      id: 1,
      name: "Organization 3",
      age: "10 Years",
      gender: "Boy",
      type: "Board Game",
    },
    {
      id: 1,
      name: "Organization 4",
      age: "5 Years",
      gender: "Girl",
      type: "Doll",
    },
    {
      id: 1,
      name: "Organization 5",
      age: "10 Years",
      gender: "Boy",
      type: "Doll",
    },
    {
      id: 1,
      name: "Organization 6",
      age: "10 Years",
      gender: "Boy",
      type: "Board Game",
    },
    {
      id: 1,
      name: "Organization 7",
      age: "5 Years",
      gender: "Girl",
      type: "Doll",
    }
    ,
    {
      id: 1,
      name: "Organization 8",
      age: "10 Years",
      gender: "Boy",
      type: "Doll",
    },
    {
      id: 1,
      name: "Organization 9",
      age: "10 Years",
      gender: "Boy",
      type: "Board Game",
    },
    {
      id: 1,
      name: "Organization 10",
      age: "5 Years",
      gender: "Girl",
      type: "Doll",
    },
    
    {
      id: 1,
      name: "Organization 1",
      age: "10 Years",
      gender: "Boy",
      type: "Board Game",
    },
    {
      id: 1,
      name: "Organization 2",
      age: "5 Years",
      gender: "Girl",
      type: "Doll",
    },
    
    {
      id: 1,
      name: "Organization 3",
      age: "10 Years",
      gender: "Boy",
      type: "Board Game",
    },
    {
      id: 1,
      name: "Organization 10",
      age: "5 Years",
      gender: "Girl",
      type: "Doll",
    },
    
    {
      id: 1,
      name: "Organization 4",
      age: "10 Years",
      gender: "Boy",
      type: "Board Game",
    },
    {
      id: 1,
      name: "Organization 5",
      age: "5 Years",
      gender: "Girl",
      type: "Doll",
    },
    
    {
      id: 1,
      type:"clothes",
      name: "Organization 6",
      age: "10 Years",
      gender: "Boy",
      type: "Board Game",
    },
    {
      id: 1,
      type:"blood",
      name: "Organization 16",
      age: "5 Years",
      gender: "Girl",
      type: "Doll",
    },
    
    {
      id: 1,
      type:"food",
      name: "Organization 7",
      age: "10 Years",
      gender: "Boy",
      type: "Board Game",
    },
    {
      id: 1,
      type:"toy",
      name: "Organization 8",
      age: "5 Years",
      gender: "Girl",
      type: "Doll",
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
  populateDropdownOptions("age-dropdown", "age");
  populateDropdownOptions("gender-dropdown", "gender");
  populateDropdownOptions("type-dropdown", "type");

  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(age, gender, type) {
    const filteredCards = data.filter((card) => {
      return (
        (age === "" || card.age === age) &&
        (gender === "" || card.gender === gender) &&
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
            <img src="../img/don/toyDonation.webp" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">Type: ${card.type}</p>
            <p class="card-text">Age: ${card.age}</p>
            <p class="card-text">Gender: ${card.gender}</p>
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
    const searchInput = document.getElementById("search-input");
    const selectedArea = document.getElementById("age-dropdown").value;
    const selectedGovernorate =
      document.getElementById("gender-dropdown").value;
    const selectedType = document.getElementById("type-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedArea, selectedGovernorate, selectedType);
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

  function navigateToPage() {
    const dropdown = document.getElementById("category-dropdown");
    const selectedOption = dropdown.value;
  
    // Navigate to the appropriate page based on the selected option
    switch (selectedOption) {
      case "toys":
        window.location.href = "toys.html";
        break;
      case "food":
        window.location.href = "food.html";
        break;
      case "blood":
        window.location.href = "blood.html";
        break;
      case "clothes":
        window.location.href = "clothes.html";
        break;
      case "schoolsupplies":
        window.location.href = "schoolSupplies.html";
        break;
      case "medicalsupplies":
        window.location.href = "medicalSupplies.html";
        break;
      default:
        // Default action if no option is selected
        break;
    }
  }
  



});
