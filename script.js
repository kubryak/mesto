let root = document.querySelector('.root')
let popup = root.querySelector('.popup');
let popupOpened = root.querySelector('.popupOpened');
let buttonEditProfile = root.querySelector('.profile__edit-profile-info-btn');
let buttonCloseEditProfile = root.querySelector('.popup__close-popup-btn')


function popupEdit() {
    if (popup.classList.contains('popup_opened')) {
        popup.classList.remove('popup_opened');
    } else {
        popup.classList.add('popup_opened');
    }
}

buttonEditProfile.addEventListener('click', popupEdit);

buttonCloseEditProfile.addEventListener('click', popupEdit);


let popupName = root.querySelector('.popup__profile-name');
let popupDescription = root.querySelector('.popup__profile-description');
let profileName = root.querySelector('.profile__profile-name');
let profileDescription = root.querySelector('.profile__profile-description');
let buttonSaveProfile = root.querySelector('.popup__submit-profile-info-btn');

function popupSave() {
    profileName.textContent = `${popupName.value}`;
    profileDescription.textContent = `${popupDescription.value}`;
    popup.classList.add('popup_opened');
}

popup.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        buttonSaveProfile.click();
    }
});


buttonSaveProfile.addEventListener('click', popupSave)
