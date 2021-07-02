import {checkValidityForm } from './form.js';
import {disableForm} from './lock-form.js';
import {initializationMap} from './map.js';
//* Блокировка форм
disableForm();

// Инициализация карты
initializationMap();

//* Валидация форм
checkValidityForm();

