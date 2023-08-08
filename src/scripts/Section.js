export default class Section {
    constructor({items, renderer}, selector) {
        this._items = items;
        this._renderer = renderer; 
        this._photosContainer = document.querySelector(selector);
    }
    //отрисовка эл-та
    renderer() {
        this._items.forEach(item => {
            this._renderer(item);
        });
    }
    //добавление э-та в тело
    addItem(element) {
        this._photosContainer.prepend(element);
    }
    //для отрисовки элементов массива в нужном порядке
    addArrOfItem(element) {
        this._photosContainer.append(element);
    }
}