import { Button } from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
import CustomizedSteppers from "./FrontSteper";
import TableAco from "./TableAco";

import Tableoverview from "./Tableoverview";

const table = [
	{
		number: "1",
		ProductId: "1242355366",
		Color: "red",
		Size: "xl",
	},
	{
		number: "2",
		ProductId: "6897878056",
		Color: "blue",
		Size: "xxl",
	},
	{
		number: "3",
		ProductId: "0786785544",
		Color: "green",
		Size: "l",
	},
	{
		number: "4",
		ProductId: "45794534477",
		Color: "black",
		Size: "xl",
	},
	{
		number: "5",
		ProductId: "679780896453",
		Color: "gray",
		Size: "xxl",
	},
];

const Overview = (props) => {
	return (
		<main
			className="main users chart-page  "
			id="skip-target"
			style={{ overflow: "hidden" }}
		>
			<div className="container">
				<h3 className="main-title">Overview</h3>
				<div className="flex-container">
					<Button className="boxtitle">
						<h5 className="hbox"> DAILY ORDERS</h5>

						<p>56</p>
					</Button>
					<Button className="boxtitle">
						<h5 className="hbox">IN PROGRESS</h5>

						<p>13</p>
					</Button>
					<Button className="boxtitle">
						<h5  className="hbox">DONE</h5>

						<p>43</p>
					</Button>
				</div>
				<br />
				<div className="row">
					<div className="col-lg-12">
						<div className="row">
							<div className="col-lg-12">
								<div className="users-table table-wrapper">
									<TableAco />

									{/* <Table striped bordered hover >
										<thead>
											<tr>
												<th style={{"paddingLeft":"1.5rem"}}>#</th>
												<th>Product Id</th>
												<th>Color</th>
												<th>Size</th>
												<th>Info</th>
											</tr>
										</thead>
										
													{table.map((taa) => {
														return (
									
												
															<Tableoverview
																number={
																	taa.number
																}
																ProductId={
																	taa.ProductId
																}
																color={
																	taa.Color
																}
																size={taa.Size}
															/>
																
								
														);
													})}
											
									</Table>  */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Overview;
