import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, name, link) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupImageTitle = this._popup.querySelector('.popup__image-description');
    this._name = name;
    this._link = link;
  }

  openPopup() {
    this._popupImage.src = this._link;
    this._popupImage.alt = this._name;
    this._popupImageTitle.textContent = this._name;

    super.openPopup();
  }
}


