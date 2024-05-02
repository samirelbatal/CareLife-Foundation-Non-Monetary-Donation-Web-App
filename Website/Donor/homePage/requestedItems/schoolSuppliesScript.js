document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds

  const data = [
    {
      id: 1,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Book",
      bookName: "Mathematics",
      quantity: 4,
      author: "John Doe",
      language: "English",
      summary: "A beginner's guide to mathematics covering basic arithmetic operations and concepts.",
      edition: "1st Edition"
    },
    {
      id: 2,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Stationary",
      stationaryName: "HB Pencils",
      quantity: 4,
    },
    {
      id: 3,
      category: "School Supplies",
      organization: "World Vision",
      type: "Book",
      bookName: "Science Explorers",
      quantity: 3,
      author: "Jane Smith",
      language: "English",
      summary: "An interactive science book introducing fundamental scientific principles through experiments and activities.",
      edition: "2nd Edition"
    },
    {
      id: 4,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Stationary",
      stationaryName: "Plain Exercise Books",
      quantity: 5,
    },
    {
      id: 5,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Book",
      bookName: "Adventure Tales",
      quantity: 2,
      author: "Michael Johnson",
      language: "English",
      summary: "A collection of thrilling adventure stories to ignite imagination and creativity.",
      edition: "1st Edition"
    },
    {
      id: 6,
      category: "School Supplies",
      organization: "World Vision",
      type: "Stationary",
      stationaryName: "Rubber Erasers",
      quantity: 6,
    },
    {
      id: 7,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Book",
      bookName: "History Uncovered",
      quantity: 4,
      author: "Emily Brown",
      language: "English",
      summary: "An exploration of key historical events and figures from around the world.",
      edition: "Revised Edition"
    },
    {
      id: 8,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Stationary",
      stationaryName: "Colorful Whiteboard Markers",
      quantity: 3,
    },
    {
      id: 9,
      category: "School Supplies",
      organization: "World Vision",
      type: "Book",
      bookName: "Artistic Expressions",
      quantity: 4,
      author: "David Lee",
      language: "English",
      summary: "An introduction to various forms of art, from painting to sculpture, with examples from renowned artists.",
      edition: "1st Edition"
    },
    {
      id: 10,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Stationary",
      stationaryName: "Clear Plastic Rulers",
      quantity: 5,
    },
    {
      id: 11,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Book",
      bookName: "Literary Wonders",
      quantity: 2,
      author: "Sarah Adams",
      language: "English",
      summary: "A compilation of classic literary works from different cultures and time periods.",
      edition: "2nd Edition"
    },
    {
      id: 12,
      category: "School Supplies",
      organization: "World Vision",
      type: "Stationary",
      stationaryName: "Non-Toxic Glue Sticks",
      quantity: 6,
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
    let cardHTML = `
      <div class="col-lg-4 mb-4">
        <div class="card toy-donation-requests text-center">
          <div class="card-body">
            <img src="../img/don/book.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">`;
    
    if (card.type === "Book") {
      cardHTML += `<h5 class="card-title">${card.bookName}</h5>`;
    } else {
      cardHTML += `<h5 class="card-title">${card.stationaryName}</h5>`;
    }
    
    cardHTML += `
            <p class="card-text">Type: ${card.type}</p>
            <p class="card-text">Requested by: ${card.organization}</p>
            <a href="./detailsItems.html?id=${card.id}&author=${encodeURIComponent(card.author)}&edition=${encodeURIComponent(card.edition)}&language=${encodeURIComponent(card.language)}&summary=${encodeURIComponent(card.summary)}&category=${encodeURIComponent(card.category)}&stationaryName=${encodeURIComponent(card.stationaryName)}&bookName=${encodeURIComponent(card.bookName)}&quantity=${encodeURIComponent(card.quantity)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}" class="btn btn-primary btn-block">View Details</a>
          </div>
        </div>
      </div>
    `;
    
    return cardHTML;
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
    const url = `detailsItems.html?id=${card.id}&edition=${encodeURIComponent(
      card.edition
    )}&author=${encodeURIComponent(
      card.author
    )}&language=${encodeURIComponent(
      card.language
    )}&summary=${encodeURIComponent(
      card.summary
    )}&category=${encodeURIComponent(
      card.category
    )}&type=${encodeURIComponent(
      card.type
    )}&category=${encodeURIComponent(
      card.category
    )}&stationaryName=${encodeURIComponent(
      card.stationaryName
    )}&bookName=${encodeURIComponent(card.bookName)}&use=${encodeURIComponent(
      card.use
    )}&organization=${encodeURIComponent(card.organization)}`;
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



document.addEventListener("DOMContentLoaded", function() {
  // Hide loader after 2 seconds
  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
  }, 1000); // 2000 milliseconds = 2 seconds
});
