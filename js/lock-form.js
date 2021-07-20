import { onHousingTypeChange } from './form-validity.js';


const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElementsArray = Array.from(mapFilters.children);
const adFormElementsArray = Array.from(adForm.children);

//* Функция блокировки элементов формы
const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  //* блокируем все дочерние элементы формы карты
  mapFiltersElementsArray.forEach((element) => element.setAttribute('disabled', ''));
  //* блокируем все дочерние элементы формы объявления
  adFormElementsArray.forEach((element) => element.setAttribute('disabled', ''));
};

//* Функция разблокировки элементов формы
const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  //* Выставляем минимальную цену жилья
  onHousingTypeChange();
  //* cнимаем блокировку со всех дочерних элементов формы объявления
  adFormElementsArray.forEach((element) => element.removeAttribute('disabled'));
};

const enableFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersElementsArray.forEach((element) => element.removeAttribute('disabled'));

};

export {disableForm, enableForm, enableFilters};
