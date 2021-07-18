import { defaultData } from './api.js';
import { createMarkerGroup, markerGroup } from './map.js';
import { debounce } from './utils/debounce.js';

const price = {
  low:
  {
    min: 0,
    max: 10000,
  },
  middle:
  {
    min: 10000,
    max: 50000,
  },
  high:
  {
    min: 50000,
    max: 1000000,
  },
};

const mapFilters = document.querySelector('.map__filters');
const housingFilter = mapFilters.querySelector('#housing-type');
const priceFilter = mapFilters.querySelector('#housing-price');
const roomsFilter = mapFilters.querySelector('#housing-rooms');
const guestsFilter = mapFilters.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelectorAll('[type="checkbox"]');


// фильтр жилья
const getFilterHousing = (dataAds) => {
  if (housingFilter.value === 'any') {
    return dataAds;
  } else {
    const adsFilter = dataAds.filter((ads) => ads.offer.type === housingFilter.value);
    return adsFilter;
  }
};

// фильтр цены
const getFilterPrice = (dataAds) => {
  if (priceFilter.value === 'any') {
    return true;
  } else {
    return dataAds.offer.price >= price[priceFilter.value].min && dataAds.offer.price <= price[priceFilter.value].max;
  }
};

// фильтр комнат
const getFilterRooms = (dataAds) => {
  if (roomsFilter.value === 'any') {
    return true;
  } else {
    return dataAds.offer.rooms === Number(roomsFilter.value);
  }
};

// фильтр гостей
const getFilterGuests = (dataAds) => {
  if (guestsFilter.value === 'any') {
    return true;
  } else {
    return dataAds.offer.guests === Number(guestsFilter.value);
  }
};

//фильтр фич
const getFilterFeatures = (dataAds) => {
  const featuresChecked = [...housingFeatures].filter((ads) => ads.checked);
  return  featuresChecked.every((ads) => dataAds.offer.features && dataAds.offer.features.includes(ads.value));
};

// фильтр объявлений
const getFilters = () => {
  markerGroup.clearLayers();
  const filterAds = getFilterHousing(defaultData)
    .filter((ads) => getFilterGuests(ads))
    .filter((ads) => getFilterRooms(ads))
    .filter((ads) => getFilterPrice(ads))
    .filter((ads) => getFilterFeatures(ads));
  createMarkerGroup(filterAds);
};

const setFilterListener = () => {
  mapFilters.addEventListener('change', debounce(getFilters));
};

export {setFilterListener};
