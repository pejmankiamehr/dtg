import React from "react";
import useStyles from "./StyleMenu2.js";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import ColorLensIcon from "@mui/icons-material/ColorLens";
import { Link } from "react-router-dom";
import GppGoodIcon from "@mui/icons-material/GppGood";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import ImagesearchRollerIcon from "@mui/icons-material/ImagesearchRoller";
import DashboardIcon from "@mui/icons-material/Dashboard";

const listnav = [
	{
		itemtext: "Order in take",
		icon: <AssignmentReturnIcon />,
		link: "orderintake",
	},
	{
		itemtext: "Pretreat",
		icon: <ColorLensIcon />,
		link: "pretreat",
	},
	{
		itemtext: "DTG",
		icon: <ImagesearchRollerIcon />,
		link: "dtg",
	},
	{
		itemtext: "QC",
		icon: <GppGoodIcon />,
		link: "qc",
	},
	{
		itemtext: "Product mangement",
		icon: <DashboardIcon />,
		link: "productmangment",
	},
	{
		itemtext: "Shiping",
		icon: <DashboardIcon />,
		link: "shiping",
	},
];

export default function Menu2() {

	const classes = useStyles();
	return (
		<div className={classes.menu}>
			<Grid container ditection={"row"} alignItems={"center"} mt={10}>
				<Grid item>
					<Link to={"orderintake"}>
						<img src={"./img/imglog/logo.png"} />
					</Link>
				</Grid>
				<Grid item>
					<Link to={"orderintake"}>
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
				{listnav.map((item) => {
					return (
						<Grid container item mb={3}>
							<Grid item alignItems={"center"}>
								<Link to={"orderintake"}>
									<span className={classes.icon}>
										{item.icon}
									</span>
								</Link>
							</Grid>

							<Grid item>
								<Link to={{ pathname: `${item.link}` }}>
									<Typography
										variant="h6"
										className={classes.itemtext}
									>
										{item.itemtext}
									</Typography>
								</Link>
							</Grid>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}
