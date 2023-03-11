export default class UserInfo {
  constructor({selectorName, selectorDescription}) {
    this._name = document.querySelector(selectorName);
    this._description = document.querySelector(selectorDescription);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent
    }
  }

  setUserInfo(formList) {
    const {name, description} = formList;

    this._name.textContent = name;
    this._description.textContent = description;
  }

}
