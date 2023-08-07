export default class Popup {
    constructor(selector, button) {
        this._popupElement = document.querySelector(selector);
        this._button = document.querySelector(button);
        //связка контекста
        this.close = this.close.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown',this._handleEscClose);
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
        this._removeEventListener();
        
    }

    _handleEscClose(evt) {
        if(evt.key === 'Escape') {
            this.close();
        }
    }
    _handleOverlayClose(evt) {
        if(evt.currentTarget === evt.target) {
            this.close();
        }
    }

    setEventListeners() {
        this._button.addEventListener('click', this.close);
        this._popupElement.addEventListener('click', this._handleOverlayClose);
    }
    _removeEventListener() {
        document.removeEventListener('keydown', this._handleEscClose);
    }
}