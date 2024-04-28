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
        const cardArea = card.querySelector(".card-text:nth-child(2)").textContent.trim();
        const cardGovernorate = card.querySelector(".card-text:nth-child(3)").textContent.trim();
        const cardType = card.querySelector(".card-text:nth-child(4)").textContent.trim();
        
        if (
          (area === "" || cardArea === area) &&
          (governorate === "" || cardGovernorate === governorate) &&
          (type === "" || cardType === type)
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }
  
    // Event listener for the filter button
    document.getElementById("filter-button").addEventListener("click", function () {
      const areaFilter = document.getElementById("area-filter").value;
      const governorateFilter = document.getElementById("governorate-filter").value;
      const typeFilter = document.getElementById("type-filter").value;
  
      filterCards(areaFilter, governorateFilter, typeFilter);
    });
  
    // Event listener for the search form
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      const searchTerm = document.getElementById("search-input").value.trim().toLowerCase();
  
      orgCards.forEach(function (card) {
        const cardTitle = card.querySelector(".card-title").textContent.trim().toLowerCase();
  
        if (cardTitle.includes(searchTerm)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
  