import React from "react";
import useStyles from "./StyleMenu.js";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import PieChartIcon from "@mui/icons-material/PieChart";
import PersonIcon from "@mui/icons-material/Person";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { NavLink, Link } from "react-router-dom";

export default function Menu() {
	const classes = useStyles();
	
	return (
		<div className={classes.menu}>
			<Grid container ditection={"row"} alignItems={"center"} mt={10}>
				<Grid item>
					<Link to={"overview"}>
						<img src={"./img/imglog/logo.png"} />
					</Link>
				</Grid>
				<Grid item>
					<Link to={"overview"}>
						<Typography variant="h6" className={classes.logotext}>
							DTG auto system
						</Typography>
					</Link>
				</Grid>
			</Grid>
			<Grid
				container
				alignItems={"center"}
				className={classes.itemmenu}
				mt={12}
				ml={2}
			>
				<Grid container item mb={3}>
					<Grid item alignItems={"center"}>
						<NavLink
							to="overview"
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<PieChartIcon className={classes.icon} />
						</NavLink>
					</Grid>

					<Grid item>
						<NavLink
							to="overview"
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<Typography
								variant="h6"
								className={classes.itemtext}
							>
								Overview
							</Typography>
						</NavLink>
					</Grid>
				</Grid>

				<Grid container item mb={3}>
					<Grid item alignItems={"center"}>
						<NavLink to={"users"}   className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
							<PersonIcon className={classes.icon} />
						</NavLink>
					</Grid>
					<Grid item>
						<NavLink to={"users"}  className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
							<Typography
								variant="h6"
								className={classes.itemtext}
							>
								Users
							</Typography>
						</NavLink>
					</Grid>
				</Grid>
				<Grid container item mb={3}>
					<Grid item alignItems={"center"}>
						<NavLink to={"logorder"}  className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
							<ColorLensIcon className={classes.icon} />
						</NavLink>
					</Grid>
					<Grid item>
						<NavLink to={"logorder"}   className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
							<Typography
								variant="h6"
								className={classes.itemtext}
							>
								Log Orders
							</Typography>
						</NavLink>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
