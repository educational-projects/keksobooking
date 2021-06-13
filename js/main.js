import {createOffer} from './data.js';

//* Создание массима из 10 элементов
const OFFER_COUNT = 10;
const similarOffers = new Array(OFFER_COUNT).fill(null).map(createOffer);
similarOffers;
