"use strict";function Workers(t){this._el=document.querySelectorAll(t.el),this._target=t.target,this._widthPosition=t.widthPosition;for(var e=0;e<this._el.length;e++)this._el[e].addEventListener("mouseover",this.show.bind(this)),this._el[e].addEventListener("mouseout",this.hide.bind(this))}function Slider(t){this._el=document.querySelectorAll(t.el),this._itemMoving=document.querySelector(t.itemMoving),this._control=document.querySelectorAll(t.control);for(var e=0;e<this._el.length;e++)this._el[e].addEventListener("click",this.control.bind(this))}Workers.prototype.show=function(t){var e=t.currentTarget.querySelector(this._target);e.classList.add("show")},Workers.prototype.hide=function(t){var e=t.currentTarget.querySelector(this._target);e.classList.remove("show")};var workers=new Workers({el:".team__item",target:".team__info"});Slider.prototype.control=function(t){var e=t.target,r=document.querySelectorAll(".js-slider-control"),i;if(e.hasAttribute("data-slider-control")){for(var o=0;o<r.length;o++)r[o].classList.remove("clients-slider__control--active");i=[].indexOf.call(r,e),this._itemMoving.style.marginLeft=-563*i+"px",e.classList.add("clients-slider__control--active")}};var slider=new Slider({el:".js-slider",control:".js-slider-control",itemMoving:".clients-slider__inner-wrapper",widthPosition:563});