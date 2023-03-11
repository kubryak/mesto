export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const formVariables = ({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-popup-btn',
  inactiveButtonClass: 'popup__submit-popup-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

const root = document.querySelector('.root');

// Попап открытия увеличенного изображения

const popupImage = root.querySelector('.popup_type_image');
const popupSrcImage = popupImage.querySelector('.popup__image');
const popupDescriptionImage = popupImage.querySelector('.popup__image-description');


// Попап редактирования профиля

const buttonEditProfile = root.querySelector('.profile__edit-profile-info-btn');
const popupProfile = root.querySelector('.popup_type_profile');
const popupName = root.querySelector('.popup__input_type_name');
const popupDescription = root.querySelector('.popup__input_type_description');

// Попап добавления карточки

const popupCard = root.querySelector('.popup_type_card');
const buttonAddMesto = root.querySelector('.profile__add-mesto-btn');

// Темплейт карточки

const photoGridList = '.photo-grid__list';

export {
  popupImage,
  popupSrcImage,
  popupDescriptionImage,
  buttonEditProfile,
  popupProfile,
  popupName,
  popupDescription,
  popupCard,
  buttonAddMesto,
  photoGridList
}
