export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);

  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };

  _handleEscClose = ((evt) => {
    const ESC_KEY_CODE = '27'

    if (evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === ESC_KEY_CODE) {
      this.close();
    };
  });

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-btn')) {
        this.close();
      }
    });
  };
}
