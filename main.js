(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input-container",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_inactive",inputErrorClass:"popup__input-container_invalid",errorClass:"popup__span_error-message"},t=(document.querySelector(".photos"),document.querySelector(".photos__element"),document.querySelector(".content")),n=document.querySelector(".popup_type_change"),r=(document.querySelector(".popup__exit_type_change"),document.querySelector(".popup__exit_type_add"),t.querySelector(".profile")),o=document.querySelector(".profile__edit"),i=(r.querySelector(".profile__name"),r.querySelector(".profile__info"),document.querySelector(".popup__input-container_type_name")),a=document.querySelector(".popup__input-container_type_info"),u=n.querySelector(".popup__save-btn_type_change"),c=document.querySelector(".popup_type_add-cards"),l=document.querySelector(".profile__button"),s=c.querySelector(".popup__input-container_type_name-place"),f=c.querySelector(".popup__input-container_type_link"),p=c.querySelector(".popup__save-btn_type_add"),y=document.querySelector(".popup_type_image"),h=(document.querySelector(".popup__exit_type_image"),y.querySelector(".popup__image"),y.querySelector(".popup__caption"),document.querySelector(".popup_type_сonfirmation"),document.querySelector(".profile__avatar")),_=(document.querySelector(".popup_type_avatar").querySelector(".popup__input-container_type_avatar"),document.querySelector(".popup__form_type_add-card")),d=document.querySelector(".popup__form_type_profile"),v=document.querySelector(".popup__form_type_avatar");function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}var S=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=t,this._inputSelector=t.querySelector(n.inputSelector),this._submitButtonSelector=t.querySelector(n.submitButtonSelector),this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass,this._inputList=Array.from(t.querySelectorAll(n.inputSelector))}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButton()}},{key:"_showError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButton",value:function(){this._hasInvalidInput()?(this._submitButtonSelector.classList.add(this._inactiveButtonClass),this._submitButtonSelector.setAttribute("disabled",!0)):(this._submitButtonSelector.classList.remove(this._inactiveButtonClass),this._submitButtonSelector.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButton()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}var w=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selector=n,this._image=t.link,this._name=t.name,this._like=t.likes,this._idCard=t._id,this._ownerId=t.owner._id,this._currentUserId=r,this._isLiked=!1,this._handleCardClick=o,console.log(this._idCard),console.log(this._currentUserId),console.log(this._ownerId)}var t,n;return t=e,(n=[{key:"_getElement",value:function(){var e=document.getElementById(this._selector).content.querySelector(".photos__box").cloneNode(!0);return this._photosName=e.querySelector(".photos__name"),this._photosElement=e.querySelector(".photos__element"),this._likeBtn=e.querySelector(".photos__like"),this._likeCounter=e.querySelector(".photos__like-score"),this._deleteBtn=e.querySelector(".photos__delete"),e}},{key:"generateCard",value:function(){return this._element=this._getElement(),this._setEventListener(),this._photosElement.src=this._image,this._photosName.alt=this._name,this._photosName.textContent=this._name,this._likeCounter.textContent=this._like.length,this._ownerId===this._idCard&&(this._element.querySelector(".photos_delete").style.display="block"),this._element}},{key:"handleDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"cardDelete",value:function(){this._element.remove()}},{key:"handleLikeCard",value:function(){this._isLiked,this._isLiked,this._isLiked?(this._likeBtn.classList.add("photos__like_active"),this._likeCounter.textContent=this._like.length+1):(this._likeBtn.classList.remove("photos__like_active"),this._ownerId===this._currentUserId?this._likeCounter.textContent=this._like.length-1:this._likeCounter.textContent=this._like.length)}},{key:"_setEventListener",value:function(){var e=this;this._likeBtn.addEventListener("click",(function(){e.handleLikeCard()})),this._element.querySelector(".photos__delete").addEventListener("click",(function(){e.cardDelete()})),this._element.querySelector(".photos__element").addEventListener("click",(function(){e._handleCardClick(e._image,e._name)}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var j=function(){function e(t,n){var r=t.item,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._item=r,this._renderer=o,this._selector=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderer",value:function(){var e=this;this._item.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._selector.prepend(e)}},{key:"deleteItem",value:function(){this._selector.remove()}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var q=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selector=document.querySelector(t),this._button=document.querySelector(n),this.close=this.close.bind(this),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._selector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._selector.classList.remove("popup_opened"),this._removeEventListener()}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.currentTarget===e.target&&this.close()}},{key:"setEventListeners",value:function(){this._button.addEventListener("click",this.close),this._selector.addEventListener("click",this._handleOverlayClose)}},{key:"_removeEventListener",value:function(){document.removeEventListener("keydown",this._handleEscClose)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},U.apply(this,arguments)}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e,t))._popupImg=n._selector.querySelector(".popup__image"),n._caption=n._selector.querySelector(".popup__caption"),n}return t=a,(n=[{key:"open",value:function(e,t){U(T(a.prototype),"open",this).call(this),this._popupImg.src=e,this._caption.textContent=t,this._caption.alt=t}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(q);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==A(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},N.apply(this,arguments)}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e,n))._submitForm=t,r._form=r._selector.querySelector(".popup__form"),r}return t=a,(n=[{key:"getInputValue",value:function(){var e=this,t=Array.from(this._form.querySelectorAll(".popup__input-container"));return this._inputList={},t.forEach((function(t){e._inputList[t.name]=t.value})),this._inputList}},{key:"setEventListeners",value:function(){var e=this;N(V(a.prototype),"setEventListeners",this).call(this),this._button.addEventListener("click",this.close),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e.getInputValue())}))}},{key:"close",value:function(){N(V(a.prototype),"close",this).call(this),this._form.reset()}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(q);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==J(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var H,M=function(){function e(t){var n=t.name,r=t.about,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._info=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._name.textContent,userInfo:this._info.textContent}}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._info.textContent=t}},{key:"setUserAvatar",value:function(e){this._avatar.scr=e}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==z(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===z(o)?o:String(o)),r)}var o}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,n;return t=e,(n=[{key:"_validateQuerry",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._validateQuerry.bind(this)).catch((function(e){console.log("Ошибка: ".concat(e))}))}},{key:"setUserInfoApi",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._validateQuerry.bind(this)).catch((function(e){console.log("Ошибка: ".concat(e))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._validateQuerry.bind(this)).catch((function(e){console.log("Ошибка: ".concat(e))}))}},{key:"addNewCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",body:JSON.stringify({name:t,link:n}),headers:this.headers}).then(this._validateQuerry.bind(this))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._validateQuerry.bind(this)).catch((function(e){console.log("Ошибка: ".concat(e))}))}},{key:"likeCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e._id,"/likes"),{method:"PUT",headers:this.headers}).then(this._validateQuerry.bind(this))}},{key:"dislikeCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e._id,"/likes"),{method:"DELETE",headers:this.headers}).then(this._validateQuerry.bind(this))}},{key:"sendUserAvatar",value:function(e){return console.log(e.avatar),fetch("".concat(this.baseUrl,"/users/me/avatar "),{method:"PATCH",body:JSON.stringify({link:e}),headers:this.headers})}}])&&$(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-71",headers:{authorization:"7ac1f010-423e-4210-bae1-696af2e5bc34","Content-Type":"application/json"}}),W=new M({name:".profile__name",about:".profile__info",avatar:".profile__avatar"}),X=W._id;function Y(e){var t=new w(e,"photo-template",X,Z);return K.likeCard(e._id).then((function(e){return t.handleLikeCard(e)})).catch((function(e){return console.log("Ошибка при лайке ".concat(e))})),t.generateCard()}var Z=function(e,t){re.open(e,t)};Promise.all([K.getUserInfo(),K.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];console.log("Вывод полученных данных ".concat(o)),W.setUserInfo(o.name,o.about),W.setUserAvatar(o.avatar),(H=new j({item:i,renderer:function(e){var t=Y(e);H.addItem(t)}},".photos")).renderer()})).catch((function(e){console.log("Что-то не грузит, ошибка ".concat(e))}));var ee=new Q(".popup_type_change",(function(e){u.textContent="Сохранение...",W.setUserInfo(e.name,e.about),K.setUserInfoApi({name:i.value,about:a.value}).then((function(e){W.setUserInfo(e.name,e.about),ee.close()})).finally((function(){u.textContent="Сохранить"}))}),".popup__exit_type_change");ee.setEventListeners();var te=new Q(".popup_type_add-cards",(function(){p.textContent="Сохранение...",K.addNewCard({name:s.value,link:f.value}).then((function(e){H.addItem(Y(e)),te.close()})).catch((function(e){console.log("Ошибка загрузки карточки ".concat(e))})).finally((function(){p.textContent="Сохранить"}))}),".popup__exit_type_add");te.setEventListeners();var ne=new Q(".popup_type_avatar",(function(){K.sendUserAvatar(data.link).then((function(){userInfoProfile.setUserAvatar(data.link)})).catch((function(e){console.log(e)})).finally((function(){ne.close()}))}),".popup__exit_type_avatar");ne.setEventListeners();var re=new B(".popup_type_image",".popup__exit_type_image");re.setEventListeners(),new S(d,e).enableValidation();var oe=new S(_,e);oe.enableValidation(),new S(v,e).enableValidation(),o.addEventListener("click",(function(){ee.open(),function(e){i.value=e.userName,a.value=e.userInfo}(W.getUserInfo())})),l.addEventListener("click",(function(){te.open(),oe.resetValidation()})),h.addEventListener("click",(function(){ne.open()}))})();
//# sourceMappingURL=main.js.map