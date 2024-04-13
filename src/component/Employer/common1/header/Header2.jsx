import React from "react";

import useStyles from "./StyleHeader2";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";


export default function Header2(props) {
	
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.header}>
			<Grid container spacing={2}>
				<Grid item>
					<Button
						className={classes.btn}
						id="demo-positioned-button"
						aria-controls="demo-positioned-menu"
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
					>
						<img
							src={"./img/avatar/img.png"}
							className={classes.img}
						/>
					</Button>
					<Menu
						id="demo-positioned-menu"
						aria-labelledby="demo-positioned-button"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						anchorOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
					>
						<MenuItem onClick={handleClose}>Profile</MenuItem>
						<MenuItem onClick={handleClose}>My account</MenuItem>
						<MenuItem onClick={handleClose}>Logout</MenuItem>
					</Menu>
				</Grid>
				<Grid item>
					<Typography variant="p" style={{ fontSize: "1rem" }}>
						Shervin mostashari
					</Typography>
					<br />
					<Typography
						variant="p"
						style={{ fontSize: "0.9rem", color: "#C5C7CD" }}
					>
						Admin
					</Typography>
				</Grid>
				<Grid item>
					<Button>
						<NotificationsNoneOutlinedIcon />
					</Button>
				</Grid>
				<Grid item>
					<Button>
						<SearchIcon />
					</Button>
				</Grid>
				<Grid item className={classes.headertext}>
					<Typography variant="h5"></Typography>
				</Grid>
			</Grid>
		</div>
	);
}
