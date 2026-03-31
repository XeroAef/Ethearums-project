(() => {
	const bgMusic = document.getElementById("bgMusic");
	if (!bgMusic) {
		return;
	}

	bgMusic.volume = 0.3;

	const tryPlayMusic = () => {
		bgMusic.play().catch(() => {
		});
	};

	tryPlayMusic();
	document.addEventListener("click", tryPlayMusic, { once: true });
	document.addEventListener("keydown", tryPlayMusic, { once: true });
})();