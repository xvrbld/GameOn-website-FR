function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
console.log(form);


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((close) => close.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// when user submits form
form.addEventListener('submit', function(e){
  e.preventDefault();
const firstName = document.getElementById('first').value;

let firstNameIsValid = false;

if (firstName.length < 3) {
  console.log('erreurPrénom');
} else {
  firstNameIsValid = true;
}

if (firstNameIsValid) {
  console.log('Afficher la modal de validation')
} 

})
