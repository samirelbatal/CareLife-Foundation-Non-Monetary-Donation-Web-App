document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds

  // Sample data for demonstration
  const data = [
    {
      id: 1,
      category:"Food",
      name: "Apple",
      type: "Fruits & Vegetables",
      organization: "Food for All Foundation",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 2,
      category:"Food",
      name: "Banana",
      type: "Fruits & Vegetables",
      organization: "Hope Food Bank",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 3,
      category:"Food",
      name: "Carrot",
      type: "Fruits & Vegetables",
      organization: "Feeding America",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 4,
      category:"Food",
      name: "Spinach",
      type: "Fruits & Vegetables",
      organization: "Nutrition Nation",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 5,
      category:"Food",
      name: "Tomato",
      type: "Fruits & Vegetables",
      organization: "The Hunger Project",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 6,
      category:"Food",
      name: "Canned Soup",
      type: "Canned Foods",
      organization: "Feeding America",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 7,
      category:"Food",
      name: "Canned Tuna",
      type: "Canned Foods",
      organization: "Second Harvest",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 8,
      category:"Food",
      name: "Canned Beans",
      type: "Canned Foods",
      organization: "Action Against Hunger",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 9,
      category:"Food",
      name: "Canned Corn",
      type: "Canned Foods",
      organization: "Bread for the World",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 10,
      category:"Food",
      name: "Canned Pineapple",
      type: "Canned Foods",
      organization: "Direct Relief",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 11,
      category:"Food",
      name: "Grilled Chicken Salad",
      type: "Fresh Meals",
      organization: "Feeding America",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 12,
      category:"Food",
      name: "Chicken Teriyaki",
      type: "Fresh Meals",
      organization: "Action Against Hunger",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 13,
      category:"Food",
      name: "Baked Salmon with Roasted Potatoes",
      type: "Fresh Meals",
      organization: "World Central Kitchen",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 14,
      category:"Food",
      name: "Vegetable and Quinoa Stir-Fry",
      type: "Fresh Meals",
      organization: "UNICEF USA",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 15,
      category:"Food",
      name: "Shrimp Pasta with Garlic Bread",
      type: "Fresh Meals",
      organization: "The Hunger Project",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 16,
      category:"Food",
      name: "Baguette",
      type: "Baked Goods",
      organization: "Action Against Hunger",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 17,
      category:"Food",
      name: "Croissant",
      type: "Baked Goods",
      organization: "Feeding America",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 18,
      category:"Food",
      name: "Blueberry Muffin",
      type: "Baked Goods",
      organization: "The Hunger Project",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 19,
      category:"Food",
      name: "Chocolate Chip Cookies",
      type: "Baked Goods",
      organization: "World Central Kitchen",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 20,
      category:"Food",
      name: "Cinnamon Rolls",
      type: "Baked Goods",
      organization: "Direct Relief",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
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
  populateDropdownOptions("status-dropdown", "status");
  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(status) {
    const filteredCards = data.filter((card) => {
      return status === "" || card.status === status;
    });
    renderCards(filteredCards);
  }

  
  function createCardHTML(card) {
    const color = card.status === 'Fulfilled' ? 'green' : 'red';
    return `
      <div class="col-lg-4 mb-4">
        <div class="card toy-donation-requests text-center" data-card-id="${card.id}" style="background-color: #e6edff;">
          <div class="card-header">
            <div class="dropdown dropleft">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-ellipsis-v"></i>
          </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item edit-post" id="edit" href="#">Edit Post</a> <!-- Added 'edit-post' class -->
                <a class="dropdown-item" id="delete" href="#">Delete Post</a>
              </div>
            </div>
          </div>
          <div class="card-body">
            <img src="../img/don/shopping-bag.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">Type: ${card.type}</p>
            <p class="card-text" style="color: ${color};">Status: ${card.status}</p>
            <a href="../requestedItems/detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}" class="btn btn-primary btn-block">View Details</a>

       </div>
        </div>
      </div>
    `;
  }

    // Function to navigate to detailsItems.html with attributes attached
function navigateToDetails(card) {
  const url = `./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&bloodtype=${encodeURIComponent(card.bloodtype)}&hospitaladdress=${encodeURIComponent(card.hospitaladdress)}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(card.hospital)}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}`;
  window.location.href = url;
}

// Add event listener to "Edit Post" links
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('edit-post')) {
    const card = event.target.closest('.card');
    if (card) {
      // Get card data from the card's data attributes
      const cardId = card.getAttribute('data-card-id');
      const selectedCard = data.find(card => card.id === parseInt(cardId));
      if (selectedCard) {
        navigateToDetails(selectedCard);
      }
    }
  }
});



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
    const selectedStatus = document.getElementById("status-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedStatus);
  });



      
// Function to handle button click and redirect to details page
function handleButtonClick(card) {
  // Construct the URL with query parameters
  const url = `detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}`;

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



$(document).ready(function() {
  $('.navbar-nav .nav-item:nth-child(2)').addClass('active');

  $('.navbar-nav .nav-item .nav-link').click(function() {
    $('.navbar-nav .nav-item').removeClass('active');

    $(this).closest('.nav-item').addClass('active');
  });
});

var subMenu1 = document.getElementById('subMenu1');
var subMenu2 = document.getElementById('subMenu2');

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

document.addEventListener('DOMContentLoaded', function () {
  const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

  // Loop through each "View Details" button and add a click event listener
  viewDetailsButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default action of the button

      // Get the URL of the page you want to navigate to
      const detailsPageUrl = '../delivery/delivery.html'; // Replace 'YOUR_DETAILS_PAGE_URL_HERE' with the actual URL
      
      // Navigate to the details page
      window.location.href = detailsPageUrl;
    });
  });
});