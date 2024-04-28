document.addEventListener("DOMContentLoaded", function () {
  // Get all organization cards
  const orgCards = document.querySelectorAll(".card");

  // Function to show all organization cards
  function showAllCards() {
    orgCards.forEach(function (card) {
      card.style.display = "block";
    });
  }

  // Function to filter organization cards
  function filterCards(area, governorate, type) {
    orgCards.forEach(function (card) {
      const cardArea = card
        .querySelector(".card-text:nth-child(2)")
        .textContent.trim();
      const cardGovernorate = card
        .querySelector(".card-text:nth-child(3)")
        .textContent.trim();
      const cardType = card
        .querySelector(".card-text:nth-child(4)")
        .textContent.trim();
  
      // Convert area, governorate, and type to strings for comparison
      if (area === 2) {
        area = "Area: Area 1";
      } else if (area === 3) {
        area = "Area: Area 2";
      } else if (area === 4) {
        area = "Area: Area 3";
      } else if (area === 5) {
        area = "Area: Area 4";
      }
  
      if (governorate === 2) {
        governorate = "Governorate: Cairo";
      } else if (governorate === 3) {
        governorate = "Governorate: Alexandria";
      } else if (governorate === 4) {
        governorate = "Governorate: Giza";
      } else if (governorate === 5) {
        governorate = "Governorate: Fayoum";
      } else if (governorate === 6) {
        governorate = "Governorate: Sohag";
      } else if (governorate === 7) {
        governorate = "Governorate: Aswan";
      }
  
      if (type === 2) {
        type = "Type: Type 1";
      } else if (type === 3) {
        type = "Type: Type 2";
      } else if (type === 4) {
        type = "Type: Type 3";
      } else if (type === 5) {
        type = "Type: Type 4";
      }
  
      // Check if the card's properties match the selected filters or if all is selected
      if (
        (area === 0 || area === 1 || cardArea === area) &&
        (governorate === 0 ||  governorate === 1 ||cardGovernorate === governorate) &&
        (type === 0 || type===1|| cardType === type)
      ) {
        card.style.display = "block"; // Show the card if it matches the filters
      } else {
        card.style.display = "none"; // Hide the card if it doesn't match the filters
      }
    });
  }
  

  // Event listener for the filter button
  document
    .getElementById("filter-button")
    .addEventListener("click", function () {
      // Get the selected values from the dropdown menus
      const areaFilter = parseInt(document.getElementById("area-filter").value);
      const governorateFilter = parseInt(
        document.getElementById("governorate-filter").value
      );
      const typeFilter = parseInt(document.getElementById("type-filter").value);

      // Call the filterCards function with the selected values
      filterCards(areaFilter, governorateFilter, typeFilter);
    });

  // Event listener for the search form
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const searchTerm = document
      .getElementById("search-input")
      .value.trim()
      .toLowerCase();

    orgCards.forEach(function (card) {
      const cardTitle = card
        .querySelector(".card-title")
        .textContent.trim()
        .toLowerCase();

      if (cardTitle.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
