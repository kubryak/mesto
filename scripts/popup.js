const root = document.querySelector('.root');
const popupProfile = root.querySelector('.popup_type_profile');
const popupImage = root.querySelector('.popup_type_image');
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


// Открытие попапа в зависимости от кнопки

function openPopup(item) {
  item.classList.add('popup_opened');
};



// Закрытие попапов

function closePopup(item) {
  item.classList.remove('popup_opened');
};

const buttonsClosePopup = root.querySelectorAll('.popup__close-btn');

buttonsClosePopup.forEach((elem) => {
  const popup = elem.closest('.popup');
  elem.addEventListener('click', () => closePopup(popup));
});

// Открытие попапа профиля

buttonEditProfile.addEventListener('click', function () {
  openPopup(popupProfile);
});

//

// Открытие попапа добавления карточки

buttonAddMesto.addEventListener('click', function () {
  openPopup(popupCard);
});

//

// Сохранение попапов

const buttonSaveProfile = popupProfile.querySelector('.popup__submit-popup-btn');

function savePopup(e) {
  e.preventDefault();
  profileName.textContent = `${popupName.value}`;
  profileDescription.textContent = `${popupDescription.value}`;
  openPopup(popups);
};

const popupFormProfile = popupProfile.querySelector('.popup__form');

popupFormProfile.addEventListener('submit', savePopup);


// Массив с 6-ю карточками

const initialCards = [
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


// Добавление фотографий из готового массива

const photoGridTemplate = document.querySelector('#photogrid').content;

function createCard(item) {

  const mestoElement = photoGridTemplate.querySelector('.photo-grid__list-item').cloneNode(true);

  mestoElement.querySelector('.photo-grid__item').src = item.link;
  mestoElement.querySelector('.photo-grid__item').alt = item.name;
  mestoElement.querySelector('.photo-grid__title').textContent = item.name;

  // Лайк фотографии

  const likeButton = mestoElement.querySelector('.photo-grid__like-photo');

  function likePhoto() {
    likeButton.classList.toggle('photo-grid__like-photo_active');
  }

  likeButton.addEventListener('click', likePhoto);

  // Удаление фотографии

  const deleteButton = mestoElement.querySelector('.photo-grid__delete-photo');

  function deletePhoto() {
    deleteButton.closest('.photo-grid__list-item').remove();
  }

  deleteButton.addEventListener('click', deletePhoto);

  // Открытие увеличенной фотографии

  const image = mestoElement.querySelector('.photo-grid__item');
  const descriptionImage = mestoElement.querySelector('.photo-grid__title');

  const popupSrcImage = popupImage.querySelector('.popup__image');
  const popupDescriptionImage = popupImage.querySelector('.popup__image-description');

  function openBigImage () {
    popupSrcImage.src = image.getAttribute('src');
    popupSrcImage.alt = descriptionImage.textContent;
    popupDescriptionImage.textContent = descriptionImage.textContent;
    openPopup(popupImage);
  }

  image.addEventListener('click', openBigImage);

  //

  return mestoElement;
}

  // Добавление карточки в начало

  initialCards.forEach((item) => {
    photoGridList.append(createCard(item));
  });

  // Добавление новой карточки

  const popupFormMesto = popupCard.querySelector('.popup__form');

  popupFormMesto.addEventListener('submit', (e) => {
    e.preventDefault();

    const newCard = [
      {
        name: `${cardName.value}`,
        link: `${cardLink.value}`
      }];

      photoGridList.prepend(createCard(newCard[0]));

      closePopup(popupCard);

      cardName.value = '';
      cardLink.value = '';
  });


