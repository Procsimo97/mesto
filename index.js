
let content = document.querySelector('.content');
let popup = content.querySelector('.popup');
let profile = content.querySelector('.profile');
let profileInfo = profile.querySelector('.profile__full-info');
let profContainer = profileInfo.querySelector('.profile__container-name');
let buttonEdit = content.querySelector('.profile__edit');
let exitBtn = popup.querySelector('.exit');
let photos = content.querySelector('.photos');
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__info');
let saveBtn = popup.querySelector('.popup__save-btn');

function popupOpen () {
  popup.classList.add('popup_opened');
}

function popupCloset () {
  popup.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', popupOpen);
exitBtn.addEventListener('click', popupCloset);


let formElement = popup;
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__info');

console.log(nameInput.value);

nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

function handleFormSubmit (evt) {
    evt.preventDefault();
    
    // Получите значение полей jobInput и nameInput из свойства value
    x = nameInput.value;
    y = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
  
    // Вставьте новые значения с помощью textContent
    
    profileName.textContent = x;
    profileJob.textContent = y;
  }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
saveBtn.addEventListener('click', popupCloset);
