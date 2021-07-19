const FILE_TYPES = ['png', 'jpeg', 'jpg'];

//* превью аватара
const previewAvatar = document.querySelector('.ad-form-header__preview');
const fileChooserAvatar = document.querySelector('.ad-form-header__input');
const previewAvatarImg = previewAvatar.querySelector('img');
previewAvatar.style.padding = '0';
previewAvatarImg.style.width = '70px';
previewAvatarImg.style.height = '70px';

const getpreviewAvatar = () => {
  fileChooserAvatar.addEventListener('change', () => {
    const file = fileChooserAvatar.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        previewAvatarImg.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

//* превью фотографий жилья
const fileChooserHousing = document.querySelector('.ad-form__input');
const previewHousing = document.querySelector('.ad-form__photo');
const templateHousingImg = document.querySelector('#card').content.querySelector('.popup__photo');
const HousingImg = templateHousingImg.cloneNode(true);
HousingImg.style.height = '70px';
HousingImg.style.width = '70px';

const getPreviewHousing = () => {
  fileChooserHousing.addEventListener('change', () => {
    const file = fileChooserHousing.files[0];
    const fileName = file.name.toLowerCase();
    previewHousing.appendChild(HousingImg);

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        HousingImg.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

const getPreview = () => {
  getPreviewHousing();
  getpreviewAvatar();
};

export {getPreview};
