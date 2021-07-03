import { similarOffers } from './data.js';
import { enableForm } from './lock-form.js';

// global L:readonly
const DEFAULT_ADDRESS = {
  lat: 35.6895,
  lng: 139.692,
};

const addressInput = document.querySelector('#address');
const map = L.map('map-canvas');


//* Функция показа адреса
const addressValue = ({lat, lng}) => {
  addressInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

//* Настройка карты
const initializationMap = () => {
  map.on('load', () => {
    enableForm();
    addressValue(DEFAULT_ADDRESS);
  })
    .setView({
      lat: DEFAULT_ADDRESS.lat,
      lng: DEFAULT_ADDRESS.lng,
    }, 13);
};

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


//* Настройка главного маркера
const mainPinIcon = L.icon(
  {
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  },
);

const mainMarker = L.marker(
  {
    lat: DEFAULT_ADDRESS.lat,
    lng: DEFAULT_ADDRESS.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.on('move', (evt) => {
  addressValue(evt.target.getLatLng());
});

///////////////////////////////////////////////*
const templateCard = document.querySelector('#card').content.querySelector('.popup');
const typesName = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const createPoint = (card) => {

  const cardElement = templateCard.cloneNode(true);
  //* поиск элементов карточки
  const title = cardElement.querySelector('.popup__title');
  const address = cardElement.querySelector('.popup__text--address');
  const price = cardElement.querySelector('.popup__text--price');
  const type = cardElement.querySelector('.popup__type');
  const capacity = cardElement.querySelector('.popup__text--capacity');
  const time = cardElement.querySelector('.popup__text--time');
  const description = cardElement.querySelector('.popup__description');
  const avatar = cardElement.querySelector('.popup__avatar');

  //* добавляем значение или удаляем пустой элемент
  title.textContent = card.offer.title || title.remove();
  address.textContent = card.offer.address || address.remove();
  price.textContent = `${card.offer.price} ₽/ночь` || price.remove();
  type.textContent = typesName[card.offer.type] || type.remove();
  capacity.textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей` || capacity.remove();
  time.textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}` || time.remove();
  description.textContent = card.offer.description || description.remove();
  avatar.src = card.author.avatar || '../img/avatars/default.png';

  //* создание списка фич
  const featuresList = cardElement.querySelector('.popup__features');
  featuresList.textContent = '';
  const modifiers = card.offer.features.map((feature) => `popup__feature--${feature}`);
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < modifiers.length; i++) {
    const newElement = document.createElement('li');
    newElement.classList.add('popup__feature', modifiers[i]);
    fragment.appendChild(newElement);
  }
  featuresList.appendChild(fragment);
  featuresList.children.length || featuresList.remove();
  //* создание списка фотографий
  const photosList = cardElement.querySelector('.popup__photos');
  const photo = cardElement.querySelector('.popup__photo');
  const photos = card.offer.photos.map((img) => img);
  const photoFragment = document.createDocumentFragment();
  photosList.textContent = '';
  for (let i = 0; i < photos.length; i++) {
    const photoElement = photo.cloneNode(true);
    photoElement.src = card.offer.photos[i];
    photoFragment.appendChild(photoElement);
  }
  photosList.appendChild(photoFragment);
  photosList.children.length || photosList.remove();

  return cardElement;
};

similarOffers(10).forEach((element) => {
  const {lat, lng} = element.location;
  //* Настройка меток объявлений
  const adsMarkerPin = L.icon(
    {
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    },
  );
  const adsMarker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: adsMarkerPin,
    },
  );
  adsMarker
    .addTo(map)
    .bindPopup(createPoint(element));
});

const resetMap = () => {
  mainMarker.setLatLng(
    {
      lat: DEFAULT_ADDRESS.lat,
      lng: DEFAULT_ADDRESS.lng,
    },
  );
  map.setView(
    {
      lat: DEFAULT_ADDRESS.lat,
      lng: DEFAULT_ADDRESS.lng,
    }, 13);
};

mainMarker.addTo(map);
export {initializationMap, resetMap};
