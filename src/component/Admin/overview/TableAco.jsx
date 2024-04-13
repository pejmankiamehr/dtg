import * as React from "react";
import "./overstyle.css";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FrontSteppers from "./FrontSteper";
import BackSteppers from "./Backsteper";

function createData(ProductId, Color, Size) {
	return {
		ProductId	,
		Color,
		Size,
	
		history: [
			{
				id:"1",
				date: <FrontSteppers/>,
			
			},
			{
				id:"",
				date: <BackSteppers/>,
				
			},
		],
	};
}

function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);

	return (
		<React.Fragment>
			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? (
							<KeyboardArrowUpIcon />
						) : (
							<KeyboardArrowDownIcon />
						)}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{row.ProductId}
				</TableCell>
				<TableCell align="right">{row.Color}</TableCell>
				<TableCell align="right">{row.Size}</TableCell>
				
			</TableRow>
			<TableRow>
				<TableCell
					style={{ paddingBottom: 0, paddingTop: 0 }}
					colSpan={6}
				>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
					
							<Table size="small" aria-label="purchases">
						
								<TableBody>
									{row.history.map((historyRow) => (
										<TableRow key={historyRow.id}>
											<TableCell
												component="th"
												scope="row"
											>
												{historyRow.date}
											</TableCell>
										
										
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}


const rows = [
	createData(1234567, "Black", "XL"),
	createData(1234568, "Blue", "L"),
	createData(1234569, "Black", "XL"),
	createData(1234561, "Gray", "XXL"),
	createData(1234562, "Green", "XL"),
];

export default function TableAco() {
	

	return (
	

		<TableContainer component={Paper}  >
			<Table aria-label="collapsible table"   stickyHeader  >
				<TableHead  >
					<TableRow  >
						<TableCell >info</TableCell>
						<TableCell  >Product Id</TableCell>
						<TableCell align="right">Color</TableCell>
						<TableCell align="right">Size</TableCell>
						
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<Row key={row.ProductId} row={row} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
		
	);
}
