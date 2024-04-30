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
      material: "cotton",
      typeofclothing: "tshirt",
    },
    {
      id: 2,
      organization: "Organization 2",
      age: "18 Years",
      gender: "Male",
      season: "Summer",

      material: "cotton",
      typeofclothing: "tshirt",
    },
    {
      id: 3,
      organization: "Organization 3",
      age: "10 Years",
      gender: "Male",
      season: "Spring",
      material: "cotton",
      typeofclothing: "legens",
    },
    {
      id: 4,
      organization: "Organization 4",
      age: "5 Years",
      gender: "Female",
      season: "Autumn",

      material: "cotton",
      typeofclothing: "tshirt",
    },
    {
      id: 5,
      organization: "Organization 5",
      age: "9 Years",
      gender: "Male",
      season: "Spring",
    },
    {
      id: 6,
      organization: "Organization 6",
      age: "9 Years",
      gender: "Male",
      season: "Summer",

      material: "cotton",
      typeofclothing: "tshirt",
    },
    {
      id: 7,
      organization: "Organization 7",
      age: "10 Years",
      gender: "Male",
      season: "Spring",

      material: "cotton",
      typeofclothing: "tshirt",
    },
    {
      id: 8,
      organization: "Organization 8",
      age: "5 Years",
      gender: "Female",
      season: "Winter",
    },
    {
      id: 9,
      organization: "Organization 9",
      age: "10 Years",
      gender: "Male",
      season: "Spring",

      material: "cotton",
      typeofclothing: "tshirt",
    },
    {
      id: 10,
      organization: "Organization 10",
      age: "5 Years",
      gender: "Female",
      season: "Autumn",
      material: "cotton",
      typeofclothing: "skirt",
    },
    {
      id: 11,
      organization: "Organization 11",
      age: "10 Years",
      gender: "Male",
      season: "Spring",
      material: "cotton",
      typeofclothing: "pants",
    },
    {
      id: 12,
      organization: "Organization 12",
      age: "15 Years",
      gender: "Male",
      season: "Winter",
      material: "cotton",
      typeofclothing: "short",
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

  function createCardHTML(card, id) {
    return `
      <div class="col-lg-4 mb-4">
        <div class="card toy-donation-requests text-center">
          <div class="card-body">
            <img src="../img/don/clothing.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
            <h5 class="card-title">${card.organization}</h5>
            <p class="card-text">Type: ${card.season}</p>
            <p class="card-text">Age: ${card.age}</p>
            <p class="card-text">Gender: ${card.gender}</p>
            <p class="card-text">Requested by: ${card.organization}</p>
            <a href="./detailsItems.html?id=${card.id}&organization=${encodeURIComponent(card.organization)}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(card.gender)}&season=${encodeURIComponent(card.season)}&material=${encodeURIComponent(card.material)}&typeofclothing=${encodeURIComponent(card.typeofclothing)}" class="btn btn-primary btn-block">View Details</a>
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
    const selectedArea = document.getElementById("age-dropdown").value;
    const selectedGovernorate =
      document.getElementById("gender-dropdown").value;
    const selectedType = document.getElementById("season-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedArea, selectedGovernorate, selectedType);
  });

  // Function to handle button click and redirect to details page
function handleButtonClick(card) {
  // Construct the URL with query parameters
  const url = `detailsItems.html?id=${card.id}&organization=${encodeURIComponent(card.organization)}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(card.gender)}&season=${encodeURIComponent(card.season)}&material=${encodeURIComponent(card.material)}&typeofclothing=${encodeURIComponent(card.typeofclothing)}`;
  window.location.href = url; // Redirect to the details page
}

// Add event listener to each "View Details" button
document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', function() {
      const cardIndex = this.dataset.cardIndex; // Assuming you have a data attribute to identify the card index
      const selectedCard = data[cardIndex]; // Get the corresponding card object from the data array
      handleButtonClick(selectedCard); // Call the function to handle button click with the selected card
  });
});

});
