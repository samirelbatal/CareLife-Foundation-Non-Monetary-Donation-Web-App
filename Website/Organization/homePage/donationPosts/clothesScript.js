document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds

  // Sample data for demonstration
  const data = [
    {
      id: 1,
      organization: "Organization 1",
      category:"Clothes",
      age: "10 Years",
      gender: "Female",
      season: "Winter",
      material: "cotton",
      typeofclothing: "tshirt",
    },
    {
      id: 2,
      organization: "Organization 2",
      category:"Clothes",
      age: "18 Years",
      gender: "Male",
      season: "Summer",

      material: "cotton",
      typeofclothing: "tshirt",
    },
    {
      id: 3,
      category:"Clothes",
      organization: "Organization 3",
      age: "10 Years",
      gender: "Male",
      season: "Spring",
      material: "cotton",
      typeofclothing: "legens",
    },
    {
      id: 4,
      category:"Clothes",
      organization: "Organization 4",
      age: "5 Years",
      gender: "Female",
      season: "Autumn",

      material: "cotton",
      typeofclothing: "tshirt",
    },
    {
      id: 5,
      category:"Clothes",
      organization: "Organization 5",
      age: "9 Years",
      gender: "Male",
      season: "Spring",
    },
    {
      id: 6,
      category:"Clothes",
      organization: "Organization 6",
      age: "9 Years",
      gender: "Male",
      season: "Summer",

      material: "cotton",
      typeofclothing: "tshirt",
    },
    {
      id: 7,
      category:"Clothes",
      organization: "Organization 7",
      age: "10 Years",
      gender: "Male",
      season: "Spring",

      material: "cotton",
      typeofclothing: "tshirt",
    },
    {
      id: 8,
      category:"Clothes",
      organization: "Organization 8",
      age: "5 Years",
      gender: "Female",
      season: "Winter",
    },
    {
      id: 9,
      category:"Clothes",
      organization: "Organization 9",
      age: "10 Years",
      gender: "Male",
      season: "Spring",

      material: "cotton",
      typeofclothing: "tshirt",
    },
    {
      id: 10,
      category:"Clothes",
      organization: "Organization 10",
      age: "5 Years",
      gender: "Female",
      season: "Autumn",
      material: "cotton",
      typeofclothing: "skirt",
    },
    {
      id: 11,
      category:"Clothes",
      organization: "Organization 11",
      age: "10 Years",
      gender: "Male",
      season: "Spring",
      material: "cotton",
      typeofclothing: "pants",
    },
    {
      id: 12,
      category:"Clothes",
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


  
  function createCardHTML(card) {
    return `
      <div class="col-lg-4 mb-4">
        <div class="card toy-donation-requests text-center" data-card-id="${card.id}" style="background-color: #e6edff;">
          <div class="card-header">
            <div class="dropdown dropleft">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-ellipsis-v"></i>
          </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item edit-post" href="#">Edit Post</a> <!-- Added 'edit-post' class -->
                <a class="dropdown-item" href="#">Delete Post</a>
              </div>
            </div>
          </div>
          <div class="card-body">
            <img src="../img/don/clothing.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
            <h5 class="card-title">${card.organization}</h5>
            <p class="card-text">Season: ${card.season}</p>
            <p class="card-text">Age: ${card.age}</p>
            <p class="card-text">Gender: ${card.gender}</p>
            <p class="card-text">Requested by: ${card.organization}</p>
            <a href="../requestedItems/detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&organization=${encodeURIComponent(card.organization)}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(card.gender)}&season=${encodeURIComponent(card.season)}&material=${encodeURIComponent(card.material)}&typeofclothing=${encodeURIComponent(card.typeofclothing)}" class="btn btn-primary btn-block">View Details</a>
       
       </div>
        </div>
      </div>
    `;
  }

  // Function to navigate to detailsItems.html with attributes attached
  function navigateToDetails(card) {
    const url = `./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&age=${encodeURIComponent(card.age)}&typeofclothing=${encodeURIComponent(card.typeofclothing)}&gender=${encodeURIComponent(card.gender)}&name=${encodeURIComponent(card.name)}&season=${encodeURIComponent(card.season)}&material=${encodeURIComponent(card.material)}`;
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