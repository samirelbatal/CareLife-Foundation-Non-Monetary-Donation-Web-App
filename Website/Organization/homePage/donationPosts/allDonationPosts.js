document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds

  function clearUrlParams() {
    const baseUrl = window.location.href.split("?")[0];
    history.replaceState({}, document.title, baseUrl);
  }

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Sample data for demonstration
  const data = [
    {
      id: 1,
      category: "Blood",
      nameofpatient: "Ahmed",
      bloodtype: "A-",
      hospitaladdress: "Heliopolis",
      name: "Organization 1",
      hospital: "Cleopatra Hospital",
      area: "Heliopolis",
      governorate: "Cairo",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 2,
      category: "Blood",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      nameofpatient: "Omar",
      bloodtype: "B+",
      hospitaladdress: "Shubra Al Kheimah",
      name: "Organization 1",
      hospital: " Al Nas Hospital",
      area: "Shubra Al Kheimah",
      governorate: "Cairo",
    },
    {
      id: 3,
      category: "Blood",
      nameofpatient: "Samir",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      bloodtype: "O-",
      hospitaladdress: "Sekat Hadid Al Mahger, Zeinhom",
      name: "Organization 1",
      hospital: "57357",
      area: "El Sayeda Zeinab",
      governorate: "Cairo",
    },
    {
      id: 4,
      category: "Blood",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      nameofpatient: "Mariam",
      bloodtype: "A-",
      hospitaladdress: "N Teseen",
      name: "Organization 1",
      hospital: "Shifa Hospital",
      area: "New Cairo 1",
      governorate: "Cairo",
    },
    {
      id: 5,
      category: "Blood",
      nameofpatient: "Adel",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      bloodtype: "B-",
      hospitaladdress: "Dr Abd Al Rady Hanafy",
      name: "Organization 1",
      hospital: "ElMasala Hospital",
      area: "Sheyakhah Oula",
      governorate: "Aswan",
    },
    {
      id: 6,
      category: "Blood",
      nameofpatient: "Ahmed",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      bloodtype: "B-",
      hospitaladdress: "Kornish Al Nile",
      name: "Organization 1",
      hospital: "ElKarnak Hospital",
      area: "Karnak",
      governorate: "Luxor",
    },
    {
      id: 7,
      nameofpatient: "Kareem",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      category: "Blood",
      bloodtype: "A+",
      hospitaladdress: "El-Khouly",
      name: "Organization 1",
      hospital: "Misr Hospital",
      area: "Sohag 1",
      governorate: "Sohag",
    },
    {
      id: 8,
      category: "Blood",
      nameofpatient: "Menna",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      bloodtype: "O-",
      hospitaladdress: "Saad Zaghloul",
      name: "Organization 1",
      hospital: "ElNabawy Hospital",
      area: "First Al Faiyum",
      governorate: "Fayoum",
    },
    {
      id: 9,
      nameofpatient: "Ahmed",
      category: "Blood",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      bloodtype: "B-",
      hospitaladdress: "14 Gazaer",
      name: "Organization 1",
      hospital: "Zahraa Hospital",
      area: "Qesm Al Fayoum",
      governorate: "Fayoum",
    },
    {
      id: 10,
      category: "Blood",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      name: "Organization 1",
      nameofpatient: "Mahmoud Hassan",
      bloodtype: "A+",
      hospital: "ElNozha Hospital",
      area: "El Nozha",
      governorate: "Cairo",
    },
    {
      id: 11,
      category: "Blood",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      nameofpatient: "Farah",
      bloodtype: "A-",
      hospitaladdress: "432 Malak Hefni St.",
      name: "Organization 1",
      hospital: "Alasafra Hospital",
      area: "Alasafra Station",
      governorate: "Alexandria",
    },
    {
      id: 12,
      category: "Blood",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
      nameofpatient: "Sarah",
      bloodtype: "O+",
      hospitaladdress: "35 Bahaa Eldin Ghatwry St",
      name: "Organization 2",
      hospital: "Andalusia Hospital",
      area: "Semouha",
      governorate: "Alexandria",
    },
    {
      id: 13,
      organization: "Resala",
      category: "Clothes",
      age: "10 Years",
      gender: "Female",
      season: "Winter",
      material: "cotton",
      typeofclothing: "T-shirt",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 14,
      organization: "Resala",
      category: "Clothes",
      age: "18 Years",
      gender: "Male",
      season: "Summer",
      material: "cotton",
      typeofclothing: "Short",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 15,
      category: "Clothes",
      organization: "AL-Omran",
      age: "17 Years",
      gender: "Female",
      season: "Spring",
      material: "cotton",
      typeofclothing: "legens",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 16,
      category: "Clothes",
      organization: "Misr El Kheir",
      age: "5 Years",
      gender: "Female",
      season: "Autumn",
      material: "cotton",
      typeofclothing: "Skirt",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 17,
      category: "Clothes",
      organization: "AL-Omran",
      age: "17 Years",
      gender: "Male",
      season: "Spring",
      material: "Linen",
      typeofclothing: "Pants",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 18,
      category: "Clothes",
      organization: "Resala",
      age: "9 Years",
      gender: "Male",
      season: "Summer",
      material: "Jeans",
      typeofclothing: "Trousers",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 19,
      category: "Clothes",
      organization: "Misr El Kheir",
      age: "15 Years",
      gender: "Male",
      season: "Spring",
      material: "cotton",
      typeofclothing: "Polo-Shirt",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 20,
      category: "Clothes",
      organization: "Resla",
      age: "5 Years",
      gender: "Female",
      season: "Winter",
      material: "Leather",
      typeofclothing: "Black Shoes",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 21,
      category: "Clothes",
      organization: "Red Cresent",
      age: "10 Years",
      gender: "Male",
      season: "Winter",
      material: "cotton",
      typeofclothing: "Long Sleeve Shirt",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 22,
      category: "Clothes",
      organization: "Red Cresent",
      age: "5 Years",
      gender: "Female",
      season: "Winter",
      material: "cotton",
      typeofclothing: "Jacket",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 23,
      category: "Clothes",
      organization: "Red Cresent",
      age: "10 Years",
      gender: "Male",
      season: "Spring",
      material: "cotton",
      typeofclothing: "Pants",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 24,
      category: "Clothes",
      organization: "Misr El Kheir",
      age: "15 Years",
      gender: "Male",
      season: "Winter",
      material: "cotton",
      typeofclothing: "Ice Cap",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 25,
      category: "Food",
      name: "Apple",
      type: "Fruits & Vegetables",
      organization: "Food for All Foundation",
      quantity: 5,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 26,
      category: "Food",
      name: "Banana",
      type: "Fruits & Vegetables",
      organization: "Hope Food Bank",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 27,
      category: "Food",
      name: "Carrot",
      type: "Fruits & Vegetables",
      organization: "Feeding America",
      quantity: 15,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 28,
      category: "Food",
      name: "Spinach",
      type: "Fruits & Vegetables",
      organization: "Nutrition Nation",
      quantity: 8,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 29,
      category: "Food",
      name: "Tomato",
      type: "Fruits & Vegetables",
      organization: "The Hunger Project",
      quantity: 25,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 30,
      category: "Food",
      name: "Canned Soup",
      type: "Canned Foods",
      organization: "Feeding America",
      quantity: 20,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 31,
      category: "Food",
      name: "Canned Tuna",
      type: "Canned Foods",
      organization: "Second Harvest",
      quantity: 18,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 32,
      category: "Food",
      name: "Canned Beans",
      type: "Canned Foods",
      organization: "Action Against Hunger",
      quantity: 9,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 33,
      category: "Food",
      name: "Canned Corn",
      type: "Canned Foods",
      organization: "Bread for the World",
      quantity: 17,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 34,
      category: "Food",
      name: "Canned Pineapple",
      type: "Canned Foods",
      organization: "Direct Relief",
      quantity: 10,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 35,
      category: "Medical Supplies",
      organization: "Red Cross",
      type: "Medical Device",
      name: "MRI Machine",
      quantity: 4,
      use: "ayhaga",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 36,
      category: "Medical Supplies",
      organization: "Doctors Without Borders",
      type: "Medication",
      name: "Aspirin",
      quantity: 4,
      use: "ayhaga",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 37,
      category: "Medical Supplies",
      organization: "UNICEF",
      type: "Medical Equipment",
      name: "X-ray Machine",
      quantity: 4,
      use: "ayhaga",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 38,
      category: "Medical Supplies",
      organization: "Direct Relief",
      type: "Medical Device",
      name: "Pacemaker",
      quantity: 4,
      use: "ayhaga",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 39,
      category: "Medical Supplies",
      organization: "International Medical Corps",
      type: "Medication",
      name: "Antibiotics",
      quantity: 4,
      use: "ayhaga",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 40,
      category: "Medical Supplies",
      organization: "Americares",
      type: "Medical Equipment",
      name: "Ultrasound Machine",
      quantity: 4,
      use: "ayhaga",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 41,
      category: "Medical Supplies",
      organization: "GlobalGiving",
      type: "Medical Device",
      name: "Defibrillator",
      quantity: 4,
      use: "ayhaga",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 42,
      category: "Medical Supplies",
      organization: "Save the Children",
      type: "Medication",
      name: "Insulin",
      quantity: 4,
      use: "ay haga",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 43,
      category: "Medical Supplies",
      organization: "Mercy Corps",
      type: "Medical Equipment",
      name: "Stethoscope",
      quantity: 7,
      use: "ayhaga",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 44,
      category: "Medical Supplies",
      organization: "CARE",
      type: "Medical Device",
      name: "Ventilator",
      quantity: 4,
      use: "ayhaga",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 45,
      category: "Medical Supplies",
      organization: "Action Against Hunger",
      type: "Medication",
      name: "Paracetamol",
      quantity: 4,
      use: "ayhaga",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 46,
      category: "Medical Supplies",
      organization: "International Federation of Red Cross and Red Crescent Societies",
      type: "Medical Equipment",
      name: "Blood pressure monitor",
      quantity: 4,
      use: "ayhaga",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 47,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Book",
      bookName: "Mathematics",
      quantity: 4,
      author: "John Doe",
      language: "English",
      summary: "A beginner's guide to mathematics covering basic arithmetic operations and concepts.",
      edition: "1st Edition",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 48,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Stationary",
      condition: "New",
      stationaryName: "HB Pencils",
      quantity: 4,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 49,
      category: "School Supplies",
      organization: "World Vision",
      type: "Book",
      bookName: "Science Explorers",
      quantity: 3,
      author: "Jane Smith",
      language: "English",
      summary: "An interactive science book introducing fundamental scientific principles through experiments and activities.",
      edition: "2nd Edition",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 50,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Stationary",
      condition: "Gently Used",
      stationaryName: "Plain Exercise Books",
      quantity: 5,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 51,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Book",
      bookName: "Adventure Tales",
      quantity: 2,
      author: "Michael Johnson",
      language: "English",
      summary: "A collection of thrilling adventure stories to ignite imagination and creativity.",
      edition: "1st Edition",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 52,
      category: "School Supplies",
      organization: "World Vision",
      type: "Stationary",
      condition: "New",
      stationaryName: "Rubber Erasers",
      quantity: 6,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 53,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Book",
      bookName: "History Uncovered",
      quantity: 4,
      author: "Emily Brown",
      language: "English",
      summary: "An exploration of key historical events and figures from around the world.",
      edition: "Revised Edition",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 54,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Stationary",
      condition: "Gently Used",
      stationaryName: "Whiteboard Markers",
      quantity: 3,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 55,
      category: "School Supplies",
      organization: "World Vision",
      type: "Book",
      bookName: "Artistic Expressions",
      quantity: 4,
      author: "David Lee",
      language: "English",
      summary: "An introduction to various forms of art, from painting to sculpture, with examples from renowned artists.",
      edition: "1st Edition",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 56,
      category: "School Supplies",
      organization: "Save the Children",
      type: "Stationary",
      condition: "New",
      stationaryName: "Clear Plastic Rulers",
      quantity: 5,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 57,
      category: "School Supplies",
      organization: "UNICEF",
      type: "Book",
      bookName: "Literary Wonders",
      quantity: 2,
      author: "Sarah Adams",
      language: "English",
      summary: "A compilation of classic literary works from different cultures and time periods.",
      edition: "2nd Edition",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 58,
      category: "School Supplies",
      organization: "World Vision",
      type: "Stationary",
      condition: "Gently Used",
      stationaryName: "Non-Toxic Glue Sticks",
      quantity: 6,
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 59,
      category: "Toys",
      name: "Barbie",
      age: "10 Years",
      gender: "Male",
      type: "Doll",
      organization: "Dream Charity",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 60,
      category: "Toys",
      name: "Ken",
      age: "10 Years",
      gender: "Male",
      type: "Doll",
      organization: "Kids Foundation",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 61,
      category: "Toys",
      name: "Monopoly",
      age: "10 Years",
      gender: "Male",
      type: "Board Game",
      organization: "Game Charity",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 61,
      category: "Toys",
      name: "Baby Alive",
      age: "5 Years",
      gender: "Female",
      type: "Doll",
      organization: "Toy Aid",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 62,
      category: "Toys",
      name: "Ticket to Ride",
      age: "8 Years",
      gender: "Female",
      type: "Board Game",
      organization: "Playful Hearts",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 63,
      name: "GI Joe",
      category: "Toys",
      age: "12 Years",
      gender: "Male",
      type: "Action Figure",
      organization: "Hero Aid",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 64,
      name: "Rubik's Cube",
      age: "3 Years",
      category: "Toys",
      gender: "Female",
      type: "Puzzle",
      organization: "Mind Puzzles",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 65,
      category: "Toys",
      name: "LeapFrog",
      age: "7 Years",
      gender: "Male",
      type: "Educational Toy",
      organization: "Bright Minds",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 66,
      category: "Toys",
      name: "American Girl Doll",
      age: "6 Years",
      gender: "Female",
      type: "Dollhouse",
      organization: "Dream Doll",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 67,
      category: "Toys",
      name: "Hot Wheels",
      age: "9 Years",
      gender: "Male",
      type: "Remote Control Car",
      organization: "Speedy Wheels",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 68,
      category: "Toys",
      name: "Raggedy Ann and Andy",
      age: "6 Years",
      gender: "Female",
      type: "Dollhouse",
      organization: "Raggedy Hearts",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 69,
      category: "Toys",
      name: "LEGO Technic",
      age: "9 Years",
      gender: "Male",
      type: "Remote Control Car",
      organization: "Building Dreams",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 70,
      category: "Toys",
      name: "Barbie",
      age: "10 Years",
      gender: "Male",
      type: "Doll",
      organization: "Hope Kids",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
    },
    {
      id: 71,
      category: "Toys",
      name: "Scrabble",
      age: "10 Years",
      gender: "Male",
      type: "Board Game",
      organization: "Game Night",
      status: Math.random() < 0.5 ? "Fulfilled" : "Unfulfilled",
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
  populateDropdownOptions("status-dropdown", "status");

  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(status) {
    const filteredCards = data.filter((card) => {
      return status === "" || card.status === status;
    });
    renderRandomCards(filteredCards);
  }

  function redirectToPage(pageUrl) {
    if (pageUrl) {
      window.location.href = pageUrl;
    }
  }

  function createCardHTML(card) {
    const color = card.status === "Fulfilled" ? "green" : "red";

    let cardHTML = `
    <div class="col-lg-4 mb-4">
    <div class="card toy-donation-requests text-center" data-card-id="${card.id}" style="background-color: #e6edff;">
      <div class="card-header">
        <div class="dropdown dropleft">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fa fa-ellipsis-v"></i>
      </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item edit-post" id="edit"href="#">Edit Post</a> <!-- Added 'edit-post' class -->
            <a class="dropdown-item delete-post" id="delete" href="#">Delete Post</a>
          </div>
        </div>
      </div>`;

    if (card.category === "Blood") {
      cardHTML += ` <div class="card-body">
      <img src="../img/don/bloodDonation.jpg" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
      <h5 class="card-title" style="margin-bottom: 20px;">Blood Type ${card.bloodtype}</h5>
      <p class="card-text"><strong>Hospital:</strong> ${card.hospital}</p>       
      <p class="card-text" style="color: ${color}; margin-bottom: 35px;"><strong>Status:</strong> ${card.status}</p>
      <a href="../requestedItems/detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&bloodtype=${encodeURIComponent(
        card.bloodtype
      )}&status=${encodeURIComponent(card.status)}&hospitaladdress=${encodeURIComponent(card.hospitaladdress)}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(
        card.hospital
      )}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}" class="btn btn--primary btn-block">View Details</a>
  
    </div>
  </div>
</div> `;
    } else if (card.category === "Clothes") {
      cardHTML += `  <div class="card-body">
      <img src="../img/don/clothing.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
      <h5 class="card-title" style="margin-bottom: 20px;">${card.typeofclothing}</h5>
      <p class="card-text"><strong>Age:</strong> ${card.age}</p>
      <p class="card-text" style="color: ${color}; margin-bottom: 35px;"><strong>Status:</strong> ${card.status}</p>
      <a href="../requestedItems/detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&organization=${encodeURIComponent(card.organization)}&age=${encodeURIComponent(
        card.age
      )}&gender=${encodeURIComponent(card.gender)}&status=${encodeURIComponent(card.status)}&season=${encodeURIComponent(card.season)}&material=${encodeURIComponent(
        card.material
      )}&typeofclothing=${encodeURIComponent(card.typeofclothing)}" class="btn btn--primary btn-block">View Details</a>
 
 </div>
  </div>
</div> `;
    } else if (card.category === "Food") {
      cardHTML += `  <div class="card-body">
      <img src="../img/don/shopping-bag.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
      <h5 class="card-title" style="margin-bottom: 20px;">${card.name}</h5>
      <p class="card-text"><strong>Type:</strong> ${card.type}</p>
      <p class="card-text" style="color: ${color}; margin-bottom: 35px;"><strong>Status:</strong> ${card.status}</p>
      <a href="../requestedItems/detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&quantity=${encodeURIComponent(card.quantity)}&name=${encodeURIComponent(
        card.name
      )}&type=${encodeURIComponent(card.type)}&status=${encodeURIComponent(card.status)}&organization=${encodeURIComponent(card.organization)}" class="btn btn--primary btn-block">View Details</a>

 </div>
  </div>
</div> `;
    } else if (card.category === "Medical Supplies") {
      cardHTML += `     <div class="card-body">
      <img src="../img/don/medicalDonation.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
      <h5 class="card-title" style="margin-bottom: 20px;">${card.name}</h5>
      <p class="card-text"><strong>Type:</strong> ${card.type}</p>
      <p class="card-text" style="color: ${color}; margin-bottom: 35px;"><strong>Status:</strong> ${card.status}</p>
      <a href="../requestedItems/detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&type=${encodeURIComponent(
        card.type
      )}&use=${encodeURIComponent(card.use)}&status=${encodeURIComponent(card.status)}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(
        card.hospital
      )}&governorate=${encodeURIComponent(card.governorate)}" class="btn btn--primary btn-block">View Details</a>
    </div>
  </div>
</div> `;
    } else if (card.category === "School Supplies") {
      if (card.type === "Book") {
        cardHTML += ` 
        <div class="card-body">
          <img src="../img/don/book.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
          <h5 class="card-title" style="margin-bottom: 20px;">${card.bookName}</h5>
          <p class="card-text"><strong>Book Author:</strong> ${card.author}</p>
          <p class="card-text" style="color: ${color}; margin-bottom: 35px;"><strong>Status:</strong> ${card.status}</p>
        
          <a href="../requestedItems/detailsItems.html?id=${card.id}&author=${encodeURIComponent(card.author)}&edition=${encodeURIComponent(card.edition)}&language=${encodeURIComponent(
          card.language
        )}&summary=${encodeURIComponent(card.summary)}&category=${encodeURIComponent(card.category)}&stationaryName=${encodeURIComponent(card.stationaryName)}&bookName=${encodeURIComponent(
          card.bookName
        )}&quantity=${encodeURIComponent(card.quantity)}&status=${encodeURIComponent(card.status)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(
          card.organization
        )}" class="btn btn--primary btn-block">View Details</a>
          </div>
      </div>
    </div>`;
      } else {
        cardHTML += `   
        <div class="card-body">
          <img src="../img/don/book.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
          <h5 class="card-title" style="margin-bottom: 20px;">${card.stationaryName}</h5>
          <p class="card-text"><strong>Quantity Needed:</strong> ${card.quantity}</p>
          <p class="card-text" style="color: ${color}; margin-bottom: 35px;"><strong>Status:</strong> ${card.status}</p>
        
          <a href="../requestedItems/detailsItems.html?id=${card.id}&author=${encodeURIComponent(card.author)}&edition=${encodeURIComponent(card.edition)}&language=${encodeURIComponent(
          card.language
        )}&summary=${encodeURIComponent(card.summary)}&category=${encodeURIComponent(card.category)}&stationaryName=${encodeURIComponent(card.stationaryName)}&bookName=${encodeURIComponent(
          card.bookName
        )}&condition=${encodeURIComponent(card.condition)}&quantity=${encodeURIComponent(card.quantity)}&status=${encodeURIComponent(card.status)}&type=${encodeURIComponent(
          card.type
        )}&organization=${encodeURIComponent(card.organization)}" class="btn btn--primary btn-block">View Details</a>
          </div>
      </div>
    </div>  `;
      }
    } else if (card.category === "Toys") {
      cardHTML += `      <div class="card-body">
      <img src="../img/don/toyDonation.webp" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
      <h5 class="card-title" style="margin-bottom: 20px;">${card.name}</h5>
      <p class="card-text"><strong>Type:</strong> ${card.type}</p>
      <p class="card-text" style="color: ${color}; margin-bottom: 47px;"><strong>status:</strong> ${card.status}</p>
      <a href="../requestedItems/detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&age=${encodeURIComponent(
        card.age
      )}&gender=${encodeURIComponent(card.gender)}&status=${encodeURIComponent(card.status)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(
        card.organization
      )}" class="btn btn--primary btn-block" >View Details</a>
   
    </div>
  </div>
</div>  `;
    }

    return cardHTML;
  }

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-post")) {
      // Get the modal
      const modal = document.getElementById("deleteModal");

      // Show the modal
      $(modal).modal("show");

      // Add event listener to the delete button in the modal
      modal.querySelector(".btn-danger").addEventListener("click", function () {
        const card = event.target.closest(".card");

        if (card) {
          // Get card id from the card's data attributes
          const cardId = parseInt(card.getAttribute("data-card-id"));

          // Remove the card from the data array
          const index = data.findIndex((card) => card.id === cardId);
          if (index !== -1) {
            data.splice(index, 1); // Remove the card from the data array
          }

          // Re-render the cards
          renderRandomCards(data);
        }

        // Hide the modal after deletion
        $(modal).modal("hide");
      });
    }
  });

  // Function to shuffle array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // // Shuffle the data array
  // const shuffledData = shuffleArray(data);

  function renderRandomCards(data) {
    const container = document.getElementById("cardContainer");
    container.innerHTML = ""; // Clear existing cards

    const category = getQueryParam("category");
    const hospital = getQueryParam("hospital");
    const hospitaladdress = getQueryParam("hospitaladdress");
    const area = getQueryParam("area");
    const governorate = getQueryParam("governorate");
    const nameofpatient = getQueryParam("nameofpatient");
    const bloodtype = getQueryParam("bloodtype");
    const id = getQueryParam("id");

    const type = getQueryParam("type");
    const gender = getQueryParam("gender");
    const age = getQueryParam("age");
    const name = getQueryParam("name");

    const bookName = getQueryParam("bookName");
    const edition = getQueryParam("edition");

    const stationaryName = getQueryParam("stationaryName");
    const author = getQueryParam("author");
    const language = getQueryParam("language");
    const summary = getQueryParam("summary");
    const quantity = getQueryParam("quantity");

    const season = getQueryParam("season");
    const material = getQueryParam("material");
    const typeofclothing = getQueryParam("typeofclothing");

    const use = getQueryParam("use");

    if (category != null) {
      if (category === "Blood") {
        const cardToUpdate = data.find((card) => card.id === parseInt(id));
        cardToUpdate.hospital = hospital;
        cardToUpdate.hospitaladdress = hospitaladdress;
        cardToUpdate.area = area;
        cardToUpdate.governorate = governorate;
        cardToUpdate.nameofpatient = nameofpatient;
        cardToUpdate.bloodtype = bloodtype;
      } else if (category === "Clothes") {
        const cardToUpdate = data.find((card) => card.id === parseInt(id));
        cardToUpdate.name = name;
        cardToUpdate.age = age;
        cardToUpdate.gender = gender;
        cardToUpdate.typeofclothing = typeofclothing;
        cardToUpdate.material = material;
        cardToUpdate.season = season;
      } else if (category === "Toys") {
        const cardToUpdate = data.find((card) => card.id === parseInt(id));
        cardToUpdate.name = name;
        cardToUpdate.age = age;
        cardToUpdate.gender = gender;
        cardToUpdate.type = type;
        cardToUpdate.quantity = quantity;
      } else if (category === "School Supplies") {
        const cardToUpdate = data.find((card) => card.id === parseInt(id));
        if (type === "Stationary") {
          cardToUpdate.stationaryName = stationaryName;
          cardToUpdate.quantity = quantity;
        } else {
          cardToUpdate.bookName = bookName;
          cardToUpdate.summary = summary;
          cardToUpdate.edition = edition;
          cardToUpdate.language = language;
          cardToUpdate.author = author;
        }
      } else if (category === "Medical Supplies") {
        const cardToUpdate = data.find((card) => card.id === parseInt(id));
        cardToUpdate.name = name;
        cardToUpdate.type = type;
        cardToUpdate.use = use;
      } else if (category === "Food") {
        const cardToUpdate = data.find((card) => card.id === parseInt(id));
        cardToUpdate.name = name;
        cardToUpdate.quantity = quantity;
        cardToUpdate.type = type;
      }
    }

    data.forEach((card) => {
      const cardHTML = createCardHTML(card);
      container.innerHTML += cardHTML;
    });

    // Clear URL parameters
    clearUrlParams();
  }

  // Function to navigate to detailsItems.html with attributes attached
  function navigateToDetails(card) {
    const url = `./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(
      card.gender
    )}&season=${encodeURIComponent(card.season)}&material=${encodeURIComponent(card.material)}&typeofclothing=${encodeURIComponent(card.typeofclothing)}&nameofpatient=${encodeURIComponent(
      card.nameofpatient
    )}&bloodtype=${encodeURIComponent(card.bloodtype)}&hospitaladdress=${encodeURIComponent(card.hospitaladdress)}&governorate=${encodeURIComponent(card.governorate)}&area=${encodeURIComponent(
      card.area
    )}&hospital=${encodeURIComponent(card.hospital)}&type=${encodeURIComponent(card.type)}&bookName=${encodeURIComponent(card.bookName)}&name=${encodeURIComponent(card.name)}&use=${encodeURIComponent(
      card.use
    )}&condition=${encodeURIComponent(card.condition)}&author=${encodeURIComponent(card.author)}&language=${encodeURIComponent(card.language)}&edition=${encodeURIComponent(
      card.edition
    )}&summary=${encodeURIComponent(card.summary)}&quantity=${encodeURIComponent(card.quantity)}&status=${encodeURIComponent(card.status)}&stationaryName=${encodeURIComponent(card.stationaryName)}`;
    window.location.href = url;
  }

  // Add event listener to "Edit Post" links
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit-post")) {
      const card = event.target.closest(".card");
      if (card) {
        // Get card data from the card's data attributes
        const cardId = card.getAttribute("data-card-id");
        const selectedCard = data.find((card) => card.id === parseInt(cardId));
        if (selectedCard) {
          navigateToDetails(selectedCard);
        }
      }
    }
  });

  // Initial rendering of randomly shuffled cards
  renderRandomCards(data);

  // Event listener for search/filter button
  const filterButton = document.getElementById("filter-button");
  filterButton.addEventListener("click", () => {
    const selectedStatus = document.getElementById("status-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedStatus);
  });

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
  $(".navbar-nav .nav-item:nth-child(2)").addClass("active");

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
