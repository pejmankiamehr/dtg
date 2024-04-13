import * as React from "react";
import "./Pretreat.css";
import { DataGrid } from "@mui/x-data-grid";
import MachineBtn from "./MachineBtn";
import { Typography } from "@mui/material";



const columns = [
	{ field: "id", headerName: "Product Id", width: 220 },
	{ field: "color", headerName: "Color", width: 200 },
	{ field: "size", headerName: "Size", width: 200 },
	{
		field: "fb",
		headerName: "F/B",

		width: 150,
	},
	{
		field: "previe",
		headerName: "Preview",

		width: 150,
	},
];

const rows = [
	{
		id: 1234561,
		size: "xl",
		color: "black",
		fb: "f",
	
	},
	{ id: 2234561, size: "xl", color: "black", fb: "b" },
	{ id: 3234561, size: "xl", color: "black", fb: "f" },
	{ id: 4234561, size: "xl", color: "black", fb: "b" },
	{ id: 5234561, size: "xl", color: "black", fb: "f" },
	{ id: 6234561, size: "xl", color: "black", fb: "f" },
	{ id: 7234561, size: "xl", color: "black", fb: "b" },
	{ id: 8234561, size: "xl", color: "black", fb: "f" },
	{ id: 9234561, size: "xl", color: "black", fb: "f" },
];

export default function Pretreat() {
	return (
		<div style={{ height: 530, width: "100%", marginTop: "4rem" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
			<Typography margin={5}>Which machine ?</Typography>
			<MachineBtn />
			<button
				type="submit"
				className="btn btn-success "
				style={{ margin: "0.5em  3rem" }}
			>
				submit
			</button>
		</div>
	);
}
