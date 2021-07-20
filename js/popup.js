const isEsc = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const closePopup = (evt) => {
  const popupActive = document.querySelector('.open-popup');
  if (evt.type === 'click' || isEsc(evt)) {
    popupActive.remove();
    document.removeEventListener('keydown', closePopup);
  }
};

const addEventPopup = (popup) => {
  popup.addEventListener('click', closePopup);
  document.addEventListener('keydown', closePopup);
};

const openPopup = (messagePopup) => {
  const popup = messagePopup.cloneNode(true);
  document.body.append(popup);
  popup.classList.add('open-popup');
  addEventPopup(popup);
};

export {openPopup};
