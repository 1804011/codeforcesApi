function displayDoughnut(data) {
	// console.log(data);
	let mp = new Map();
	let xValues = [];
	let yValues = [];
	let barColors = [];

	let obj = {
		type: "doughnut",
		data: {
			labels: xValues,
			datasets: [
				{
					backgroundColor: barColors,
					data: yValues,
				},
			],
		},
		options: {
			title: {
				display: true,
				text: "User Submission Verdict",
			},
		},
	};

	let sz = data.result.length;
	for (let i = 0; i < sz; i++) {
		let u = data.result[i].verdict;
		if (mp.has(u) == false) mp.set(u, 1);
		else mp.set(u, mp.get(u) + 1);
	}
	console.log(mp);
	for (const elm of mp) {
		if (elm[0] == "OK") {
			xValues.push("Accepted");
			barColors.push("green");
		} else if (elm[0] == "TIME_LIMIT_EXCEEDED") {
			xValues.push("TLE");
			barColors.push("orange");
		} else if (elm[0] == "WRONG_ANSWER") {
			xValues.push("wrong answer");
			barColors.push("red");
		} else if (elm[0] == "PARTIAL") {
			xValues.push("partial");
			barColors.push("violet");
		} else if (elm[0] == "RUNTIME_ERROR") {
			xValues.push("RTE");
			barColors.push("tomato");
		} else if (elm[0] == "MEMORY_LIMIT_EXCEEDED") {
			xValues.push("MLE");
			barColors.push("violet");
		} else if (elm[0] == "COMPILATION_ERROR") {
			xValues.push("compile error");
			barColors.push("pink");
		} else if (elm[0] == "SKIPPED") {
			xValues.push("skipped");
			barColors.push("grey");
		} else if (elm[0] == "IDLENESS_LIMIT_EXCEEDED") {
			xValues.push("idle limit exceed");
			barColors.push("blue");
		} else if (elm[0] == "CHALLENGED") {
			xValues.push("challenged");
			barColors.push("brown");
		} else if (elm[0] == "PRESENTATION_ERROR") {
			xValues.push("presentation error");
			barColors.push("indigo");
		}

		yValues.push(elm[1]);
	}
	let div = document.createElement("div");
	div.id = "user-verdict";
	div.setAttribute("class", "container w-75 mx-auto border p-4");
	$("wrapper").appendChild(div);
	div.innerHTML = `<canvas
    id="user-submission"
    class="border p-2"
    style="width: 100%; max-width: 100vw">
    </canvas>`;
	new Chart("user-submission", obj);
}
