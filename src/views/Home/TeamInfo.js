import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

import "./style.css";
import { width } from "@mui/system";

const teamInfo = [
	{
		name: "Team",
		src: "https://www.thesun.co.uk/wp-content/uploads/2021/10/NINTCHDBPICT000232356065.jpg",
	},
	{
		name: "Coach",
		src: "https://i2-prod.mirror.co.uk/incoming/article26794015.ece/ALTERNATES/s1200c/22_GettyImages-1393174044.jpg",
	},
	{
		name: "Player",
		src: "https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article23218177.ece/ALTERNATES/s1200c/0_GettyImages-1343906145.jpg",
	},
];
function TeamInfo() {
	return (
		<div
			style={{
				width: "100%",
			}}
			className="d-flex justify-content-around"
		>
			<div
				style={{
					width: "40%",
				}}
			>
				<Carousel>
					{teamInfo.map((x, i) => {
						return (
							<Carousel.Item key={i} interval={1000}>
								<img
									style={{
										minWidth: "500px",
										minHeight: "500px",
									}}
									className="d-block w-100"
									src={x.src}
									alt="Club Name"
								/>
								<Carousel.Caption>
									<h3>{x.name}</h3>
								</Carousel.Caption>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
			<div className="d-flex flex-column justify-content-center">
				<h1
					style={{
						fontSize: "3rem",
						color: "black",
					}}
				>
					Select a View
				</h1>
				<div style={{ padding: "8px" }}>
					<Link to="/teamview">
						<Button variant="primary" size="lg" active>
							Team View
						</Button>{" "}
					</Link>
					<Link to="/playerview">
						<Button variant="secondary" size="lg" active>
							Player View
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default TeamInfo;
