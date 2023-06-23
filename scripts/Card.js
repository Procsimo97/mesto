export default class Card {
    constructor(data, selector, openImage) {
      this._selector = selector;
      this._openImage = openImage;
      this._image = data.link;
      this._name = data.name;
    }
    
    _getElement(){
        const cardElement = document.getElementById(this._selector)
        .content
        .querySelector('.photos__box')
        .cloneNode(true);
        this._photosName = cardElement.querySelector('.photos__name');
        this._photosElement = cardElement.querySelector('.photos__element');
        this._likeBtn = cardElement.querySelector('.photos__like');
        return cardElement
    }
   
    generateCard() {
      this._element = this._getElement();
    
      this._setEventListener();
      this._photosElement.src = this._image;
      this._photosName.alt = this._name;
      this._photosName.textContent = this._name;

      return this._element;
    }

    //кнопка удаления
    _cardDelete () {
      this._element.remove();
    }
    //кнопка лайка
    _likePhoto() {
      this._likeBtn.classList.toggle('photos__like_active');
    }
    _popupImgOpen() {
      this._openImage(this._image, this._name);
    }

    _setEventListener() {
      this._likeBtn.addEventListener('click', () => {
        this._likePhoto();
      });
      this._element.querySelector('.photos__delete').addEventListener('click', () => {
        this._cardDelete();
      });
      this._photosElement.addEventListener('click', () => {
        this._popupImgOpen();
      });
    }
}