import {similarOffers} from './data.js';
import {templateCard} from './cards.js';
import { disableForm, enableForm } from './map.js';
//* Блокировка форм
disableForm();

//* Создание массима из 10 элементов
similarOffers();

//не понимаю что тут делаю, вызываю сгенирированную карточку вроде
templateCard;

//* Разблокировка форм
enableForm();

