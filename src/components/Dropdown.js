import React, { useState } from "react";
import "./MuiGlobalStyles.css";
import {
	makeStyles,
	InputLabel,
	MenuItem,
	FormHelperText,
	FormControl,
	Container,
	Select,
} from "@material-ui/core";

export default function Dropdown(TeamNames) {
	const [teams, setTeams] = useState(TeamNames.data);
	const [team1, setTeam] = useState("");
	const [team2, setTeam2] = useState("");

	const useStyles = makeStyles((theme) => ({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 300,
			maxHeight: 100,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	}));

	const classes = useStyles();

	const handleChange = (event) => {
		setTeam(event.target.value);
		console.log(team1);
	};

	const secondChange = (event) => {
		setTeam2(event.target.value);
		// console.log(team2);
	};

	return (
		<Container className="d-flex flex-coloumn justify-content-center">
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel id="demo-simple-select-outlined-label">
					Select Team
				</InputLabel>
				<Select
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					value={team1}
					onChange={(event) => {
						handleChange(event);
						console.log(event.target.value);
					}}
					label="Teams"
				>
					{teams.map((t, i) => {
						return (
							<MenuItem
								style={{ maxHeight: "150px !important" }}
								key={i}
								value={t.Team_Name}
							>
								{t.Team_Name}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>

			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel id="demo-simple-select-outlined-label">
					Select Team II
				</InputLabel>
				<Select
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					value={team2}
					onChange={secondChange}
					label="Age"
				>
					{teams.map((t, i) => {
						return (
							<MenuItem key={i} value={t.Team_Name}>
								{t.Team_Name}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</Container>
	);
}
