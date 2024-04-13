import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Fab } from "@mui/material";

const options = ["Take in order", "Pretreat", "DTG", "QC"];

const ITEM_HEIGHT = 48;

export default function RoleButton() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				aria-label="more"
				id="long-button"
				aria-controls="long-menu"
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				onClick={handleClick}
				
			>
				<Fab color="secondary" aria-label="edit" variant="extended">
					Admin
				</Fab>
			</IconButton>
			<Menu
				id="long-menu"
				MenuListProps={{
					"aria-labelledby": "long-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: "20ch",
					},
				}}
			>
				{options.map((option) => (
					<MenuItem
						key={option}
						selected={option === "Pyxis"}
						onClick={handleClose}
					>
						{option}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}
