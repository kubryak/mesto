import Popup from './Popup.js'

export default class PopupWithConfirmation extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._form = this._popup.querySelector('.popup__form');
  }

  setNewHandler(event) {
    this._handleSubmit = event;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleSubmit();
    });
  }

}
