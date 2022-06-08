import React from "react";
import { Outlet, Link } from "react-router-dom";

import TeamInfo from "./TeamInfo";
import Header from "./Header";

import "./style.css";

function Home() {
	return (
		<div>
			<Header />
			<div
				style={{
					margin: "60px",
				}}
			>
				<TeamInfo />
			</div>
		</div>
	);
}

export default Home;
