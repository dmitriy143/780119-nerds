var link = document.querySelector(".button-footer");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=text]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

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
	slider3.classList.add("feature-item-show");
  slider1.classList.add("feature-item-none");
  slider1.classList.remove("feature-item-show");
  slider2.classList.remove("feature-item-show");
});
controls2.addEventListener("click", function (evt) {
	evt.preventDefault();
	controls2.classList.add("active");
	controls1.classList.remove("active");
	controls3.classList.remove("active");
	slider2.classList.add("feature-item-show");
  slider1.classList.add("feature-item-none");
  slider1.classList.remove("feature-item-show");
  slider3.classList.remove("feature-item-show");
});
controls1.addEventListener("click", function (evt) {
	evt.preventDefault();
	controls1.classList.add("active");
	controls2.classList.remove("active");
	controls3.classList.remove("active");
	slider1.classList.add("feature-item-show");
  slider2.classList.remove("feature-item-show");
  slider3.classList.remove("feature-item-show");
});


link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
});
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
	popup.classList.remove("modal-error-toggle");
});


form.addEventListener("submit", function (evt) {
   if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    popup.classList.toggle("modal-error-toggle");
  } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
  }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });

controls2.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 32 || evt.keyCode === 13) {
      evt.preventDefault();
	controls2.classList.add("active");
	controls1.classList.remove("active");
	controls3.classList.remove("active");
	slider2.classList.add("feature-item-show");
  slider1.classList.add("feature-item-none");
  slider1.classList.remove("feature-item-show");
  slider3.classList.remove("feature-item-show");
}
});
controls1.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 32 || evt.keyCode === 13) {
      evt.preventDefault();
	controls1.classList.add("active");
	controls2.classList.remove("active");
	controls3.classList.remove("active");
	slider1.classList.add("feature-item-show");
  slider2.classList.remove("feature-item-show");
  slider3.classList.remove("feature-item-show");
}
});
controls3.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 32 || evt.keyCode === 13) {
      evt.preventDefault();
	controls3.classList.add("active");
	controls1.classList.remove("active");
	controls2.classList.remove("active");
	slider3.classList.add("feature-item-show");
  slider1.classList.add("feature-item-none");
  slider1.classList.remove("feature-item-show");
  slider2.classList.remove("feature-item-show");
}
});