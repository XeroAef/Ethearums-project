const book = document.getElementById("book");
const bookCover = document.getElementById("bookCover");
const coverInstruction = document.getElementById("coverInstruction");

if (book && bookCover) {
	const toggleBook = () => {
		const isOpen = book.classList.toggle("is-open");
		bookCover.setAttribute("aria-expanded", String(isOpen));

		if (coverInstruction) {
			coverInstruction.textContent = isOpen ? "Click to close" : "Click to open";
		}
	};

	bookCover.addEventListener("click", toggleBook);
}
