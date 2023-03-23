const modalWindow = document.querySelector('.modal__registration')
const regButton = document.querySelector('.sign-up')
const modalButton = document.querySelector('.reg-button')

const reg = (e) => {
  if (e.target.classList.contains('modal__registration') || e.target.classList.contains('reg-button') || e.target.classList.contains('sign-up')) 
  modalWindow.classList.toggle('active');
  console.log(e.target);
}

regButton.addEventListener('click', reg);

modalWindow.addEventListener('click', reg)

