const nav = document.querySelector('.nav');
const burgerButton = document.querySelector('#burger-button');

const openBurger = () => {
  nav.classList.toggle('open-burger');
};

burgerButton.addEventListener('click', openBurger);
