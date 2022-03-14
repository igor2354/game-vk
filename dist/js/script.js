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

		let sliderPopupTypeTwo = new Swiper(".popup-type-two__slider-container", {
			slidesPerView: 2,
			watchOverflow: true,
			spaceBetween: 20,
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: ".popup-type-two__slider-next",
				prevEl: ".popup-type-two__slider-prev",
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

		let tabContainers = Array.prototype.slice.call(document.querySelectorAll(".js-tab-container"));

		if (tabContainers.length > 0) {
			tabContainers.forEach((element) => {
				let tabItem = Array.prototype.slice.call(element.querySelectorAll(".js-tab-control"));
				let tabContent = Array.prototype.slice.call(element.querySelectorAll(".js-tab-content"));

				tabItem.forEach((el, index, array) => {
					el.addEventListener("click", (e) => {
						if (!el.classList.contains("active")) {
							e.preventDefault();

							let dataId = el.dataset.tabItem;

							let tabContentItem = tabContent.find((item) => {
								if (item.dataset.tabContent == dataId) {
									return item;
								} else {
									return null;
								}
							});

							if (tabContentItem != null) {
								tabItem.forEach((el) => el.classList.remove("active"));
								tabContent.forEach((el) => el.classList.remove("active"));

								el.classList.add("active");

								tabContentItem.classList.add("active");

								if (element.classList.contains("popup-diamonds")) {
									element.classList.toggle("--trigger");
								}
							}
						}
					});
				});
			});
		}

		let arrTextCurve = document.querySelectorAll(".text-curved");

		// if (arrTextCurve.length > 0) {
		// 	arrTextCurve.forEach(element => {
		// 		let stringEl = element.textContent;
		// 		element.textContent = "";
				
		// 		if (stringEl.length > 0) {
		// 			let count = 0;
		// 			for (let i = 0; i < stringEl.length; i++) {
		// 				if (i >= Math.floor(stringEl.length / 2)) {
		// 					count = (stringEl.length - i);
		// 				} else {
		// 					count =  i;
		// 				}
						
		// 				if (stringEl[i] == " ") {
		// 					element.innerHTML = element.innerHTML + `<span style="transform: translate(0, ${count}px); margin: 0 2px">${stringEl[i]}</span>`;
		// 				} else {
		// 					element.innerHTML = element.innerHTML + `<span style="transform: translate(0, ${count}px)">${stringEl[i]}</span>`
		// 				}
		// 			}

		// 			// element.innerHTML =  element.innerHTML.replace(/(.)/g, '<span>$1</span>');
		// 		}
		// 	});
		// }

		let competitionBlock = document.querySelector(".content-competition__block");
		let cardsCompetition = document.querySelectorAll(".card-competition");

		if (competitionBlock != null) {
			if (cardsCompetition.length > 0) {
				cardsCompetition.forEach(element => {
					element.addEventListener("mouseenter", function() {
						if (element.classList.contains("--right")) {
							competitionBlock.classList.add("--right");
						}

						if (element.classList.contains("--left")) {
							competitionBlock.classList.add("--left");
						}
					});

					element.addEventListener("mouseleave", function() {
						competitionBlock.classList.remove("--right");
						competitionBlock.classList.remove("--left");
					});
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
