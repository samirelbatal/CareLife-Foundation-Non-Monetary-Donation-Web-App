document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds
 
  const data = [
    {
      id: 1,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Books",
      name: "Math textbooks",
      quantity: 4
    },
    {
      id: 2,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Stationary",
      name: "Pencils",
      quantity: 4
    },
    {
      id: 3,
      category: "School Supplies",
      organization: "World Vision",
      type: "Books",
      name: "Science textbooks",
      quantity: 3
    },
    {
      id: 4,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Stationary",
      name: "Notebooks",
      quantity: 5
    },
    {
      id: 5,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Books",
      name: "Language textbooks",
      quantity: 2
    },
    {
      id: 6,
      category: "School Supplies",
      organization: "World Vision",
      type: "Stationary",
      name: "Erasers",
      quantity: 6
    },
    {
      id: 7,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Books",
      name: "History textbooks",
      quantity: 4
    },
    {
      id: 8,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Stationary",
      name: "Markers",
      quantity: 3
    },
    {
      id: 9,
      category: "School Supplies",
      organization: "World Vision",
      type: "Books",
      name: "Art textbooks",
      quantity: 4
    },
    {
      id: 10,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Stationary",
      name: "Rulers",
      quantity: 5
    },
    {
      id: 11,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Books",
      name: "Literature textbooks",
      quantity: 2
    },
    {
      id: 12,
      category: "School Supplies",
      organization: "World Vision",
      type: "Stationary",
      name: "Glue sticks",
      quantity: 6
    },
    {
      id: 13,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Books",
      name: "Geography textbooks",
      quantity: 4
    },
    {
      id: 14,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Stationary",
      name: "Highlighters",
      quantity: 3
    },
    {
      id: 15,
      category: "School Supplies",
      organization: "World Vision",
      type: "Books",
      name: "Music textbooks",
      quantity: 4
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
      return (
        (type === "" || card.type === type)
      );
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
            <img src="../img/don/book.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">Type: ${card.type}</p>
            <p class="card-text">Requested by: ${card.organization}</p>
            <a href="./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&quantity=${encodeURIComponent(card.quantity)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}" class="btn btn-primary btn-block">View Details</a>
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
      const url = `detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&quantity=${encodeURIComponent(card.quantity)}&name=${encodeURIComponent(card.name)}&use=${encodeURIComponent(card.use)}&organization=${encodeURIComponent(card.organization)}`;
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
