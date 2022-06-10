import React from "react";
import ResultsChart from "./ResultsChart";
import Dropdown from "../../../components/Dropdown";
import Barchart from "../../../components/Barchart";

import { Container } from "@material-ui/core";

import TeamNames from "./TeamNames.json";

function Results() {
	return (
		<div>
			<Dropdown data={TeamNames} />
			<Container
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "100px",
				}}
			>
				<div
					style={{
						width: "40%",
					}}
				>
					<Barchart />{" "}
				</div>
				<div
					style={{
						width: "60%",
					}}
				>
					<ResultsChart />{" "}
				</div>
			</Container>
		</div>
	);
}

export default Results;
