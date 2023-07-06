export default class UserInfo {
    constructor({selectorName, selectorInfo}) {
        this._name = document.querySelector(selectorName);
        this._info = document.querySelector(selectorInfo);
    }
    getUserInfo() {
        const userData = { 
            userName: this._name.textContent,
            userInfo: this._info.textContent
        }
        return  userData;
    }

    setUserInfo({userName, userInfo}) {
        this._name.textContent = userName;
        this._info.textContent = userInfo;
    }
    
}