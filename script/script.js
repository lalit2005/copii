let searchParams = {};

decodeURI(window.location.search)
	.replace("?", "")
	.split("&")
	.map((param) => param.split("="))
	.reduce((values, [key, value]) => {
		searchParams[key] = value;
		return values;
	}, {});

console.log(searchParams);

if (navigator.clipboard) {
	if (searchParams.ct) {
		navigator.clipboard
			.writeText(searchParams.ct)
			.then(
				setInterval(() => {
					window.history.back();
				}, 1700)
			)
			.catch((error) => {
				window.prompt(
					error.message +
						"\n\nThis website either does not access to Clipbord API or the webpage is not focused. Please press `Ctrl/Cmd + C` and hit `Enter`",
					searchParams.ct
				);
				setInterval(() => {
					window.history.back();
				}, 1700);
			});
	} else {
		document.querySelector(".text").innerHTML = "No text to copy! 😐😐😐";
		document.querySelector(".redirect-text").remove();
	}
	console.log("hi");
} else {
	window.prompt(
		"Sorry!! this website has no access to Clipbord API, please press `Ctrl/Cmd + C` and hit `Enter`",
		searchParams
	);
}

if (searchParams.tm && searchParams.tm == "blk") {
	document.querySelector("body").style.backgroundColor = "#25282f";
	document.querySelector("body").style.color = "white";
	document.querySelector(".logo").src = "../assets/dark-logo.svg";
}

if (searchParams.lg) {
	document.querySelector(".custom").src = searchParams.lg;
} else {
	document.querySelector(".custom").remove();
	document.querySelector(".logos").style.display = "inline";
}
