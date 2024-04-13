import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

export default function ScanBtn() {
	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div >
			<Button variant="outlined" onClick={handleClickOpen}>
				Scan it
			</Button>
			<Dialog
				fullScreen={fullScreen}
				open={open}
				onClose={handleClose}
				aria-labelledby="responsive-dialog-title"
			>
				<DialogTitle id="responsive-dialog-title"  color="#7C8691">
					{"Every thing is ok ?"}
				</DialogTitle>
		
				<DialogActions>
					<Button autoFocus onClick={handleClose} color="success" variant="contained" >
						yes
					</Button>
					
                    <Link  to={"/qcproblem"}  style={{color:"white",marginLeft:"3rem",marginRight:"0.8rem"}}>
                    <Button autoFocus  color="error" variant="contained" >
                    No
                    </Button>
					</Link>
					
				
				</DialogActions>
			</Dialog>
		</div>
	);
}
