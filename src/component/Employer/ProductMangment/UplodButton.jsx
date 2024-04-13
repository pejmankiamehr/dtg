import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

const Input = styled("input")({
	display: "none",
});

export default function UplodButton() {
	return (
		<Stack direction="row" alignItems="center"  className="uplodbtn" >
			<label htmlFor="icon-button-file">
				<Input accept="image/*" id="icon-button-file" type="file" />
				<IconButton aria-label="upload picture" component="span" style={{"fontSize":"1rem",color:"black"}}>
					Add .csv file
				</IconButton>
			</label>
			<label htmlFor="contained-button-file">
				<Input
					accept="image/*"
					id="contained-button-file"
					multiple
					type="file"
				/>
				<Button variant="outlined" component="span">
					Choose file
				</Button>
			</label>
		</Stack>
	);
}
