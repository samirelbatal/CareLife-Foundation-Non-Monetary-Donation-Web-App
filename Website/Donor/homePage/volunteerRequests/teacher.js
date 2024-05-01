document.addEventListener("DOMContentLoaded", function () {
    // Sample data for demonstration
    const data = [
      {
        id: 1,
        category:"Bro-bono Teacher",
        subject: "English",
        area: "Area 2",
        governorate: "Governorate 1",
        noOfStudents: 5,
        address:"",
        googleMap: "",

      },
      {
        id: 2,
        category:"Bro-bono Teacher",
        subject: "Chemistry",
        area: "Area 1",
        governorate: "Governorate 2",
        noOfStudents: 5,
        address:"",
        googleMap: ""
      },
      {
        id: 3,
        category:"Bro-bono Teacher",
        subject: "Math",
        area: "Area 2",
        governorate: "Governorate 3",
        noOfStudents: 5,
        address:"",
        googleMap: ""
      },
      {
        id: 4,
        subject: "English",
        area: "Area 3",
        governorate: "Governorate 1",
        noOfStudents: 5,
        address:"",
        googleMap: "",
      },
      
      {
        id: 5,
        category:"Bro-bono Teacher",
        subject:"History",
        area: "Area 1",
        governorate: "Governorate 1",
        noOfStudents: 5,
        address:"",
        googleMap: "",
      },
      {
        id: 6,
        category:"Bro-bono Teacher",
        subject:"History",
        area: "Area 2",
        governorate: "Governorate 2",
        noOfStudents: 5,
        address:"",
        googleMap: ""
      },
      {
        id: 7,
        category:"Bro-bono Teacher",
        subject:"Physics",
        area: "Area 1",
        governorate: "Governorate 3",
        noOfStudents: 5,
        address:"",
        googleMap: ""
      },
      
      {
        id: 8,
        category:"Bro-bono Teacher",
        subject:"Arabic",
        area: "Area 2",
        governorate: "Governorate 1",
        noOfStudents: 5,
        address:"",
        googleMap: "",
      },
      {
        id: 9,
        category:"Bro-bono Teacher",
        subject:"Arabic",
        area: "Area 1",
        governorate: "Governorate 2",
        noOfStudents: 5,
        address:"",
        googleMap: ""
      },
      {
        id: 10,
        category:"Bro-bono Teacher",
        subject:"Arabic",
        area: "Area 2",
        governorate: "Governorate 1",
        noOfStudents: 5,
        address:"",
        googleMap: ""
      },
      {
        id: 11,
        category:"Bro-bono Teacher",
        subject:"Arabic",
        area: "Area 1",
        governorate: "Governorate 2",
        noOfStudents: 5,
        address:"",
        googleMap: ""
      },
      {
        id: 10,
        category:"Bro-bono Teacher",
        subject:"Biology",
        area: "Area 2",
        governorate: "Governorate 1",
        noOfStudents: 5,
        address:"",
        googleMap: ""
      }
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
    populateDropdownOptions("subject-dropdown", "subject");
    populateDropdownOptions("governorate-dropdown", "governorate");
    populateDropdownOptions("type-dropdown", "area");
  
    // Function to filter cards based on selected options from dropdown menus
    function filterCardsByOptions(subject, governorate, type) {
      const filteredCards = data.filter((card) => {
        return (
          (subject === "" || card.subject === subject) &&
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
              <h5 class="card-title">${card.subject}</h5>
              <p class="card-text">Subject: ${card.subject}</p>
              <p class="card-text">Area: ${card.area}</p>           
              <p class="card-text">Governorate: ${card.governorate}</p>
              <a href="./volunteerRequestsDetails.html?id=${card.id}&category=${encodeURIComponent(card.category)}&subject=${encodeURIComponent(card.subject)}&noOfStudents=${encodeURIComponent(card.noOfStudents)}&address=${encodeURIComponent(card.address)}&googleMap=${encodeURIComponent(card.googleMap)}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}" class="btn btn-primary btn-block">View Details</a>
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
      const selectedGovernorate =
        document.getElementById("governorate-dropdown").value;
      const selectedType = document.getElementById("type-dropdown").value;
  
      // If search term is empty, filter by selected options
      filterCardsByOptions(selectedArea, selectedGovernorate, selectedType);
    });
  
  // Function to handle button click and redirect to details page
  function handleButtonClick(card) {
    // Construct the URL with query parameters
    const url = `volunteerRequestsDetails.html?id=${card.id}&subject=${encodeURIComponent(card.subject)}&googleMap=${encodeURIComponent(card.googleMap)}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}&category=${encodeURIComponent(card.category)}`;
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
  