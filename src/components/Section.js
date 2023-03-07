export default class Section {
  constructor({ data, renderer }, containerSelector) {
    // debugger;
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }


  addItem(element) {
    this._container.prepend(element);
  }

  renderItem() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }

}
