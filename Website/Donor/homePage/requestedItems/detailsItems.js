// Function to get URL query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Retrieve query parameters
const id = getQueryParam('id');
const organization = getQueryParam('organization');
const age = getQueryParam('age');
const gender = getQueryParam('gender');
const season = getQueryParam('season');
const material = getQueryParam('material');
const typeofclothing = getQueryParam('typeofclothing');

// Use the retrieved data to populate the page dynamically
document.getElementById('organization').innerText = organization;
document.getElementById('age').innerText = age;
document.getElementById('gender').innerText = gender;
document.getElementById('season').innerText = season;
document.getElementById('material').innerText = material;
document.getElementById('typeofclothing').innerText = typeofclothing;
