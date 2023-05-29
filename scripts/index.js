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

const photoTemplate = document.getElementById('photo-template');
const photosContainer = document.querySelector('.photos');

/*для первого попапа*/
const content = document.querySelector('.content');
const popup = document.querySelector('.popup');
const popupForm = popup.querySelector('.popup__container');
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
const buttonAdd = popupAdd.querySelector('.popup__save-btn_type_add');
/*popup с картинкой*/
const popupImg = document.querySelector('.popup_type_image');
const buttonClosePopupImg = document.querySelector('.popup__exit_type_image');
const image = popupImg.querySelector('.popup__image');
const caption =  popupImg.querySelector('.popup__caption');

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
//----------------------------------------------------------------------------

//функция создания карточки из заданного массива
const createCard = (photoData) => {
  const photoElement = photoTemplate.content.querySelector('.photos__box').cloneNode(true);

  const photoImage = photoElement.querySelector('.photos__element');
  const photoTitle = photoElement.querySelector('.photos__name');
  const likeBtn = photoElement.querySelector('.photos__like');
  const deleteBtn = photoElement.querySelector('.photos__delete');

  photoImage.src = photoData.link;
  photoImage.alt = photoData.name;
  photoTitle.textContent = photoData.name;

//кнопка удаления
  const cardDelete = () => {
    photoElement.remove();
  }
//кнопка лайка
  const likePhoto = (evt) => {
    evt.target.classList.toggle('photos__like_active');
  }

  likeBtn.addEventListener('click', likePhoto);
  deleteBtn.addEventListener('click', cardDelete);

//открыть изображение
  photoImage.addEventListener('click', function openImg () {
    image.src = photoData.link;
    image.alt = photoData.name;
    caption.textContent = photoData.name;
    openPopup (popupImg);
  });

  return photoElement;
};

//для перебора всех карточек в массиве
initialCards.forEach((photo) => {
  const element = createCard(photo);
  photosContainer.prepend(element);
});

//создание карточки из введенных данных
buttonAdd.addEventListener('click', addCard = (evt) => {
    evt.preventDefault();
    const newCard = {};
    newCard.link = placeLink.value ;
    newCard.name = placeName.value ;
    const element = createCard(newCard);
    photosContainer.prepend(element);
    closePopup (popupAdd);
    placeLink.value = '';
    placeName.value = '';
});
//------------------------------------------------------------------------

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
  openPopup (popupAdd)});