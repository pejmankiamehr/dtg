import * as React from "react";
import "./Orderstyle.css"

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from '@mui/icons-material/Close';

export default function Details() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="contained" color="error" onClick={handleClickOpen}>
            Details
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
                <Button onClick={handleClose} autoFocus>
						<CloseIcon/>
					</Button>
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
					<img src="./img/detailimg.png" />
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					{"Stain on Tshirt"}
					
				</DialogActions>
			</Dialog>
		</div>
	);
}
