function displayData(data) {
	console.log(data);

	if (data.status == "OK") {
		const {
			firstName = "",
			lastName = "",
			city = "",
			country = "",
			friendOfCount = 0,
			organization = "",
			rating = "unrated",
			maxRating = "unrated",
			contribution,
			lastOnlineTimeSeconds,
			registrationTimeSeconds,
			handle,
			rank = "unrated",
			maxRank = "unrated",
		} = data.result[0];
		let pupil = "";
		let contribute = contribution;
		if (contribution > 0) pupil = "pupil";
		if (contribution > 0) contribute = "+" + contribution;
		let onlineStatus = displayYear(lastOnlineTimeSeconds);
		if (onlineStatus == "few moments ago") onlineStatus = "Online Now";

		// let child = $("user");
		// if (child) {
		// 	document.getElementsByTagName("body")[0].removeChild(child);
		// }
		$("wrapper").textContent = "";

		const div = document.createElement("div");
		div.id = "user";
		div.setAttribute(
			"class",
			"container w-75 mx-auto border p-lg-4 rounded-3  p-sm-2"
		);
		div.innerHTML = `<h1 class="text-center mb-3 user-heading">User Information</h1>
		<div id="info">
			<h5 id="title" class="${rank}">${rank}</h5>
			<h4 id="user-handle" class="${rank}">${handle}</h4>
			<p id="name-location">
				${firstName} ${lastName},
		<a href="https://codeforces.com/ratings/country/${country}/city/${city}">${city}</a>, 
		<a href="https://codeforces.com/ratings/country/${country}">${country}</a>
			</p>
			<p id="university">
				<span class="text-muted">from</span>
				<a href="https://codeforces.com/ratings/organization/${organization}">${organization}</a>
			</p>
			<p>
				<img
					src="//codeforces.org/s/99139/images/icons/rating-24x24.png"
					alt="User''s contest rating in Codeforces community"
					title="User''s contest rating in Codeforces community"
				/>
				<span
					>Contest rating: <span class="${rank}">${rating}</span> (max.
					<span class="${maxRank} lower">${maxRank}, ${maxRating}</span>)</span
				>
			</p>
			<p>
				<img
					src="//codeforces.org/s/99139/images/icons/star_blue_24.png"
					alt="User''s contribution into Codeforces community"
					title="User''s contribution into Codeforces community"
				/>
				<span>Contribution: <span class="${pupil}">${contribute}</span></span>
			</p>
			<p>
				<img src="//codeforces.org/s/99139/images/icons/star_yellow_24.png" />
				<span>Friend of: ${friendOfCount} users</span>
			</p>
		
			<p class="lst ">Last visit: ${onlineStatus}</p>
			<p class="lst">Registered: ${displayYear(registrationTimeSeconds)}</p>`;

		$("wrapper").appendChild(div);
		if (onlineStatus == "few moments ago") {
			document.getElementsByClassName("lst")[0].classList.add("online");
		} else {
			document.getElementsByClassName("lst")[0].classList.add("offline");
		}

		return true;
	} else {
		$("error").innerText = `*user not found`;
		return false;
	}
}
function displayYear(previousTime) {
	let now = new Date();
	now = now.getTime() / 1000;
	let timeDifference = now - previousTime;
	let yearUnit = 31556952;
	let monthUnit = 2629746;
	let weekUnit = 604800;
	let dayUnit = 86400;
	let hoursUnit = 3600;
	let minutesUnit = 60;
	let year = timeDifference / yearUnit;
	year = Math.floor(year);
	let month = timeDifference / monthUnit;
	month = Math.floor(month);
	let week = timeDifference / weekUnit;
	week = Math.floor(week);
	let day = timeDifference / dayUnit;
	day = Math.floor(day);
	let hours = timeDifference / hoursUnit;
	hours = Math.floor(hours);
	let minutes = timeDifference / minutesUnit;
	minutes = Math.floor(minutes);

	if (year >= 1) return `${year} years ago`;
	else if (month >= 1) return `${month} months ago`;
	else if (week >= 1) return `${week} weeks ago`;
	else if (day >= 1) return `${day} days ago`;
	else if (hours >= 1) return `${hours} hours ago`;
	else if (minutes >= 1) return `${minutes} minutes ago`;
	else return `few moments ago`;
}
