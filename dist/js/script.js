document.addEventListener(
	"DOMContentLoaded",
	function () {
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
