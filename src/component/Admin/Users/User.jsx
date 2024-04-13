import  React , {useEffect} from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { Link } from "react-router-dom";
import "./styleuser.css";
import { Avatar } from "@mui/material";
import InfoButton from "./InfoButton";
import RoleButton from "./RoleButton";

const columns = [
	{ id: "username", label: "Username", minWidth: 100 },
	{ id: "date", label: "Date", minWidth: 100, align: "center" },
	{
		id: "role",
		label: "Role",
		minWidth: 110,
		align: "center",
		format: (value) => value.toLocaleString("en-US"),
	},
	{
		id: "info",
		label: "Info",
		minWidth: 100,
		align: "center",
		format: (value) => value.toLocaleString("en-US"),
	},
];

function createData(username, date, role, info) {
	const density = role / info;
	return { username, date, role, info };
}

const rows = [
	createData(
		<Avatar alt="Profile Picture" src={"./img/avatar/img.png"} />,
		"May 22, 2019",
		<RoleButton />,
		<InfoButton />
	),
	createData(
		<Avatar alt="Profile Picture" src={"./img/avatar/img.png"} />,
		"May 23, 2019",
		<RoleButton />,
		<InfoButton />
	),
	createData(
		<Avatar alt="Profile Picture" src={"./img/avatar/img.png"} />,
		"May 24, 2019",
		<RoleButton />,
		<InfoButton />
	),
	createData(
		<Avatar alt="Profile Picture" src={"./img/avatar/img.png"} />,
		"May 25, 2019",
		<RoleButton />,
		<InfoButton />
	),
	createData(
		<Avatar alt="Profile Picture" src={"./img/avatar/img.png"} />,
		"May 26, 2019",
		<RoleButton />,
		<InfoButton />
	),
	createData(
		<Avatar alt="Profile Picture" src={"./img/avatar/img.png"} />,
		"May 27, 2019",
		<RoleButton />,
		<InfoButton />
	),
	createData(
		<Avatar alt="Profile Picture" src={"./img/avatar/img.png"} />,
		"May 28, 2019",
		<RoleButton />,
		<InfoButton />
	),
	createData(
		<Avatar alt="Profile Picture" src={"./img/avatar/img.png"} />,
		"May 29, 2019",
		<RoleButton />,
		<InfoButton />
	),
	createData(
		<Avatar alt="Profile Picture" src={"./img/avatar/img.png"} />,
		"May 30, 2019",
		<RoleButton />,
		<InfoButton />
	),
	createData(
		<Avatar alt="Profile Picture" src={"./img/avatar/img.png"} />,
		"May 26, 2019",
		<RoleButton />,
		<InfoButton />
	),
	createData(
		<Avatar alt="Profile Picture" src={"./img/avatar/img.png"} />,
		"May 26, 2019",
		<RoleButton />,
		<InfoButton />
	),
	createData(
		<Avatar alt="Profile Picture" src={"./img/avatar/img.png"} />,
		"May 26, 2019",
		<RoleButton />,
		<InfoButton />
	),
];

const User = () => {
// useEffect(()=>{


// },[])


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
		<main>
			<div>
				<h3 className="maintitle">All users</h3>
				<Paper sx={{ width: "100%", overflow: "hidden" }}>
					<TableContainer sx={{ maxHeight: 440 }}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									{columns.map((column) => (
										<TableCell
											key={column.id}
											align={column.align}
											style={{
												minWidth: column.minWidth,
											}}
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
												key={row.date}
											>
												{columns.map((column) => {
													const value =
														row[column.id];
													return (
														<TableCell
															key={column.id}
															align={column.align}
														>
															{column.format &&
															typeof value ===
																"number"
																? column.format(
																		value
																  )
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

				{/* button add user */}

				<div className="row    useb">
					<Link to="/adduser">
						<AddCircleOutlineIcon fontSize="large" />
					</Link>
				</div>
			</div>
		</main>
	);
};

export default User;
