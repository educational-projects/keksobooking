import { checkCapacity, showCapacityError } from './form-validity.js';
import { enableFilters } from './lock-form.js';
import { createMarkerAds } from './map.js';

const MAX_ADS = 10;
const SERVER_URL = 'https://23.javascript.pages.academy/keksobooking';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const adForm = document.querySelector('.ad-form');

const isEsc = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const closePopup = (evt) => {
  const popupActive = document.querySelector('.open-popup');
  if (evt.type === 'click' || isEsc(evt)) {
    popupActive.remove();
    document.removeEventListener('keydown', closePopup);
  }
};

const addEventPopup = (popup) => {
  popup.addEventListener('click', closePopup);
  document.addEventListener('keydown', closePopup);
};

const openPopup = (messagePopup) => {
  const popup = messagePopup.cloneNode(true);
  document.body.append(popup);
  popup.classList.add('open-popup');
  addEventPopup(popup);
};

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

      adsData.slice(0, MAX_ADS).forEach((ads) => {
        createMarkerAds(ads);
      });
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

export {getData, sendData, setUserFormSubmit};
