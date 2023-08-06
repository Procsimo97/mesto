export default class Card {
    constructor(data, selector, currentUserId, handleCardClick, popupDeleteCard, handleLikeCard, handleDislikeCard) {
      this._selector = selector;
      this._image = data.link;
      this._name = data.name;
      this._likes = data.likes; //arr of likes
      this._idCard = data._id; // card id
      this._ownerId = data.owner._id; //id card owner
      this._currentUserId = currentUserId; // my id
      //callbacks
      this._handleCardClick = handleCardClick;
      this._popupDeleteCard = popupDeleteCard;
      this._handleLikeCard = handleLikeCard;
      this._handleDislikeCard = handleDislikeCard;
    }
    
    _getElement(){
        const cardElement = document.getElementById(this._selector)
        .content
        .querySelector('.photos__box')
        .cloneNode(true);
        this._photosName = cardElement.querySelector('.photos__name');
        this._photosElement = cardElement.querySelector('.photos__element');
        this._likeBtn = cardElement.querySelector('.photos__like');
        this._likeCounter = cardElement.querySelector('.photos__like-score');
        this._deleteBtn = cardElement.querySelector('.photos__delete');
        return cardElement
    }
   
    generateCard() {
      this._element = this._getElement();
      
      this._setEventListener();
      this._photosElement.src = this._image;
      this._photosName.alt = this._name;
      this._photosName.textContent = this._name;
      this._likeCounter.textContent = this._likes.length;
      //проверка на принадлежность карточки и отображения корзины.
      if (this._ownerId === this._currentUserId) {
        this._deleteBtn.style.display = 'block';
      }
      //отрисовка проставленных лайков
      if(this._checkLike()) {
        this.likePhoto(this._likes);
      }
       return this._element;
    }

     //кнопка удаления
     cardDelete() {
      this._element.remove();
     }
    //проверка на наличие моего лайка
     _checkLike() {
      return this._likes.some(like => {
        return like._id === this._currentUserId;
      });
    }
    
    //кнопка лайка
    likePhoto(arr) {
      console.log('like');
      this._likeCounter.textContent = arr.length;
      this._likeBtn.classList.add('photos__like_active');
    //чтобы не дублировалось значение при отрисовке
      this._likes = arr;
    }

    //метод дизлайков
    dislike(arr) {
      console.log('dislike');
      this._likeBtn.classList.remove('photos__like_active');
      this._likeCounter.textContent = arr.length;
      //чтобы не дублировалось значение при отрисовке
       this._likes = arr;
    }
  
    _setEventListener() {
      this._likeBtn.addEventListener('click', () => {
        if(this._checkLike()){
          this._handleDislikeCard();
        } else {
          this._handleLikeCard();
        }
       })
      this._deleteBtn.addEventListener('click', () => {
        this._popupDeleteCard(this._element);
      });
       
      this._element.querySelector('.photos__element').addEventListener('click', () => { 
        this._handleCardClick(this._image, this._name);
      }); 
   }
}