function $(str) {
	return document.getElementById(str);
}
function loadData(url, callBack) {
	fetch(url)
		.then((response) => response.json())
		.then((data) => callBack(data));
}
$("submit").addEventListener("click", () => {
	$("wrapper").textContent = "";
	let userHandle = $("handle").value;
	userHandle = userHandle.trim();
	$("error").innerText = "";
	if (userHandle == "") $("error").innerText = `*Input field can't be empty`;
	else {
		let url = `https://codeforces.com/api/user.info?handles=${userHandle}`;
		loadData(url, displayData);
		let url2 = `https://codeforces.com/api/user.rating?handle=${userHandle}`;
		loadData(url2, displayRatingInfo);
		let url3 = `https://codeforces.com/api/user.status?handle=${userHandle}`;
		loadData(url3, displayDoughnut);
	}
});
