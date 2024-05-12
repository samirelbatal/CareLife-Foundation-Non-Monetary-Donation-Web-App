document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds

  // const data = [
  //   {
  //     id: 1,
  //     category: "Toys",
  //     name: "Barbie",
  //     age: "10 Years",
  //     gender: "Female",
  //     type: "Doll",
  //     organization: "Dream Charity",
  //   },
  //   {
  //     id: 2,
  //     category: "Toys",
  //     name: "Ken",
  //     age: "10 Years",
  //     gender: "Male",
  //     type: "Doll",
  //     organization: "Kids Foundation",
  //   },
  //   {
  //     id: 3,
  //     category: "Toys",
  //     name: "Monopoly",
  //     age: "10 Years",
  //     gender: "Male",
  //     type: "Board Game",
  //     organization: "Game Charity",
  //   },
  //   {
  //     id: 4,
  //     category: "Toys",
  //     name: "Baby Alive",
  //     age: "5 Years",
  //     gender: "Female",
  //     type: "Doll",
  //     organization: "Toy Aid",
  //   },
  //   {
  //     id: 5,
  //     category: "Toys",
  //     name: "Chess",
  //     age: "8 Years",
  //     gender: "Female",
  //     type: "Board Game",
  //     organization: "Playful Hearts",
  //   },
  //   {
  //     id: 6,
  //     category: "Toys",
  //     name: "Rubik's Cube",
  //     age: "3 Years",
  //     gender: "Female",
  //     type: "Puzzle",
  //     organization: "Mind Puzzles",
  //   },
  //   {
  //     id: 7,
  //     category: "Toys",
  //     name: "Hot Wheels",
  //     age: "9 Years",
  //     gender: "Male",
  //     type: "Cars",
  //     organization: "Speedy Wheels",
  //   },
  //   {
  //     id: 8,
  //     category: "Toys",
  //     name: "LEGO Technic",
  //     age: "9 Years",
  //     gender: "Male",
  //     type: "Building Set",
  //     organization: "Building Dreams",
  //   },
  //   {
  //     id: 9,
  //     category: "Toys",
  //     name: "Teddy Bear",
  //     age: "5 Years",
  //     gender: "Unisex",
  //     type: "Stuffed Toy",
  //     organization: "Cuddle Pals",
  //   },
  //   {
  //     id: 10,
  //     category: "Toys",
  //     name: "FIFA Soccer Ball",
  //     age: "10 Years",
  //     gender: "Unisex",
  //     type: "Sports Equipment",
  //     organization: "Kickstart Foundation",
  //   },
  //   {
  //     id: 11,
  //     category: "Toys",
  //     name: "Nerf Blaster",
  //     age: "8 Years",
  //     gender: "Unisex",
  //     type: "Outdoor",
  //     organization: "Adventure Play",
  //   },
  //   {
  //     id: 12,
  //     category: "Toys",
  //     name: "Connect Four",
  //     age: "7 Years",
  //     gender: "Unisex",
  //     type: "Board Game",
  //     organization: "Family Fun Games",
  //   },
  //   // New elements
  //   {
  //     id: 13,
  //     category: "Toys",
  //     name: "Teddy Bear",
  //     age: "3 Years",
  //     gender: "Unisex",
  //     type: "Stuffed Toy",
  //     organization: "Snuggle Friends",
  //   },
  //   {
  //     id: 14,
  //     category: "Toys",
  //     name: "Beanie Baby",
  //     age: "3 Years",
  //     gender: "Unisex",
  //     type: "Stuffed Toy",
  //     organization: "Fluffy Companions",
  //   },
  //   {
  //     id: 15,
  //     category: "Toys",
  //     name: "Lamborghini Car",
  //     age: "10 Years",
  //     gender: "Unisex",
  //     type: "Cars",
  //     organization: "Speed Racer Toys",
  //   },
  //   {
  //     id: 16,
  //     category: "Toys",
  //     name: "Lightning McQueen Car",
  //     age: "5 Years",
  //     gender: "Unisex",
  //     type: "Cars",
  //     organization: "Pixar Fans",
  //   }
  // ];

  const data = [
    {
      id: 1,
      category: "Toys",
      name: "Barbie",
      age: "10 Years",
      gender: "Female",
      type: "Doll",
      organization: "57357",
    },
    {
      id: 2,
      category: "Toys",
      name: "Uno",
      age: "10 Years",
      gender: "Unisex",
      type: "Card Game",
      organization: "Resala",
    },
    {
      id: 3,
      category: "Toys",
      name: "Monopoly",
      age: "10 Years",
      gender: "Unisex",
      type: "Board Game",
      organization: "Resala",
    },
    {
      id: 4,
      category: "Toys",
      name: "Bratz",
      age: "5 Years",
      gender: "Female",
      type: "Doll",
      organization: "Al Orman",
    },
    {
      id: 5,
      category: "Toys",
      name: "Chess",
      age: "8 Years",
      gender: "Male",
      type: "Board Game",
      organization: "Al Orman",
    },
    {
      id: 6,
      category: "Toys",
      name: "Rubik's Cube",
      age: "3 Years",
      gender: "Female",
      type: "Puzzle",
      organization: "57357",
    },
    {
      id: 7,
      category: "Toys",
      name: "Snakes and Laddars",
      age: "9 Years",
      gender: "Male",
      type: "Board Game",
      organization: "Al Nas Hospital",
    },
    {
      id: 8,
      category: "Toys",
      name: "LEGO",
      age: "9 Years",
      gender: "Male",
      type: "Building Set",
      organization: "Resala",
    },
    {
      id: 9,
      category: "Toys",
      name: "Teddy Bear",
      age: "5 Years",
      gender: "Unisex",
      type: "Stuffed Toy",
      organization: "57357",
    },
    {
      id: 10,
      category: "Toys",
      name: "FIFA Soccer Ball",
      age: "10 Years",
      gender: "Unisex",
      type: "Sports",
      organization: "Misr El Kheir",
    },
    {
      id: 11,
      category: "Toys",
      name: "Ludo",
      age: "8 Years",
      gender: "Unisex",
      type: "Board Game",
      organization: "Misr El Kheir",
    },
    {
      id: 12,
      category: "Toys",
      name: "Connect Four",
      age: "7 Years",
      gender: "Unisex",
      type: "Board Game",
      organization: "Resala",
    },
    {
      id: 13,
      category: "Toys",
      name: "Scrabble",
      age: "3 Years",
      gender: "Unisex",
      type: "Stuffed Toy",
      organization: "Resala",
    },
    {
      id: 14,
      category: "Toys",
      name: "Beanie Baby",
      age: "3 Years",
      gender: "Unisex",
      type: "Stuffed Toy",
      organization: "Ahl Masr",
    },
    {
      id: 15,
      category: "Toys",
      name: "Speed Car",
      age: "10 Years",
      gender: "Unisex",
      type: "Cars",
      organization: "Al Nas Hospital",
    },
    {
      id: 16,
      category: "Toys",
      name: "Twister",
      age: "5 Years",
      gender: "Unisex",
      type: "Board Game",
      organization: "Misr El Kheir",
    },
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
      return (age === "" || card.age === age) && (gender === "" || card.gender === gender) && (type === "" || card.type === type);
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
            <a href="./detailsItems.html?id=${
              card.id
            }&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(card.gender)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}" class="btn btn--primary btn-block">View Details</a>
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
    const selectedGovernorate = document.getElementById("gender-dropdown").value;
    const selectedType = document.getElementById("type-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedArea, selectedGovernorate, selectedType);
  });

  // Function to handle button click and redirect to details page
  function handleButtonClick(card) {
    // Construct the URL with query parameters
    const url = `detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(
      card.gender
    )}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}`;
    window.location.href = url; // Redirect to the details page
  }

  // Add event listener to each "View Details" button
  document.querySelectorAll(".btn-primary").forEach((button) => {
    button.addEventListener("click", function () {
      const cardIndex = this.dataset.cardIndex; // Assuming you have a data attribute to identify the card index
      const selectedCard = data[cardIndex]; // Get the corresponding card object from the data array
      handleButtonClick(selectedCard); // Call the function to handle button click with the selected card
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Hide loader after 2 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 1000); // 2000 milliseconds = 2 seconds
});

$(document).ready(function () {
  $(".navbar-nav .nav-item:nth-child(2)").addClass("active");

  $(".navbar-nav .nav-item .nav-link").click(function () {
    $(".navbar-nav .nav-item").removeClass("active");

    $(this).closest(".nav-item").addClass("active");
  });
});

var subMenu1 = document.getElementById("subMenu1");
var subMenu2 = document.getElementById("subMenu2");

function toggleMenu() {
  // Check if subMenu2 is open, if yes, close it
  if (subMenu2.classList.contains("open-menu")) {
    subMenu2.classList.remove("open-menu");
  }
  // Toggle open-menu class for subMenu1
  subMenu1.classList.toggle("open-menu");
}

function toggleBell() {
  // Check if subMenu2 is open, if yes, close it
  if (subMenu1.classList.contains("open-menu")) {
    subMenu1.classList.remove("open-menu");
  }
  // Toggle open-menu class for subMenu1
  subMenu2.classList.toggle("open-menu");
}
