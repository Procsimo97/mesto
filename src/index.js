import './pages/index.css';

import {initialCards, validationConfig, photosContainer, nameInput, 
 buttonEdit, jobInput, buttonAddCard, placeName, placeLink, formAddCard, formEditProfile} from './scripts/const.js';

import {FormValidator} from './scripts/FormValidator.js';
import Card from './scripts/Card.js';
import Section from './scripts/Section.js';

import PopupWithImg from './scripts/PopupWithImg.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';

//открывает попап и вставляет значения со страницы в поля ввода
function openPopupProfile (data) {
  nameInput.value = data.userName;
  jobInput.value = data.userInfo;
}
//--------------------------------------------------------------------
const addCard = () => {
  const newCard = {};
  newCard.link = placeLink.value ;
  newCard.name = placeName.value ;
  const element = createCard(newCard);
  cardList.addItem(element);
  popupCardToggle.close();
}

//для перебора всех карточек в массиве
function createCard(data) {
  const cardContent = new Card(data,'photo-template', openImg);
  const cardElement = cardContent.generateCard();
  return cardElement;
}
//функция открытия картинки
const openImg = (link, name) => {
  popupImgToggle.open(link, name);
}

//класс отрисовки элементов
const cardList = new Section({
  item: initialCards,
  renderer: (photo) => {
    const card = new Card (photo, 'photo-template', openImg);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, '.photos')
cardList.renderer();

const userInfoClass = new UserInfo({
  selectorName: '.profile__name',
  selectorInfo: '.profile__info',
});

//инициализация форм с попапом
const popupProfileToggle = new PopupWithForm('.popup_type_change', (data) => {
  userInfoClass.setUserInfo(data);
  popupProfileToggle.close();
}, '.popup__exit_type_change');
popupProfileToggle.setEventListeners();

const popupCardToggle = new PopupWithForm('.popup_type_add-cards', addCard, '.popup__exit_type_add');
popupCardToggle.setEventListeners();

//форма с картикной
const popupImgToggle = new PopupWithImg('.popup_type_image', '.popup__exit_type_image');
popupImgToggle.setEventListeners();

//запуск валидации на формах
const formEditValidator = new FormValidator(formEditProfile, validationConfig);
formEditValidator.enableValidation();

const formAdd = new FormValidator(formAddCard, validationConfig);
formAdd.enableValidation();


buttonEdit.addEventListener('click', () => {
  popupProfileToggle.open();
  openPopupProfile(userInfoClass.getUserInfo());
  }
);

buttonAddCard.addEventListener('click', function () { 
  popupCardToggle.open();
  formAdd.resetValidation();
});