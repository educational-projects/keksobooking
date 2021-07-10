import {createMarkerAds} from 'map.js';

const MAX_ADS = 10;

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((adsData) => {
      adsData.slice(0, MAX_ADS).forEach((ads) => {
        createMarkerAds(ads);
      });
    });
};

const sendData = (onSuccess, onFail, body) => {};

export {getData, sendData};
