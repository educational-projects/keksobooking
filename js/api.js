import { setFilterListener } from './filters-ads.js';
import { enableFilters } from './lock-form.js';
import { createMarkerGroup } from './map.js';
import { dataErrorTemplate, errorTemplate, openPopup, successTemplate } from './popup.js';

const SERVER_URL = 'https://23.javascript.pages.academy/keksobooking';

let defaultData = [];
const getData = () => {
  fetch(
    `${SERVER_URL}/data`,
  )
    .then((response) => {
      if (response.ok) {
        enableFilters();
        return response.json();
      } else {
        openPopup(dataErrorTemplate);
        return [];
      }})
    .then((adsData) => {
      defaultData = adsData.slice();
      setFilterListener();
      createMarkerGroup(defaultData);
    });
};

const sendData = (onSuccess, body) => {
  fetch(
    SERVER_URL,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
      openPopup(successTemplate);
    } else {
      openPopup(errorTemplate);
    }
  })
    .catch(() => {
      openPopup(errorTemplate);
    });
};

export {getData, sendData, defaultData};
