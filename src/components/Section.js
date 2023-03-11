export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  setItem(element) {
    this._container.prepend(element);
  }

  addItem(element) {
    this._renderer(element);
  }



  renderItem() {
    this._renderedItems.forEach( (item) => {
      return this._renderer(item);
    });
  }

}



