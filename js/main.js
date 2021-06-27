import {similarOffers} from './data.js';
import {OfferCard} from './cards.js';
import {checkValidityForm } from './form.js';
import {disableForm, enableForm} from './lock-form.js';
//* Блокировка форм
disableForm();

//* Вызов сгенирированной карточки объявления
OfferCard(similarOffers(1));

//* Разблокировка форм
enableForm();

//* Валидация форм
checkValidityForm();

