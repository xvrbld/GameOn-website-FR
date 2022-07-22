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
const closeBtnValidate = document.querySelectorAll(".close-validate");
const modalbgValidate = document.querySelector(".bground-validate");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((close) => close.addEventListener("click", closeModal));

// close validate modal event
closeBtnValidate.forEach((close) =>
  close.addEventListener("click", closeModalValidate)
);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close validate modal form
function closeModalValidate() {
  modalbgValidate.style.display = "none";
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// when user submits form

//firstname
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = document.getElementById("first").value;

  let firstNameIsValid = false;

  if (firstName.length < 3) {
    document.querySelector(".first-name-form").style.display = "block";
  } else {
    firstNameIsValid = true;
    document.querySelector(".first-name-form").style.display = "none";
  }

  //lastname
  const lastName = document.getElementById("last").value;

  let lastNameIsValid = false;

  if (lastName.length < 3) {
    document.querySelector(".last-name-form").style.display = "block";
  } else {
    lastNameIsValid = true;
    document.querySelector(".last-name-form").style.display = "none";
  }

  //email
  const email = document.getElementById("email").value;

  let emailIsValid = false;

  if (!validateEmail(email)) {
    document.querySelector(".email-form").style.display = "block";
  } else {
    emailIsValid = true;
    document.querySelector(".email-form").style.display = "none";
  }

  //birthdate
  const birthdate = document.getElementById("birthdate").value;
  let birthdateIsValid = false;
  var birthdate_regex = /\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*/;

  if (birthdate_regex.test(birthdate)) {
    birthdateIsValid = true;
    document.querySelector(".birthdate-form").style.display = "none";
  } else {
    document.querySelector(".birthdate-form").style.display = "block";
  }

  //championship quantity
  const championshipQuantity = parseInt(
    document.getElementById("quantity").value
  );
  let championshipQuantityIsValid = false;

  if (!isNaN(championshipQuantity)) {
    championshipQuantityIsValid = true;
    document.querySelector(".quantity-form").style.display = "none";
  } else {
    document.querySelector(".quantity-form").style.display = "block";
  }

  //location
  const locations = document.querySelectorAll(".checkbox-loc");

  let locationsIsValid = false;
  locations.forEach((location) => {
    if (location.checked) {
      locationsIsValid = true;
    }
  });

  if (!locationsIsValid) {
    document.querySelector(".location-form").style.display = "block";
  } else {
    document.querySelector(".location-form").style.display = "none";
  }

  //checkbox
  const checkboxTerms = document.querySelector(".checkbox-terms");
  let checkboxTermsIsValid = false;
  if (checkboxTerms.checked) {
    checkboxTermsIsValid = true;
    document.querySelector(".terms-form").style.display = "none";
  } else {
    document.querySelector(".terms-form").style.display = "block";
  }

  //modal
  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    birthdateIsValid &&
    championshipQuantityIsValid &&
    locationsIsValid &&
    checkboxTermsIsValid
  ) {
    closeModal();
    modalbgValidate.style.display = "block";
  }
});
