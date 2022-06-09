import React from "react";
import Results from "./Results/Results";

import {
	makeStyles,
	AppBar,
	Tabs,
	Tab,
	Typography,
	Box,
} from "@material-ui/core";



function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<div>{children}</div>
				</Box>
			)}
		</div>
	);
}

const tabs = [
	{ label: "Result Probability", id: 0 },
	{ label: "Expected Threats", id: 1 },
	{ label: "Pass Maps", id: 2 },
	{
		label: "Player Ranking",
		id: 3,
	},
];

const components = [
	{
		Name: Results,
		id: 0,
	},
];

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

export default function SimpleTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar component={"div"} position="static">
				<Tabs
					value={value}
					component={"div"}
					centered
					onChange={handleChange}
					aria-label="simple tabs example"
				>
					{tabs.map((x) => {
						return <Tab key={x.id} label={x.label} {...a11yProps(x.id)} />;
					})}
				</Tabs>
			</AppBar>

			<TabPanel component={"div"} value={0} index={0}>
				<div>
					<Results />
				</div>
			</TabPanel>
		</div>
	);
}
