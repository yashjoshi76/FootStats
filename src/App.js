import React from "react";
import Home from "./views/Home/Home";
import TeamView from "./views/TeamView/TeamView.tsx"
import PlayerView from "./views/PlayerView/PlayerView";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";

const routes = [
	{
		path: "/",
		element: Home,
	},
	{
		path: "/teamview",
		element: TeamView,
	},
];

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/teamview" element={<TeamView />} />
				<Route path="/playerview" element={<PlayerView />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
