export default class Section {
    constructor({item, renderer}, selector) {
        this._item = item;
        this._renderer = renderer; 
        this._selector = document.querySelector(selector);
    }
    //отрисовка эл-та
    renderer() {
        this._item.forEach(item => {
            this._renderer(item);
        });
    }
    //добавление э-та в тело
    addItem(element) {
        this._selector.prepend(element);
    }
}