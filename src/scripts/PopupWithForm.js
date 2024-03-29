import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(selector, submitForm, button) {
        super(selector, button);
        this._submitForm = submitForm;
        this._form = this._popupElement.querySelector('.popup__form');
        this._inputs = Array.from(this._form.querySelectorAll('.popup__input-container'));
    }
    getInputValue() {
       this._inputList = {};
       this._inputs.forEach((input) => {
        this._inputList[input.name] = input.value;
       })
       return  this._inputList;
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._button.addEventListener('click', this.close);
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this.getInputValue());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}