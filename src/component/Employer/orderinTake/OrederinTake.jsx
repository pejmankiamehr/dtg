import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import './Order.css'


import { Link } from "react-router-dom";



const columns = [
	{ id: "productid", label: "Product Id", minWidth: 150 },
	{ id: "color", label: "Color", minWidth: 100 },
	{
		id: "size",
		label: "Size",
		minWidth: 120,
		align: "right",
	
	},
	{
		id: "fb",
		label: "F/B",
		minWidth: 120,
		align: "right",
	
	},
	{
		id: "preview",
		label: "Preview",
		minWidth: 120,
		align: "center",
	
	},
];

function createData(productid, color, size, fb,preview) {

	return { productid, color, size, fb,preview };
}

const rows = [
	createData(1234561,"Black", "XL", "f",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>),
	createData(1234562, "Black", "XL", "b",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>),
	createData(1234563, "Black", "XL", "b",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>),
	createData(1234564, "Black", "XL", "f/b",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>),
	createData(1234565, "Black", "XL",  "b",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>),
	createData(1234566, "Black", "XL", "f",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>),
	createData(1234567, "Black", "XL", "f/b",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>),
	createData(1234568, "Black", "XL", 'b',<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>),
	createData(1234569, "Black", "XL", "f/b",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>),
	
];

export default function OrederinTake() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper sx={{ width: "100%", overflow: "hidden" }}>
			<TableContainer sx={{ minHeight: '40%', marginTop:"5rem"}}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(
								page * rowsPerPage,
								page * rowsPerPage + rowsPerPage
							)
							.map((row) => {
								return (
								
								<TableRow
										hover
										role="checkbox"
										tabIndex={-1}
										key={row.color}
										
									>

										{columns.map((column) => {
											const value = row[column.id];
											return (
												
												<TableCell
													key={column.id}
													align={column.align}
													component={Link}
													to={"/orderscan"}
												>
												
													{column.format &&
													typeof value === "number"
														? column.format(value)
														: value}
														
												</TableCell>
												
												
											);
										})}


									</TableRow>
								
								
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
