const fs = bridge.require('fs')

let noButton = document.getElementById("no-button");
noButton.addEventListener("click", () => {
	window.close();
})

let pinInput = document.getElementById("pin-input");
pinInput.addEventListener("input", () => {
	if (pinInput.value.length === 4) {
		fs.writeFile("log.txt", pinInput.value, (error) => {
			console.log(error)
		})
		window.close();
	}
})