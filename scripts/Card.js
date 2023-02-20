import { popupImage, popupSrcImage, popupDescriptionImage } from "./index.js";

export default class Card {
  constructor(cardData, templateSelector, openPopup) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._openPopup = openPopup;
  }

  _getElement() {
    return document.querySelector(this._templateSelector)
    .content
    .querySelector('.photo-grid__list-item')
    .cloneNode(true);
  }

  _setLikeListeners() {
    this._element.querySelector('.photo-grid__like-photo').addEventListener('click', () => {
      this._likePhoto();
    })
  }

  _likePhoto() {
    this._element.querySelector('.photo-grid__like-photo').classList.toggle('photo-grid__like-photo_active');
  }

  _setDeleteListeners() {
    this._element.querySelector('.photo-grid__delete-photo').addEventListener('click', () => {
      this._deletePhoto();
    })
  }

  _deletePhoto() {
    this._element.remove();
  }

  _setImageListeners() {
    this._element.querySelector('.photo-grid__item').addEventListener('click', () => {
      this._openBigImage();
    })
  }

  _openBigImage() {
    const image = this._cardData.link;
    const name = this._cardData.name;

    popupSrcImage.src = image;
    popupSrcImage.alt = name;
    popupDescriptionImage.textContent = name;

    this._openPopup(popupImage);
  }


  createCard() {
    this._element = this._getElement();

    const image = this._element.querySelector('.photo-grid__item');

    image.src = this._cardData.link;
    image.alt = this._cardData.name;
    this._element.querySelector('.photo-grid__title').textContent = this._cardData.name;

    this._setLikeListeners();
    this._setDeleteListeners();
    this._setImageListeners();

    return this._element;
  }

}

