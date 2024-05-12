document.addEventListener("DOMContentLoaded", function () {
  // Sample data for demonstration
  const data = [
    {
      id: 1,
      category: "Blood",
      nameofpatient: "Ahmed",
      bloodtype: "A-",
      hospitaladdress: "Heliopolis",
      name: "Organization 1",
      hospital: "Cleopatra Hospital",
      area: "Heliopolis",
      governorate: "Cairo",
    },
    {
      id: 2,
      category: "Blood",
      nameofpatient: "Omar",
      bloodtype: "B+",
      hospitaladdress: "Shubra Al Kheimah",
      name: "Organization 1",
      hospital: " Al Nas Hospital",
      area: "Shubra Al Kheimah",
      governorate: "Cairo",
    },
    {
      id: 3,
      category: "Blood",
      nameofpatient: "Samir",
      bloodtype: "O-",
      hospitaladdress: "Sekat Hadid Al Mahger, Zeinhom",
      name: "Organization 1",
      hospital: "57357",
      area: "El Sayeda Zeinab",
      governorate: "Cairo",
    },
    {
      id: 4,
      category: "Blood",
      nameofpatient: "Mariam",
      bloodtype: "A-",
      hospitaladdress: "N Teseen",
      name: "Organization 1",
      hospital: "Shifa Hospital",
      area: "New Cairo 1",
      governorate: "Cairo",
    },
    {
      id: 5,
      category: "Blood",
      nameofpatient: "Adel",
      bloodtype: "B-",
      hospitaladdress: "Dr Abd Al Rady Hanafy",
      name: "Organization 1",
      hospital: "El-Masala Specialized Hospital",
      area: "Sheyakhah Oula",
      governorate: "Aswan",
    },
    {
      id: 6,
      category: "Blood",
      nameofpatient: "Ahmed",
      bloodtype: "AB+",
      hospitaladdress: "Kornish Al Nile",
      name: "Organization 1",
      hospital: "El Karnak International Hospital",
      area: "Karnak",
      governorate: "Luxor",
    },
    {
      id: 7,
      nameofpatient: "Kareem",
      category: "Blood",
      bloodtype: "AB-",
      hospitaladdress: "El-Khouly",
      name: "Organization 1",
      hospital: "Misr Hospital",
      area: "Sohag 1",
      governorate: "Sohag",
    },
    {
      id: 8,
      category: "Blood",
      nameofpatient: "Menna",
      bloodtype: "O-",
      hospitaladdress: "Saad Zaghloul",
      name: "Organization 1",
      hospital: "El Nabawy El Mohandes Hospital",
      area: "First Al Faiyum",
      governorate: "Fayoum",
    },
    {
      id: 9,
      nameofpatient: "Ahmed",
      category: "Blood",
      bloodtype: "B-",
      hospitaladdress: "14 Gazaer",
      name: "Organization 1",
      hospital: "Zahraa Hospital",
      area: "Qesm Al Fayoum",
      governorate: "Fayoum",
    },
    {
      id: 10,
      category: "Blood",
      name: "Organization 1",
      nameofpatient: "Mahmoud Hassan",
      bloodtype: "A+",
      hospital: "El Nozha International Hospital",
      area: "El Nozha",
      governorate: "Cairo",
    },
    {
      id: 11,
      category: "Blood",
      nameofpatient: "Farah",
      bloodtype: "AB+",
      hospitaladdress: "432 Malak Hefni St.",
      name: "Organization 1",
      hospital: "Mabaret Alasafra Hospital",
      area: "Alasafra Station",
      governorate: "Alexandria",
    },
    {
      id: 12,
      category: "Blood",
      nameofpatient: "Sarah",
      bloodtype: "O+",
      hospitaladdress: "35 Bahaa Eldin Ghatwry St",
      name: "Organization 2",
      hospital: "Andalusia Hospital Smouha",
      area: "Semouha",
      governorate: "Alexandria",
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
  populateDropdownOptions("hospital-dropdown", "hospital");
  populateDropdownOptions("governorate-dropdown", "governorate");
  populateDropdownOptions("type-dropdown", "area");

  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(hospital, governorate, type) {
    const filteredCards = data.filter((card) => {
      return (hospital === "" || card.hospital === hospital) && (governorate === "" || card.governorate === governorate) && (type === "" || card.area === type);
    });
    renderCards(filteredCards);
  }

  function createCardHTML(card) {
    return `
      <div class="col-lg-4 mb-4">
        <div class="card toy-donation-requests text-center"> <!-- Updated class to 'toy-donation-requests' and added 'text-center' class -->
          <div class="card-body">
            <img src="../img/don/bloodDonation.jpg" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
            <h5 class="card-title">${card.hospital}</h5>
            <p class="card-text">Area: ${card.area}</p>           
            <p class="card-text">Governorate: ${card.governorate}</p>
            <a href="./detailsItems.html?id=${
              card.id
            }&category=${encodeURIComponent(card.category)}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&bloodtype=${encodeURIComponent(card.bloodtype)}&hospitaladdress=${encodeURIComponent(card.hospitaladdress)}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(card.hospital)}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}" class="btn btn--primary btn-block">View Details</a>
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
    const selectedArea = document.getElementById("hospital-dropdown").value;
    const selectedGovernorate = document.getElementById("governorate-dropdown").value;
    const selectedType = document.getElementById("type-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedArea, selectedGovernorate, selectedType);
  });

  // Function to handle button click and redirect to details page
  // Function to handle button click and redirect to details page
  function handleButtonClick(card) {
    // Construct the URL with query parameters
    const url = `detailsItems.html?id=${card.id}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&bloodtype=${encodeURIComponent(card.bloodtype)}&hospitaladdress=${encodeURIComponent(
      card.hospitaladdress
    )}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(card.hospital)}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(
      card.governorate
    )}&category=${encodeURIComponent(card.category)}`;
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
