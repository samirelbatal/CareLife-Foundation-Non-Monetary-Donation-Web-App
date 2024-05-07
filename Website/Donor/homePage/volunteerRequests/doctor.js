document.addEventListener("DOMContentLoaded", function () {
    // Sample data for demonstration
   
    const data = [
      {
          id: 1,
          category: "Pro Bono Doctor",
          nameofpatient: "Ahmed",
          location: "Cairo",
          address: "123 Street, Cairo, Egypt",
          organization: "Charity Hospital",
          weight: 70,
          age: 7,
          gender: "Male",
          area: "Nasr City",
          governorate: "Cairo",
          caseDescription: "Ahmed has been experiencing persistent coughing and fever for the past week.",
          specialty: "Pediatrics"
      },
      {
          id: 2,
          category: "Pro Bono Doctor",
          nameofpatient: "Fatima",
          location: "Alexandria",
          address: "456 Road, Alexandria, Egypt",
          organization: "Volunteer Clinic",
          weight: 65,
          age: 45,
          gender: "Female",
          area: "Miami",
          governorate: "Giza",
          caseDescription: "Fatima complains of chest pain and shortness of breath, suspecting a heart condition.",
          specialty: "Cardiology"
      },
      {
          id: 3,
          category: "Pro Bono Doctor",
          nameofpatient: "Hassan",
          location: "Giza",
          address: "789 Avenue, Giza, Egypt",
          organization: "Free Clinic",
          weight: 80,
          age: 30,
          gender: "Male",
          area: "Dokki",
          governorate: "Aswan",
          caseDescription: "Hassan has a persistent skin rash that needs examination and treatment.",
          specialty: "Dermatology"
      },
      {
          id: 4,
          category: "Pro Bono Doctor",
          nameofpatient: "Layla",
          location: "Luxor",
          address: "10 Street, Luxor, Egypt",
          organization: "Cairo Clinic",
          weight: 60,
          age: 55,
          gender: "Female",
          area: "Karnak",
          governorate: "Luxor",
          caseDescription: "Layla has been experiencing severe joint pain in her knees, affecting her mobility.",
          specialty: "Orthopedics"
      },
      {
          id: 5,
          category: "Pro Bono Doctor",
          nameofpatient: "Karim",
          location: "Aswan",
          address: "15 Lane, Aswan, Egypt",
          organization: "Vision Clinic",
          weight: 75,
          age: 40,
          gender: "Male",
          area: "Nubian Village",
          governorate: "Aswan",
          caseDescription: "Karim is suffering from blurred vision and needs an eye examination.",
          specialty: "Ophthalmology"
      },
      {
          id: 6,
          category: "Pro Bono Doctor",
          nameofpatient: "Nour",
          location: "Hurghada",
          address: "20 Boulevard, Hurghada, Egypt",
          organization: "Women's Health Center",
          weight: 55,
          age: 25,
          gender: "Female",
          area: "Sakkala",
          governorate: "Cairo",
          caseDescription: "Nour is seeking consultation regarding reproductive health and family planning.",
          specialty: "Gynecology"
      },
      {
          id: 7,
          category: "Pro Bono Doctor",
          nameofpatient: "Tarek",
          location: "Sharm El Sheikh",
          address: "30 Road, Sharm El Sheikh, Egypt",
          organization: "Neurological Clinic",
          weight: 85,
          age: 60,
          gender: "Male",
          area: "Naama Bay",
          governorate: "Aswan",
          caseDescription: "Tarek has been experiencing frequent headaches and dizziness, requiring neurological assessment.",
          specialty: "Neurology"
      },
      {
          id: 8,
          category: "Pro Bono Doctor",
          nameofpatient: "Sara",
          location: "Marsa Alam",
          address: "40 Avenue, Marsa Alam, Egypt",
          organization: "Mental Clinic",
          weight: 70,
          age: 35,
          gender: "Female",
          area: "Port Ghalib",
          governorate: "Luxor",
          caseDescription: "Sara is seeking therapy for anxiety and depression, requiring psychiatric evaluation.",
          specialty: "Psychiatry"
      },
      {
          id: 9,
          category: "Pro Bono Doctor",
          nameofpatient: "Khaled",
          location: "Suez",
          address: "50 Street, Suez, Egypt",
          organization: "Urological Clinic",
          weight: 75,
          age: 50,
          gender: "Male",
          area: "Port Tawfiq",
          governorate: "Suez",
          caseDescription: "Khaled is experiencing urinary problems and needs urological examination and treatment.",
          specialty: "Urology"
      },
      {
          id: 10,
          category: "Pro Bono Doctor",
          nameofpatient: "Yasmine",
          location: "Fayoum",
          address: "60 Lane, Fayoum, Egypt",
          organization: "Metabolic Clinic",
          weight: 65,
          age: 30,
          gender: "Female",
          area: "Fayoum",
          governorate: "Fayoum",
          caseDescription: "Yasmine has been diagnosed with diabetes and needs endocrinological management.",
          specialty: "Endocrinology"
      },
      {
          id: 11,
          category: "Pro Bono Doctor",
          nameofpatient: "Aisha",
          location: "Giza",
          address: "789 Avenue, Giza, Egypt",
          organization: "Cancer Institute",
          weight: 55,
          age: 40,
          gender: "Female",
          area: "Dokki",
          governorate: "Giza",
          caseDescription: "Aisha has recently been diagnosed with breast cancer and needs oncological evaluation and treatment.",
          specialty: "Oncology"
      },
      {
          id: 12,
          category: "Pro Bono Doctor",
          nameofpatient: "Mohamed",
          location: "Alexandria",
          address: "456 Road, Alexandria, Egypt",
          organization: "Arthritis Clinic",
          weight: 80,
          age: 60,
          gender: "Male",
          area: "Miami",
          governorate: "Cairo",
          caseDescription: "Mohamed suffers from severe joint stiffness and pain, suggestive of rheumatological conditions such as arthritis.",
          specialty: "Rheumatology"
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
    populateDropdownOptions("specialty-dropdown", "specialty");
    populateDropdownOptions("organization-dropdown", "organization");
    populateDropdownOptions("governorate-dropdown", "governorate");
    populateDropdownOptions("area-dropdown", "area");
  
    // Function to filter cards based on selected options from dropdown menus
    function filterCardsByOptions(specialty, organization, governorate, type) {
      const filteredCards = data.filter((card) => {
        return (
          (organization === "" || card.organization === organization) &&
          (specialty === "" || card.specialty === specialty) &&
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
              <img src="../img/don/doctor.jpeg" class="card-img-top mx-auto mb-3" style="max-width: 190px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
              <h5 class="card-title">${card.organization}</h5>
              <p class="card-text">Requested by: ${card.organization}</p>
              <p class="card-text">Medical specialty: ${card.specialty}</p>
              <p class="card-text">Area: ${card.area}</p>           
              <p class="card-text">Governorate: ${card.governorate}</p>
              <a href="./volunteerRequestsDetails.html?id=${card.id}&category=${encodeURIComponent(card.category)}&area=${encodeURIComponent(card.area)}&caseDescription=${encodeURIComponent(card.caseDescription)}&governorate=${encodeURIComponent(card.governorate)}&address=${encodeURIComponent(card.address)}&gender=${encodeURIComponent(card.gender)}&age=${encodeURIComponent(card.age)}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&weight=${encodeURIComponent(card.weight)}&organization=${encodeURIComponent(card.organization)}" class="btn btn--primary btn-block">View Details</a>

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
      const selectedOrganization = document.getElementById("organization-dropdown").value;
      const selectedGovernorate = document.getElementById("governorate-dropdown").value;
      const selectedArea = document.getElementById("area-dropdown").value;
      const slectedSpecialty = document.getElementById("specialty-dropdown").value;
  
      // If search term is empty, filter by selected options
      filterCardsByOptions(slectedSpecialty, selectedOrganization, selectedGovernorate, selectedArea);
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
  
  document.addEventListener("DOMContentLoaded", function() {
    // Hide loader after 2 seconds
    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
    }, 1000); // 2000 milliseconds = 2 seconds
  });
  
  
$(document).ready(function() {
  $('.navbar-nav .nav-item:nth-child(4)').addClass('active');

  $('.navbar-nav .nav-item .nav-link').click(function() {
    $('.navbar-nav .nav-item').removeClass('active');

    $(this).closest('.nav-item').addClass('active');
  });
});

var subMenu1 = document.getElementById('subMenu1');
var subMenu2 = document.getElementById('subMenu2');

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