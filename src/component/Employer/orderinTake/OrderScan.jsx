import React from "react";

import { Button, Grid,  Typography } from "@mui/material";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData(
		1234567,
		"Black",
		"XL",
		"F",
		<img src="./img/Tshert.png" style={{ width: "10%", height: "10%" }} />
	),
];

export default function OrderScan() {
	return (
		<div style={{ marginLeft: "5rem" }}>
			<Grid
				container
				spacing={2}
				style={{ marginBottom: "7rem", marginTop: "3rem" }}
			>
				<Grid item xs={3} md={3}>
					<Typography>Barcode and Scan</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={3} md={3}>
					<img src="./img/barcode.png" style={{ width: "140%" }} />
				</Grid>
				<Grid item xs={2} md={2}>
					<Button  variant="outlined"  onClick={() =>window.print()} style={{color:"gray",background:"white", marginTop: "6.5rem", marginLeft: "8rem" }}>
						<LocalPrintshopOutlinedIcon  />  print
					</Button>
				</Grid>
				<Grid item xs={3} md={3}>
				<img src="./img/Tshert.png" style={{ width: "110%" ,"zIndex":50,"marginLeft":"8rem"}} />
				</Grid>
			</Grid>
			<Grid
				container
				spacing={2}
				style={{ marginBottom: "4rem", marginTop: "1rem" }}
			>
				<Grid item xs={3} md={3}>
					<Typography> 1322526</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={2}
				style={{ marginBottom: "2rem", marginTop: "1rem" }}
			>
				<Grid item xs={3} md={3}>
					<Typography> barcod:1322526</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={2}
				style={{ marginBottom: "2rem", marginTop: "0.5rem" }}
			>
				<Grid item xs={10} md={10}>
				<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Product Id</TableCell>
									<TableCell align="right">Color</TableCell>
									<TableCell align="right">Size</TableCell>
									<TableCell align="right">F/B</TableCell>
									<TableCell align="center">Preview</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow
										key={row.name}
										sx={{
											"&:last-child td, &:last-child th":
												{ border: 0 },
										}}
									>
										<TableCell component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="right">
											{row.calories}
										</TableCell>
										<TableCell align="right">
											{row.fat}
										</TableCell>
										<TableCell align="right">
											{row.carbs}
										</TableCell>
										<TableCell align="center"  style={{width:330}} >
											{row.protein}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={2}
				style={{ marginBottom: "4rem", marginTop: "0.2rem" }}
			>
				<Grid item xs={4} md={4}>
					<Button variant="contained" color="success">
						{" "}
						scan it
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}
