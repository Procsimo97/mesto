export default class Popup {
    constructor(selector, button) {
        this._selector = document.querySelector(selector);
        this._button = document.querySelector(button);
        //связка контекста
        this.close = this.close.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    open() {
        this._selector.classList.add('popup_opened');
    }

    close() {
        this._selector.classList.remove('popup_opened');
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
        document.addEventListener('keydown',this._handleEscClose);
        this._selector.addEventListener('click', this._handleOverlayClose);
    }
    _removeEventListener() {
        document.removeEventListener('keydown', this.close);
        this._selector.removeEventListener('click', this._handleOverlayClose);
    }
}