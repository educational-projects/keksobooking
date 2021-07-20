import { defaultData, sendData } from './api.js';
import { createMarkerGroup, resetMap } from './map.js';

const TITLE_LENGTH = {
  min: 30,
  max: 100,
};
const MAX_PRICE_VALUE = 1000000;
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

const adForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');

//* Валидация формы заголовка объявления
const userTitleInput = adForm.querySelector('#title');

const onTitleChange = () => {
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


const onPriceChange = () => {
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

const onHousingTypeChange = () => {
  userPriceInput.placeholder = typeAndPrice[userType.value];
  userPriceInput.min = typeAndPrice[userType.value];
};

//* Валидация комнат и людей
const userRoomSelect = adForm.querySelector('#room_number');
const userCapacitySelect = adForm.querySelector('#capacity');

const checkCapacity = () => roomAndCapacity[userRoomSelect.value].includes(Number(userCapacitySelect.value));
const showCapacityError = () => {
  userCapacitySelect.setCustomValidity('Выберите правильное количество мест');
  userCapacitySelect.reportValidity();
};

const onRoomsChange = (evt) => {
  if ( !checkCapacity() ) {
    showCapacityError();
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

const onFormChange = (evt) => {
  userTimeOutSelect.value = evt.target.value;
  userTimeInSelect.value = evt.target.value;
};

//* Ресет формы
const previewHousing = adForm.querySelector('.ad-form__photo');
const previewAvatar = adForm.querySelector('.ad-form-header__preview img');

const resetForm = () => {
  adForm.reset();
  resetMap();
  onHousingTypeChange();
  filterForm.reset();
  createMarkerGroup(defaultData);
  previewHousing.textContent = '';
  previewAvatar.src = 'img/muffin-grey.svg';
};

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
});

const checkValidityForm = () => {
  userTitleInput.addEventListener('input', onTitleChange);
  userPriceInput.addEventListener('input', onPriceChange);
  userRoomSelect.addEventListener('change', onRoomsChange);
  userCapacitySelect.addEventListener('change', onRoomsChange);
  userDataForm.addEventListener('change', onFormChange);
  userType.addEventListener('change', onHousingTypeChange);
  userType.addEventListener('change', onPriceChange);
};

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (checkCapacity()) {
      const formData = new FormData(evt.target);

      sendData(
        onSuccess,
        formData,
      );
    } else {
      showCapacityError();
    }
  });
};


export {checkValidityForm, onHousingTypeChange, resetForm, setUserFormSubmit};
