export class FormValidator {
  constructor(formElement, config) {
    this._formElement = formElement;
    this._inputSelector =  formElement.querySelector(config.inputSelector);
    this._submitButtonSelector = formElement.querySelector(config.submitButtonSelector);
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  }

  //делает кнопку неактивной
  disableSubmitButton() {
    this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement);
        })
        this._setEventListeners();
  }
  //показывает эл-т ошибки
  _showError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  //скрывает эл-т ошибки
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
 
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  //функция проверки валидности
  _isValid(inputElement) {
    if(!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((element) => {
      return !element.validity.valid;
    });
  }
//блокирует кнопку, если поле не валидно
  _toggleButton() {
    if (this._hasInvalidInput()) {
      this._submitButtonSelector.classList.add(this._inactiveButtonClass);
      this._submitButtonSelector.setAttribute('disabled', true);
    } else {
      this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
      this._submitButtonSelector.removeAttribute('disabled');
    }
  }
  //вешает слушатель на валидность на все поля формы.
  _setEventListeners() {
    this._toggleButton();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButton();
      })
    });
  }

  enableValidation() {
      this._setEventListeners();
  }
}