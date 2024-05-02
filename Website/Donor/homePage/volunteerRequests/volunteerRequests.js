document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds

  // Sample data for demonstration
  const data = [
    {
      id: 1,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Pediatrics",
      nameofpatient: "Ahmed",
      location: "Cairo",
      address: "123 Street, Cairo, Egypt",
      organization: "Charity Hospital",
      weight: 70,
      age: 7,
      gender: "Male",
      area: "Nasr City",
      governorate: "Cairo",
      caseDescription:
        "Ahmed has been experiencing persistent coughing and fever for the past week.",
    },
    {
      id: 2,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Cardiology",
      nameofpatient: "Fatima",
      location: "Alexandria",
      address: "456 Road, Alexandria, Egypt",
      organization: "Volunteer Clinic",
      weight: 65,
      age: 45,
      gender: "Female",
      area: "Miami",
      governorate: "Giza",
      caseDescription:
        "Fatima complains of chest pain and shortness of breath, suspecting a heart condition.",
    },
    {
      id: 3,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Dermatology",
      nameofpatient: "Hassan",
      location: "Giza",
      address: "789 Avenue, Giza, Egypt",
      organization: "Free Clinic",
      weight: 80,
      age: 30,
      gender: "Male",
      area: "Dokki",
      governorate: "Aswan",
      caseDescription:
        "Hassan has a persistent skin rash that needs examination and treatment.",
    },
    {
      id: 4,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Orthopedics",
      nameofpatient: "Layla",
      location: "Luxor",
      address: "10 Street, Luxor, Egypt",
      organization: "Cairo Clinic",
      weight: 60,
      age: 55,
      gender: "Female",
      area: "Karnak",
      governorate: "Luxor",
      caseDescription:
        "Layla has been experiencing severe joint pain in her knees, affecting her mobility.",
    },
    {
      id: 5,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Ophthalmology",
      nameofpatient: "Karim",
      location: "Aswan",
      address: "15 Lane, Aswan, Egypt",
      organization: "Vision Clinic",
      weight: 75,
      age: 40,
      gender: "Male",
      area: "Nubian Village",
      governorate: "Aswan",
      caseDescription:
        "Karim is suffering from blurred vision and needs an eye examination.",
    },
    {
      id: 6,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Gynecology",
      nameofpatient: "Nour",
      location: "Hurghada",
      address: "20 Boulevard, Hurghada, Egypt",
      organization: "Women's Health Center",
      weight: 55,
      age: 25,
      gender: "Female",
      area: "Sakkala",
      governorate: "Cairo",
      caseDescription:
        "Nour is seeking consultation regarding reproductive health and family planning.",
    },
    {
      id: 7,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Neurology",
      nameofpatient: "Tarek",
      location: "Sharm El Sheikh",
      address: "30 Road, Sharm El Sheikh, Egypt",
      organization: "Neurological Clinic",
      weight: 85,
      age: 60,
      gender: "Male",
      area: "Naama Bay",
      governorate: "Aswan",
      caseDescription:
        "Tarek has been experiencing frequent headaches and dizziness, requiring neurological assessment.",
    },
    {
      id: 8,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Psychiatry",
      nameofpatient: "Sara",
      location: "Marsa Alam",
      address: "40 Avenue, Marsa Alam, Egypt",
      organization: "Mental Clinic",
      weight: 70,
      age: 35,
      gender: "Female",
      area: "Port Ghalib",
      governorate: "Luxor",
      caseDescription:
        "Sara is seeking therapy for anxiety and depression, requiring psychiatric evaluation.",
    },
    {
      id: 9,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Urology",
      nameofpatient: "Khaled",
      location: "Suez",
      address: "50 Street, Suez, Egypt",
      organization: "Urological Clinic",
      weight: 75,
      age: 50,
      gender: "Male",
      area: "Port Tawfiq",
      governorate: "Suez",
      caseDescription:
        "Khaled is experiencing urinary problems and needs urological examination and treatment.",
    },
    {
      id: 10,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Endocrinology",
      nameofpatient: "Yasmine",
      location: "Fayoum",
      address: "60 Lane, Fayoum, Egypt",
      organization: "Metabolic Clinic",
      weight: 65,
      age: 30,
      gender: "Female",
      area: "Fayoum",
      governorate: "Fayoum",
      caseDescription:
        "Yasmine has been diagnosed with diabetes and needs endocrinological management.",
    },
    {
      id: 11,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Oncology",
      nameofpatient: "Aisha",
      location: "Giza",
      address: "789 Avenue, Giza, Egypt",
      organization: "Cancer Institute",
      weight: 55,
      age: 40,
      gender: "Female",
      area: "Dokki",
      governorate: "Giza",
      caseDescription:
        "Aisha has recently been diagnosed with breast cancer and needs oncological evaluation and treatment.",
    },
    {
      id: 12,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Rheumatology",
      nameofpatient: "Mohamed",
      location: "Alexandria",
      address: "456 Road, Alexandria, Egypt",
      organization: "Arthritis Clinic",
      weight: 80,
      age: 60,
      gender: "Male",
      area: "Miami",
      governorate: "Cairo",
      caseDescription:
        "Mohamed suffers from severe joint stiffness and pain, suggestive of rheumatological conditions such as arthritis.",
    },
    {
      id: 13,
      category: "Bro Bono Teacher",
      subject: "English",
      area: "Area 2",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "",
      googleMap: "",
    },
    {
      id: 14,
      category: "Bro Bono Teacher",
      subject: "Chemistry",
      area: "Area 1",
      governorate: "Governorate 2",
      noOfStudents: 5,
      address: "",
      googleMap: "",
    },
    {
      id: 15,
      category: "Bro Bono Teacher",
      subject: "Math",
      area: "Area 2",
      governorate: "Governorate 3",
      noOfStudents: 5,
      address: "",
      googleMap: "",
    },
    {
      id: 16,
      subject: "English",
      area: "Area 3",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "",
      googleMap: "",
    },

    {
      id: 17,
      category: "Bro Bono Teacher",
      subject: "History",
      area: "Area 1",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "",
      googleMap: "",
    },
    {
      id: 18,
      category: "Bro Bono Teacher",
      subject: "History",
      area: "Area 2",
      governorate: "Governorate 2",
      noOfStudents: 5,
      address: "",
      googleMap: "",
    },
    {
      id: 19,
      category: "Bro Bono Teacher",
      subject: "Physics",
      area: "Area 1",
      governorate: "Governorate 3",
      noOfStudents: 5,
      address: "",
      googleMap: "",
    },

    {
      id: 20,
      category: "Bro Bono Teacher",
      subject: "Arabic",
      area: "Area 2",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "",
      googleMap: "",
    },
    {
      id: 21,
      category: "Bro Bono Teacher",
      subject: "Arabic",
      area: "Area 1",
      governorate: "Governorate 2",
      noOfStudents: 5,
      address: "",
      googleMap: "",
    },
    {
      id: 22,
      category: "Bro Bono Teacher",
      subject: "Arabic",
      area: "Area 2",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "",
      googleMap: "",
    },
    {
      id: 23,
      category: "Bro Bono Teacher",
      subject: "Arabic",
      area: "Area 1",
      governorate: "Governorate 2",
      noOfStudents: 5,
      address: "",
      googleMap: "",
    },
    {
      id: 24,
      category: "Bro Bono Teacher",
      subject: "Biology",
      area: "Area 2",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "",
      googleMap: "",
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
  populateDropdownOptions("age-dropdown", "age");
  populateDropdownOptions("gender-dropdown", "gender");
  populateDropdownOptions("type-dropdown", "type");

  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(age, gender, type) {
    const filteredCards = data.filter((card) => {
      return (
        (age === "" || card.age === age) &&
        (gender === "" || card.gender === gender) &&
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
    let cardHTML = `
        <div class="col-lg-4 mb-4">
          <div class="card toy-donation-requests text-center"> <!-- Updated class to 'toy-donation-requests' and added 'text-center' class -->
            <div class="card-body">`;

    if (card.category === "Pro Bono Doctor") {
      cardHTML += `
          <img src="../img/don/doctor.jpg" class="card-img-top mx-auto mb-3" style="max-width: 190px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
          <h5 class="card-title">${card.organization}</h5>
          <p class="card-text">Requested by: ${card.organization}</p>
          <p class="card-text">Area: ${card.area}</p>           
          <p class="card-text">Governorate: ${card.governorate}</p>`;
    } else {
      cardHTML += `
          <img src="../img/don/teacher.jpg" class="card-img-top mx-auto mb-3" style="max-width: 190px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
          <h5 class="card-title">${card.subject}</h5>
          <p class="card-text">Subject: ${card.subject}</p>
          <p class="card-text">Area: ${card.area}</p>           
          <p class="card-text">Governorate: ${card.governorate}</p>`;
    }

    cardHTML += `<a href="organizationProfile.html" class="btn btn-primary btn-block">View Details</a>
            </div>
          </div>
        </div>`;

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
    const searchInput = document.getElementById("search-input");
    const selectedArea = document.getElementById("age-dropdown").value;
    const selectedGovernorate =
      document.getElementById("gender-dropdown").value;
    const selectedType = document.getElementById("type-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedArea, selectedGovernorate, selectedType);
  });

  // Event listener for search/filter button
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value.trim();

    // If search term is not empty, filter by search term
    filterCards(searchTerm);
  });

  // Function to filter cards based on search input
  function filterCards(searchTerm) {
    const filteredCards = data.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderCards(filteredCards);
  }

  document.getElementById("pageSelect").addEventListener("change", function () {
    var selectedPage = this.value;
    if (selectedPage) {
      window.location.href = selectedPage;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Hide loader after 2 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 1000); // 2000 milliseconds = 2 seconds
});
