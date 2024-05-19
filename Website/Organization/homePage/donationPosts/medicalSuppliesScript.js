document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds
  function getPreviousPage() {
    // Get the URL of the previous page
    const previousPageUrl = document.referrer;

    // Extract the page name from the URL
    const previousPageName = previousPageUrl.substring(previousPageUrl.lastIndexOf("/") + 1);

    return previousPageName;
  }

  const data = [
    {
      id: 1,
      category: "Medical Supplies",
      organization: "Red Crescent",
      type: "Medical Device",
      name: "MRI Machine",
      quantity: 4,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      use: "medical scans and checkups",
    },
    {
      id: 2,
      category: "Medical Supplies",
      organization: "57357",
      type: "Medication",
      name: "Aspirin",
      quantity: 2,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      use: "pain killer",
    },
    {
      id: 3,
      category: "Medical Supplies",
      organization: "Al Nas Hospital",
      type: "Medical Equipment",
      name: "X-ray Machine",
      quantity: 3,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      use: "medical scans and checkups",
    },
    {
      id: 4,
      category: "Medical Supplies",
      organization: "57357",
      type: "Medical Device",
      name: "Pacemaker",
      quantity: 1,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      use: "diagnosis",
    },
    {
      id: 5,
      category: "Medical Supplies",
      organization: "Ahl Masr",
      type: "Medication",
      name: "Antibiotics",
      quantity: 5,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      use: "pain killer",
    },
    {
      id: 6,
      category: "Medical Supplies",
      organization: "Al Nas Hospital",
      type: "Medical Equipment",
      name: "Ultrasound Machine",
      quantity: 2,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      use: "medical scans and checkups",
    },
    {
      id: 7,
      category: "Medical Supplies",
      organization: "Red Crescent",
      type: "Medical Device",
      name: "Defibrillator",
      quantity: 1,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      use: "For treating sudden cardiac arrest",
    },
    {
      id: 8,
      category: "Medical Supplies",
      organization: "UNICEF Egypt",
      type: "Medication",
      name: "Insulin",
      quantity: 4,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      use: "diabetic patients",
    },
    {
      id: 9,
      organization: "Resala",
      type: "Medical Equipment",
      name: "Stethoscope",
      quantity: 7,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      use: "For medical examinations",
    },
    {
      id: 10,
      category: "Medical Supplies",
      organization: "Al Orman",
      type: "Medical Device",
      name: "Ventilator",
      quantity: 4,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      use: "For medical assistance",
    },
    {
      id: 11,
      category: "Medical Supplies",
      organization: "Al Orman",
      type: "Medication",
      name: "Paracetamol",
      quantity: 4,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      use: "pain killer",
    },
    {
      id: 12,
      category: "Medical Supplies",
      organization: "Red Crescent",
      type: "Medical Equipment",
      name: "Blood pressure monitor",
      quantity: 2,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      use: "medical examinations",
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
            <img src="../img/don/medicalDonation.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
            <h5 class="card-title" style="margin-bottom: 20px;">${card.name}</h5>
            <p class="card-text"><strong>Type:<strong> ${card.type}</p>
            <p class="card-text" style="color: ${color}; margin-bottom: 35px;"><strong>Status:</strong> ${card.status}</p>
            <a href="../requestedItems/detailsItems.html?id=${
              card.id
            }&status=${encodeURIComponent(card.status)}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&type=${encodeURIComponent(card.type)}&use=${encodeURIComponent(card.use)}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(card.hospital)}&governorate=${encodeURIComponent(card.governorate)}" class="btn btn--primary btn-block">View Details</a>
          </div>
        </div>
      </div>
    `;
  }

  // Function to navigate to detailsItems.html with attributes attached
  function navigateToDetails(card) {
    const url = `./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&type=${encodeURIComponent(card.type)}&use=${encodeURIComponent(
      card.use
    )}&status=${encodeURIComponent(card.status)}&hospitaladdress=${encodeURIComponent(card.hospitaladdress)}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(card.hospital)}&area=${encodeURIComponent(
      card.area
    )}&governorate=${encodeURIComponent(card.governorate)}`;
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
    const use = getQueryParam("use");
    const name = getQueryParam("name");
    const id = getQueryParam("id");

    if (category != null) {
      const cardToUpdate = data.find((card) => card.id === parseInt(id));
      cardToUpdate.name = name;
      cardToUpdate.type = type;
      cardToUpdate.use = use;
    }

    cards.forEach((card) => {
      const cardHTML = createCardHTML(card);
      container.innerHTML += cardHTML;
    });
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
    const url = `detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&quantity=${encodeURIComponent(card.quantity)}&name=${encodeURIComponent(
      card.name
    )}&status=${encodeURIComponent(card.status)}&use=${encodeURIComponent(card.use)}&organization=${encodeURIComponent(card.organization)}`;
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
  var deleteProfileLink = document.querySelector(".delete-profile");

  if (deleteProfileLink) {
    deleteProfileLink.addEventListener("click", function (e) {
      e.preventDefault();
      // Show a confirmation popup
      var confirmDelete = confirm("Are you sure you want to delete your profile?");
      if (confirmDelete) {
        window.location.href = "../../../../index.html"; // Replace "deleted-profile.html" with the actual URL of the page you want to redirect to
      }
    });
  }
});
