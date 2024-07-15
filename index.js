//DOM ELEMENTS
const body = document.querySelector("body");
const content = document.getElementById("content")
const popupModal = document.getElementById("popup-modal")
const closePopupModal = document.getElementById("close-popup-modal")
const popupForm = document.getElementById("popup-form")
const successMsg = document.querySelector(".success-msg")


//EVENT LISTENERS
closePopupModal.addEventListener("click", closeModal)
popupForm.addEventListener("submit", submitForm)


//FUNCTIONS
setTimeout(function openModal () {



body.classList.add("dark-bg")
popupModal.classList.remove("display-none")


}, 3000)


function closeModal () {


body.classList.remove("dark-bg")
popupModal.classList.add("display-none")


}

function submitForm (event) {


event.preventDefault();
successMsg.style.display = "block";


}