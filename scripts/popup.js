let root = document.querySelector('.root');
let popupProfile = root.querySelector('.popup_type_profile');
let popupImage = root.querySelector('.popup_type_image');
let buttonEditProfile = root.querySelector('.profile__edit-profile-info-btn');
let profileName = root.querySelector('.profile__profile-name');
let profileDescription = root.querySelector('.profile__profile-description');

let popupName = root.querySelector('.popup__input_type_name');
let popupDescription = root.querySelector('.popup__input_type_description');

const photoGridList = root.querySelector('.photo-grid__list');

let popupCard = root.querySelector('.popup_type_card');
let buttonCloseMesto = popupCard.querySelector('.popup__close-btn_type_mesto');
let buttonAddMesto = root.querySelector('.profile__add-mesto-btn');

const popup = root.querySelectorAll('.popup');


// Открытие попапа в зависимости от кнопки

function popupOpen({ element }) {
  popup.forEach((item) => {
    if (item.classList === element.classList) {
      item.classList.add('popup_opened');
      popupName.value = profileName.textContent;
      popupDescription.value = profileDescription.textContent;
    } else {
      item.classList.remove('popup_opened');
    }
  })
};

// Открытие попапа профиля

buttonEditProfile.addEventListener('click', function () {
  popupOpen({ element: popupProfile });
});

//

// Открытие попапа добавления карточки

buttonAddMesto.addEventListener('click', function () {
  popupOpen({ element: popupCard });
});

//

// Закрытие попапов

const closePopupButton = root.querySelectorAll('.popup__close-btn');

closePopupButton.forEach((elem) => {
  elem.addEventListener('click', () => { popupOpen({ element: popup }) });
});

//

// Сохранение попапов

let buttonSaveProfile = popupProfile.querySelector('.popup__submit-popup-btn');

function popupSave(e) {
  e.preventDefault();
  profileName.textContent = `${popupName.value}`;
  profileDescription.textContent = `${popupDescription.value}`;
  popupOpen({ element: popup });
  if (e.keyCode === 13) {
    popupOpen({ element: popup });
  }
}


popupProfile.addEventListener('submit', popupSave)


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


// Добавление 6 карточек


const photoGridTemplate = document.querySelector('#photogrid').content;

initialCards.forEach(function (element) {

  const photoGridListItem = photoGridTemplate.querySelector('.photo-grid__list-item').cloneNode(true);

  photoGridListItem.querySelector('.photo-grid__item').src = element.link;
  photoGridListItem.querySelector('.photo-grid__item').alt = element.name;
  photoGridListItem.querySelector('.photo-grid__title').textContent = element.name;

  photoGridList.append(photoGridListItem);
});



// Добавление карточки

function addMesto(e) {
  e.preventDefault();

  const name = popupCard.querySelector('.popup__input_type_img-name');
  const link = popupCard.querySelector('.popup__input_type_img-link');

  const mestoElement = photoGridTemplate.querySelector('.photo-grid__list-item').cloneNode(true);

  mestoElement.querySelector('.photo-grid__item').src = `${link.value}`;
  mestoElement.querySelector('.photo-grid__item').alt = `${name.value}`;
  mestoElement.querySelector('.photo-grid__title').textContent = `${name.value}`;

  photoGridList.prepend(mestoElement);
  photoGridList.querySelector('.photo-grid__delete-photo').addEventListener('click', deletePhoto);
  photoGridList.querySelector('.photo-grid__like-photo').addEventListener('click', likePhoto);
  root.querySelectorAll('.photo-grid__item').forEach((element) => {
    element.addEventListener('click', () => {
      popupSrcImage.src = element.getAttribute('src');
      popupDescriptionImage.textContent = element.parentNode.querySelector('.photo-grid__title').textContent;
      popupOpen({ element: popupImage });
    });
  });

  name.value = '';
  link.value = '';

  popupOpen({ element: popup });

};

// Сохранение новой карточки

popupCard.addEventListener('submit', addMesto);

// Добавление лайка на карточку

function likePhoto(evt) {
  evt.preventDefault();
  evt.target.classList.toggle('photo-grid__like-photo_active');
};

const likeButton = photoGridList.querySelectorAll('.photo-grid__like-photo');

likeButton.forEach((evt) => {
  evt.addEventListener('click', likePhoto);
});

// Удаление карточки

function deletePhoto(evt) {
  evt.preventDefault();
  evt.target.closest('.photo-grid__list-item').remove();
};

const deleteButton = photoGridList.querySelectorAll('.photo-grid__delete-photo');

deleteButton.forEach((evt) => {
  evt.addEventListener('click', deletePhoto);
});


// Открытие попапа с увеличенной картинкой

const popupFigure = root.querySelector('.popup__figure');

let allImages = photoGridList.querySelectorAll('.photo-grid__item');
let descriptionImage = photoGridList.querySelector('.photo-grid__title');

let popupSrcImage = popupFigure.querySelector('.popup__image');
let popupDescriptionImage = popupFigure.querySelector('.popup__image-description');


allImages.forEach((element) => {
  element.addEventListener('click', () => {
    popupSrcImage.src = element.getAttribute('src');
    popupDescriptionImage.textContent = element.parentNode.querySelector('.photo-grid__title').textContent;
    popupOpen({ element: popupImage });
  });
});
