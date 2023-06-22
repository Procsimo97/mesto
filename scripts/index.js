import {FormValidator} from './FormValidator.js';
import Card from './Card.js';

const photosContainer = document.querySelector('.photos');

/*для первого попапа*/
const content = document.querySelector('.content');
const popup = document.querySelector('.popup');
const popupChanges = document.querySelector('.popup_type_change');
const buttonClosePopupProfile = document.querySelector('.popup__exit_type_change');
const buttonClosePopupAdd = document.querySelector('.popup__exit_type_add');
const profile = content.querySelector('.profile');
const buttonEdit = document.querySelector('.profile__edit');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__info');
const buttonSave = document.querySelector('.popup__save-btn');
const nameInput = document.querySelector('.popup__input-container_type_name');
const jobInput = document.querySelector('.popup__input-container_type_info');
/*для добавления карточки*/
const popupAdd = document.querySelector('.popup_type_add-cards');
const buttonAddCard = document.querySelector('.profile__button');
const placeName = popupAdd.querySelector('.popup__input-container_type_name-place');
const placeLink = popupAdd.querySelector('.popup__input-container_type_link');
const buttonSaveCard = popupAdd.querySelector('.popup__save-btn_type_add');
/*popup с картинкой*/
const popupImg = document.querySelector('.popup_type_image');
const buttonClosePopupImg = document.querySelector('.popup__exit_type_image');
//forms
const formAddCard = document.querySelector('.popup__form_type_add-card');
const formEditProfile = document.querySelector('.popup__form_type_profile');

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
  openPopup (popupChanges);
}

function submitEditProfileForm (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup (popupChanges);
}

const openImg = () => {
  openPopup (popupImg);
}
//----------------------------------------------------------------------------
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
  placeLink.value = '';
  placeName.value = '';
}

//создание карточки из введенных данных
  buttonSaveCard.addEventListener('click', addCard);

/*exit*/
buttonClosePopupProfile.addEventListener('click', function () {
  closePopup (popupChanges)});
buttonClosePopupAdd.addEventListener('click', function () { 
  closePopup (popupAdd)});
buttonClosePopupImg.addEventListener('click', function () { 
  closePopup (popupImg)});

popup.addEventListener('submit', submitEditProfileForm);
buttonEdit.addEventListener('click', openPopupProfile);
buttonAddCard.addEventListener('click', function () { 
  openPopup (popupAdd);
  formAdd.disableSubmitButton();
});