var btnFeedback = document.querySelector(".button-feedback");
var popup = document.querySelector(".modal-feedback");
var btnClose = document.querySelector(".modal-close");
var radioButton = document.querySelectorAll(".radio-button");
var modalOverlay = document.querySelector(".modal-overlay");
var sliderItems = document.querySelectorAll(".slider-item");
var body = document.querySelector("body");

btnFeedback.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	modalOverlay.classList.add("modal-show");
}); 

btnClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	modalOverlay.classList.remove("modal-show");
});

for (var i = 0; i < radioButton.length; i++) {
	radioButton[i].addEventListener("click", function (evt) {
		radioButton.forEach(function(item) {
			item.classList.remove("active");
		});
		sliderItems.forEach(function(item) {
			item.classList.remove("active");
		});
		body.classList.remove("switch2");
		body.classList.remove("switch3");
		this.classList.add("active");
		if(this.classList.contains("one")) {
			document.querySelector(".slider-item.one").classList.add("active");
		} else if(this.classList.contains("two")) {
			document.querySelector(".slider-item.two").classList.add("active");
			body.classList.add("switch2");
		} else if(this.classList.contains("three")) {
			document.querySelector(".slider-item.three").classList.add("active");
			body.classList.add("switch3");
		}
	})
}
