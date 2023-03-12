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

  setUserInfo(profileData) {
    const {name, description} = profileData;

    this._name.textContent = name;
    this._description.textContent = description;
  }

}
