export default class Card {
  constructor({ cardData, userId, templateSelector, handleCardClick, handleLikeButton, handleDeleteButton }) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;

    this._handleCardClick = handleCardClick;
    this._handleLikeButton = handleLikeButton;
    this._handleDeleteButton = handleDeleteButton;

    this._likes = cardData.likes;
    this._cardId = cardData._id;
    this._userId = userId;
    this._cardUserId = cardData.owner._id;
  }

  _getElement() {
    return document.querySelector(this._templateSelector)
      .content
      .querySelector('.photo-grid__list-item')
      .cloneNode(true);
  }

  _setLikeListeners() {
    this._likeBtn.addEventListener('click', () => {
      this._handleLikeButton();
    })
  }

  _setDeleteListeners() {
    if (this._userId === this._cardUserId) {
      this._element.querySelector('.photo-grid__delete-photo').addEventListener('click', (event) => {
        this._handleDeleteButton(event);

      })
    } else {
      this._deleteCardButton.remove();
      this._deleteCardButton = null;
    }
  }

  _setImageListeners() {
    this._element.querySelector('.photo-grid__item').addEventListener('click', () => {
      this._handleCardClick(this._cardData.name, this._cardData.link);
    })
  }

  getCardId() {
    return this._cardId;
  }

  setLike() {
    this._likeBtn.classList.add('photo-grid__like-photo_active');
    this.isLiked = true;
  }

  unSetLike() {
    this._likeBtn.classList.remove('photo-grid__like-photo_active');
    this.isLiked = false;
  }

  _toggleLikesCounter() {
    if (this._checkUserLikes()) {
      this.setLike();
    } else {
      this.unSetLike();
    }
  }

  _checkUserLikes() {
    return this._likes.some(item => item._id === this._userId);
  }

  updateLikeCounter(data) {
    this._likeCounter.textContent = data.length;
  }

  createCard() {
    this._element = this._getElement();
    this._likeBtn = this._element.querySelector('.photo-grid__like-photo');
    this._deleteCardButton = this._element.querySelector('.photo-grid__delete-photo')

    const image = this._element.querySelector('.photo-grid__item');

    image.src = this._cardData.link;
    image.alt = this._cardData.name;
    this._element.querySelector('.photo-grid__title').textContent = this._cardData.name;

    this._likeCounter = this._element.querySelector('.photo-grid__like-amount');
    this._likeCounter.textContent = this._likes.length;


    this._setLikeListeners();
    this._setDeleteListeners();
    this._setImageListeners();
    this._toggleLikesCounter();

    return this._element;
  }

}

