const popupImg = document.querySelector('.popup_type_image');
const image = popupImg.querySelector('.popup__image');
const caption =  popupImg.querySelector('.popup__caption');

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

        return cardElement
    }
   
    generateCard() {
      this._element = this._getElement();
      this._setEventListener();
      this._element.querySelector('.photos__element').src = this._image;
      this._element.querySelector('.photos__name').alt = this._name;
      this._element.querySelector('.photos__name').textContent = this._name;

      return this._element;
    }
    //кнопка удаления
    _cardDelete () {
      this._element.remove();
    }
    //кнопка лайка
    _likePhoto() {
      this._element.querySelector('.photos__like').classList.toggle('photos__like_active');
    }
    _popupImgOpen() {
      this._openImage(this._image, this._name);
      image.src = this._image;
      image.alt = this._name;
      caption.textContent = this._name;
    }

    _setEventListener() {
      this._element.querySelector('.photos__like').addEventListener('click', () => {
        this._likePhoto();
      });
      this._element.querySelector('.photos__delete').addEventListener('click', () => {
        this._cardDelete();
      });
      this._element.querySelector('.photos__element').addEventListener('click', () => {
        this._popupImgOpen();
      });
    }
}