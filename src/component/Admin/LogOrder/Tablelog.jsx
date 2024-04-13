import * as React from "react";
import "./Orderstyle.css";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Icon } from "@mui/material";
import  Details from "./Details"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData(
		1234562,
		"machine 1",
		<Icon
			baseClassName="fa"
			className="fa-check-circle"
			sx={{ color: "green" }}
		/>,
		"-"
	),
	createData(1234561, "machine 1", 	<Icon
  baseClassName="fa"
  className="fa-check-circle"
  sx={{ color: "green" }}
/>, "-"),
	createData(1234569, "machine 1", 	<Icon
  baseClassName="fa"
  className="fa-times-circle"
  sx={{ color: "red" }}
/>, <Details/>),
	createData(1234568, "machine 1", 	<Icon
  baseClassName="fa"
  className="fa-check-circle"
  sx={{ color: "green" }}
/>, "-"),
	createData(12345671, "machine 1", 	<Icon
  baseClassName="fa"
  className="fa-check-circle"
  sx={{ color: "green" }}
/>, "-"),
	createData(12345673, "machine 1", 	<Icon
  baseClassName="fa"
  className="fa-check-circle"
  sx={{ color: "green" }}
/>, "-"),

];

export default function Tablelog() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>ID</StyledTableCell>
						<StyledTableCell align="right">
							Machine Type
						</StyledTableCell>
						<StyledTableCell align="right">Pass</StyledTableCell>
						<StyledTableCell align="center">Problem</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.name}>
							<StyledTableCell component="th" scope="row">
								{row.name}
							</StyledTableCell>
							<StyledTableCell align="right">
								{row.calories}
							</StyledTableCell>
							<StyledTableCell align="right">
								{row.fat}
							</StyledTableCell>
							<StyledTableCell align="center">
								{row.carbs}
							</StyledTableCell>
							
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
