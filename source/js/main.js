"use strict";
//hover effect for componet "team__list"
function Workers(options) {
   this._el = document.querySelectorAll(options.el);
   this._target = options.target;
   this._widthPosition = options.widthPosition;
    for (var i = 0; i < this._el.length; i++) {
        this._el[i].addEventListener("mouseover",this.show.bind(this));
        this._el[i].addEventListener("mouseout",this.hide.bind(this));
    }
}

Workers.prototype.show = function(event) {
    var item = event.currentTarget.querySelector(this._target);
    item.classList.add("show");
}
Workers.prototype.hide = function(event) {
    var item = event.currentTarget.querySelector(this._target);
    item.classList.remove("show");
}

var workers = new Workers({
    el: ".team__item",
    target: ".team__info"
});


//Slider-clients
function Slider(options) {
    this._el = document.querySelectorAll(options.el);
    this._itemMoving = document.querySelector(options.itemMoving);
    this._control = document.querySelectorAll(options.control);
    for (var i = 0; i < this._el.length; i++) {
        this._el[i].addEventListener("click",this.control.bind(this));
    }
}

Slider.prototype.control = function(event) {
 var target = event.target;
 var childrens = document.querySelectorAll(".js-slider-control");
    var controlIndex;
    if (target.hasAttribute("data-slider-control")) {
        for (var i = 0; i < childrens.length; i++) {
            childrens[i].classList.remove("clients-slider__control--active");
    }
        controlIndex = [].indexOf.call(childrens,target);
        //Вот строчка выше ,как он определяет ,что выбран точный элемент ,ведь они вроде как идентичны
        this._itemMoving.style.marginLeft = (-563  * controlIndex + "px");
        console.dir(controlIndex);
        target.classList.add("clients-slider__control--active");
    }
}

var slider = new Slider({
   el: ".js-slider",
    control: ".js-slider-control",
    itemMoving: ".clients-slider",
    widthPosition: 563

});

