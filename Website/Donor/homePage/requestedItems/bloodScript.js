document.addEventListener("DOMContentLoaded", function () {
  // Sample data for demonstration
  const data = [
    {
      id: 1,
      category:"Blood",
      nameofpatient:"Ahmed",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 2",
      governorate: "Governorate 1"
    
    },
    {
      id: 2,
      category:"Blood",
      nameofpatient:"Ahmed",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 1",
      area: "Area 1",
      governorate: "Governorate 2"
    },
    {
      id: 3,
      category:"Blood",
      nameofpatient:"Ahmed",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 2",
      governorate: "Governorate 1"
    },
    {
      id: 4,
      category:"Blood",
      nameofpatient:"Ahmed",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 1",
      governorate: "Governorate 2"
    },
    
    {
      id: 5,
      category:"Blood",
      nameofpatient:"Ahmed",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 1",
      area: "Area 1",
      governorate: "Governorate 2"
    },
    {
      id: 6,
      category:"Blood",
      nameofpatient:"Ahmed",
      bloodtype: "B-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 2",
      governorate: "Governorate 1"
    },
    {
      id: 7,
      nameofpatient:"Ahmed",
      category:"Blood",
      bloodtype: "A+",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 1",
      governorate: "Governorate 2"
    },
    
    {
      id: 8,
      category:"Blood",
      nameofpatient:"Ahmed",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      nameofpatient:"Ahmed",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 2",
      governorate: "Governorate 1"
    },
    {
      id: 9,
      nameofpatient:"Ahmed",
      category:"Blood",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 1",
      governorate: "Governorate 2"
    },
    {
      id: 10,
      category:"Blood",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 2",
      governorate: "Governorate 1"
    },
    {
      id: 11,
      category:"Blood",
      nameofpatient:"Ahmed",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 1",
      area: "Area 1",
      governorate: "Governorate 2"
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
  populateDropdownOptions("hospital-dropdown", "hospital");
  populateDropdownOptions("governorate-dropdown", "governorate");
  populateDropdownOptions("type-dropdown", "area");

  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(hospital, governorate, type) {
    const filteredCards = data.filter((card) => {
      return (
        (hospital === "" || card.hospital === hospital) &&
        (governorate === "" || card.governorate === governorate) &&
        (type === "" || card.area === type)
      );
    });
    renderCards(filteredCards);
  }

  function createCardHTML(card) {
    return `
      <div class="col-lg-4 mb-4">
        <div class="card toy-donation-requests text-center"> <!-- Updated class to 'toy-donation-requests' and added 'text-center' class -->
          <div class="card-body">
            <img src="../img/don/bloodDonation.jpg" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">Hospital: ${card.hospital}</p>
            <p class="card-text">Area: ${card.area}</p>           
            <p class="card-text">Governorate: ${card.governorate}</p>
            <a href="./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&bloodtype=${encodeURIComponent(card.bloodtype)}&hospitaladdress=${encodeURIComponent(card.hospitaladdress)}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(card.hospital)}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}" class="btn btn-primary btn-block">View Details</a>
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
    const selectedGovernorate =
      document.getElementById("governorate-dropdown").value;
    const selectedType = document.getElementById("type-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedArea, selectedGovernorate, selectedType);
  });


    // Function to handle button click and redirect to details page
// Function to handle button click and redirect to details page
function handleButtonClick(card) {
  // Construct the URL with query parameters
  const url = `detailsItems.html?id=${card.id}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&bloodtype=${encodeURIComponent(card.bloodtype)}&hospitaladdress=${encodeURIComponent(card.hospitaladdress)}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(card.hospital)}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}&category=${encodeURIComponent(card.category)}`;
  window.location.href = url; // Redirect to the details page
}

// Add event listener to each "View Details" button
document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', function() {
      const cardIndex = this.dataset.cardIndex; // Assuming you have a data attribute to identify the card index
      const selectedCard = data[cardIndex]; // Get the corresponding card object from the data array
      handleButtonClick(selectedCard); // Call the function to handle button click with the selected card
  });
});

});
