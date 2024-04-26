let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");
let donationButton = document.querySelector(
  ".header .navbar .dropdown .menu-item"
);
let donationMenu = document.querySelector(
  ".header .navbar .dropdown .dropdown-content"
);
let donationRequests = document.querySelector(
  '.header .navbar .dropdown .dropdown-content a[href="/About-ERC/History"]'
);
let subDropdown = document.querySelector(".sub-dropdown");

// Function to display the donation menu
function showDonationMenu() {
  donationMenu.style.display = "block";
  subDropdown.style.display = "none";
}

// Function to hide the sub-dropdown menu
function hideSubDropdown() {
  subDropdown.style.display = "none";
}

// Function to display the sub-dropdown menu
function showSubDropdown() {
  subDropdown.style.display = "block";
}

// Event listener for mouseover on donation button
donationButton.addEventListener("mouseover", showDonationMenu);

// Event listener for mouseout on donation button
donationButton.addEventListener("mouseout", hideSubDropdown);

// Event listener for mouseover on donation requests
donationRequests.addEventListener("mouseover", showSubDropdown);

// Event listener for mouseout on donation requests
donationRequests.addEventListener("mouseout", hideSubDropdown);

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".food-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

let previewContainer = document.querySelector(".food-preview-container");
let previewBox = previewContainer.querySelectorAll(".food-preview");

document.querySelectorAll(".food .slide").forEach((food) => {
  food.onclick = () => {
    previewContainer.style.display = "flex";
    let name = food.getAttribute("data-name");
    previewBox.forEach((preveiw) => {
      let target = preveiw.getAttribute("data-target");
      if (name == target) {
        preveiw.classList.add("active");
      }
    });
  };
});

previewContainer.querySelector("#close-preview").onclick = () => {
  previewContainer.style.display = "none";
  previewBox.forEach((close) => {
    close.classList.remove("active");
  });
};

var swiper = new Swiper(".menu-slider", {
  grabCursor: true,
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".blogs-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoHeight: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
