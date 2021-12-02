document.addEventListener(
	"DOMContentLoaded",
	function () {
		let sliderWelcome = new Swiper(".slider-welcome", {
			slidesPerView: 1,
			watchOverflow: true,
			spaceBetween: 20,
			navigation: {
				nextEl: ".slider-welcome__next",
				prevEl: ".slider-welcome__prev",
			},
		});

		let wrapCenterBg = document.querySelector(".page-load__group");

		if (wrapCenterBg != null) {
			wrapCenterBg.style.height = wrapCenterBg.clientWidth + 40 + "px";
			window.addEventListener("resize", function () {
				wrapCenterBg.style.height = wrapCenterBg.clientWidth + 40 + "px";
			});

			window.addEventListener(
				"orientationchange",
				function () {
					wrapCenterBg.style.height = wrapCenterBg.clientWidth + 40 + "px";
				},
				false
			);
		}
	},
	false
);

$(document).ready(function () {
	$("select").niceSelect();

	$(".js-scroll").mCustomScrollbar({
		theme: "my-theme",
	});
});
