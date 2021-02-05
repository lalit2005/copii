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
	navigator.clipboard.writeText(searchParams.asd).then(
		setInterval(() => {
			window.history.back();
		}, 1700)
	);
	console.log("hi");
} else {
	window.prompt(
		"Sorry!! this website has no access to Clipbord API, please press `Ctrl/Cmd + C` and hit `Enter`",
		searchParams
	);
}
