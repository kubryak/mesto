import {initialCards} from "./utils.js";
import Card from "./Card.js";


const root = document.querySelector('.root');
const popupProfile = root.querySelector('.popup_type_profile');
export const popupImage = root.querySelector('.popup_type_image');
const buttonEditProfile = root.querySelector('.profile__edit-profile-info-btn');
const profileName = root.querySelector('.profile__profile-name');
const profileDescription = root.querySelector('.profile__profile-description');

const popupName = root.querySelector('.popup__input_type_name');
const popupDescription = root.querySelector('.popup__input_type_description');

const photoGridList = root.querySelector('.photo-grid__list');

const popupCard = root.querySelector('.popup_type_card');
const buttonCloseMesto = popupCard.querySelector('.popup__close-btn_type_mesto');
const buttonAddMesto = root.querySelector('.profile__add-mesto-btn');

const popups = root.querySelectorAll('.popup');

const cardName = popupCard.querySelector('.popup__input_type_img-name');
const cardLink = popupCard.querySelector('.popup__input_type_img-link');

export const popupSrcImage = popupImage.querySelector('.popup__image');
export const popupDescriptionImage = popupImage.querySelector('.popup__image-description');


// Открытие попапа в зависимости от кнопки

function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};


// Закрытие попапов

function closePopup(item) {
  item.classList.remove('popup_opened');

  document.removeEventListener('keydown', closePopupByEsc);
};


// Закрытие попапов по esc

function closePopupByEsc(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === '27') {
    const openedPopup = root.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};


// Закрытие попапов кликом по оверлею или крестику

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-btn')) {
      closePopup(popup)
    }
  });
});


// Открытие попапа профиля

buttonEditProfile.addEventListener('click', function () {
  popupName.value = profileName.textContent;
  popupDescription.value = profileDescription.textContent;

  const inputs = popupProfile.querySelectorAll('.popup__input');
  const inputsError = popupProfile.querySelectorAll('.popup__input-error');

  inputs.forEach(element => {
    element.classList.remove('popup__input_type_error');
    element.textContent = '';
  });

  inputsError.forEach(element => {
    element.textContent = '';
    element.classList.remove('popup__input-error_active');
  });

  openPopup(popupProfile);
});


// Открытие попапа добавления карточки

buttonAddMesto.addEventListener('click', function () {
  openPopup(popupCard);
});


// Сохранение попапа редактирования профиля

const buttonSaveProfile = popupProfile.querySelector('.popup__submit-popup-btn');

function saveProfilePopup(e) {
  e.preventDefault();
  profileName.textContent = `${popupName.value}`;
  profileDescription.textContent = `${popupDescription.value}`;
  closePopup(popupProfile);
};

const popupFormProfile = document.forms['profile-form'];

popupFormProfile.addEventListener('submit', saveProfilePopup);


// Добавление карточек из массива

initialCards.forEach((item) => {
  const card = new Card(item, '#photogrid', openPopup);
  photoGridList.append(card.createCard());
});

//

// Добавление новой карточки

const popupFormMesto = document.forms['mesto-form'];

popupFormMesto.addEventListener('submit', (e) => {
  e.preventDefault();

  const newCard = new Card ({
    name: cardName.value,
    link: cardLink.value
  }, '#photogrid', openPopup);

  photoGridList.prepend(newCard.createCard());

  closePopup(popupCard);

  e.target.reset();
});
