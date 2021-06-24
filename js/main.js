import {similarOffers} from './data.js';
import {OfferCard} from './cards.js';
import { disableForm, enableForm } from './map.js';
//* Блокировка форм
disableForm();

//* Вызов сгенирированной карточки объявления
OfferCard(similarOffers(1));

//* Разблокировка форм
enableForm();

