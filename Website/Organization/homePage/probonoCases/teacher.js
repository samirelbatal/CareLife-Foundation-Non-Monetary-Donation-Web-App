document.addEventListener("DOMContentLoaded", function () {
  // Sample data for demonstration

  const data = [
    {
      id: 1,
      category: "Pro Bono Teacher",
      subject: "English",
      area: "Area 2",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "123 Main Street, Governorate 1, Area 2",
      googleMap: "https://www.google.com/maps?q=123+Main+Street+Governorate+1+Area+2",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 2,
      category: "Pro Bono Teacher",
      subject: "Chemistry",
      area: "Area 1",
      governorate: "Governorate 2",
      noOfStudents: 5,
      address: "456 Elm Street, Governorate 2, Area 1",
      googleMap: "https://www.google.com/maps?q=456+Elm+Street+Governorate+2+Area+1",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 3,
      category: "Pro Bono Teacher",
      subject: "Math",
      area: "Area 2",
      governorate: "Governorate 3",
      noOfStudents: 5,
      address: "789 Oak Street, Governorate 3, Area 2",
      googleMap: "https://www.google.com/maps?q=789+Oak+Street+Governorate+3+Area+2",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 4,
      subject: "English",
      area: "Area 3",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "321 Maple Street, Governorate 1, Area 3",
      googleMap: "https://www.google.com/maps?q=321+Maple+Street+Governorate+1+Area+3",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 5,
      category: "Pro Bono Teacher",
      subject: "History",
      area: "Area 1",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "555 Pine Street, Governorate 1, Area 1",
      googleMap: "https://www.google.com/maps?q=555+Pine+Street+Governorate+1+Area+1",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 6,
      category: "Pro Bono Teacher",
      subject: "History",
      area: "Area 2",
      governorate: "Governorate 2",
      noOfStudents: 5,
      address: "777 Cedar Street, Governorate 2, Area 2",
      googleMap: "https://www.google.com/maps?q=777+Cedar+Street+Governorate+2+Area+2",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 7,
      category: "Pro Bono Teacher",
      subject: "Physics",
      area: "Area 1",
      governorate: "Governorate 3",
      noOfStudents: 5,
      address: "999 Walnut Street, Governorate 3, Area 1",
      googleMap: "https://www.google.com/maps?q=999+Walnut+Street+Governorate+3+Area+1",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 8,
      category: "Pro Bono Teacher",
      subject: "Arabic",
      area: "Area 2",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "444 Birch Street, Governorate 1, Area 2",
      googleMap: "https://www.google.com/maps?q=444+Birch+Street+Governorate+1+Area+2",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 9,
      category: "Pro Bono Teacher",
      subject: "Arabic",
      area: "Area 1",
      governorate: "Governorate 2",
      noOfStudents: 5,
      address: "666 Pine Street, Governorate 2, Area 1",
      googleMap: "https://www.google.com/maps?q=666+Pine+Street+Governorate+2+Area+1",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 10,
      category: "Pro Bono Teacher",
      subject: "Arabic",
      area: "Area 2",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "888 Elm Street, Governorate 1, Area 2",
      googleMap: "https://www.google.com/maps?q=888+Elm+Street+Governorate+1+Area+2",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 11,
      category: "Pro Bono Teacher",
      subject: "Arabic",
      area: "Area 1",
      governorate: "Governorate 2",
      noOfStudents: 5,
      address: "1010 Oak Street, Governorate 2, Area 1",
      googleMap: "https://www.google.com/maps?q=1010+Oak+Street+Governorate+2+Area+1",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 12,
      category: "Pro Bono Teacher",
      subject: "Biology",
      area: "Area 2",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "1212 Maple Street, Governorate 1, Area 2",
      googleMap: "https://www.google.com/maps?q=1212+Maple+Street+Governorate+1+Area+2",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
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
              <a class="dropdown-item edit-post" id="edit" href="#">Edit Post</a> <!-- Added 'edit-post' class -->
              <a class="dropdown-item delete-post" id="delete"href="#">Delete Post</a>
            </div>
          </div>
        </div>
          <div class="card-body">
              <img src="../img/don/teacher.jpg" class="card-img-top mx-auto mb-3" style="max-width: 170px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
              <h5 class="card-title">${card.subject}</h5>
              <p class="card-text">Subject: ${card.subject}</p>
              <p class="card-text">Area: ${card.area}</p>           
              <p class="card-text">Governorate: ${card.governorate}</p>
              <p class="card-text" style="color: ${color};">Status: ${card.status}</p>
              <a href="./volunteerRequestsDetails.html?id=${
                card.id
              }&organization=${encodeURIComponent(card.organization)}&category=${encodeURIComponent(card.category)}&subject=${encodeURIComponent(card.subject)}&noOfStudents=${encodeURIComponent(card.noOfStudents)}&address=${encodeURIComponent(card.address)}&googleMap=${encodeURIComponent(card.googleMap)}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}" class="btn btn-primary btn-block">View Details</a>
           
              </div>
          </div>
        </div>
      `;
  }

  // Function to navigate to detailsItems.html with attributes attached
  function navigateToDetails(card) {
    const url = `./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&area=${encodeURIComponent(card.area)}&address=${encodeURIComponent(card.address)}&noOfStudents=${encodeURIComponent(
      card.noOfStudents
    )}&governorate=${encodeURIComponent(card.governorate)}&subject=${encodeURIComponent(card.subject)}&organization=${encodeURIComponent(card.organization)}&googleMap=${encodeURIComponent(card.googleMap)}`;
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

  // Function to handle button click and redirect to details page
  function handleButtonClick(card) {
    // Construct the URL with query parameters
    const url = `volunteerRequestsDetails.html?id=${card.id}&address=${encodeURIComponent(card.address)}&subject=${encodeURIComponent(card.subject)}&googleMap=${encodeURIComponent(
      card.googleMap
    )}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}&category=${encodeURIComponent(card.category)}`;
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
