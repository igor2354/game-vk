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

		let goroupSliderVoting = document.querySelector(".content-voting__group-slider");

		if (goroupSliderVoting != null) {
			let nextBig = goroupSliderVoting.querySelector(".voting-slider__next-big");
			let prevBig = goroupSliderVoting.querySelector(".voting-slider__prev-big");

			let sliderVoting = new Swiper(".voting-slider", {
				slidesPerView: 1,
				spaceBetween: 15,
				watchOverflow: true,
				pagination: {
					el: ".voting-slider__pagination",
					clickable: true,
					renderBullet: function (index, className) {
						return '<span class="' + className + '">' + (index + 1) + "</span>";
					},
				},

				navigation: {
					nextEl: ".voting-slider__next",
					prevEl: ".voting-slider__prev",
				},

				breakpoints: {
					570: {
						slidesPerView: 2,
					},

					767: {
						slidesPerView: 3,
					},
				},

				on: {
					lock: function (swiper) {
						if (nextBig != null && prevBig != null) {
							nextBig.classList.add("swiper-button-lock");
							prevBig.classList.add("swiper-button-lock");
						}
					},

					unlock: function (swiper) {
						nextBig.classList.remove("swiper-button-lock");
						prevBig.classList.remove("swiper-button-lock");
					},
				},
			});

			if (nextBig != null && prevBig != null) {
				nextBig.addEventListener("click", function () {
					sliderVoting.slideNext(300, false);
				});
				prevBig.addEventListener("click", function () {
					sliderVoting.slidePrev(300, false);
				});
			}
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
