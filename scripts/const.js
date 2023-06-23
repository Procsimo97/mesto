const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]
  
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-container',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input-container_invalid',
  errorClass: 'popup__span_error-message',
};

const photosContainer = document.querySelector('.photos');
/*для первого попапа*/
const content = document.querySelector('.content');
const popupEditProfile = document.querySelector('.popup_type_change');
const buttonClosePopupProfile = document.querySelector('.popup__exit_type_change');
const buttonClosePopupAdd = document.querySelector('.popup__exit_type_add');
const profile = content.querySelector('.profile');
const buttonEdit = document.querySelector('.profile__edit');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__info');
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
const image = popupImg.querySelector('.popup__image');
const caption =  popupImg.querySelector('.popup__caption');

//forms
const formAddCard = document.querySelector('.popup__form_type_add-card');
const formEditProfile = document.querySelector('.popup__form_type_profile');