const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

//* Функция блокировки элементов формы
const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  //* блокируем все дочерние элементы формы карты
  const mapFiltersElements = mapFilters.children;
  for (let i = 0; i < mapFiltersElements.length; i++) {
    mapFiltersElements[i].setAttribute('disabled', '');
  }
  //* блокируем все дочерние элементы формы объявления
  const adFormElements = adForm.children;
  for (let i = 0; i < adFormElements.length; i++) {
    adFormElements[i].setAttribute('disabled', '');
  }
};

//* Функция разблокировки элементов формы
const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  //* cнимаем блокировку со всех дочерних элементов формы карты
  const mapFiltersElements = mapFilters.children;
  for (let i = 0; i < mapFiltersElements.length; i++) {
    mapFiltersElements[i].removeAttribute('disabled');
  }
  //* cнимаем блокировку со всех дочерних элементов формы объявления
  const adFormElements = adForm.children;
  for (let i = 0; i < adFormElements.length; i++) {
    adFormElements[i].removeAttribute('disabled');
  }
};

export {disableForm, enableForm};
