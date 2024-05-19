document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds
  const data = [
    {
      id: 1,
      category: "Medical Supplies",
      organization: "Red Crescent",
      type: "Medical Device",
      name: "MRI Machine",
      quantity: 4,
      use: "medical scans and checkups",
    },
    {
      id: 2,
      category: "Medical Supplies",
      organization: "57357",
      type: "Medication",
      name: "Aspirin",
      quantity: 2,
      use: "pain killer",
    },
    {
      id: 3,
      category: "Medical Supplies",
      organization: "Al Nas Hospital",
      type: "Medical Equipment",
      name: "X-ray Machine",
      quantity: 3,
      use: "medical scans and checkups",
    },
    {
      id: 4,
      category: "Medical Supplies",
      organization: "57357",
      type: "Medical Device",
      name: "Pacemaker",
      quantity: 1,
      use: "diagnosis",
    },
    {
      id: 5,
      category: "Medical Supplies",
      organization: "Ahl Masr",
      type: "Medication",
      name: "Antibiotics",
      quantity: 5,
      use: "pain killer",
    },
    {
      id: 6,
      category: "Medical Supplies",
      organization: "Al Nas Hospital",
      type: "Medical Equipment",
      name: "Ultrasound Machine",
      quantity: 2,
      use: "medical scans and checkups",
    },
    {
      id: 7,
      category: "Medical Supplies",
      organization: "Red Crescent",
      type: "Medical Device",
      name: "Defibrillator",
      quantity: 1,
      use: "For treating sudden cardiac arrest",
    },
    {
      id: 8,
      category: "Medical Supplies",
      organization: "UNICEF Egypt",
      type: "Medication",
      name: "Insulin",
      quantity: 4,
      use: "diabetic patients",
    },
    {
      id: 10,
      category: "Medical Supplies",
      organization: "Al Orman",
      type: "Medical Device",
      name: "Ventilator",
      quantity: 4,
      use: "For medical assistance",
    },
    {
      id: 11,
      category: "Medical Supplies",
      organization: "Al Orman",
      type: "Medication",
      name: "Paracetamol",
      quantity: 4,
      use: "pain killer",
    },
    {
      id: 12,
      category: "Medical Supplies",
      organization: "Red Crescent",
      type: "Medical Equipment",
      name: "Blood pressure monitor",
      quantity: 2,
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

  populateDropdownOptions("type-dropdown", "type");

  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(type) {
    const filteredCards = data.filter((card) => {
      return type === "" || card.type === type;
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
            <img src="../img/don/medicalDonation.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">Type: ${card.type}</p>
            <a href="./detailsItems.html?id=${
              card.id
            }&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&use=${encodeURIComponent(card.use)}&quantity=${encodeURIComponent(card.quantity)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}" class="btn btn--primary btn-block">View Details</a>
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
    const selectedType = document.getElementById("type-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedType);
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
    )}&use=${encodeURIComponent(card.use)}&organization=${encodeURIComponent(card.organization)}`;
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
