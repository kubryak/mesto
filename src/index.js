import './styles/index.css';

import { formVariables } from "./utils/utils.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from './components/Section';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo';
import PopupWithImage from './components/PopupWithImage.js';
import Api from './components/Api.js';
import PopupWithConfirmation from './components/PopupWithConfirmation.js';

import {
  buttonEditProfile,
  popupProfile,
  popupName,
  popupDescription,
  popupCard,
  buttonAddMesto,
  photoGridList,
  popupAvatar,
  buttonEditAvatar,
} from './utils/utils.js';


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-61',
  headers: {
    authorization: '1de8ce3c-b342-4a59-a2d8-65337a91a4f8',
    'Content-Type': 'application/json'
  }
});


Promise.all([api.getUserInfo(), api.getCards()])
  .then(([user, items]) => {
    userInfo.setUserAvatar(user.avatar);
    userInfo.setUserInfo({ userName: user.name, userAbout: user.about, userId: user._id });
    cardList.renderItems(items.reverse());
    userId = user._id;
  })
  .catch((err) => {
    console.log(err);
  })


// Валидация попапа профиля

const validatorProfile = new FormValidator(formVariables, popupProfile);
validatorProfile.enableValidation();


// Валидация попапа добавления карточки

const validatorCard = new FormValidator(formVariables, popupCard);
validatorCard.enableValidation();


// Валидация попапа редактирования аватара

const validatorAvatar = new FormValidator(formVariables, popupAvatar);
validatorAvatar.enableValidation();


// Открытие попапа редактирования аватара

buttonEditAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
  validatorAvatar.clearError();
});

const popupEditAvatar = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  callbackFormSubmit: (avatarLink) => {
    popupEditAvatar.renderLoading(true);
    api.setNewAvatar({ avatar: avatarLink.link })
      .then((res) => {
        userInfo.setUserAvatar(res.avatar);
        popupEditAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditAvatar.renderLoading(false);
      })
  }
});

popupEditAvatar.setEventListeners();


// Открытие попапа профиля

const userInfo = new UserInfo({ selectorName: '.profile__profile-name', selectorDescription: '.profile__profile-description', selectorAvatar: '.profile__avatar' });

buttonEditProfile.addEventListener('click', () => {
  popupEditProfile.open();
  const { name, about } = userInfo.getUserInfo()
  popupName.value = name;
  popupDescription.value = about;
  validatorProfile.clearError();
});

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  callbackFormSubmit: (profileData) => {
    popupEditProfile.renderLoading(true);
    api.setUserInfo({ name: profileData.name, about: profileData.description })
      .then((res) => {
        userInfo.setUserInfo({ userName: res.name, userAbout: res.about });
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.renderLoading(false);
      })
  }
});

popupEditProfile.setEventListeners();


// Открытие попапа добавления карточки

buttonAddMesto.addEventListener('click', () => {
  popupAddCard.open();
  validatorCard.clearError();
});

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_type_card',
  callbackFormSubmit: (formList) => {
    popupAddCard.renderLoading(true);
    api.addNewCard(formList)
      .then((res) => {
        cardList.addItem(res);
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddCard.renderLoading(false);
      })
  }
});

popupAddCard.setEventListeners();


// Открытие попапа изображения

const popupImage = new PopupWithImage('.popup_type_image');
popupImage.setEventListeners();

function handleCardClick(name, link) {
  popupImage.open(name, link);
}


// Открытие попапа удаления карточки

const popupDeleteCard = new PopupWithConfirmation('.popup_type_delete-image');
popupDeleteCard.setEventListeners();


// Добавление всех карточек

const cardList = new Section({
  renderer: (item) => {
    const card = new Card({
      cardData: item,
      userId: userInfo.getUserId(),
      templateSelector: '#photogrid',
      handleCardClick: handleCardClick,
      handleLikeButton: () => {
        if (card.isLiked) {
          api.removeLike(card.getCardId())
            .then((cardData) => {
              card.unSetLike();
              card.updateLikeCounter(cardData.likes);
            })
            .catch((err) => console.log(err));
        } else {
          api.addLike(card.getCardId())
            .then((cardData) => {
              card.setLike();
              card.updateLikeCounter(cardData.likes);
            })
            .catch((err) => console.log(err));
        }
      },
      handleDeleteButton: (event) => {
        const cardElement = event.target.closest('.photo-grid__list-item');
        const cardId = card.getCardId();
        popupDeleteCard.open();
        popupDeleteCard.setNewHandler(() => {
          api.deleteCard(cardId)
            .then(() => {
              cardElement.remove();
              popupDeleteCard.close();
            })
            .catch((err) => {
              console.log(err);
            })
        })
      }
    });
    cardList.setItem(card.createCard());
  }
}, photoGridList)
