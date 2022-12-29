let root = document.querySelector('.root');
let popupProfile = root.querySelector('.popup_type_profile');
let buttonEditProfile = root.querySelector('.profile__edit-profile-info-btn');
let buttonCloseEditProfile = popupProfile.querySelector('.popup__close-popup-btn');
let profileName = root.querySelector('.profile__profile-name');
let profileDescription = root.querySelector('.profile__profile-description');

let popupName = root.querySelector('.popup__input_type_name');
let popupDescription = root.querySelector('.popup__input_type_description');

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


let popupCard = root.querySelector('.popup_type_card');
let buttonCloseMesto = popupCard.querySelector('.close-mesto');
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

const photoGridList = root.querySelector('.photo-grid__list');
const photoGridTemplate = document.querySelector('#photogrid').content;

initialCards.forEach(function (element) {

const photoGridListItem = photoGridTemplate.querySelector('.photo-grid__list-item').cloneNode(true);

  photoGridListItem.querySelector('.photo-grid__item').src = element.link;
  photoGridListItem.querySelector('.photo-grid__item').alt = element.name;
  photoGridListItem.querySelector('.photo-grid__title').textContent = element.name;

  photoGridList.append(photoGridListItem);
});


function addMesto (nameValue, linkValue) {
  const mestoElement = photoGridTemplate.querySelector('.photo-grid__list-item').cloneNode(true);

  mestoElement.querySelector('.photo-grid__item').src = linkValue;
  mestoElement.querySelector('.photo-grid__item').alt = nameValue;
  mestoElement.querySelector('.photo-grid__title').textContent = nameValue;

  photoGridList.prepend(mestoElement);
};

const likeButton = Array.from(photoGridList.querySelectorAll('.photo-grid__like-photo'));

likeButton.forEach((button) => {
  button.addEventListener('click', () => {
  button.classList.toggle('photo-grid__like-photo_active');
});
});


// photoGridList.querySelector('.photo-grid__like-photo').addEventListener('click', function(evt){
//   console.log('xyu');
//   evt.target.classList.toggle('photo-grid__like-photo_active');
// });


const buttonSaveMesto = popupCard.querySelector('.popup__submit-popup-btn');

buttonSaveMesto.addEventListener('click', function(e) {
  const name = popupCard.querySelector('.popup__input_type_img-name');
  const link = popupCard.querySelector('.popup__input_type_img-link');

  e.preventDefault();

  addMesto(name.value, link.value);
  name.value = '';
  link.value = '';

  popupAdd();
});
