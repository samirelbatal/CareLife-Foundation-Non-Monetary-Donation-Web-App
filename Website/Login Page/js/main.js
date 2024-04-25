const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function login(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.querySelector(".input[type='text']").value;
    var password = document.querySelector(".input[type='password']").value;

    // Check if username and password match
    if (username === 'omar' && password === 'gaber') {
        // Redirect to another page
        window.location.href =  '../HomePage/homepage.html'
    } else {
        // Display error message or handle invalid credentials
        alert('Invalid username or password. Please try again.');
    }
}

document.querySelector(".btn").addEventListener("click", login);
