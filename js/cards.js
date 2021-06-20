import {similarOffers} from './data.js';

const map = document.querySelector('#map-canvas');
const templateCard = document.querySelector('#card').content.querySelector('.popup');
const typesName = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const createOffer = similarOffers(1);

createOffer.forEach((card) => {
  const cardElement = templateCard.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = card.offer.tittle;
  cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = typesName[card.offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;

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

  cardElement.querySelector('.popup__description').textContent = card.offer.description;

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

  cardElement.querySelector('.popup__avatar').src = card.author.avatar;

  map.appendChild(cardElement);
});

export {templateCard};
