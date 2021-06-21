const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  //* блокируем все элементы формы карты
  const mapFiltersElements = mapFilters.children;
  for (let i = 0; i < mapFiltersElements.length; i++) {
    mapFiltersElements[i].setAttribute('disabled', '');
  }
  //*
  const adFormElements = adForm.children;
  for (let i = 0; i < adFormElements.length; i++) {
    adFormElements[i].setAttribute('disabled', '');
  }
};

const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
};

export {disableForm, enableForm};
