function displayRatingInfo(data) {
	let xValues = [];
	let yValues = [];

	let obj = {
		type: "line",
		data: {
			labels: xValues,
			datasets: [
				{
					fill: false,
					lineTension: 0,
					backgroundColor: "rgba(0,0,255,1.0)",
					borderColor: "rgba(0,0,255,0.1)",
					data: yValues,
				},
			],
		},
		options: {
			legend: { display: false },
			scales: {
				yAxes: [{ ticks: { min: 100, max: 5100 } }],
			},
		},
	};
	let node = $("rating-info");
	if (node) {
		document.getElementsByClassName("body")[0].removeChild(node);
	}
	let sz = data.result.length;
	obj.options.scales.yAxes[0].ticks.min = 0;
	obj.options.scales.yAxes[0].ticks.max = 4000;
	for (let i = 0; i < sz; i++) {
		xValues.push(i + 1);
		yValues.push(data.result[i].newRating);
	}
	let div = document.createElement("div");
	div.id = "rating-info";
	div.setAttribute("class", "my-4 container w-75 mx-auto border p-4");
	$("wrapper").appendChild(div);
	div.innerHTML = `
       <h4 class="text-center my-3" >User Rating History</h4>
    <canvas
    id="rating-graph"
    style="width: 100%; max-width: 100vw"
    class="border">
    </canvas>`;
	new Chart("rating-graph", obj);
}
