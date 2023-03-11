import './styles/index.css';

import { initialCards, formVariables } from "./components/utils.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from './components/Section';
import PopupWithForm from './components/PopupWithForm';
import UserInfo from './components/UserInfo';
import PopupWithImage from './components/PopupWithImage';

const root = document.querySelector('.root');

import {
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
} from './components/utils.js';


// Валидация попапа профиля

const validatorProfile = new FormValidator(formVariables, popupProfile);
validatorProfile.clearProfileError();
validatorProfile.enableValidation();


// Валидация попапа добавления карточки

const validatorCard = new FormValidator(formVariables, popupCard);
validatorCard.enableValidation();


// Открытие попапа профиля

const userInfo = new UserInfo({ selectorName: '.profile__profile-name', selectorDescription: '.profile__profile-description' });

buttonEditProfile.addEventListener('click', () => {
  popupEditProfile.openPopup();
  const { name, description } = userInfo.getUserInfo()
  popupName.value = name;
  popupDescription.value = description;
});

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  callbackFormSubmit: (formList) => {
    userInfo.setUserInfo(formList);

    popupEditProfile.closePopup();
  }
});

popupEditProfile.setEventListeners();


// Открытие попапа добавления карточки

buttonAddMesto.addEventListener('click', () => {
  popupAddCard.openPopup();
});

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_type_card',
  callbackFormSubmit: (formList) => {
    cardList.addItem(formList)
    popupAddCard.closePopup();
  }
});

popupAddCard.setEventListeners();


// Функция открытия попапа изображения

function handleCardClick(name, link) {
  const popup = new PopupWithImage('.popup_type_image', name, link);
  popup.openPopup();
  popup.setEventListeners();
}


// Добавление всех карточек

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#photogrid', handleCardClick);
    cardList.setItem(card.createCard());
  }
}, photoGridList)

cardList.renderItem();
