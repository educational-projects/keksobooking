import { resetMap } from './map.js';

const TITLE_LENGTH = {
  min: 30,
  max: 100,
};
const MAX_PRICE_VALUE = 1000000;
const adForm = document.querySelector('.ad-form');
const roomAndCapacity = {
  1: [1],
  2: [1,2],
  3: [1,2,3],
  100: [0],
};
const typeAndPrice = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
  hotel: 10000,
};

//* Валидация формы заголовка объявления
const userTitleInput = adForm.querySelector('#title');

const checkValidityTitle = () => {
  const valueLength = userTitleInput.value.length;

  if (valueLength < TITLE_LENGTH.min) {

    userTitleInput.setCustomValidity(`Еще минимум ${TITLE_LENGTH.min - valueLength} cимв.`);
  }


  else if (valueLength > TITLE_LENGTH.max) {
    userTitleInput.setCustomValidity(`Превышен максимальный лимит длины на ${TITLE_LENGTH.max + valueLength} симв.`);
  }

  else {
    userTitleInput.setCustomValidity('');
  }

  userTitleInput.reportValidity();
};

//* Валидация формы цены объявления
const userPriceInput = adForm.querySelector('#price');
const userType = adForm.querySelector('#type');


const checkValidityPrice = () => {
  const priceValue = Number(userPriceInput.value);
  const minPrice = Number(userPriceInput.getAttribute('min'));

  if (minPrice > priceValue) {
    userPriceInput.setCustomValidity(`Цена не может быть меньше ${minPrice} руб.`);
  }

  else if (priceValue > MAX_PRICE_VALUE) {
    userPriceInput.setCustomValidity('Цена не может превышать 1 000 000 руб.');
  }

  else {
    userPriceInput.setCustomValidity('');
  }

  userPriceInput.reportValidity();
};

const changePlaceholderPrice = () => {
  userPriceInput.placeholder = typeAndPrice[userType.value];
  userPriceInput.min = typeAndPrice[userType.value];
};

//* Валидация комнат и людей
const userRoomSelect = adForm.querySelector('#room_number');
const userCapacitySelect = adForm.querySelector('#capacity');

const checkValidityRooms = (evt) => {
  if (!roomAndCapacity[userRoomSelect.value].includes(Number(userCapacitySelect.value))) {
    userCapacitySelect.setCustomValidity('Выберите правильное количество мест');
    evt.preventDefault();
  } else {
    userCapacitySelect.setCustomValidity('');
  }

  userCapacitySelect.reportValidity();

};

//* Время заеда и выезда
const userTimeInSelect = adForm.querySelector('#timein');
const userTimeOutSelect = adForm.querySelector('#timeout');
const userDataForm = adForm.querySelector('.ad-form__element--time');

const changeEventHandler = (evt) => {
  userTimeOutSelect.value = evt.target.value;
  userTimeInSelect.value = evt.target.value;
};

//* сброс на начальные значения по кнопке ресет
const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  adForm.reset();
  resetMap();
});

const checkValidityForm = () => {
  userTitleInput.addEventListener('input', checkValidityTitle);
  userPriceInput.addEventListener('input', checkValidityPrice);
  userRoomSelect.addEventListener('change', checkValidityRooms);
  userCapacitySelect.addEventListener('change', checkValidityRooms);
  userDataForm.addEventListener('change', changeEventHandler);
  adForm.addEventListener('submit', checkValidityRooms, { once: true });
  userType.addEventListener('change', changePlaceholderPrice);
};


export {checkValidityForm, changePlaceholderPrice};
