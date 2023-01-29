const nav = document.querySelector('.nav');
const burgerButton = document.querySelector('#burger-button');

const openBurger = () => {
  nav.classList.toggle('open-burger');
};

burgerButton.addEventListener('click', openBurger);

console.group('%cCV', 'color: red');
console.log('Вёрстка валидная. ' + '%c+10', 'color: red');
console.log('Вёрстка семантическая. ' + '%c+20', 'color: red');
console.log('Для оформления СV используются css-стили. ' + '%c+10', 'color: red');
console.log(
  'Контент размещается в блоке, который горизонтально центрируется на странице. ' + '%c+10',
  'color: red'
);
console.log('Вёрстка адаптивная. ' + '%c+10', 'color: red');
console.log('Есть адаптивное бургер-меню. ' + '%c+10', 'color: red');
console.log('На странице СV присутствует изображение. ' + '%c+10', 'color: red');
console.log(
  'Контакты для связи и перечень навыков оформлены в виде списка. ' + '%c+10',
  'color: red'
);
console.log(
  'CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского. ' +
    '%c+10',
  'color: red'
);
console.log('CV содержит пример вашего кода. ' + '%c+10', 'color: red');
console.log('CV содержит изображения-ссылки на выполненные вами проекты. ' + '%c+10', 'color: red');
console.log('CV выполнено на английском языке. ' + '%c+10', 'color: red');
console.log('Выполнены требования к Pull Request. ' + '%c+10', 'color: red');
console.log('Есть видеорезюме автора CV на английском языке. ' + '%c+10', 'color: red');
console.log(
  'Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV. ' + '%c+10',
  'color: red'
);
console.log('%cВСЕГО: +160', 'color: red');
console.log('%cСпасибо, что посетили меня! ' + '%c-MRKS77', 'color: red', 'color: yellow');
console.groupEnd();
