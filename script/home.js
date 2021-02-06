let darkMode = false;
let darkModeCheckbox = document.querySelector("#dark-mode-checkbox");
let logoURL = document.querySelector("#logo-url");
let copyTextInput = document.querySelector("#copy-textarea");

document.querySelector("button").addEventListener("click", (e) => {
	e.preventDefault();
	let finalCopyText = convertText(copyTextInput.value);
	validate(logoURL.value, copyTextInput.value);
	let finalURL = `https://copii.vercel.app/?ct=${finalCopyText}&tm=${
		darkModeCheckbox.checked ? "blk" : "wt"
	}`;
	alert(finalURL);
});

// !!!! VALIDATION !!!!
let validate = (url, copyText) => {
	// !!!! LOGO ORL VALIDATION !!!!
	if (url !== "" && url.toString().startsWith("http") === false) {
		alert(
			"Please enter a valid URL.\nEnsure that the entered URL starts with `http://` or `https://`"
		);
	}

	// !!!! COPY TEXT VALIDATION !!!!
	if (copyText == "") {
		alert("Please enter some text to copy");
		return;
	}
};

let convertText = (copyText) => {
	let copyTextArray = copyText.toString().split("");
	if (copyTextArray.indexOf("\n") !== -1) {
		// alert("contains new line");
		copyText = copyText.replaceAll("\n", "¬ß≈");
	}
	if (copyTextArray.indexOf("&") !== -1) {
		// alert(copyText.replaceAll("&", "¬Ω"));
		copyText = copyText.replaceAll("&", "¬Ω≈");
	}
	return copyText;
};
