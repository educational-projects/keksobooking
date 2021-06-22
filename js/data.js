import {createRandomNumber, getArrayRandomElement} from './util.js';

const Avatar = {
  path: '../img/avatars/user0',
  min: 1,
  max: 8,
};

const Offer = {
  titles: ['Горячее предложение', 'Последние места'],
  price: {
    min: 0,
    max: 20000,
  },
  types: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
  rooms: {
    min: 1,
    max: 3,
  },
  guests: {
    min: 1,
    max: 4,
  },
  checkins: ['12:00', '13:00', '14:00'],
  checkouts: ['12:00', '13:00', '14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  descriptions: ['Дорогой, уютный номер для любителей роскоши',
    'Приятная цена со всеми удобствами',
    'Потрясающий вид с окон на море'],
  photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'],
};

const LocationMap = {
  lat: {
    min: 35.65000,
    max: 35.70000,
  },
  lng: {
    min: 139.70000,
    max: 139.80000,
  },
};

const OFFER_COUNT = 10;

//* Генерирование данных массива из 10 элементов
const createOffer = () => {
  const longitude = createRandomNumber(LocationMap.lng.min, LocationMap.lng.max, 5);
  const latitude = createRandomNumber(LocationMap.lat.min, LocationMap.lat.max, 5);

  return {
    author: {
      avatar: `../img/avatars/user0${createRandomNumber(Avatar.min, Avatar.max)}.png`,
    },

    offer: {
      title: getArrayRandomElement(Offer.titles),
      address: `${latitude}, ${longitude}`,
      price: createRandomNumber(Offer.price.min, Offer.price.max),
      type: getArrayRandomElement (Offer.types),
      rooms: createRandomNumber(Offer.rooms.min, Offer.rooms.max),
      guests: createRandomNumber(Offer.guests.min, Offer.guests.max),
      checkin: getArrayRandomElement(Offer.checkins),
      checkout: getArrayRandomElement(Offer.checkouts),
      features: Offer.features.slice(0, createRandomNumber(1, Offer.features.length)),
      description: getArrayRandomElement(Offer.descriptions),
      photos: Offer.photos.slice(0, createRandomNumber(1, Offer.photos.length)),
    },

    location: {
      lat: latitude,
      lng: longitude,
    },
  };
};

const similarOffers = (quantity = OFFER_COUNT) => new Array(quantity).fill(null).map(createOffer);


export {similarOffers};
