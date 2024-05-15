/* ('use strict');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked');
    modal.style.display = 'block';
    overlay.style.display = 'block';
  });

btnCloseModal.addEventListener('click', function () {
  console.log('Button clicked');
  modal.style.display = 'none';
  overlay.style.display = 'none';
}); */

// When the user clicks the button, open the modal
/* document.querySelector('btnsOpenModal').addEventListener('click', function () {
  hidden.style.display = 'block';
});

document
  .querySelector('btnsCloseModal')
  .addEventListener('click', function () {}); */

/* ('use strict');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal'); */
/* const btnsOpenModal = document.querySelector('.show-modal'); */
/* const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);
 */
/* for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

btnCloseModal.addEventListener('click', function () {
  console.log('Button clicked');
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}); */

('use strict');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
