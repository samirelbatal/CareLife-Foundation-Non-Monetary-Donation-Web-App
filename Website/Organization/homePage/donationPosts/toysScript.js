document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds

  const data = [
    {
      id: 1,
      category: "Toys",
      name: "Barbie",
      age: 10,
      gender: "Male",
      type: "Doll",
      organization: "Dream Charity",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 2,
      category: "Toys",
      name: "Ken",
      age:10,
      gender: "Male",
      type: "Doll",
      organization: "Kids Foundation",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 3,
      category: "Toys",
      name: "Monopoly",
      age:10,
      gender: "Male",
      type: "Board Game",
      organization: "Game Charity",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 4,
      name: "Baby Alive",
      age: 5,
      gender: "Female",
      type: "Doll",
      organization: "Toy Aid",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 5,
      category: "Toys",
      name: "Ticket to Ride",
      age: 8,
      gender: "Female",
      type: "Board Game",
      organization: "Playful Hearts",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 6,
      name: "GI Joe",
      category: "Toys",
      age: 12,
      gender: "Male",
      type: "Action Figure",
      organization: "Hero Aid",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 7,
      name: "Rubik's Cube",
      age: 3,
      category: "Toys",
      gender: "Female",
      type: "Puzzle",
      organization: "Mind Puzzles",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 8,
      category: "Toys",
      name: "LeapFrog",
      age: 7,
      gender: "Male",
      type: "Educational Toy",
      organization: "Bright Minds",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 9,
      category: "Toys",
      name: "American Girl Doll",
      age: 6,
      gender: "Female",
      type: "Dollhouse",
      organization: "Dream Doll",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 10,
      category: "Toys",
      name: "Hot Wheels",
      age: 9,
      gender: "Male",
      type: "Remote Control Car",
      organization: "Speedy Wheels",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 11,
      category: "Toys",
      name: "Raggedy Ann and Andy",
      age: 6,
      gender: "Female",
      type: "Dollhouse",
      organization: "Raggedy Hearts",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 12,
      category: "Toys",
      name: "LEGO Technic",
      age: 9,
      gender: "Male",
      type: "Remote Control Car",
      organization: "Building Dreams",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 13,
      category: "Toys",
      name: "Barbie",
      age: 10,
      gender: "Male",
      type: "Doll",
      organization: "Hope Kids",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 14,
      name: "Scrabble",
      age: 10,
      gender: "Male",
      type: "Board Game",
      organization: "Game Night",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 15,
      category: "Toys",
      name: "Baby Alive",
      age: 5,
      gender: "Female",
      type: "Doll",
      organization: "Toy Joy",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 16,
      category: "Toys",
      name: "Catan (Settlers of Catan)",
      age:8,
      gender: "Female",
      type: "Board Game",
      organization: "Settlers Haven",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 17,
      category: "Toys",
      name: "GI Joe",
      age: 12,
      gender: "Male",
      type: "Action Figure",
      organization: "Action Heroes",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 18,
      category: "Toys",
      name: "LeapFrog",
      age: 7,
      gender: "Male",
      type: "Educational Toy",
      organization: "Bright Minds",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 19,
      category: "Toys",
      name: "American Girl Doll",
      age: 6,
      gender: "Female",
      type: "Dollhouse",
      organization: "Dream Doll",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 20,
      category: "Toys",
      name: "LEGO Technic",
      age: 9,
      gender: "Male",
      type: "Remote Control Car",
      organization: "Building Dreams",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 21,
      category: "Toys",
      name: "Raggedy Ann and Andy",
      age: 6,
      gender: "Female",
      type: "Dollhouse",
      organization: "Raggedy Hearts",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
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
    const color = card.status === "Fulfilled" ? "green" : "red";

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
                <a class="dropdown-item delete-post" id="delete" href="#">Delete Post</a>
              </div>
            </div>
          </div>
          <div class="card-body">
            <img src="../img/don/toyDonation.webp" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text"><strong>Type:</strong> ${card.type}</p>
            <p class="card-text" style="color: ${color};"><strong>Status:</strong> ${card.status}</p>
            <a href="../requestedItems/detailsItems.html?id=${
              card.id
            }&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(card.gender)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}" class="btn btn--primary btn-block">View Details</a>
         
          </div>
        </div>
      </div>
    `;
  }

  // Function to navigate to detailsItems.html with attributes attached
  function navigateToDetails(card) {
    const url = `./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(
      card.gender
    )}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(card.hospital)}&organization=${encodeURIComponent(card.organization)}&type=${encodeURIComponent(card.type)}`;
    window.location.href = url;
  }

  // Add event listener to "Edit Post" links
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit-post")) {
      const card = event.target.closest(".card");
      if (card) {
        // Get card data from the card's data attributes
        const cardId = card.getAttribute("data-card-id");
        const selectedCard = data.find((card) => card.id === parseInt(cardId));
        if (selectedCard) {
          navigateToDetails(selectedCard);
        }
      }
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-post")) {
      // Get the modal
      const modal = document.getElementById("deleteModal");

      // Show the modal
      $(modal).modal("show");

      // Add event listener to the delete button in the modal
      modal.querySelector(".btn-danger").addEventListener("click", function () {
        const card = event.target.closest(".card");

        if (card) {
          // Get card id from the card's data attributes
          const cardId = parseInt(card.getAttribute("data-card-id"));

          // Remove the card from the data array
          const index = data.findIndex((card) => card.id === cardId);
          if (index !== -1) {
            data.splice(index, 1); // Remove the card from the data array
          }

          // Re-render the cards
          renderCards(data);
        }

        // Hide the modal after deletion
        $(modal).modal("hide");
      });
    }
  });

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

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


function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}


  // Function to render cards
  function renderCards(cards) {
    const container = document.getElementById("cardContainer");
    container.innerHTML = ""; // Clear existing cards

    const category = getQueryParam("category");
    const type = getQueryParam("type");
    const gender = getQueryParam("gender");
    const age = getQueryParam("age");
    const id = getQueryParam("id");
    const name = getQueryParam("name");

    if (category != null) {
      const cardToUpdate = data.find((card) => card.id === parseInt(id));
      cardToUpdate.name = name;
      cardToUpdate.age = age;
      cardToUpdate.gender = gender;
    }

    cards.forEach((card) => {
      const cardHTML = createCardHTML(card);
      container.innerHTML += cardHTML;
    });

    // Clear URL parameters
    clearUrlParams();
  }

  // Function to clear URL parameters
  function clearUrlParams() {
    const baseUrl = window.location.href.split("?")[0];
    history.replaceState({}, document.title, baseUrl);
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
    const url = `detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(
      card.gender
    )}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}`;
    window.location.href = url; // Redirect to the details page
  }

  // Add event listener to each "View Details" button
  document.querySelectorAll(".btn--primary").forEach((button) => {
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

document.addEventListener("DOMContentLoaded", function () {
  const viewDetailsButtons = document.querySelectorAll(".view-details-btn");

  // Loop through each "View Details" button and add a click event listener
  viewDetailsButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default action of the button

      // Get the URL of the page you want to navigate to
      const detailsPageUrl = "../delivery/delivery.html"; // Replace 'YOUR_DETAILS_PAGE_URL_HERE' with the actual URL

      // Navigate to the details page
      window.location.href = detailsPageUrl;
    });
  });
});
