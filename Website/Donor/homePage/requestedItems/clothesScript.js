document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds

  // Sample data for demonstration
  const data = [
    {
      id: 1,
      organization: "Organization 1",
      age: "10 Years",
      gender: "Female",
      season: "Winter",
    },
    {
      id: 2,
      organization: "Organization 2",
      age: "18 Years",
      gender: "Male",
      season: "Summer",
    },
    {
      id: 3,
      organization: "Organization 3",
      age: "10 Years",
      gender: "Male",
      season: "Spring",
    },
    {
      id: 4,
      organization: "Organization 4",
      age: "5 Years",
      gender: "Female",
      season: "Autumn",
    },
    {
      id: 3,
      organization: "Organization 5",
      age: "9 Years",
      gender: "Male",
      season: "Spring",
    },
    {
      id: 4,
      organization: "Organization 6",
      age: "9 Years",
      gender: "Male",
      season: "Summer",
    },
    {
      id: 3,
      organization: "Organization 7",
      age: "10 Years",
      gender: "Male",
      season: "Spring",
    },
    {
      id: 4,
      organization: "Organization 8",
      age: "5 Years",
      gender: "Female",
      season: "Winter",
    },
    {
      id: 3,
      organization: "Organization 9",
      age: "10 Years",
      gender: "Male",
      season: "Spring",
    },
    {
      id: 4,
      organization: "Organization 10",
      age: "5 Years",
      gender: "Female",
      season: "Autumn",
    },
    {
      id: 3,
      organization: "Organization 11",
      age: "10 Years",
      gender: "Male",
      season: "Spring",
    },
    {
      id: 4,
      organization: "Organization 12",
      age: "15 Years",
      gender: "Male",
      season: "Winter",
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
  populateDropdownOptions("season-dropdown", "season");

  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(age, gender, season) {
    const filteredCards = data.filter((card) => {
      return (
        (age === "" || card.age === age) &&
        (gender === "" || card.gender === gender) &&
        (season === "" || card.season === season)
      );
    });
    renderCards(filteredCards);
  }

  function createCardHTML(card) {
    return `
      <div class="col-lg-4 mb-4">
        <div class="card toy-donation-requests text-center"> <!-- Updated class to 'toy-donation-requests' and added 'text-center' class -->
          <div class="card-body">
            <img src="../img/don/clothing.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
            <h5 class="card-title">${card.organization}</h5>
            <p class="card-text">Type: ${card.season}</p>
            <p class="card-text">Age: ${card.age}</p>
            <p class="card-text">Gender: ${card.gender}</p>
            <p class="card-text">Requested by: ${card.organization}</p>
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
    const selectedType = document.getElementById("season-dropdown").value;

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


});
