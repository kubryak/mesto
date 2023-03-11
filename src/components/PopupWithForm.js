import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popupSelector, callbackFormSubmit}) {
    super(popupSelector);
    this._callbackFormSubmit = callbackFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._formCard = this._form.querySelector('.popup__form-card')
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
  }

  _getInputValues() {
    this._formList = {};
    this._inputList.forEach((item) => {
      this._formList[item.name] = item.value
    })
    return this._formList;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._callbackFormSubmit(this._getInputValues());
      if (this._form.classList.contains('popup__form-card')) {
        this._form.reset();
      }
    });

  }

}
