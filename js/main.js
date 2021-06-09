const AVATAR = {
  path: '../img/avatars/user0',
  min: 1,
  max: 8,
};

const OFFER = {

  tittle: ['Горячее предложение', 'Последние места'],
  price: {
    min: 0,
    max: 20000,
  },
  type: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
  rooms: {
    min: 1,
    max: 3,
  },
  guests: {
    min: 1,
    max: 4,
  },
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description: ['Чисто, Солидно, Чисто'],
  photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'],
};

const LOCATION = {
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

/**
 * генератор случайных чисел
 * @param {number} min минимальный диапазон
 * @param {number} max максимальный диапазон
 * @param {number} float число знаков после запятой
 * @returns {number} случайное значение
 */
function createRandomNumber(min, max, float = 0) {
  if (min < 0 || max < 0 || max < min) {
    throw new Error('данные меньше ноля');
  }
  return Number((Math.random() * (max - min) + min).toFixed(float));
}

createRandomNumber (0,2);

//* Выбор случайного элемента массива
/**
 * Выбор случайного элемента массива
 * @param {array} array
 * @returns
 */
function getArrayRandomElement (array) {
  if (array && array.length) {
    return array[Math.floor(Math.random() * array.length)];
  }
}

//* Генерирование данных массива из 10 элементов
function createOffer() {
  const longitude = createRandomNumber(LOCATION.lng.min, LOCATION.lng.max, 5);
  const latitude = createRandomNumber(LOCATION.lat.min, LOCATION.lat.max, 5);


  return {
    author: {
      avatar: `../img/avatars/user0${createRandomNumber(AVATAR.min, AVATAR.max)}.png`,
    },

    offer: {
      tittle: getArrayRandomElement(OFFER.tittle),
      address: `${latitude}, ${longitude}`,
      price: createRandomNumber(OFFER.price.min, OFFER.price.max),
      type: getArrayRandomElement (OFFER.type),
      rooms: createRandomNumber(OFFER.rooms.min, OFFER.rooms.max),
      guests: createRandomNumber(OFFER.guests.min, OFFER.guests.max),
      checkin: getArrayRandomElement(OFFER.checkin),
      checkout: getArrayRandomElement(OFFER.checkout),
      features: OFFER.features.slice(0, createRandomNumber(1, OFFER.features.length)),
      description: OFFER.description,
      photos: OFFER.photos.slice(0, createRandomNumber(1, OFFER.photos.length)),
    },

    location: {
      lat: latitude,
      lng: longitude,
    },
  };
}

//* Создание массима из 10 элементов
const similarOffers = new Array(OFFER_COUNT).fill(null).map(() => createOffer());
similarOffers;
