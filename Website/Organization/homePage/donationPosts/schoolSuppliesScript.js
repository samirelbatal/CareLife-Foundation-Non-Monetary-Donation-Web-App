document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds

  const data = [
    {
      id: 1,
      category: "School Supplies",
      organization: "Misr El Kheir",
      type: "Book",
      bookName: "Mathematics",
      quantity: 4,
      author: "John Doe",
      language: "English",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      summary: "A beginner's guide to mathematics covering basic arithmetic operations and concepts.",
      edition: "1st Edition"
    },
    {
      id: 2,
      category: "School Supplies",
      organization: "Red Cresent",
      type: "Stationary",
      condition: "New",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      stationaryName: "HB Pencils",
      quantity: 4,
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
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      summary: "An interactive science book introducing fundamental scientific principles through experiments and activities.",
      edition: "2nd Edition"
    },
    {
      id: 4,
      category: "School Supplies",
      organization: "Red Cresent",
      type: "Stationary",
      condition: "Gently Used",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      stationaryName: "Plain Exercise Books",
      quantity: 5,
    },
    {
      id: 5,
      category: "School Supplies",
      organization: "Resala",
      type: "Book",
      bookName: "Adventure Tales",
      quantity: 2,
      author: "Michael Johnson",
      language: "English",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      summary: "A collection of thrilling adventure stories to ignite imagination and creativity.",
      edition: "1st Edition"
    },
    {
      id: 6,
      category: "School Supplies",
      organization: "World Vision",
      type: "Stationary",
      condition: "New",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      stationaryName: "Rubber Erasers",
      quantity: 6,
    },
    {
      id: 7,
      category: "School Supplies",
      organization: "Misr El Kheir",
      type: "Book",
      bookName: "History Uncovered",
      quantity: 4,
      author: "Emily Brown",
      language: "English",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      summary: "An exploration of key historical events and figures from around the world.",
      edition: "Revised Edition"
    },
    {
      id: 8,
      category: "School Supplies",
      organization: "Red Cresent",
      type: "Stationary",
      condition: "Gently Used",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      stationaryName: "Whiteboard Markers",
      quantity: 3,
    },
    {
      id: 9,
      category: "School Supplies",
      organization: "Resela",
      type: "Book",
      bookName: "Artistic Expressions",
      quantity: 4,
      author: "David Lee",
      language: "English",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      summary: "An introduction to various forms of art, from painting to sculpture, with examples from renowned artists.",
      edition: "1st Edition"
    },
    {
      id: 10,
      category: "School Supplies",
      organization: "Resala",
      type: "Stationary",
      condition: "New",
      stationaryName: "Clear Plastic Rulers",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      quantity: 5,
    },
    {
      id: 11,
      category: "School Supplies",
      organization: "Resala",
      type: "Book",
      bookName: "Literary Wonders",
      quantity: 2,
      author: "Sarah Adams",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      language: "English",
      summary: "A compilation of classic literary works from different cultures and time periods.",
      edition: "2nd Edition"
    },
    {
      id: 12,
      category: "School Supplies",
      organization: "Misr El Kheir",
      type: "Stationary",
      condition: "Gently Used",
      stationaryName: "Non-Toxic Glue Sticks",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      quantity: 6,
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
    const color = card.status === "Fulfilled" ? "green" : "red";

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

    if (card.type === "Book") {
      cardHTML += ` 
        <div class="card-body">
          <img src="../img/don/book.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
          <h5 class="card-title">${card.bookName}</h5>
          <p class="card-text"><strong>Book Author:</strong> ${card.author}</p>
          <p class="card-text" style="color: ${color}; margin-bottom: 40px;"><strong>Status:</strong> ${card.status}</p>
        
          <a href="../requestedItems/detailsItems.html?id=${card.id}&author=${encodeURIComponent(card.author)}&edition=${encodeURIComponent(card.edition)}&language=${encodeURIComponent(
        card.language
      )}&summary=${encodeURIComponent(card.summary)}&category=${encodeURIComponent(card.category)}&stationaryName=${encodeURIComponent(card.stationaryName)}&bookName=${encodeURIComponent(
        card.bookName
      )}&status=${encodeURIComponent(card.status)}&quantity=${encodeURIComponent(card.quantity)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}" class="btn btn--primary btn-block">View Details</a>
          </div>
      </div>
    </div>`;
    } else {
      cardHTML += `   
        <div class="card-body">
          <img src="../img/don/book.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
          <h5 class="card-title" style="margin-bottom: 20px;">${card.stationaryName}</h5>
          <p class="card-text"><strong>Quantity Needed:</strong> ${card.quantity}</p>
          <p class="card-text" style="color: ${color}; margin-bottom: 35px;"><strong>Status:</strong> ${card.status}</p>
        
          <a href="../requestedItems/detailsItems.html?id=${card.id}&author=${encodeURIComponent(card.author)}&edition=${encodeURIComponent(card.edition)}&language=${encodeURIComponent(
        card.language
      )}&summary=${encodeURIComponent(card.summary)}&category=${encodeURIComponent(card.category)}&stationaryName=${encodeURIComponent(card.stationaryName)}&bookName=${encodeURIComponent(
        card.bookName
      )}&condition=${encodeURIComponent(card.condition)}&status=${encodeURIComponent(card.status)}&quantity=${encodeURIComponent(card.quantity)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}" class="btn btn--primary btn-block">View Details</a>
          </div>
      </div>
    </div>  `;
    }

    return cardHTML;
  }

  // Function to navigate to detailsItems.html with attributes attached
  function navigateToDetails(card) {
    const url = `./detailsItems.html?id=${card.id}&author=${encodeURIComponent(card.author)}&edition=${encodeURIComponent(card.edition)}&language=${encodeURIComponent(
      card.language
    )}&status=${encodeURIComponent(card.status)}&summary=${encodeURIComponent(card.summary)}&stationaryName=${encodeURIComponent(card.stationaryName)}&bookName=${encodeURIComponent(card.bookName)}&quantity=${encodeURIComponent(
      card.quantity
    )}&condition=${encodeURIComponent(card.condition)}&type=${encodeURIComponent(card.type)}&category=${encodeURIComponent(card.category)}`;
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

  // Function to clear URL parameters
  function clearUrlParams() {
    const baseUrl = window.location.href.split("?")[0];
    history.replaceState({}, document.title, baseUrl);
  }

  // Function to render cards
  function renderCards(cards) {
    const container = document.getElementById("cardContainer");
    container.innerHTML = ""; // Clear existing cards

    const category = getQueryParam("category");
    const type = getQueryParam("type");
    const bookName = getQueryParam("bookName");
    const edition = getQueryParam("edition");
    const id = getQueryParam("id");
    const stationaryName = getQueryParam("stationaryName");
    const author = getQueryParam("author");
    const language = getQueryParam("language");
    const summary = getQueryParam("summary");
    const quantity = getQueryParam("quantity");
    const condition = getQueryParam("condition");

    if (category != null) {
      const cardToUpdate = data.find((card) => card.id === parseInt(id));
      if (type === "Stationary") {
        cardToUpdate.stationaryName = stationaryName;
        cardToUpdate.quantity = quantity;
        cardToUpdate.condition = condition;
      } else {
        cardToUpdate.bookName = bookName;
        cardToUpdate.summary = summary;
        cardToUpdate.edition = edition;
        cardToUpdate.language = language;
        cardToUpdate.author = author;
      }
      //  cardToUpdate.quantity = quantity;
    }

    cards.forEach((card) => {
      const cardHTML = createCardHTML(card);
      container.innerHTML += cardHTML;
    });

    // Clear URL parameters
    clearUrlParams();
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
    const url = `detailsItems.html?id=${card.id}&edition=${encodeURIComponent(card.edition)}&author=${encodeURIComponent(card.author)}&language=${encodeURIComponent(
      card.language
    )}&summary=${encodeURIComponent(card.summary)}&category=${encodeURIComponent(card.category)}&type=${encodeURIComponent(card.type)}&category=${encodeURIComponent(
      card.category
    )}&status=${encodeURIComponent(card.status)}&stationaryName=${encodeURIComponent(card.stationaryName)}&bookName=${encodeURIComponent(card.bookName)}&use=${encodeURIComponent(card.use)}&organization=${encodeURIComponent(
      card.organization
    )}`;
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

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

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
  var deleteProfileLink = document.querySelector(".delete-profile");

  if (deleteProfileLink) {
    deleteProfileLink.addEventListener("click", function (e) {
      e.preventDefault();
      // Show a confirmation popup
      var confirmDelete = confirm("Are you sure you want to delete your profile?");
      if (confirmDelete) {
        window.location.href = "../../../login/login.html"; // Replace "deleted-profile.html" with the actual URL of the page you want to redirect to
      }
    });
  }
});
