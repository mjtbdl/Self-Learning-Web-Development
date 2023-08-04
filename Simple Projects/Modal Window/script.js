'use strict';

// Selecting elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal'); // .close-modal is a class
const btnsOpenModal = document.querySelectorAll('.show-modal'); // .show-modal is a class

// console.log(btnsOpenModal);

// Function to open the modal window
const openModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden'); // .hidden is a class
  overlay.classList.remove('hidden');
};

// Function to close the modal window
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Looping through all the buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  // console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Closing the modal window when the close button is clicked
btnCloseModal.addEventListener('click', closeModal);

// Closing the modal window when the overlay is clicked
overlay.addEventListener('click', closeModal);

// Closing the modal window when the escape key is pressed
document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
