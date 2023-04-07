
let content = document.querySelector('.content');
let popup = document.querySelector('.popup');

let profile = content.querySelector('.profile');
/*let profileInfo = profile.querySelector('.profile__full-info');*/
let profContainer = profile.querySelector('.profile__container-name');
let buttonEdit = content.querySelector('.profile__edit');
let exitBtn = popup.querySelector('.popup__exit');
let photos = content.querySelector('.photos');
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__info');
let saveBtn = popup.querySelector('.popup__save-btn');
let nameInput = popup.querySelector('.popup__name');
let jobInput = popup.querySelector('.popup__info');

//открывает попап и вставляет значения со страницы в поля ввода
function popupOpen () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}

function popupCloset () {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupCloset ();
  }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popup.addEventListener('submit', handleFormSubmit);
buttonEdit.addEventListener('click', popupOpen);
exitBtn.addEventListener('click', popupCloset);