import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { forgetPassword } from "../../services/userservice";
import { toast } from "react-toastify";






export default function ForgetPasword() {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};


	const handleSend =async (event) => {
		event.preventDefault();
		const forgetPass={
			email:forgetpassword
		};
		try {
			const { status,data } = await  forgetPassword (forgetPass);
			if (status === 202) {
				toast.success("sent mail");
				setOpen(false);
			}
			console.log(data);
		
		} 
		catch (ex) {
			toast.error("not sent");
			console.log(ex);
		}

	};

	const [forgetpassword, setforgetpassword] = useState();

	return (
		<div>
			<Button onClick={handleClickOpen}>forget password ?</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Reset Password</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Enter your email address to receive new password .
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="email"
						label="Email Address"
						type="email"
						fullWidth
						variant="standard"
						value={forgetpassword}
						onChange={(e) => setforgetpassword(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleSend}>Send</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
