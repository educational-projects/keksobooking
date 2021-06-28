const map = document.querySelector('#map-canvas');
const templateCard = document.querySelector('#card').content.querySelector('.popup');
const typesName = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

//*Генерация карточи объявления
const OfferCard = (cards) => {
  cards.forEach((card) => {
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

    map.appendChild(cardElement);
  });
};

export {OfferCard};
