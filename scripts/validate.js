const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-container',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input-container_invalid',
  errorClass: 'popup__span_error-message',
};

//показывает эл-т ошибки
const showError = (formEl, formInput, errorMessage) => {
  const errorElement = formEl.querySelector(`.${formInput.id}-error`);
 
  formInput.classList.add(validationConfig.inputErrorClass);
  errorElement.classList.add(validationConfig.errorClass);
  errorElement.textContent = errorMessage;
};

//скрывает эл-т ошибки
const hideInputError = (formEl,formInput) => {
  const errorElement = formEl.querySelector(`.${formInput.id}-error`);

  formInput.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = '';
}

//функция проверки валидности
const isValid = (formEl, inputElement) => {
  if(!inputElement.validity.valid) {
    showError(formEl, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formEl, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((element) => {
    return !element.validity.valid;
  });
}

//блокирует кнопку, если поле не валидно
const toggleButton = (inputList, btnElement) => {
  if (hasInvalidInput(inputList)) {
    btnElement.classList.add(validationConfig.inactiveButtonClass);
    btnElement.setAttribute('disabled', '');
  } else {
    btnElement.classList.remove(validationConfig.inactiveButtonClass);
    btnElement.removeAttribute('disabled', '');
  }
};

//вешает слушатель на валидность на все поля формы.
const setEventListeners = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll(validationConfig.inputSelector));
  const btnElement = formEl.querySelector(validationConfig.submitButtonSelector);
  toggleButton(inputList, btnElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      isValid(formEl, inputElement);
      toggleButton(inputList, btnElement);
    })
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formEl) => {
    formEl.addEventListener('submit', function(evt) {
      evt.preventDefault();
    })
    setEventListeners(formEl);

  })
};

enableValidation();