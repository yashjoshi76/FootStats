import React from "react";
import {
	makeStyles,
	InputLabel,
	MenuItem,
	FormHelperText,
	FormControl,
	Container,
	Select,
} from "@material-ui/core";

export default function Dropdown() {
	const useStyles = makeStyles((theme) => ({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 300,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	}));

	const classes = useStyles();
	const [team1, setTeam] = React.useState("");
	const [team2, setTeam2] = React.useState("");

	const handleChange = (event) => {
		setTeam(event.target.value);
	};

	const secondChange = (event) => {
		setTeam2(event.target.value);
		console.log(event.target.value);
	};

	return (
		<Container className="d-flex flex-coloumn justify-content-center">
		
				<FormControl
					componenet={"div"}
					variant="outlined"
					className={classes.formControl}
				>
					<InputLabel componenet={"div"} id="demo-simple-select-outlined-label">
						Select Team
					</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={team1}
						onChange={handleChange}
						label="Age"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
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
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
		
		</Container>
	);
}
