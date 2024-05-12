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
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 2,
      category: "Blood",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
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
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
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
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
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
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
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
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      bloodtype: "B-",
      hospitaladdress: "Kornish Al Nile",
      name: "Organization 1",
      hospital: "El Karnak International Hospital",
      area: "Karnak",
      governorate: "Luxor",
    },
    {
      id: 7,
      nameofpatient: "Kareem",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      category: "Blood",
      bloodtype: "A+",
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
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
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
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
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
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
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
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      nameofpatient: "Farah",
      bloodtype: "A-",
      hospitaladdress: "432 Malak Hefni St.",
      name: "Organization 1",
      hospital: "Mabaret Alasafra Hospital",
      area: "Alasafra Station",
      governorate: "Alexandria",
    },
    {
      id: 12,
      category: "Blood",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      nameofpatient: "Sarah",
      bloodtype: "O+",
      hospitaladdress: "35 Bahaa Eldin Ghatwry St",
      name: "Organization 2",
      hospital: "Andalusia Hospital Smouha",
      area: "Semouha",
      governorate: "Alexandria",
    },
    {
      id: 13,
      organization: "Resala",
      category:"Clothes",
      age: "10 Years",
      gender: "Female",
      season: "Winter",
      material: "cotton",
      typeofclothing: "T-shirt",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
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
                <a class="dropdown-item edit-post" id="edit"href="#">Edit Post</a> <!-- Added 'edit-post' class -->
                <a class="dropdown-item delete-post" id="delete" href="#">Delete Post</a>
              </div>
            </div>
          </div>
          <div class="card-body">
            <img src="../img/don/bloodDonation.jpg" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
            <h5 class="card-title">Blood Type: ${card.bloodtype}</h5>
            <p class="card-text"><strong>Hospital:</strong> ${card.hospital}</p>        
            <p class="card-text"><strong>Governorate:</strong> ${card.governorate}</p>
            <p class="card-text" style="color: ${color};"><strong>Status:</strong> ${card.status}</p>
            <a href="../requestedItems/detailsItems.html?id=${
              card.id
            }&category=${encodeURIComponent(card.category)}&status=${encodeURIComponent(card.status)}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&bloodtype=${encodeURIComponent(card.bloodtype)}&hospitaladdress=${encodeURIComponent(card.hospitaladdress)}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(card.hospital)}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}" class="btn btn--primary btn-block">View Details</a>
        
          </div>
        </div>
      </div>
    `;
  }

  // Function to navigate to detailsItems.html with attributes attached
  function navigateToDetails(card) {
    const url = `./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&bloodtype=${encodeURIComponent(
      card.bloodtype
    )}&hospitaladdress=${encodeURIComponent(card.hospitaladdress)}&status=${encodeURIComponent(card.status)}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(card.hospital)}&area=${encodeURIComponent(
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

  // Function to clear URL parameters
  function clearUrlParams() {
    const baseUrl = window.location.href.split("?")[0];
    history.replaceState({}, document.title, baseUrl);
  }

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

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

  // Function to render cards
  function renderCards(cards) {
    const container = document.getElementById("cardContainer");
    container.innerHTML = ""; // Clear existing cards

    const category = getQueryParam("category");
    const hospital = getQueryParam("hospital");
    const hospitaladdress = getQueryParam("hospitaladdress");
    const area = getQueryParam("area");
    const governorate = getQueryParam("governorate");
    const nameofpatient = getQueryParam("nameofpatient");
    const bloodtype = getQueryParam("bloodtype");
    const id = getQueryParam("id");

    if (category != null) {
      const cardToUpdate = data.find((card) => card.id === parseInt(id));
      cardToUpdate.hospital = hospital;
      cardToUpdate.hospitaladdress = hospitaladdress;
      cardToUpdate.area = area;
      cardToUpdate.governorate = governorate;
      cardToUpdate.nameofpatient = nameofpatient;
      cardToUpdate.bloodtype = bloodtype;
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
