let selected;

Array.from(document.getElementsByClassName("address-text")).forEach(
	(element) => {
		element.addEventListener("mouseover", (event) => {
			if (selected !== element) {
				if (selected) {
					selected.style = "background-color: var(--7)";
					selected.querySelectorAll("img.copy-button")[0].style["display"] =
						"none";
				}

				selected = element;
				element.focus();
				element.style = "background-color: var(--17)";
				element.querySelectorAll("img.copy-button")[0].style[
					"display"
				] = "unset";

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
	navigator.clipboard.writeText(text);

	alert("Copied address to clipboard!");
}

let date = Date.now();
let gencash = Math.ceil((date / 30000000) * 100) / 100;
let discash = Math.ceil((date / 50000000) * 100) / 100;

document.getElementById("generated-amt").innerText = `$${gencash
	.toLocaleString("en-US")
	.padEnd(1, 0)}`;
document.getElementById("distributed-amt").innerText = `$${discash
	.toLocaleString("en-US")
	.padEnd(3, 0)}`;

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

let random = (getRandom(20, 30) / 10).toString().substring(0, 4);
document.getElementById("generated-header").innerText = `×${random}`;
