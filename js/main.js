import {checkValidityForm } from './form.js';
import {disableForm} from './lock-form.js';
import {initializationMap} from './map.js';

disableForm();
initializationMap();
checkValidityForm();

// шаманим с сервером
// fetch('https://23.javascript.pages.academy/keksobooking/data')
//   .then((response) => response.json())
//   .then((ads) => {
//     console.log(ads);
//   });

