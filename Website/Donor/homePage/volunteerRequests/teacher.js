document.addEventListener("DOMContentLoaded", function () {
  // Sample data for demonstration

  const data = [
    {
      id: 1,
      organization: "Education for All Foundation",
      category: "Pro Bono Teacher",
      subject: "English",
      area: "Nasr City",
      governorate: "Cairo",
      noOfStudents: 5,
      address: "123 Main Street, Nasr City, Cairo",
      googleMap: "https://www.google.com/maps?q=123+Main+Street+Nasr+City+Cairo",
    },
    {
      id: 2,
      organization: "Learning Together Initiative",
      category: "Pro Bono Teacher",
      subject: "Chemistry",
      area: "Raml Station",
      governorate: "Alexandria",
      noOfStudents: 5,
      address: "456 Elm Street, Raml Station, Alexandria",
      googleMap: "https://www.google.com/maps?q=456+Elm+Street+Raml+Station+Alexandria",
    },
    {
      id: 3,
      organization: "Teach Better Society",
      category: "Pro Bono Teacher",
      subject: "Math",
      area: "Dokki",
      governorate: "Giza",
      noOfStudents: 5,
      address: "789 Oak Street, Dokki, Giza",
      googleMap: "https://www.google.com/maps?q=789+Oak+Street+Dokki+Giza",
    },
    {
      id: 4,
      organization: "Future Leaders Foundation",
      subject: "English",
      area: "Fayoum City",
      governorate: "Fayoum",
      noOfStudents: 5,
      address: "321 Maple Street, Fayoum City, Fayoum",
      googleMap: "https://www.google.com/maps?q=321+Maple+Street+Fayoum+City+Fayoum",
    },
    {
      id: 5,
      organization: "Bright Minds Association",
      category: "Pro Bono Teacher",
      subject: "History",
      area: "Maadi",
      governorate: "Cairo",
      noOfStudents: 5,
      address: "555 Pine Street, Maadi, Cairo",
      googleMap: "https://www.google.com/maps?q=555+Pine+Street+Maadi+Cairo",
    },
    {
      id: 6,
      organization: "Knowledge is Power Foundation",
      category: "Pro Bono Teacher",
      subject: "History",
      area: "Montaza",
      governorate: "Alexandria",
      noOfStudents: 5,
      address: "777 Cedar Street, Montaza, Alexandria",
      googleMap: "https://www.google.com/maps?q=777+Cedar+Street+Montaza+Alexandria",
    },
    {
      id: 7,
      organization: "Empower Youth Initiative",
      category: "Pro Bono Teacher",
      subject: "Physics",
      area: "Mohandessin",
      governorate: "Giza",
      noOfStudents: 5,
      address: "999 Walnut Street, Mohandessin, Giza",
      googleMap: "https://www.google.com/maps?q=999+Walnut+Street+Mohandessin+Giza",
    },
    {
      id: 8,
      organization: "Supporting Minds Association",
      category: "Pro Bono Teacher",
      subject: "Arabic",
      area: "Fayoum City",
      governorate: "Fayoum",
      noOfStudents: 5,
      address: "444 Birch Street, Fayoum City, Fayoum",
      googleMap: "https://www.google.com/maps?q=444+Birch+Street+Fayoum+City+Fayoum",
    },
    {
      id: 9,
      organization: "Teach Egypt Foundation",
      category: "Pro Bono Teacher",
      subject: "Arabic",
      area: "Maadi",
      governorate: "Cairo",
      noOfStudents: 5,
      address: "666 Pine Street, Maadi, Cairo",
      googleMap: "https://www.google.com/maps?q=666+Pine+Street+Maadi+Cairo",
    },
    {
      id: 10,
      organization: "Inspire Tomorrow Association",
      category: "Pro Bono Teacher",
      subject: "Arabic",
      area: "Montaza",
      governorate: "Alexandria",
      noOfStudents: 5,
      address: "888 Elm Street, Montaza, Alexandria",
      googleMap: "https://www.google.com/maps?q=888+Elm+Street+Montaza+Alexandria",
    },
    {
      id: 11,
      organization: "Learning Bridges Initiative",
      category: "Pro Bono Teacher",
      subject: "Arabic",
      area: "Mohandessin",
      governorate: "Giza",
      noOfStudents: 5,
      address: "1010 Oak Street, Mohandessin, Giza",
      googleMap: "https://www.google.com/maps?q=1010+Oak+Street+Mohandessin+Giza",
    },
    {
      id: 12,
      organization: "Educate for Tomorrow",
      category: "Pro Bono Teacher",
      subject: "Biology",
      area: "Dokki",
      governorate: "Giza",
      noOfStudents: 5,
      address: "1212 Maple Street, Dokki, Giza",
      googleMap: "https://www.google.com/maps?q=1212+Maple+Street+Dokki+Giza",
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
  populateDropdownOptions("subject-dropdown", "subject");
  populateDropdownOptions("governorate-dropdown", "governorate");
  populateDropdownOptions("area-dropdown", "area");

  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(subject, governorate, type) {
    const filteredCards = data.filter((card) => {
      return (subject === "" || card.subject === subject) && (governorate === "" || card.governorate === governorate) && (type === "" || card.area === type);
    });
    renderCards(filteredCards);
  }

  function createCardHTML(card) {
    return `
        <div class="col-lg-4 mb-4">
          <div class="card toy-donation-requests text-center"> <!-- Updated class to 'toy-donation-requests' and added 'text-center' class -->
            <div class="card-body">
              <img src="../img/don/teacher.jpg" class="card-img-top mx-auto mb-3" style="max-width: 170px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
              <h5 class="card-title">${card.subject}</h5>
              <p class="card-text"><strong>Subject:</strong> ${card.subject}</p>
              <p class="card-text"><strong>Area:</strong> ${card.area}</p>           
              <p class="card-text"><strong>Governorate:</strong> ${card.governorate}</p>
              <a href="./volunteerRequestsDetails.html?id=${
                card.id
              }&organization=${encodeURIComponent(card.organization)}&category=${encodeURIComponent(card.category)}&subject=${encodeURIComponent(card.subject)}&noOfStudents=${encodeURIComponent(card.noOfStudents)}&address=${encodeURIComponent(card.address)}&googleMap=${encodeURIComponent(card.googleMap)}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}" class="btn btn--primary btn-block">View Details</a>
           
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
    const selectedArea = document.getElementById("subject-dropdown").value;
    const selectedGovernorate = document.getElementById("governorate-dropdown").value;
    const selectedType = document.getElementById("area-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedArea, selectedGovernorate, selectedType);
  });

  // Function to handle button click and redirect to details page
  function handleButtonClick(card) {
    // Construct the URL with query parameters
    const url = `volunteerRequestsDetails.html?id=${card.id}&organization=${encodeURIComponent(card.organization)}&address=${encodeURIComponent(card.address)}&subject=${encodeURIComponent(
      card.subject
    )}&googleMap=${encodeURIComponent(card.googleMap)}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}&category=${encodeURIComponent(card.category)}`;
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
  $(".navbar-nav .nav-item:nth-child(4)").addClass("active");

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
