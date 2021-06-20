const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  /*
  if (карта загрузилась) {
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled')
  }
  */
};

export {disableForm};
