let root = document.querySelector('.root');
let popupProfile = root.querySelector('.popup_type_profile');
let popupImage = root.querySelector('.popup_type_image');
let buttonEditProfile = root.querySelector('.profile__edit-profile-info-btn');
let buttonCloseEditProfile = popupProfile.querySelector('.popup__close-btn');
let profileName = root.querySelector('.profile__profile-name');
let profileDescription = root.querySelector('.profile__profile-description');

let popupName = root.querySelector('.popup__input_type_name');
let popupDescription = root.querySelector('.popup__input_type_description');

const photoGridList = root.querySelector('.photo-grid__list');

// Открытие попапа редактирования профиля

function popupEdit() {
  if (popupProfile.classList.contains('popup_opened')) {
    popupProfile.classList.remove('popup_opened');
  } else {
    popupProfile.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupDescription.value = profileDescription.textContent;
  }
}

buttonEditProfile.addEventListener('click', popupEdit);
buttonCloseEditProfile.addEventListener('click', popupEdit);

//

// Открытие попапа добавления карточки

let popupCard = root.querySelector('.popup_type_card');
let buttonCloseMesto = popupCard.querySelector('.popup__close-btn_type_mesto');
let buttonAddMesto = root.querySelector('.profile__add-mesto-btn');

function popupAdd() {
  if (popupCard.classList.contains('popup_opened')) {
    popupCard.classList.remove('popup_opened');
  } else {
    popupCard.classList.add('popup_opened');
  }
}

buttonAddMesto.addEventListener('click', popupAdd);
buttonCloseMesto.addEventListener('click', popupAdd);

// Открытие попапа с увеличенной картинкой

const popupFigure = root.querySelector('.popup__figure');

let srcImage = photoGridList.querySelector('.photo-grid__item');
let descriptionImage = photoGridList.querySelector('.photo-grid__title');

let popupSrcImage = popupFigure.querySelector('.popup__image');
let popupDescriptionImage = popupFigure.querySelector('.popup__image-description');


function popupBigImage() {
  if (popupImage.classList.contains('popup_opened')) {
    popupImage.classList.remove('popup_opened');
  } else {
    popupImage.classList.add('popup_opened');
  }
}

// popupName.value = profileName.textContent;
// popupDescription.value = profileDescription.textContent;


let buttonCloseBigImage = popupFigure.querySelector('.popup__close-btn_type_image');
buttonCloseBigImage.addEventListener('click', popupBigImage);

// Сохранение попапов

let buttonSaveProfile = popupProfile.querySelector('.popup__submit-popup-btn');

function popupSave(e) {
  e.preventDefault();
  profileName.textContent = `${popupName.value}`;
  profileDescription.textContent = `${popupDescription.value}`;
  popupEdit();
  if (e.keyCode === 13) {
    popupEdit()
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

function addMesto(nameValue, linkValue) {

  const mestoElement = photoGridTemplate.querySelector('.photo-grid__list-item').cloneNode(true);

  mestoElement.querySelector('.photo-grid__item').src = linkValue;
  mestoElement.querySelector('.photo-grid__item').alt = nameValue;
  mestoElement.querySelector('.photo-grid__title').textContent = nameValue;
  mestoElement.querySelector('.photo-grid__delete-photo')

  photoGridList.prepend(mestoElement);

  photoGridList.querySelector('.photo-grid__delete-photo').addEventListener('click', deletePhoto);
  photoGridList.querySelector('.photo-grid__like-photo').addEventListener('click', likePhoto);
  photoGridList.querySelector('.photo-grid__item').addEventListener('click', popupBigImage);
};

// Сохранение новой карточки

const buttonSaveMesto = popupCard.querySelector('.popup__submit-popup-btn');

buttonSaveMesto.addEventListener('click', function (e) {
  const name = popupCard.querySelector('.popup__input_type_img-name');
  const link = popupCard.querySelector('.popup__input_type_img-link');

  e.preventDefault();

  addMesto(name.value, link.value);
  name.value = '';
  link.value = '';

  popupAdd();
});

// Добавление лайка на карточку

function likePhoto(evt) {
  console.log('check');
  evt.preventDefault();
  evt.target.classList.toggle('photo-grid__like-photo_active');
};

const likeButton = photoGridList.querySelectorAll('.photo-grid__like-photo');

likeButton.forEach((evt) => {
  evt.addEventListener('click', likePhoto);
});

// Удаление карточки

function deletePhoto(evt) {
  console.log('check');
  evt.preventDefault();
  evt.target.closest('.photo-grid__list-item').remove();
};

const check = photoGridList.querySelectorAll('.photo-grid__delete-photo');

check.forEach((evt) => {
  evt.addEventListener('click', deletePhoto);
});


////////////////////////////////////////////////////

const gridItem = photoGridList.querySelectorAll('.photo-grid__item');

gridItem.forEach((evt) => {
  evt.addEventListener('click', popupBigImage);

});

