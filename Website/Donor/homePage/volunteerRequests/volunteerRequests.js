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
      caseDescription: "Ahmed has been experiencing persistent coughing and fever for the past week.",
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
      caseDescription: "Fatima complains of chest pain and shortness of breath, suspecting a heart condition.",
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
      caseDescription: "Hassan has a persistent skin rash that needs examination and treatment.",
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
      caseDescription: "Layla has been experiencing severe joint pain in her knees, affecting her mobility.",
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
      caseDescription: "Karim is suffering from blurred vision and needs an eye examination.",
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
      caseDescription: "Nour is seeking consultation regarding reproductive health and family planning.",
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
      caseDescription: "Tarek has been experiencing frequent headaches and dizziness, requiring neurological assessment.",
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
      caseDescription: "Sara is seeking therapy for anxiety and depression, requiring psychiatric evaluation.",
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
      caseDescription: "Khaled is experiencing urinary problems and needs urological examination and treatment.",
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
      caseDescription: "Yasmine has been diagnosed with diabetes and needs endocrinological management.",
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
      caseDescription: "Aisha has recently been diagnosed with breast cancer and needs oncological evaluation and treatment.",
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
      caseDescription: "Mohamed suffers from severe joint stiffness and pain, suggestive of rheumatological conditions such as arthritis.",
    },
    {
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
      organization: "Future Leaders Foundation",
      subject: "English",
      area: "Fayoum City",
      governorate: "Fayoum",
      noOfStudents: 5,
      address: "321 Maple Street, Fayoum City, Fayoum",
      googleMap: "https://www.google.com/maps?q=321+Maple+Street+Fayoum+City+Fayoum",
    },
    {
      id: 17,
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
      id: 18,
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
      id: 19,
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
      id: 20,
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
      id: 21,
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
      id: 22,
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
      id: 23,
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
      id: 24,
      organization: "Educate for Tomorrow",
      category: "Pro Bono Teacher",
      subject: "Biology",
      area: "Dokki",
      governorate: "Giza",
      noOfStudents: 5,
      address: "1212 Maple Street, Dokki, Giza",
      googleMap: "https://www.google.com/maps?q=1212+Maple+Street+Dokki+Giza",
    },

    // Add more organizations here if needed
  ];

  // Function to shuffle array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function createCardHTML(card) {
    let cardHTML = `
        <div class="col-lg-4 mb-4">
          <div class="card toy-donation-requests text-center"> <!-- Updated class to 'toy-donation-requests' and added 'text-center' class -->
            <div class="card-body">`;

    if (card.category === "Pro Bono Doctor") {
      cardHTML += `
          <img src="../img/don/doctor.jpeg" class="card-img-top mx-auto mb-3" style="max-width: 190px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
          <h5 class="card-title">${card.organization}</h5>
          <p class="card-text"><strong>Medical Speciality:</strong> ${card.medicalSpeciality}</p>
          <p class="card-text"><strong>Area:</strong> ${card.area}</p>           
          <p class="card-text"><strong>Governorate:</strong> ${card.governorate}</p>
          <a href="./volunteerRequestsDetails.html?id=${card.id}&category=${encodeURIComponent(card.category)}&area=${encodeURIComponent(card.area)}&caseDescription=${encodeURIComponent(
        card.caseDescription
      )}&medicalSpeciality=${encodeURIComponent(card.medicalSpeciality)}&governorate=${encodeURIComponent(card.governorate)}&address=${encodeURIComponent(card.address)}&gender=${encodeURIComponent(
        card.gender
      )}&age=${encodeURIComponent(card.age)}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&weight=${encodeURIComponent(card.weight)}&organization=${encodeURIComponent(
        card.organization
      )}" class="btn btn--primary btn-block">View Details</a>
          `;
    } else {
      cardHTML += `
          <img src="../img/don/teacher.jpg" class="card-img-top mx-auto mb-3" style="max-width: 190px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
          <h5 class="card-title">${card.subject}</h5>
          <p class="card-text"><strong>Subject:</strong> ${card.subject}</p>
          <p class="card-text"><strong>Area:</strong> ${card.area}</p>           
          <p class="card-text"><strong>Governorate:</strong> ${card.governorate}</p>
          <a href="./volunteerRequestsDetails.html?id=${card.id}&category=${encodeURIComponent(card.category)}&subject=${encodeURIComponent(card.subject)}&noOfStudents=${encodeURIComponent(
        card.noOfStudents
      )}&organization=${encodeURIComponent(card.organization)}&address=${encodeURIComponent(card.address)}&googleMap=${encodeURIComponent(card.googleMap)}&area=${encodeURIComponent(
        card.area
      )}&governorate=${encodeURIComponent(card.governorate)}" class="btn btn--primary btn-block">View Details</a>
          `;
    }

    cardHTML += `
            </div>
          </div>
        </div>`;

    return cardHTML;
  }

  // Shuffle the data array
  const shuffledData = shuffleArray(data);

  function renderRandomCards() {
    const container = document.getElementById("cardContainer");
    container.innerHTML = ""; // Clear existing cards

    shuffledData.forEach((card) => {
      const cardHTML = createCardHTML(card);
      container.innerHTML += cardHTML;
    });
  }

  // Initial rendering of randomly shuffled cards
  renderRandomCards();

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
        window.location.href = "../../login/login.html"; // Replace "deleted-profile.html" with the actual URL of the page you want to redirect to
      }
    });
  }
});
