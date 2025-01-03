function setup() {
	// Setup scroll progress bar
	window.addEventListener("scroll", () => {
		const windowScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scrolled = (windowScroll / height) * 100;

		const progressBar = document.querySelector(
			"[data-top-progress-bar]",
		) as HTMLElement;

		if (progressBar) {
			progressBar.style.width = `${scrolled}%`;
		}
	});

	// Setup Web Share API
	const shareButton = document.querySelector("[data-web-share]") as HTMLElement;
	if (shareButton) {
		if (navigator.share) {
			shareButton?.addEventListener("click", async () => {
				try {
					const shareData = shareButton.dataset.share;
					if (shareData) {
						await navigator.share(JSON.parse(shareData));
					}
				} catch (err) {
					console.error("Error sharing:", err);
				}
			});
		} else {
			shareButton.style.display = "none";
		}
	}

	// Scroll to top button
	const toTopButton = document.querySelector("[data-to-top]") as HTMLElement;
	if (toTopButton) {
		toTopButton.addEventListener("click", () => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		});
	}

	// TOC Intersection Observer
	const visibleSections = new Set();
	const options = {
		// root: document.querySelector("main"),
		rootMargin: "0px",
		threshold: 0.5,
	};
	const callback = (entries: IntersectionObserverEntry[]) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				visibleSections.add(entry.target);
			} else {
				visibleSections.delete(entry.target);
			}
		}

		const topSection = Array.from(visibleSections).sort(
			(a, b) =>
				(a as HTMLElement).getBoundingClientRect().top -
				(b as HTMLElement).getBoundingClientRect().top,
		)[0];

		const topSectionId = (topSection as HTMLElement)?.getAttribute(
			"aria-labelledby",
		);

		for (const link of document.querySelectorAll("[data-toc] a")) {
			link.classList.toggle(
				"font-bold",
				link.getAttribute("href") === `#${topSectionId}`,
			);
		}
	};

	const observer = new IntersectionObserver(callback, options);
	const sections = Array.from(
		document.querySelector("[data-content]")?.children || [],
	);
	for (const section of sections) {
		observer.observe(section);
	}
}

export { setup };
