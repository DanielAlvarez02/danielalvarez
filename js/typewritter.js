var speed = 80;
function typeWriter(element, splitText = [], speed, i) {
	if (i <= splitText.length) {
		var subArray = splitText.slice(0, i);
		element.innerHTML = subArray.join(" ");
		i++;
		setTimeout(typeWriter, speed, element, splitText, speed, i);
	}
}

function startTypeWritter() {
	twElements = document.getElementsByClassName("animation-typewritter");
	for (var j = 0; j < twElements.length; j++) {
		typeWriter(twElements[j], twElements[j].innerHTML.split(" "), 120, 0);
	}
}

document.addEventListener("DOMContentLoaded", function () {
	setTimeout(startTypeWritter, 0);
});
