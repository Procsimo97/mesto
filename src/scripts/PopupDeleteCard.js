import Popup from "./Popup.js"

export default class PopupDeleteCard extends Popup {
    constructor(selector, button, confirmBtn, deleteFunc) {
        super(selector, button);
        this._confirmBtn = confirmBtn; //кнопка подтверждения
        this._deleteFunc = deleteFunc; //функция удаления
    }
    open(card) {
        super.open();
        this._card = card;
    }

    setEventListeners() {
        super.setEventListeners();
        this._confirmBtn.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._deleteFunc(this._card);
            this.close();
        });
    }
}