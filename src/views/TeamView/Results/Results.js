import React from "react";
import Dropdown from "../../../components/Dropdown";
import Barchart from '../../../components/Barchart'

import TeamNames from "./TeamNames.json";

function Results() {
	return (
		<div>
			<Dropdown data={TeamNames} />
		<div><Barchart /> </div>
		</div>
	);
}

export default Results;
