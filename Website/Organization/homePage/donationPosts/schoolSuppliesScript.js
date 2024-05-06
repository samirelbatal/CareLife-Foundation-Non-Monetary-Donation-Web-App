document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds

  const data = [
    {
      id: 1,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Book",
      bookName: "Mathematics",
      quantity: 4,
      author: "John Doe",
      language: "English",
      summary: "A beginner's guide to mathematics covering basic arithmetic operations and concepts.",
      edition: "1st Edition",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 2,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Stationary",
      stationaryName: "HB Pencils",
      quantity: 4,
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 3,
      category: "School Supplies",
      organization: "World Vision",
      type: "Book",
      bookName: "Science Explorers",
      quantity: 3,
      author: "Jane Smith",
      language: "English",
      summary: "An interactive science book introducing fundamental scientific principles through experiments and activities.",
      edition: "2nd Edition",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 4,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Stationary",
      stationaryName: "Plain Exercise Books",
      quantity: 5,
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 5,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Book",
      bookName: "Adventure Tales",
      quantity: 2,
      author: "Michael Johnson",
      language: "English",
      summary: "A collection of thrilling adventure stories to ignite imagination and creativity.",
      edition: "1st Edition",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 6,
      category: "School Supplies",
      organization: "World Vision",
      type: "Stationary",
      stationaryName: "Rubber Erasers",
      quantity: 6,
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 7,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Book",
      bookName: "History Uncovered",
      quantity: 4,
      author: "Emily Brown",
      language: "English",
      summary: "An exploration of key historical events and figures from around the world.",
      edition: "Revised Edition",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 8,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Stationary",
      stationaryName: "Colorful Whiteboard Markers",
      quantity: 3,
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 9,
      category: "School Supplies",
      organization: "World Vision",
      type: "Book",
      bookName: "Artistic Expressions",
      quantity: 4,
      author: "David Lee",
      language: "English",
      summary: "An introduction to various forms of art, from painting to sculpture, with examples from renowned artists.",
      edition: "1st Edition",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 10,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Stationary",
      stationaryName: "Clear Plastic Rulers",
      quantity: 5,
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 11,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Book",
      bookName: "Literary Wonders",
      quantity: 2,
      author: "Sarah Adams",
      language: "English",
      summary: "A compilation of classic literary works from different cultures and time periods.",
      edition: "2nd Edition",
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    },
    {
      id: 12,
      category: "School Supplies",
      organization: "World Vision",
      type: "Stationary",
      stationaryName: "Non-Toxic Glue Sticks",
      quantity: 6,
      status: Math.random() < 0.5 ? 'Fulfilled' : 'Unfulfilled'
    }
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

  populateDropdownOptions("status-dropdown", "status");

  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(status) {
    const filteredCards = data.filter((card) => {
      return status === "" || card.status === status;
    });
    renderCards(filteredCards);
  }

  function redirectToPage(pageUrl) {
    if (pageUrl) {
      window.location.href = pageUrl;
    }
  }

    
  function createCardHTML(card) {
    const color = card.status === 'Fulfilled' ? 'green' : 'red';

    let cardHTML = `    <div class="col-lg-4 mb-4">
    <div class="card toy-donation-requests text-center" data-card-id="${card.id}" style="background-color: #e6edff;">
      <div class="card-header">
        <div class="dropdown dropleft">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fa fa-ellipsis-v"></i>
      </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item edit-post" id="edit" href="#">Edit Post</a> <!-- Added 'edit-post' class -->
            <a class="dropdown-item delete-post" id="delete" href="#">Delete Post</a>
          </div>
        </div>
      </div> `;

      if(card.type === "Book"){

        cardHTML+=` 
        <div class="card-body">
          <img src="../img/don/book.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
          <h5 class="card-title">${card.bookName}</h5>
          <p class="card-text">Book Author: ${card.author}</p>
          <p class="card-text" style="color: ${color};">Status: ${card.status}</p>
        
          <a href="../requestedItems/detailsItems.html?id=${card.id}&author=${encodeURIComponent(card.author)}&edition=${encodeURIComponent(card.edition)}&language=${encodeURIComponent(card.language)}&summary=${encodeURIComponent(card.summary)}&category=${encodeURIComponent(card.category)}&stationaryName=${encodeURIComponent(card.stationaryName)}&bookName=${encodeURIComponent(card.bookName)}&quantity=${encodeURIComponent(card.quantity)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}" class="btn btn-primary btn-block">View Details</a>
          </div>
      </div>
    </div>`;

      }else{

        cardHTML+=`   
        <div class="card-body">
          <img src="../img/don/book.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
          <h5 class="card-title">${card.stationaryName}</h5>
          <p class="card-text">Quantity Needed: ${card.quantity}</p>
          <p class="card-text" style="color: ${color};">Status: ${card.status}</p>
        
          <a href="../requestedItems/detailsItems.html?id=${card.id}&author=${encodeURIComponent(card.author)}&edition=${encodeURIComponent(card.edition)}&language=${encodeURIComponent(card.language)}&summary=${encodeURIComponent(card.summary)}&category=${encodeURIComponent(card.category)}&stationaryName=${encodeURIComponent(card.stationaryName)}&bookName=${encodeURIComponent(card.bookName)}&quantity=${encodeURIComponent(card.quantity)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}" class="btn btn-primary btn-block">View Details</a>
          </div>
      </div>
    </div>  `;

      }
      
    
    return cardHTML;
  }

   // Function to navigate to detailsItems.html with attributes attached
function navigateToDetails(card) {
  const url = `./detailsItems.html?id=${card.id}&author=${encodeURIComponent(card.author)}&edition=${encodeURIComponent(card.edition)}&language=${encodeURIComponent(card.language)}&summary=${encodeURIComponent(card.summary)}&stationaryName=${encodeURIComponent(card.stationaryName)}&bookName=${encodeURIComponent(card.bookName)}&quantity=${encodeURIComponent(card.quantity)}&type=${encodeURIComponent(card.type)}&category=${encodeURIComponent(card.category)}`;
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


document.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-post')) {
    // Get the modal
    const modal = document.getElementById('deleteModal');

    // Show the modal
    $(modal).modal('show');

    // Add event listener to the delete button in the modal
    modal.querySelector('.btn-danger').addEventListener('click', function() {
      const card = event.target.closest('.card');

      if (card) {
        // Get card id from the card's data attributes
        const cardId = parseInt(card.getAttribute('data-card-id'));

        // Remove the card from the data array
        const index = data.findIndex(card => card.id === cardId);
        if (index !== -1) {
          data.splice(index, 1); // Remove the card from the data array
        }

        // Re-render the cards
        renderCards(data);
      }

      // Hide the modal after deletion
      $(modal).modal('hide');
    });
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

  document.getElementById("pageSelect").addEventListener("change", function () {
    var selectedPage = this.value;
    if (selectedPage) {
      window.location.href = selectedPage;
    }
  });

  // Function to handle button click and redirect to details page
  function handleButtonClick(card) {
    // Construct the URL with query parameters
    const url = `detailsItems.html?id=${card.id}&edition=${encodeURIComponent(
      card.edition
    )}&author=${encodeURIComponent(
      card.author
    )}&language=${encodeURIComponent(
      card.language
    )}&summary=${encodeURIComponent(
      card.summary
    )}&category=${encodeURIComponent(
      card.category
    )}&type=${encodeURIComponent(
      card.type
    )}&category=${encodeURIComponent(
      card.category
    )}&stationaryName=${encodeURIComponent(
      card.stationaryName
    )}&bookName=${encodeURIComponent(card.bookName)}&use=${encodeURIComponent(
      card.use
    )}&organization=${encodeURIComponent(card.organization)}`;
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


function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}




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