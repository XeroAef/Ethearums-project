const book = document.getElementById("book");
const bookCover = document.getElementById("bookCover");
const bookContent = document.getElementById("bookContent");
const coverInstruction = document.getElementById("coverInstruction");
const pageContent = bookContent ? bookContent.querySelector(".page-content") : null;
const turnSheetFrontContent = document.getElementById("turnSheetFrontContent");
let isNavigating = false;

let audioContext;

const ensureAudioContext = () => {
	if (!audioContext) {
		const Context = window.AudioContext || window.webkitAudioContext;
		if (!Context) {
			return null;
		}

		audioContext = new Context();
	}

	if (audioContext.state === "suspended") {
		audioContext.resume().catch(() => {
			// Some browsers may delay resume; next click will retry.
		});
	}

	return audioContext;
};

const playPageShuffle = () => {
	const ctx = ensureAudioContext();
	if (!ctx) {
		return;
	}

	const duration = 0.34;
	const now = ctx.currentTime;
	const bufferLength = Math.floor(ctx.sampleRate * duration);
	const buffer = ctx.createBuffer(1, bufferLength, ctx.sampleRate);
	const data = buffer.getChannelData(0);

	for (let i = 0; i < bufferLength; i += 1) {
		const t = i / bufferLength;
		const envelope = Math.pow(1 - t, 1.7);
		const flutter = 0.55 + Math.sin(t * 75) * 0.45;
		data[i] = (Math.random() * 2 - 1) * envelope * flutter;
	}

	const source = ctx.createBufferSource();
	const filter = ctx.createBiquadFilter();
	const gainNode = ctx.createGain();

	source.buffer = buffer;
	filter.type = "bandpass";
	filter.frequency.setValueAtTime(1500, now);
	filter.Q.setValueAtTime(0.95, now);
	gainNode.gain.setValueAtTime(0.0001, now);
	gainNode.gain.exponentialRampToValueAtTime(0.22, now + 0.02);
	gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

	source.connect(filter);
	filter.connect(gainNode);
	gainNode.connect(ctx.destination);

	source.start(now);
	source.stop(now + duration);
};

if (book && bookCover) {
	const toggleBook = () => {
		playPageShuffle();

		const isOpen = book.classList.toggle("is-open");
		bookCover.setAttribute("aria-expanded", String(isOpen));

		if (coverInstruction) {
			coverInstruction.textContent = isOpen ? "Click to close" : "Click to open";
		}
	};

	bookCover.addEventListener("click", toggleBook);
}

if (bookContent) {
	bookContent.addEventListener("click", (event) => {
		const clickedLink = event.target.closest("a");
		if (!clickedLink) {
			return;
		}

		if (isNavigating) {
			event.preventDefault();
			return;
		}

		const shouldCloseBook = clickedLink.dataset.closeCover === "true";
		const shouldTurnPage = clickedLink.dataset.turnPage === "true";

		if (!shouldTurnPage && !shouldCloseBook) {
			playPageShuffle();
			return;
		}

		event.preventDefault();
		isNavigating = true;
		playPageShuffle();

		if (turnSheetFrontContent && pageContent && shouldTurnPage) {
			turnSheetFrontContent.innerHTML = pageContent.innerHTML;
		}

		if (book && shouldCloseBook) {
			book.classList.add("closing");
		}

		if (book && shouldTurnPage) {
			book.classList.add("turning");
		}

		const transitionDelay = shouldCloseBook ? 900 : 860;

		window.setTimeout(() => {
			window.location.href = clickedLink.href;
		}, transitionDelay);
	});
}
