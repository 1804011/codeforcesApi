function $(str) {
	return document.getElementById(str);
}
function loadData(url, callBack) {
	fetch(url)
		.then((response) => response.json())
		.then((data) => callBack(data));
}
