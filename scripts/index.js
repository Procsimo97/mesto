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
let content = document.querySelector('.content');
let popup = document.querySelector('.popup');
let popupChanges = document.querySelector('.popup_type_change');
const exitBtnChange = document.querySelector('.popup__exit_type_change');
const exitBtnAdd = document.querySelector('.popup__exit_type_add');
let profile = content.querySelector('.profile');
let buttonEdit = content.querySelector('.profile__edit');
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__info');
let saveBtn = document.querySelector('.popup__save-btn');
let nameInput = document.querySelector('.popup__input-container_type_name');
let jobInput = document.querySelector('.popup__input-container_type_info');
/*для добавления карточки*/
let popupAdd = document.querySelector('.popup_type_add-cards');
let placeInput = document.querySelector('.popup__input-container_type_name-place');
let linkInput = document.querySelector('.popup__input-container_type_link');
let addCardBtn = content.querySelector('.profile__button');
let placeName = document.querySelector('.popup__input-container_type_name-place');
let placeLink = popup.querySelector('.popup__input-container_type_link');
const addBtn = document.querySelector('.popup__save-btn_type_add');



//открывает попап и вставляет значения со страницы в поля ввода
function popupOpenEdit () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupChanges.classList.add('popup_opened');
}

function popupOpenAdd () {
  popupAdd.classList.add('popup_opened');
}


function popupClose (popup) {
    popup.classList.remove('popup_opened');
};







function handleFormSubmit (evt) {
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupClose (popup);
}




//функция создания карточки из заданного массива
const createCard = (photoData) => {
  const photoElement = photoTemplate.content.querySelector('.photos__box').cloneNode(true);

  const photoImage = photoElement.querySelector('.photos__element');
  const photoTitle = photoElement.querySelector('.photos__name');
  const likeBtn = photoElement.querySelector('.photos__like');
  const DeleteBtn = photoElement.querySelector('.photos__delete');

  photoImage.src = photoData.link;
  photoImage.alt = photoData.name;
  photoTitle.textContent = photoData.name;

//кнопка удаления
  const cardDelete = () => {
    photoElement.remove();
  }
//кнопка лайка
  const photoLike = (evt) => {
    evt.target.classList.toggle('photos__like_active');
  }

  likeBtn.addEventListener('click', photoLike);
  DeleteBtn.addEventListener('click', cardDelete);

  return photoElement;
};


//для перебора всех карточек в массиве
initialCards.forEach((photo) => {
  const element = createCard(photo);

  photosContainer.prepend(element);
});




//создание карточки из введенных данных
function CreateCard () { 
   
    placeName.value =  card.name,
    placeLink.value =  card.link,
    console.log(card);
};



function addCard (evt) {
  evt.preventDefault();

  initialCards.push(CreateCard);
  
}

 
addBtn.addEventListener('click', addCard);


exitBtnChange.addEventListener('click', popupClose);
exitBtnAdd.addEventListener('click', popupClose);

popup.addEventListener('submit', handleFormSubmit);
buttonEdit.addEventListener('click', popupOpenEdit);
addCardBtn.addEventListener('click', popupOpenAdd);
saveBtn.addEventListener('submit', addCard);
