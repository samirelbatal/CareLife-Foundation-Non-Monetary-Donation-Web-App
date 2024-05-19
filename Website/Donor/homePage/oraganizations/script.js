document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 2000);

  const data = [
    {
      id: 1,
      organization: "Red Crescent",
      governorate: "Cairo",
      area: "Garden City",
      type: "Humanitarian",
      address: "3, Near IT Park, GT Road, Lahore 440000",
      telephone: "+20 300599959",
      email: "foundation@carelife.com",
    },
    {
      id: 2,
      organization: "Save the Children",
      governorate: "Alexandria",
      area: "Raml Station",
      type: "Non-profit",
      address: "5th Floor, Building 15, El-Nozha St, Roushdy, Alexandria",
      telephone: "+20 312345678",
      email: "info@savethechildren.org.eg",
    },
    {
      id: 3,
      organization: "Tahya Misr",
      governorate: "Giza",
      area: "Mohandessin",
      type: "Non-profit",
      address: "2 El Hegaz St., Mohandessin, Giza",
      telephone: "+20 298765432",
      email: "cairo@unicef.org",
    },
    {
      id: 4,
      organization: "Doctors Without Borders",
      governorate: "Giza",
      area: "Dokki",
      type: "Non-profit",
      address: "16 Ismail Mohamed St., Dokki, Giza",
      telephone: "+20 211223344",
      email: "contact@egypt.msf.org",
    },
    {
      id: 5,
      organization: "Egyptian Food Bank",
      governorate: "Cairo",
      area: "Zamalek",
      type: "Non-profit",
      address: "32 Abdel Moneim Riyad Square, Mohandessin, Giza",
      telephone: "+20 255556666",
      email: "info@foodbank.com.eg",
    },
    {
      id: 6,
      organization: "Islamic Relief",
      governorate: "Cairo",
      area: "Nasr City",
      type: "Non-profit",
      address: "27 Ahmed Heshmat St., Zamalek, Cairo",
      telephone: "+20 277778888",
      email: "info@islamic-relief.org.eg",
    },
    {
      id: 7,
      organization: "Orman Association",
      governorate: "Giza",
      area: "Orman",
      type: "Non-profit",
      address: "20 El-Khalifa El-Maamoun St., Giza",
      telephone: "+20 299990000",
      email: "info@orman.org.eg",
    },
    {
      id: 8,
      organization: "Misr El Kheir Foundation",
      governorate: "Cairo",
      area: "Heliopolis",
      type: "Non-profit",
      address: "Building #6, Block #17, Nasr City, Cairo",
      telephone: "+20 211112222",
      email: "info@misrelkheir.org",
    },
    {
      id: 9,
      organization: "Egyptian Cancer Society",
      governorate: "Giza",
      area: "Sheikh Zayed",
      type: "Non-profit",
      address: "Building 1, 4th floor, Sodic East, Sheikh Zayed, Giza",
      telephone: "+20 233334444",
      email: "info@egyptiancancernetwork.org",
    },
    {
      id: 10,
      organization: "Egyptian Red Crescent",
      governorate: "Alexandria",
      area: "Smouha",
      type: "Non-profit",
      address: "11 El Nasr St., Cleopatra, Alexandria",
      telephone: "+20 377776666",
      email: "info@egyptianredcrescent.org.eg",
    },
    {
      id: 11,
      organization: "Egyptian Food Bank",
      governorate: "Alexandria",
      area: "Roushdy",
      type: "Non-profit",
      address: "15 Ahmed Shawky St., Roushdy, Alexandria",
      telephone: "+20 399998888",
      email: "info@efbalex.org.eg",
    },
    {
      id: 12,
      organization: "Coptic Orphans",
      governorate: "Giza",
      area: "Zamalek",
      type: "Non-profit",
      address: "23 Abu El Feda St., Zamalek, Cairo",
      telephone: "+20 288887777",
      email: "info@copticorphans.org",
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
  populateDropdownOptions("area-dropdown", "area");
  populateDropdownOptions("governorate-dropdown", "governorate");
  populateDropdownOptions("type-dropdown", "type");

  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(area, governorate, type) {
    const filteredCards = data.filter((card) => {
      return (area === "" || card.area === area) && (governorate === "" || card.governorate === governorate) && (type === "" || card.type === type);
    });
    renderCards(filteredCards);
  }

  // Function to create card HTML
  function createCardHTML(card) {
    return `
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${card.organization}</h5>
            <p class="card-text">Type: ${card.type}</p>
            <p class="card-text">Area: ${card.area}</p>
            <p class="card-text" style="margin-bottom: 25px;">Governorate: ${card.governorate}</p>
            <a href="./organizationProfile.html?id=${
              card.id
            }&organization=${encodeURIComponent(card.organization)}&area=${encodeURIComponent(card.area)}&email=${encodeURIComponent(card.email)}&telephone=${encodeURIComponent(card.telephone)}&address=${encodeURIComponent(card.address)}&type=${encodeURIComponent(card.type)}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}" class="btn btn--primary btn-block">View Profile</a>
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
    const searchInput = document.getElementById("search-input");
    const selectedArea = document.getElementById("area-dropdown").value;
    const selectedGovernorate = document.getElementById("governorate-dropdown").value;
    const selectedType = document.getElementById("type-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedArea, selectedGovernorate, selectedType);
  });

  // Event listener for search input field
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim();
    // If search term is not empty, filter by search term
    filterCards(searchTerm);
  });

  // Function to filter cards based on search input
  function filterCards(searchTerm) {
    const filteredCards = data.filter((card) => card.organization.toLowerCase().includes(searchTerm.toLowerCase()));
    renderCards(filteredCards);
  }

  // Function to handle button click and redirect to details page
  function handleButtonClick(card) {
    // Construct the URL with query parameters
    const url = `volunteerRequestsDetails.html?id=${card.id}&address=${encodeURIComponent(card.address)}&telephone=${encodeURIComponent(card.telephone)}&email=${encodeURIComponent(
      card.email
    )}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}&organization=${encodeURIComponent(card.organization)}`;
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

$(document).ready(function () {
  $(".navbar-nav .nav-item:nth-child(3)").addClass("active");

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
