export default class UserInfo {
    constructor({name, about, avatar}) {
        this._name = document.querySelector(name);
        this._info = document.querySelector(about);
        this._avatar = document.querySelector(avatar);
    }
    getUserInfo() {
        const userData = { 
            userName: this._name.textContent,
            userInfo: this._info.textContent,
        }
        return  userData;
    }

    setUserInfo(name, about) {
        this._name.textContent = name;
        this._info.textContent = about;
    }

    setUserAvatar(link) {
        this._avatar.src = link;
    }
}