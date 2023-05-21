const formEl =  document.querySelector('.popup__form');
const formInput = formEl.querySelector('.popup__input-container');
const formError = formEl.querySelector(`.${formInput.id}-error`);
const submitBtn = formEl.querySelector('.popup__save-btn');



const enableValidation = {
  formSelector: 'popup__form',
  inputSelector: 'popup__input-container',
  submitButtonSelector: 'popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input-container_invalid',
  errorClass: 'popup__input-container_error-message'
};


//показывает эл-т ошибки
const showError = (formEl, formInput, errorMessage) => {
  const errorElement = formEl.querySelector(`.${formInput.id}-error`);
  formInput.classList.add('popup__input-container_invalid');
  errorElement.classList.add('popup__input-container_error-message');
  errorElement.textContent = errorMessage;
};

//скрывает эл-т ошибки
const hideInputError = (formEl,formInput) => {
  const errorElement = formEl.querySelector(`.${formInput.id}-error`);
  console.log(formInput.id);
  console.log(errorElement);
  formInput.classList.remove('popup__input-container_invalid');
  errorElement.classList.remove('popup__input-container_error-message');
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
    btnElement.classList.add('popup__save-btn_inactive');
    btnElement.setAttribute('disabled', '');
  } else {
    btnElement.classList.remove('popup__save-btn_inactive');
    btnElement.removeAttribute('disabled', '');
  }
};


formEl.addEventListener('submit', function(evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', function () {
  isValid(formEl, formInput);
});

//вешает слушатель на валидность на все поля формы.
const setEventListeners = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll('.popup__input-container'));
  const btnElement = formEl.querySelector('.popup__save-btn');
  toggleButton(inputList, btnElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      isValid(formEl, inputElement);
      toggleButton(inputList, btnElement);
    })
  });
};

setEventListeners(formEl);

const ValidationOn = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formEl) => {
    formEl.addEventListener('submit', function(evt) {
      evt.preventDefault();
    })
    setEventListeners(formEl);
  })
};

ValidationOn();