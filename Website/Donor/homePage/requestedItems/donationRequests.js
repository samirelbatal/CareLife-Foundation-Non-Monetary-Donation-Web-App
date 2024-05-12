document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds


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
    },
    {
      id: 2,
      category: "Blood",
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
      bloodtype: "O-",
      hospitaladdress: "Sekat Hadid Al Mahger, Zeinhom",
      name: "Organization 1",
      hospital: "57357 Hospital",
      area: "El Sayeda Zeinab",
      governorate: "Cairo",
    },
    {
      id: 4,
      category: "Blood",
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
      bloodtype: "B-",
      hospitaladdress: "Dr Abd Al Rady Hanafy",
      name: "Organization 1",
      hospital: "El-Masala  Hospital",
      area: "Sheyakhah Oula",
      governorate: "Aswan",
    },
    {
      id: 6,
      category: "Blood",
      nameofpatient: "Ahmed",
      bloodtype: "B-",
      hospitaladdress: "Kornish Al Nile",
      name: "Organization 1",
      hospital: "ElKarnak  Hospital",
      area: "Karnak",
      governorate: "Luxor",
    },
    {
      id: 7,
      nameofpatient: "Kareem",
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
      name: "Organization 1",
      nameofpatient: "Mahmoud Hassan",
      bloodtype: "A+",
      hospital: "El-Nozha Hospital",
      area: "El Nozha",
      governorate: "Cairo",
    },
    {
      id: 11,
      category: "Blood",
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
      category:"Clothes",
      age: "18 Years",
      gender: "Male",
      season: "Summer",
      material: "cotton",
      typeofclothing: "Short",
    },
    {
      id: 14,
      category:"Clothes",
      organization: "AL-Omran",
      age: "17 Years",
      gender: "Female",
      season: "Spring",
      material: "cotton",
      typeofclothing: "legens",
    },
    {
      id: 15,
      category:"Clothes",
      organization: "Misr El Kheir",
      age: "5 Years",
      gender: "Female",
      season: "Autumn",
      material: "cotton",
      typeofclothing: "Skirt",
    },
    {
      id: 16,
      category:"Clothes",
      organization: "AL-Omran",
      age: "17 Years",
      gender: "Male",
      season: "Spring",
       material: "Linen",
      typeofclothing: "Pants",
    },
    {
      id: 17,
      category:"Clothes",
      organization: "Resala",
      age: "9 Years",
      gender: "Male",
      season: "Summer",

      material: "Jeans",
      typeofclothing: "Trousers",
    },
    {
      id: 18,
      category:"Clothes",
      organization: "Misr El Kheir",
      age: "15 Years",
      gender: "Male",
      season: "Spring",
      material: "cotton",
      typeofclothing: "Polo-Shirt",
    },
    {
      id: 19,
      category:"Clothes",
      organization: "Resla",
      age: "5 Years",
      gender: "Female",
      season: "Winter",
      material: "Leather",
      typeofclothing: "Black Shoes",
    },
    {
      id: 20,
      category:"Clothes",
      organization: "Red Cresent",
      age: "10 Years",
      gender: "Male",
      season: "Winter",
      material: "cotton",
      typeofclothing: "Long Sleeve Shirt",
    },
    {
      id: 21,
      category:"Clothes",
      organization: "Red Cresent",
      age: "5 Years",
      gender: "Female",
      season: "Winter",
      material: "cotton",
      typeofclothing: "Jacket",
    },
    {
      id: 22,
      category:"Clothes",
      organization: "Red Cresent",
      age: "10 Years",
      gender: "Male",
      season: "Spring",
      material: "cotton",
      typeofclothing: "Pants",
    },
    {
      id: 23,
      category:"Clothes",
      organization: "Misr El Kheir",
      age: "15 Years",
      gender: "Male",
      season: "Winter",
      material: "cotton",
      typeofclothing: "Ice Cap",
    },
    {
      id: 24,
      category:"Clothes",
      organization: "Misr El Kheir",
      age: "10 Years",
      gender: "Male",
      season: "Winter",
      material: "cotton",
      typeofclothing: "Socks",
    },
    {
      id: 25,
      category:"Food",
      name: "Apple",
      type: "Fruits & Vegetables",
      organization: "Food for All Foundation",
      quantity: 20
    },
    {
      id: 26,
      category:"Food",
      name: "Banana",
      type: "Fruits & Vegetables",
      organization: "Hope Food Bank",
      quantity: 16
    },
    {
      id: 27,
      category:"Food",
      name: "Carrot",
      type: "Fruits & Vegetables",
      organization: "Feeding America",
      quantity: 6
    },
    {
      id: 28,
      category:"Food",
      name: "Tomato",
      type: "Fruits & Vegetables",
      organization: "The Hunger Project",
      quantity: 10
    },
    {
      id: 29,
      category:"Food",
      name: "Canned Soup",
      type: "Canned Foods",
      organization: "Feeding America",
      quantity: 10
    },
    {
      id: 30,
      category:"Food",
      name: "Canned Tuna",
      type: "Canned Foods",
      organization: "Second Harvest",
      quantity: 12
    },
    {
      id: 31,
      category:"Food",
      name: "Canned Beans",
      type: "Canned Foods",
      organization: "Action Against Hunger",
      quantity: 17
    },
    {
      id: 32,
      category:"Food",
      name: "Canned Corn",
      type: "Canned Foods",
      organization: "Bread for the World",
      quantity: 19
    },
    {
      id: 33,
      category:"Food",
      name: "Canned Pineapple",
      type: "Canned Foods",
      organization: "Direct Relief",
      quantity: 20
    },
    {
      id: 34,
      category:"Food",
      name: "Grilled Chicken Salad",
      type: "Fresh Meals",
      organization: "Feeding America",
      quantity: 4
    },
    {
      id: 35,
      category:"Food",
      name: "Chicken Teriyaki",
      type: "Fresh Meals",
      organization: "Action Against Hunger",
      quantity: 6
    },
    {
      id: 36,
      category:"Food",
      name: "Baked Salmon",
      type: "Fresh Meals",
      organization: "World Central Kitchen",
      quantity: 25
    },
    {
      id: 37,
      category:"Food",
      name: "Well Done Steak",
      type: "Fresh Meals",
      organization: "UNICEF USA",
      quantity: 6
    },
    {
      id: 38,
      category:"Food",
      name: "Shrimp Pasta",
      type: "Fresh Meals",
      organization: "The Hunger Project",
      quantity: 13
    },
    {
      id: 39,
      category:"Food",
      name: "Baguette",
      type: "Baked Goods",
      organization: "Action Against Hunger",
      quantity: 19
    },
    {
      id: 40,
      category:"Food",
      name: "Croissant",
      type: "Baked Goods",
      organization: "Feeding America",
      quantity: 13
    },
    {
      id: 41,
      category:"Food",
      name: "Blueberry Muffin",
      type: "Baked Goods",
      organization: "The Hunger Project",
      quantity: 18
    },
    {
      id: 42,
      category:"Food",
      name: "Chocolate Chip Cookies",
      type: "Baked Goods",
      organization: "World Central Kitchen",
      quantity: 11
    },
    {
      id: 43,
      category:"Food",
      name: "Cinnamon Rolls",
      type: "Baked Goods",
      organization: "Direct Relief",
      quantity: 6
    },
    {
      id: 44,
      category: "Medical Supplies",
      organization: "Red Crescent",
      type: "Medical Device",
      name: "MRI Machine",
      quantity: 4,
      use: "medical scans and checkups",
    },
    {
      id: 45,
      category: "Medical Supplies",
      organization: "57357",
      type: "Medication",
      name: "Aspirin",
      quantity: 2,
      use: "pain killer",
    },
    {
      id: 46,
      category: "Medical Supplies",
      organization: "Al Nas Hospital",
      type: "Medical Equipment",
      name: "X-ray Machine",
      quantity: 3,
      use: "medical scans and checkups",
    },
    {
      id: 47,
      category: "Medical Supplies",
      organization: "57357",
      type: "Medical Device",
      name: "Pacemaker",
      quantity: 1,
      use: "diagnosis",
    },
    {
      id: 48,
      category: "Medical Supplies",
      organization: "Ahl Masr",
      type: "Medication",
      name: "Antibiotics",
      quantity: 5,
      use: "pain killer",
    },
    {
      id: 49,
      category: "Medical Supplies",
      organization: "Al Nas Hospital",
      type: "Medical Equipment",
      name: "Ultrasound Machine",
      quantity: 2,
      use: "medical scans and checkups",
    },
    {
      id: 50,
      category: "Medical Supplies",
      organization: "Red Crescent",
      type: "Medical Device",
      name: "Defibrillator",
      quantity: 1,
      use: "For treating sudden cardiac arrest",
    },
    {
      id: 51,
      category: "Medical Supplies",
      organization: "UNICEF Egypt",
      type: "Medication",
      name: "Insulin",
      quantity: 4,
      use: "diabetic patients",
    },
    {
      id: 52,
      category: "Medical Supplies",
      organization: "Al Orman",
      type: "Medical Device",
      name: "Ventilator",
      quantity: 4,
      use: "For medical assistance",
    },
    {
      id: 53,
      category: "Medical Supplies",
      organization: "Al Orman",
      type: "Medication",
      name: "Paracetamol",
      quantity: 4,
      use: "pain killer",
    },
    {
      id: 54,
      category: "Medical Supplies",
      organization: "Red Crescent",
      type: "Medical Equipment",
      name: "Blood pressure monitor",
      quantity: 2,
      use: "medical examinations",
    },
    {
      id: 55,
      category: "School Supplies",
      organization: "Misr El Kheir",
      type: "Book",
      bookName: "Mathematics",
      quantity: 4,
      author: "John Doe",
      language: "English",
      summary: "A beginner's guide to mathematics covering basic arithmetic operations and concepts.",
      edition: "1st Edition"
    },
    {
      id: 56,
      category: "School Supplies",
      organization: "Red Cresent",
      type: "Stationary",
      stationaryName: "HB Pencils",
      quantity: 4,
    },
    {
      id: 57,
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
      id: 58,
      category: "School Supplies",
      organization: "Red Cresent",
      type: "Stationary",
      stationaryName: "Plain Exercise Books",
      quantity: 5,
    },
    {
      id: 59,
      category: "School Supplies",
      organization: "Resala",
      type: "Book",
      bookName: "Adventure Tales",
      quantity: 2,
      author: "Michael Johnson",
      language: "English",
      summary: "A collection of thrilling adventure stories to ignite imagination and creativity.",
      edition: "1st Edition"
    },
    {
      id: 60,
      category: "School Supplies",
      organization: "World Vision",
      type: "Stationary",
      stationaryName: "Rubber Erasers",
      quantity: 6,
    },
    {
      id: 61,
      category: "School Supplies",
      organization: "Misr El Kheir",
      type: "Book",
      bookName: "History Uncovered",
      quantity: 4,
      author: "Emily Brown",
      language: "English",
      summary: "An exploration of key historical events and figures from around the world.",
      edition: "Revised Edition"
    },
    {
      id: 62,
      category: "School Supplies",
      organization: "Red Cresent",
      type: "Stationary",
      stationaryName: "Whiteboard Markers",
      quantity: 3,
    },
    {
      id: 63,
      category: "School Supplies",
      organization: "Resela",
      type: "Book",
      bookName: "Artistic Expressions",
      quantity: 4,
      author: "David Lee",
      language: "English",
      summary: "An introduction to various forms of art, from painting to sculpture, with examples from renowned artists.",
      edition: "1st Edition"
    },
    {
      id: 64,
      category: "School Supplies",
      organization: "Resala",
      type: "Stationary",
      stationaryName: "Clear Plastic Rulers",
      quantity: 5,
    },
    {
      id: 65,
      category: "School Supplies",
      organization: "Resala",
      type: "Book",
      bookName: "Literary Wonders",
      quantity: 2,
      author: "Sarah Adams",
      language: "English",
      summary: "A compilation of classic literary works from different cultures and time periods.",
      edition: "2nd Edition"
    },
    {
      id: 66,
      category: "School Supplies",
      organization: "Misr El Kheir",
      type: "Stationary",
      stationaryName: "Non-Toxic Glue Sticks",
      quantity: 6,
    },
    {
      id: 67,
      category: "Toys",
      name: "Barbie",
      age: "10 Years",
      gender: "Female",
      type: "Doll",
      organization: "57357",
      quantity: 6
  },
  {
      id: 68,
      category: "Toys",
      name: "Uno",
      age: "10 Years",
      gender: "Unisex",
      type: "Card Game",
      organization: "Resala",
      quantity: 3
  },
  {
      id: 69,
      category: "Toys",
      name: "Monopoly",
      age: "10 Years",
      gender: "Unisex",
      type: "Board Game",
      organization: "Resala",
      quantity: 8
  },
  {
      id: 70,
      category: "Toys",
      name: "Bratz",
      age: "5 Years",
      gender: "Female",
      type: "Doll",
      organization: "Al Orman",
      quantity: 4
  },
  {
      id: 71,
      category: "Toys",
      name: "Chess",
      age: "8 Years",
      gender: "Male",
      type: "Board Game",
      organization: "Al Orman",
      quantity: 7
  },
  {
      id: 72,
      category: "Toys",
      name: "Rubik's Cube",
      age: "3 Years",
      gender: "Female",
      type: "Puzzle",
      organization: "57357",
      quantity: 2
  },
  {
      id: 73,
      category: "Toys",
      name: "Snakes and Ladders",
      age: "9 Years",
      gender: "Male",
      type: "Board Game",
      organization: "Al Nas Hospital",
      quantity: 9
  },
  {
      id: 74,
      category: "Toys",
      name: "LEGO",
      age: "9 Years",
      gender: "Male",
      type: "Building Set",
      organization: "Resala",
      quantity: 5
  },
  {
      id: 75,
      category: "Toys",
      name: "Teddy Bear",
      age: "5 Years",
      gender: "Unisex",
      type: "Stuffed Toy",
      organization: "57357",
      quantity: 10
  },
  {
      id: 76,
      category: "Toys",
      name: "FIFA Soccer Ball",
      age: "10 Years",
      gender: "Unisex",
      type: "Sports",
      organization: "Misr El Kheir",
      quantity: 8
  },
  {
      id: 77,
      category: "Toys",
      name: "Ludo",
      age: "8 Years",
      gender: "Unisex",
      type: "Board Game",
      organization: "Misr El Kheir",
      quantity: 1
  },
  {
      id: 78,
      category: "Toys",
      name: "Connect Four",
      age: "7 Years",
      gender: "Unisex",
      type: "Board Game",
      organization: "Resala",
      quantity: 3
  },
  {
      id: 79,
      category: "Toys",
      name: "Scrabble",
      age: "3 Years",
      gender: "Unisex",
      type: "Stuffed Toy",
      organization: "Resala",
      quantity: 6
  },
  {
      id: 80,
      category: "Toys",
      name: "Beanie Baby",
      age: "3 Years",
      gender: "Unisex",
      type: "Stuffed Toy",
      organization: "Ahl Masr",
      quantity: 4
  },
  {
      id: 81,
      category: "Toys",
      name: "Speed Car",
      age: "10 Years",
      gender: "Unisex",
      type: "Cars",
      organization: "Al Nas Hospital",
      quantity: 8
  }
  ];


  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(age, gender, type) {
    const filteredCards = data.filter((card) => {
      return (age === "" || card.age === age) && (gender === "" || card.gender === gender) && (type === "" || card.type === type);
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

    if (card.category === "Blood") {
      cardHTML += ` <img src="../img/don/bloodDonation.jpg" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
      <h5 class="card-title">${card.hospital}</h5>
      <p class="card-text">Area: ${card.area}</p>           
      <p class="card-text">Governorate: ${card.governorate}</p>
      <a href="./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&bloodtype=${encodeURIComponent(
        card.bloodtype
      )}&hospitaladdress=${encodeURIComponent(card.hospitaladdress)}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(card.hospital)}&area=${encodeURIComponent(
        card.area
      )}&governorate=${encodeURIComponent(card.governorate)}" class="btn btn--primary btn-block">View Details</a>  `;
    } else if (card.category === "Clothes") {
      cardHTML += `  <img src="../img/don/clothing.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
      <h5 class="card-title">${card.typeofclothing}</h5>
      <p class="card-text">Type: ${card.season}</p>
      <p class="card-text">Age: ${card.age}</p>
      <p class="card-text">Gender: ${card.gender}</p>
      <a href="./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&organization=${encodeURIComponent(card.organization)}&age=${encodeURIComponent(
        card.age
      )}&gender=${encodeURIComponent(card.gender)}&season=${encodeURIComponent(card.season)}&material=${encodeURIComponent(card.material)}&typeofclothing=${encodeURIComponent(
        card.typeofclothing
      )}" class="btn btn--primary btn-block">View Details</a>
`;
    } else if (card.category === "Food") {
      cardHTML += `<img src="../img/don/shopping-bag.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
      <h5 class="card-title">${card.name}</h5>
      <p class="card-text">Type: ${card.type}</p>
      <a href="./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&type=${encodeURIComponent(
        card.type
      )}&organization=${encodeURIComponent(card.organization)}&quantity=${encodeURIComponent(card.quantity)}" class="btn btn--primary btn-block">View Details</a>
`;
    } else if (card.category === "Medical Supplies") {
      cardHTML += ` <img src="../img/don/medicalDonation.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
      <h5 class="card-title">${card.name}</h5>
      <p class="card-text">Type: ${card.type}</p>
      <a href="./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&use=${encodeURIComponent(card.use)}&quantity=${encodeURIComponent(
        card.quantity
      )}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}" class="btn btn--primary btn-block">View Details</a>
 `;
    } else if (card.category === "School Supplies") {
      cardHTML += `       <img src="../img/don/book.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image"> `;

      if (card.type === "Book") {
        cardHTML += `<h5 class="card-title">${card.bookName}</h5>`;
      } else {
        cardHTML += `<h5 class="card-title">${card.stationaryName}</h5>`;
      }

      cardHTML += `     <p class="card-text">Type: ${card.type}</p>
      <a href="./detailsItems.html?id=${card.id}&author=${encodeURIComponent(card.author)}&edition=${encodeURIComponent(card.edition)}&language=${encodeURIComponent(
        card.language
      )}&summary=${encodeURIComponent(card.summary)}&category=${encodeURIComponent(card.category)}&stationaryName=${encodeURIComponent(card.stationaryName)}&bookName=${encodeURIComponent(
        card.bookName
      )}&quantity=${encodeURIComponent(card.quantity)}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}" class="btn btn--primary btn-block">View Details</a>
     `;
    } else if (card.category === "Toys") {
      cardHTML += `           <img src="../img/don/toyDonation.webp" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
      <h5 class="card-title">${card.name}</h5>
      <p class="card-text">Type: ${card.type}</p>
      <p class="card-text">Age: ${card.age}</p>
      <p class="card-text">Gender: ${card.gender}</p>
      <a href="./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(
        card.gender
      )}&type=${encodeURIComponent(card.type)}&organization=${encodeURIComponent(card.organization)}" class="btn btn--primary btn-block">View Details</a>
  `;
    }

    cardHTML += `
            </div>
          </div>
        </div>`;

    return cardHTML;
  }

  // Function to shuffle array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Event listener for search input field
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim();
    // If search term is not empty, filter by search term
    filterCards(searchTerm);
  });

  // Function to filter cards based on search input
  function filterCards(searchTerm) {
    const filteredCards = data.filter((card) => card.category.toLowerCase().includes(searchTerm.toLowerCase()));
    renderRandomCards(filteredCards);
  }

  // Shuffle the data array
  // const shuffledData = shuffleArray(data);

  function renderRandomCards(data) {
    const container = document.getElementById("cardContainer");
    container.innerHTML = ""; // Clear existing cards

    data.forEach((card) => {
      const cardHTML = createCardHTML(card);
      container.innerHTML += cardHTML;
    });
  }

  // Initial rendering of randomly shuffled cards
  renderRandomCards(data);

  // Event listener for search/filter button
  const filterButton = document.getElementById("filter-button");
  filterButton.addEventListener("click", () => {
    const searchInput = document.getElementById("search-input");
    const selectedArea = document.getElementById("age-dropdown").value;
    const selectedGovernorate = document.getElementById("gender-dropdown").value;
    const selectedType = document.getElementById("type-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedArea, selectedGovernorate, selectedType);
  });

  // // Event listener for search/filter button
  // const searchButton = document.getElementById("search-button");
  // searchButton.addEventListener("click", () => {
  //   const searchInput = document.getElementById("search-input");
  //   const searchTerm = searchInput.value.trim();

  //   // If search term is not empty, filter by search term
  //   filterCards(searchTerm);
  // });

  // // Function to filter cards based on search input
  // function filterCards(searchTerm) {
  //   const filteredCards = data.filter((card) => card.name.toLowerCase().includes(searchTerm.toLowerCase()));
  //   renderCards(filteredCards);
  // }

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
        window.location.href = "../../../login/login.html"; // Replace "deleted-profile.html" with the actual URL of the page you want to redirect to
      }
    });
  }
});
