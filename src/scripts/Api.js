export default class Api {
    constructor(options) {
      this.baseUrl = options.baseUrl;
      this.headers = options.headers;
    }
    //метод вывода запроса
    _validateQuerry(res) {
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    }
    //получение инфы о пользователе с сервера
    getUserInfo() {
      return fetch(`${this.baseUrl}/users/me`, {
        headers: this.headers,
      })
      .then(this._validateQuerry.bind(this))
            
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
    }
    //изменение информации пользователя
    setUserInfoApi(data) {
      return fetch(`${this.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about
      })
    
    })
      .then(this._validateQuerry.bind(this))
            
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
    }
    //получение карточек с сервера
    getInitialCards() {
      return fetch(`${this.baseUrl}/cards`, {
        headers: this.headers
      })
      .then(this._validateQuerry.bind(this))

      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
    }
    
    //добавление новой карточки
    addNewCard({name, link}) {
      return fetch(`${this.baseUrl}/cards`, {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          link: link
        }),
        headers: this.headers
      })
      .then(this._validateQuerry.bind(this));
    }

    //удаление карточки
    deleteCard(cardId) {
      return fetch(`${this.baseUrl}/cards/${cardId}`, {
        method: 'DELETE', 
        headers: this.headers,
      })
      .then(this._validateQuerry.bind(this))
            
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
    }

    likeCard(card) {
      return fetch(`${this.baseUrl}/cards/${card._id}/likes`, {
        method: 'PUT',
        headers: this.headers
      })
      .then(this._validateQuerry.bind(this));
    }

    dislikeCard(card) {
      return fetch(`${this.baseUrl}/cards/${card._id}/likes`, {
        method: 'DELETE',
        headers: this.headers
      })
      .then(this._validateQuerry.bind(this));
    }

    //смена аватара
    sendUserAvatar(link) {
      return fetch(`${this.baseUrl}/users/me/avatar `, {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: link
      }),
        
      headers: this.headers
    })
    .then(this._validateQuerry.bind(this));
  }
}