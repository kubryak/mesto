let root = document.querySelector('.root')
let popup = root.querySelector('.popup');
let buttonEditProfile = root.querySelector('.profile__edit-profile-info-btn');
let buttonCloseEditProfile = root.querySelector('.popup__close-popup-btn')
let profileName = root.querySelector('.profile__profile-name');
let profileDescription = root.querySelector('.profile__profile-description');

function popupEdit() {
  if (popup.classList.contains('popup_opened')) {
    popup.classList.remove('popup_opened');
  } else {
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupDescription.value = profileDescription.textContent;
  }
}

buttonEditProfile.addEventListener('click', popupEdit);

buttonCloseEditProfile.addEventListener('click', popupEdit);


let popupName = root.querySelector('.popup__profile_type_name');
let popupDescription = root.querySelector('.popup__profile_type_description');
let buttonSaveProfile = root.querySelector('.popup__submit-profile-info-btn');

function popupSave(e) {
  e.preventDefault();
  profileName.textContent = `${popupName.value}`;
  profileDescription.textContent = `${popupDescription.value}`;
  popupEdit();
  if (e.keyCode === 13) {
    popupEdit()
  }
}


popup.addEventListener('submit', popupSave)
