import {FormValidator} from './FormValidator.js';
import Card from './Card.js';

function openPopup (popup) {
  popup.classList.add('popup_opened');

  //закрытие на esc и оверлей
  document.addEventListener('keydown', closeEscPopup);
  popup.addEventListener('click', closeOverlayPopup);
}

/*общая кнопка закрытия*/
function closePopup (popup) {
  popup.classList.remove('popup_opened');
  //снятие слушателя, если попап закрыт
  document.removeEventListener('keydown', closeEscPopup);
  popup.removeEventListener('click', closeOverlayPopup);
};

//Закрытие на esc
const closeEscPopup = (evt) => {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

//Закрытие на оверлей
const closeOverlayPopup =  (evt) => {
if(evt.currentTarget === evt.target){
  const popupOpened = document.querySelector('.popup_opened');
   closePopup(popupOpened);
}
};

//открывает попап и вставляет значения со страницы в поля ввода
function openPopupProfile () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup (popupEditProfile);
}

function submitEditProfileForm (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup (popupEditProfile);
}

const openImg = (link, name) => {
  image.src = link;
  image.alt = name;
  caption.textContent = name;
  openPopup (popupImg);
}

//для перебора всех карточек в массиве
function createCard(data) {
  const cardContent = new Card(data,'photo-template', openImg);
  const cardElement = cardContent.generateCard();
  return cardElement;
}

initialCards.forEach((photo) => {
  const card = new Card (photo, 'photo-template', openImg);
  const cardElement = card.generateCard();
  photosContainer.prepend(cardElement);
});

//запуск валидации на формах
const formEditValidator = new FormValidator(formEditProfile, validationConfig);
formEditValidator.enableValidation();

const formAdd = new FormValidator(formAddCard, validationConfig);
formAdd.enableValidation();

const addCard = (evt) => {
  evt.preventDefault();
  const newCard = {};
  newCard.link = placeLink.value ;
  newCard.name = placeName.value ;
  const element = createCard(newCard);
  photosContainer.prepend(element);
  closePopup (popupAdd);
  formAddCard.reset();
}

//создание карточки из введенных данных
formAddCard.addEventListener('submit', addCard);
/*exit*/
buttonClosePopupProfile.addEventListener('click', function () {
  closePopup (popupEditProfile)});
buttonClosePopupAdd.addEventListener('click', function () { 
  closePopup (popupAdd)});
buttonClosePopupImg.addEventListener('click', function () { 
  closePopup (popupImg)});

popupEditProfile.addEventListener('submit', submitEditProfileForm);
buttonEdit.addEventListener('click', openPopupProfile);
buttonAddCard.addEventListener('click', function () { 
  openPopup (popupAdd);
  formAdd.disableSubmitButton();
});