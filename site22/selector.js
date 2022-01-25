let selected;

Array.from(document.getElementsByClassName("address-text")).forEach(
	(element) => {
		element.addEventListener("mouseover", (event) => {
			if (selected !== element) {
				if (selected) {
					selected.style = "background-color: var(--7)";
					selected.querySelectorAll("img.copy-button")[0].style =
						"display: none";
				}

				selected = element;
				element.focus();
				element.style = "background-color: var(--17)";
				element.querySelectorAll("img.copy-button")[0].style =
					"display: unset";

				document.getElementById(
					"qr-code"
				).src = `img/qr${element.id}.png`;
			}
		});
	}
);

function copytoclipboard(walletnumber) {
	let copy = document.querySelectorAll(".address-text p")[walletnumber];

	var text = copy.innerText;
	navigator.clipboard.writeText(text)
}
