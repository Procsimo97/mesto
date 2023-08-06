import './pages/index.css';

import {validationConfig, 
   nameInput, 
   buttonEdit, 
   jobInput, 
   inputAvatar, 
   buttonAddCard, 
   buttonSaveCard, 
   buttonSaveUserData, 
   placeName, 
   placeLink, 
   formAddCard, 
   formEditProfile, 
   confirmButton,
   avatarBtn, 
   saveAvatarBtn,
   formProfileAvatar} from './scripts/const.js';

import {FormValidator} from './scripts/FormValidator.js';
import Card from './scripts/Card.js';
import Section from './scripts/Section.js';

import PopupWithImg from './scripts/PopupWithImg.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';
import PopupDeleteCard from './scripts/PopupDeleteCard.js';
import Api from './scripts/Api';

let cardList;
let userId;

//подключение апи
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-72',
  headers: {
    authorization: '5c02bf70-8c9d-436e-a569-1a82b1408223',
    'Content-Type': 'application/json'
  }
}); 
//--------------------------------------------------------------------

//открывает попап и вставляет значения со страницы в поля ввода
function openPopupProfile (data) {
  nameInput.value = data.userName;
  jobInput.value = data.userInfo;
}

//Настройка данных пролфиля 
const userInfoClass = new UserInfo({
  name: '.profile__name',
  about: '.profile__info',
  avatar: '.profile__avatar'
});

const addCard = () => {
  buttonSaveCard.textContent = 'Сохранение...';
  api.addNewCard({
    name: placeName.value,
    link: placeLink.value
  })
  .then((card) => {
    cardList.addItem(createCard(card));
    popupCardToggle.close()
  })
  .catch((err) => {
    console.log(`Ошибка загрузки карточки ${err}`);
  })
  .finally(() => {
    buttonSaveCard.textContent = 'Сохранить';
  })
}

//создание карточки
function createCard(data) {
  const cardContent = new Card(data,'photo-template', userId, openImg, ()=> {
    popupWithDelete.open(cardContent);
  }, () => {
      api.likeCard(data)
      .then((data) => cardContent.likePhoto(data.likes))
      .catch((err) => console.log(`Ошибка при лайке ${err}`));
    }, () => { 
      api.dislikeCard(data)
      .then((data) => cardContent.dislike(data.likes))
      .catch((err) => console.log(`Ошибка при дизлайке ${err}`));
    })
  const cardElement = cardContent.generateCard();
  return cardElement;
}

//функция открытия картинки
const openImg = (link, name) => {
  popupImgToggle.open(link, name);
}

//функция загрузки данных из введенных параметров 
const loadingUserData = (data) => {
  buttonSaveUserData.textContent = 'Сохранение...'
  userInfoClass.setUserInfo(data.name, data.about);//вставляет данные с инпутов в разметку
  api.setUserInfoApi({
    name: nameInput.value,
    about: jobInput.value
  })
  .then((data) => {
    userInfoClass.setUserInfo(data.name, data.about);
    popupProfileToggle.close();
  })
  .finally(() => {
    buttonSaveUserData.textContent = 'Сохранить'
  })
}

//инициализация форм с попапом
const popupProfileToggle = new PopupWithForm('.popup_type_change', loadingUserData, '.popup__exit_type_change');
popupProfileToggle.setEventListeners();

const popupCardToggle = new PopupWithForm('.popup_type_add-cards', addCard, '.popup__exit_type_add');
popupCardToggle.setEventListeners();

const popupWithDelete = new PopupDeleteCard('.popup_type_delete-card', 
'.popup__exit_type_delete-card', 
confirmButton, (card) => {
  confirmButton.textContent = 'Удаление...';
  api.deleteCard(card._idCard)
  .then(() => {
    card.cardDelete();
  })
  .catch((err) => console.log(`Ошибка при удалении карточки ${err}`))
  .finally(() => {
    confirmButton.textContent = 'Да'
  })
})
popupWithDelete.setEventListeners();

//отправка нового аватара на сервер
const popupEditAvatar = new PopupWithForm('.popup_type_avatar', () => {
  const link = inputAvatar.value;
  saveAvatarBtn.textContent = 'Сохранение...'
    api.sendUserAvatar(link)
      .then(() => {
        userInfoClass.setUserAvatar(link);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        saveAvatarBtn.textContent = 'Сохранить';
        popupEditAvatar.close();
      })
  
}, '.popup__exit_type_avatar')
popupEditAvatar.setEventListeners();

//форма с картинкой
const popupImgToggle = new PopupWithImg('.popup_type_image', '.popup__exit_type_image');
popupImgToggle.setEventListeners();

//запуск валидации на формах------------------------------------------------------------
const formEditValidator = new FormValidator(formEditProfile, validationConfig);
formEditValidator.enableValidation();

const formAdd = new FormValidator(formAddCard, validationConfig);
formAdd.enableValidation();

const formAvatar = new FormValidator(formProfileAvatar, validationConfig);
formAvatar.enableValidation();

//слушатели кнопок открытия попапов
buttonEdit.addEventListener('click', () => {
  popupProfileToggle.open();
  openPopupProfile(userInfoClass.getUserInfo());
  }
);

buttonAddCard.addEventListener('click', function () { 
  popupCardToggle.open();
  formAdd.resetValidation();
});

avatarBtn.addEventListener('click', function () {
  popupEditAvatar.open();
  formAvatar.resetValidation();
})

//выгрузка данных с сервера
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
  //мой ID
    userId = userData._id;
  //добавление информации профиля  
    userInfoClass.setUserInfo(userData.name, userData.about);
  //загрузка нового аватара
    userInfoClass.setUserAvatar(userData.avatar);
  //отрисовка карточек
    cardList = new Section({
      item: cardData,
      renderer: (card) => {
        const cardElement = createCard(card);
        cardList.addItem(cardElement);
      return cardElement;
      }
 
    }, '.photos')
   cardList.renderer();
  })
  .catch((err) => {
    console.log(`Что-то не грузит, ошибка ${err}`);
  });