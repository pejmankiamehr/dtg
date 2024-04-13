import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import UplodButton from "./UplodButton";
import InfoBtn from "./InfoBtn";
import './prodouvt.css'

const columns = [
	{ id: "productid", label: "Product Name", minWidth: 170 },
	{ id: "type", label: "Type", minWidth: 100 },
	{
		id: "fb",
		label: "F/B",
		minWidth: 170,
		align: "right",
	
	},
	{
		id: "preview",
		label: "Preview",
		minWidth: 170,
		align: "right",
	
	},
	{
		id: "info",
		label: "Info",
		minWidth: 170,
		align: "right",
	
	},
];

function createData(productid, type, fb,preview, info) {
	
	return { productid, type, fb,preview,info };
}

const rows = [
	createData(1234561, "shirt", "f",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>, <InfoBtn />),
	createData(1234562, "shirt", "f/b",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>, <InfoBtn />),
	createData(1234563, "shirt", "b",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>, <InfoBtn />),
	createData(1234564, "shirt", "f",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>, <InfoBtn />),
	createData(1234565, "shirt", "f/b",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>, <InfoBtn />),
	createData(1234566, "shirt", "f",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>, <InfoBtn />),
	createData(1234567, "shirt", "b",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>, <InfoBtn />),
	createData(1234568, "shirt", "f",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>, <InfoBtn />),
	createData(1234569, "shirt", "f",<img  src="./img/Tshert.png" style={{ width: "10%",height:"10%"}}/>, <InfoBtn />),
];

export default function ProductMangment() {
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
			<TableContainer sx={{ maxHeight: 700, marginTop: "5rem" }}>
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
				className="Pagination"
				
			/>
<UplodButton/>
			
		</Paper>
	);
}
