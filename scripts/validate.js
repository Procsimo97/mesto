const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-container',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input-container_invalid',
  errorClass: 'popup__span_error-message',
};

//делает кнопку неактивной
const disableSubmitButton  = (formEl, config) => {
  const button = formEl.querySelector(config.submitButtonSelector);
  button.classList.add(config.inactiveButtonClass);
  button.setAttribute('disabled', '');
}

//показывает эл-т ошибки
const showError = (formEl, formInput, errorMessage, сonfig) => {
  const errorElement = formEl.querySelector(`.${formInput.id}-error`);
 
  formInput.classList.add(сonfig.inputErrorClass);
  errorElement.classList.add(сonfig.errorClass);
  errorElement.textContent = errorMessage;
};

//скрывает эл-т ошибки
const hideInputError = (formEl,formInput, сonfig) => {
  const errorElement = formEl.querySelector(`.${formInput.id}-error`);

  formInput.classList.remove(сonfig.inputErrorClass);
  errorElement.classList.remove(сonfig.errorClass);
  errorElement.textContent = '';
}

//функция проверки валидности
const isValid = (formEl, inputElement, сonfig) => {
  if(!inputElement.validity.valid) {
    showError(formEl, inputElement, inputElement.validationMessage, сonfig);
  } else {
    hideInputError(formEl, inputElement, сonfig);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((element) => {
    return !element.validity.valid;
  });
}

//блокирует кнопку, если поле не валидно
const toggleButton = (inputList, btnElement, сonfig) => {
  if (hasInvalidInput(inputList, сonfig)) {
    btnElement.classList.add(сonfig.inactiveButtonClass);
    btnElement.setAttribute('disabled', '');
  } else {
    btnElement.classList.remove(сonfig.inactiveButtonClass);
    btnElement.removeAttribute('disabled', '');
  }
};

//вешает слушатель на валидность на все поля формы.
const setEventListeners = (formEl, сonfig) => {
  const inputList = Array.from(formEl.querySelectorAll(сonfig.inputSelector));
  const btnElement = formEl.querySelector(сonfig.submitButtonSelector);
  toggleButton(inputList, btnElement, сonfig);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      isValid(formEl, inputElement, сonfig);
      toggleButton(inputList, btnElement, сonfig);
    })
  });
};

const enableValidation = (сonfig) => {
  const formList = Array.from(document.querySelectorAll(сonfig.formSelector));
  formList.forEach((formEl) => {
    formEl.addEventListener('submit', function(evt) {
      evt.preventDefault();
    })
    setEventListeners(formEl, сonfig);

  })
};

enableValidation(validationConfig);