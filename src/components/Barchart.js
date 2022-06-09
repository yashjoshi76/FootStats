import React from "react";
import { Container } from "@material-ui/core";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const labels = ["January", "February", "March"];

const data = {
	labels,
	// datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
	datasets: [
		{
			label: "Popularity",
			data: [55, 23, 96],
			// you can set indiviual colors for each bar
			backgroundColor: "orange",
			borderWidth: 1,
		},
	],
};
const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Chart.js Bar Chart",
		},
	},
};
function Barchart() {
	return (
		<Container style={{
            width: '50%'
        }}>
			<Bar data={data} options={options} />
		</Container>
	);
}

export default Barchart;
