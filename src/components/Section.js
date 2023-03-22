export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  setItem(element) {
    this._container.prepend(element);
  }

  addItem(element) {
    this._renderer(element);
  }

  renderItems(data) {
    data.forEach( (item) => {
      return this._renderer(item);
    });
  }

}
