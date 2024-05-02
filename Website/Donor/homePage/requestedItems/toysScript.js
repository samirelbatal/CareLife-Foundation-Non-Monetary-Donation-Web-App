document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds


  const data = [
    {
      id: 1,
      category: "Toys",
      name: "Barbie",
      age: "10 Years",
      gender: "Male",
      type: "Doll",
      organization: "Dream Charity",
    },
    {
      id: 2,
      category: "Toys",
      name: "Ken",
      age: "10 Years",
      gender: "Male",
      type: "Doll",
      organization: "Kids Foundation",
    },
    {
      id: 3,
      category: "Toys",
      name: "Monopoly",
      age: "10 Years",
      gender: "Male",
      type: "Board Game",
      organization: "Game Charity",
    },
    {
      id: 4,
      name: "Baby Alive",
      age: "5 Years",
      gender: "Female",
      type: "Doll",
      organization: "Toy Aid",
    },
    {
      id: 5,
      category: "Toys",
      name: "Ticket to Ride",
      age: "8 Years",
      gender: "Female",
      type: "Board Game",
      organization: "Playful Hearts",
    },
    {
      id: 6,
      name: "GI Joe",
      category: "Toys",
      age: "12 Years",
      gender: "Male",
      type: "Action Figure",
      organization: "Hero Aid",
    },
    {
      id: 7,
      name: "Rubik's Cube",
      age: "3 Years",
      category: "Toys",
      gender: "Female",
      type: "Puzzle",
      organization: "Mind Puzzles",
    },
    {
      id: 8,
      category: "Toys",
      name: "LeapFrog",
      age: "7 Years",
      gender: "Male",
      type: "Educational Toy",
      organization: "Bright Minds",
    },
    {
      id: 9,
      category: "Toys",
      name: "American Girl Doll",
      age: "6 Years",
      gender: "Female",
      type: "Dollhouse",
      organization: "Dream Doll",
    },
    {
      id: 10,
      category: "Toys",
      name: "Hot Wheels",
      age: "9 Years",
      gender: "Male",
      type: "Remote Control Car",
      organization: "Speedy Wheels",
    },
    {
      id: 11,
      category: "Toys",
      name: "Raggedy Ann and Andy",
      age: "6 Years",
      gender: "Female",
      type: "Dollhouse",
      organization: "Raggedy Hearts",
    },
    {
      id: 12,
      category: "Toys",
      name: "LEGO Technic",
      age: "9 Years",
      gender: "Male",
      type: "Remote Control Car",
      organization: "Building Dreams",
    },
    {
      id: 13,
      category: "Toys",
      name: "Barbie",
      age: "10 Years",
      gender: "Male",
      type: "Doll",
      organization: "Hope Kids",
    },
    {
      id: 14,
      name: "Scrabble",
      age: "10 Years",
      gender: "Male",
      type: "Board Game",
      organization: "Game Night",
    },
    {
      id: 15,
      category: "Toys",
      name: "Baby Alive",
      age: "5 Years",
      gender: "Female",
      type: "Doll",
      organization: "Toy Joy",
    },
    {
      id: 16,
      category: "Toys",
      name: "Catan (Settlers of Catan)",
      age: "8 Years",
      gender: "Female",
      type: "Board Game",
      organization: "Settlers Haven",
    },
    {
      id: 17,
      category: "Toys",
      name: "GI Joe",
      age: "12 Years",
      gender: "Male",
      type: "Action Figure",
      organization: "Action Heroes",
    },
    {
      id: 18,
      category: "Toys",
      name: "LeapFrog",
      age: "7 Years",
      gender: "Male",
      type: "Educational Toy",
      organization: "Bright Minds",
    },
    {
      id: 19,
      category: "Toys",
      name: "American Girl Doll",
      age: "6 Years",
      gender: "Female",
      type: "Dollhouse",
      organization: "Dream Doll",
    },
    {
      id: 20,
      category: "Toys",
      name: "LEGO Technic",
      age: "9 Years",
      gender: "Male",
      type: "Remote Control Car",
      organization: "Building Dreams",
    },
    {
      id: 21,
      category: "Toys",
      name: "Raggedy Ann and Andy",
      age: "6 Years",
      gender: "Female",
      type: "Dollhouse",
      organization: "Raggedy Hearts",
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

  function redirectToPage(pageUrl) {
    if (pageUrl) {
      window.location.href = pageUrl;
    }
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
            <p class="card-text">Requested by: ${card.organization}</p>
            <a href="./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(card.gender)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}" class="btn btn-primary btn-block">View Details</a>
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
    const selectedType = document.getElementById("type-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedArea, selectedGovernorate, selectedType);
  });


  // Function to handle button click and redirect to details page
  function handleButtonClick(card) {
    // Construct the URL with query parameters
    const url = `detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(card.gender)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}`;
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



document.addEventListener("DOMContentLoaded", function() {
  // Hide loader after 2 seconds
  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
  }, 1000); // 2000 milliseconds = 2 seconds
});
