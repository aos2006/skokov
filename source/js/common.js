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

$(document).ready(function(){
    $(".js-slider").slick({
        autoplay: true,
        arrows: false,
        dots: true,
    })
});




