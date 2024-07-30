document.addEventListener("DOMContentLoaded", () => {
	const menuIcon = document.getElementById("menu-icon");
	const sidebar = document.getElementById("sidebar");
	const closeIcon = document.getElementById("close-icon");

	menuIcon.addEventListener("click", () => {
        sidebar.classList.add("active");
        menuIcon.classList.remove("open");
        closeIcon.classList.add("open");
	});

	closeIcon.addEventListener("click", () => {
        sidebar.classList.remove("active");
        closeIcon.classList.remove("oepn");
        menuIcon.classList.add("open");
	});

	// Hide/show navbar on scroll
	let lastScrollTop = 0;
	window.addEventListener("scroll", () => {
		const navbar = document.querySelector(".navbar");
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		if (scrollTop > lastScrollTop) {
			navbar.style.top = "-80px"; // Adjust based on navbar height
		} else {
			navbar.style.top = "0";
		}
		lastScrollTop = scrollTop;
	});
});
