let darkMode = false;
let finalURL = "";
let darkModeCheckbox = document.querySelector("#dark-mode-checkbox");
let logoURL = document.querySelector("#logo-url");
let copyTextInput = document.querySelector("#copy-textarea");
let generated = document.querySelector(".generated");

document.querySelector("button").addEventListener("click", (e) => {
	e.preventDefault();
	generated.style.display = "block";
	let finalCopyText = convertText(copyTextInput.value);
	validate(logoURL.value, copyTextInput.value);
	finalURL = `https://copii.vercel.app/?ct=${finalCopyText}&tm=${
		darkModeCheckbox.checked ? "blk" : "wt"
	}&lg=${logoURL.value}`;
});

// !!!! VALIDATION !!!!
let validate = (url, copyText) => {
	// !!!! LOGO ORL VALIDATION !!!!
	if (url !== "" && url.toString().startsWith("http") === false) {
		generated.style.display = "none";
		alert(
			"Please enter a valid URL.\nEnsure that the entered URL starts with `http://` or `https://`"
		);
	}

	// !!!! COPY TEXT VALIDATION !!!!
	if (copyText == "") {
		generated.style.display = "none";
		alert("Please enter some text to copy");
		return;
	}
};

let convertText = (copyText) => {
	let copyTextArray = copyText.toString().split("");
	if (copyTextArray.indexOf("\n") !== -1) {
		copyText = copyText.replaceAll("\n", "¬ß≈");
	}
	if (copyTextArray.indexOf("&") !== -1) {
		copyText = copyText.replaceAll("&", "¬Ω≈");
	}
	if (copyTextArray.indexOf("=") !== -1) {
		copyText = copyText.replaceAll("=", "¬Ωœ");
	}
	if (copyTextArray.indexOf("\t") !== -1) {
		copyText = copyText.replaceAll("\t", "    ");
	}
	if (copyTextArray.indexOf(" ") !== -1) {
		copyText = copyText.replaceAll(" ", "%20");
	}
	if (copyTextArray.indexOf("#") !== -1) {
		copyText = copyText.replaceAll("#", "[hashtag]");
	}
	return copyText;
};

let handleCopyClick = () => {
	window.navigator.clipboard
		.writeText(
			`[![copy](https://cdn.jsdelivr.net/gh/lalit2005/copii@master/assets/copy.svg)](${finalURL})`
		)
		.then(() => alert("Copied markdown code.\nReady to use :)"))
		.catch((e) => alert(e));
};
let handleCopyAboveCodeClick = () => {
	window.navigator.clipboard
		.writeText(
			`[![copy](https://cdn.jsdelivr.net/gh/lalit2005/copii@master/assets/copy-above-code.svg)](${finalURL})`
		)
		.then(() => alert("Copied markdown code.\nReady to use :)"))
		.catch((e) => alert(e));
};
let handleCopyBelowCodeClick = () => {
	window.navigator.clipboard
		.writeText(
			`[![copy](https://cdn.jsdelivr.net/gh/lalit2005/copii@master/assets/copy-below-code.svg)](${finalURL})`
		)
		.then(() => alert("Copied markdown code.\nReady to use :)"))
		.catch((e) => alert(`${e.name}\n ${e.message}`));
};

// console.log(finalURL);
