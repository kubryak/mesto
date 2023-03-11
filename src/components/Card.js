export default class Card {
  constructor(cardData, templateSelector, handleCardClick) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
      this._handleCardClick(this._cardData.name, this._cardData.link);
    })
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

