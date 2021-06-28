import { changePlaceholderPrice } from './form.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

//* Функция блокировки элементов формы
const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  //* блокируем все дочерние элементы формы карты
  const mapFiltersElementsArray = Array.from(mapFilters.children);
  mapFiltersElementsArray.forEach((element) => element.setAttribute('disabled', ''));

  //* блокируем все дочерние элементы формы объявления
  const adFormElementsArray = Array.from(adForm.children);
  adFormElementsArray.forEach((element) => element.setAttribute('disabled', ''));
};

//* Функция разблокировки элементов формы
const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  //* Выставляем минимальную цену жилья
  changePlaceholderPrice();
  //* cнимаем блокировку со всех дочерних элементов формы карты
  const mapFiltersElementsArray = Array.from(mapFilters.children);
  mapFiltersElementsArray.forEach((element) => element.removeAttribute('disabled'));
  //* cнимаем блокировку со всех дочерних элементов формы объявления
  const adFormElementsArray = Array.from(adForm.children);
  adFormElementsArray.forEach((element) => element.removeAttribute('disabled'));
};

export {disableForm, enableForm};
