const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const isEsc = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const onPopupClose = (evt) => {
  const popupActive = document.querySelector('.open-popup');
  if (evt.type === 'click' || isEsc(evt)) {
    popupActive.remove();
    document.removeEventListener('keydown', onPopupClose);
  }
};

const addEventPopup = (popup) => {
  popup.addEventListener('click', onPopupClose);
  document.addEventListener('keydown', onPopupClose);
};

const openPopup = (messagePopup) => {
  const popup = messagePopup.cloneNode(true);
  document.body.append(popup);
  popup.classList.add('open-popup');
  addEventPopup(popup);
};

export {openPopup, successTemplate, errorTemplate, dataErrorTemplate};
