import React from "react";
import "./Qc.css";
import ChooseProblem from "./ChooseProblem";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Box, Button, IconButton, Input, Typography } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export default function Qcproblem() {
	return (
		<div style={{ margin: "7rem 7rem" }}>
			<Typography style={{ margin: "3rem 0 0 0" }}>
				Choose problem
			</Typography>
			<ChooseProblem />
			<Typography style={{ margin: "3rem 0 0 0" }}>
				More details
			</Typography>
			<TextareaAutosize
				aria-label="minimum height"
				minRows={4}
				placeholder="Type here"
				style={{ width: "50rem" }}
			/>
			<Typography style={{ margin: "3rem 0 0 0" }}>
				Add picture
			</Typography>
			<Box component="span" sx={{ p: 4, border: "1px solid grey" }}>
				<label
					htmlFor="icon-button-file"
					style={{
						margin: "2rem 5rem",
						width: "36rem",
						textAlign: "center",
					}}
				>
					<Input
						accept="image/*"
						id="icon-button-file"
						type="file"
						style={{ display: "none" }}
					/>
					<IconButton
						color="primary"
						aria-label="upload picture"
						component="span"
						style={{ border: "1px solid grey" }}
					>
						<PhotoCamera />
					</IconButton>
				</label>
			</Box>

			<Button
				variant="contained"
				type="submit"
				style={{ margin: "3rem 0" }}
				color="success"
			>
				submit
			</Button>
		</div>
	);
}
