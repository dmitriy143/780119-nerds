var link = document.querySelector(".button-footer");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=text]");

var controls1 = document.querySelector("i:nth-child(1)");
var controls2 = document.querySelector("i:nth-child(2)");
var controls3 = document.querySelector("i:nth-child(3)");
var slider1 = document.querySelector(".feature-item:nth-child(1)");
var slider2 = document.querySelector(".feature-item:nth-child(2)"); 
var slider3 = document.querySelector(".feature-item:nth-child(3)");

controls3.addEventListener("click", function (evt) {
	evt.preventDefault();
	controls3.classList.add("active");
	controls1.classList.remove("active");
	controls2.classList.remove("active");
	slider3.classList.add("modal-show");
  slider1.classList.add("feature-item-none");
  slider1.classList.remove("modal-show");
  slider2.classList.remove("modal-show");
});
controls2.addEventListener("click", function (evt) {
	evt.preventDefault();
	controls2.classList.add("active");
	controls1.classList.remove("active");
	controls3.classList.remove("active");
	slider2.classList.add("modal-show");
  slider1.classList.add("feature-item-none");
  slider1.classList.remove("modal-show");
  slider3.classList.remove("modal-show");
});
controls1.addEventListener("click", function (evt) {
	evt.preventDefault();
	controls1.classList.add("active");
	controls2.classList.remove("active");
	slider1.classList.add("modal-show");
  slider2.classList.remove("modal-show");
  slider3.classList.remove("modal-show");
});


link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	login.focus();
});
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});
