export default class UserInfo {
  constructor({ selectorName, selectorDescription, selectorAvatar }) {
    this._name = document.querySelector(selectorName);
    this._description = document.querySelector(selectorDescription);
    this._avatar = document.querySelector(selectorAvatar);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._description.textContent,
      avatar: this._avatar.src
    }
  }

  setUserInfo(userData) {
    const { userName, userAbout, userId } = userData;
    this._name.textContent = userName;
    this._description.textContent = userAbout;
    this._userId = userId;
  }

  setUserAvatar(avatarLink) {
    this._avatar.src = avatarLink;
  }

  getUserId() {
    return this._userId;
  }

}
