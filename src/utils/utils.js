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

// Попап редактирования аватара

const popupAvatar = document.querySelector('.popup_type_avatar');
const buttonEditAvatar = document.querySelector('.profile__avatar-btn');


// Попап редактирования профиля

const buttonEditProfile = document.querySelector('.profile__edit-profile-info-btn');
const popupProfile = document.querySelector('.popup_type_profile');
const popupName = document.querySelector('.popup__input_type_name');
const popupDescription = document.querySelector('.popup__input_type_description');

// Попап добавления карточки

const popupCard = document.querySelector('.popup_type_card');
const buttonAddMesto = document.querySelector('.profile__add-mesto-btn');


// Темплейт карточки

const photoGridList = '.photo-grid__list';

export {
  buttonEditProfile,
  popupProfile,
  popupName,
  popupDescription,
  popupCard,
  buttonAddMesto,
  photoGridList,
  popupAvatar,
  buttonEditAvatar,
}
