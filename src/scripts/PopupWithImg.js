import Popup from "./Popup.js";

export default class PopupWithImg extends Popup{
    constructor(selector, button) {
        super(selector, button);
        this._popupImg = this._popupElement.querySelector('.popup__image');
        this._caption = this._popupElement.querySelector('.popup__caption');
    }

    open(link, name) {
        super.open();
        this._popupImg.src = link;
        this._caption.textContent = name;
        this._caption.alt = name;
    }
}