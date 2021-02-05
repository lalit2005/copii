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
			.catch((e) => {
				window.prompt(
					e +
						"\n\nThis website has no access to Clipbord API, please press `Ctrl/Cmd + C` and hit `Enter`",
					searchParams.ct
				);
				setInterval(() => {
					window.history.back();
				}, 1700);
			});
	} else {
		document.querySelector("#text").innerHTML = "No text to copy! 😐😐😐";
	}
	console.log("hi");
} else {
	window.prompt(
		"Sorry!! this website has no access to Clipbord API, please press `Ctrl/Cmd + C` and hit `Enter`",
		searchParams
	);
}

if (searchParams.tm && searchParams.tm == "blk") {
	document.querySelector("body").style.backgroundColor = "black";
	document.querySelector("body").style.color = "white";
}
