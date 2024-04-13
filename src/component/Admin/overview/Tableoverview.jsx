// import "./overstyle.css";
// import React from "react";

// import {
// 	AnnotationIcon,
// 	ArrowRightIcon,
// 	ClipboardCheckIcon,
// 	XCircleIcon,
// } from "@heroicons/react/solid";

// import { Col, Row } from "react-bootstrap";

// export default function Tableoverview({ ProductId, color, size, number }) {
// 	const onClickHandler = (e) => {
// 		const hiddenElement = e.currentTarget.nextSibling;
// 		hiddenElement.className.indexOf("collapse show") > -1
// 			? hiddenElement.classList.remove("show")
// 			: hiddenElement.classList.add("show");
// 	};

// 	return (
	
// 			<tbody  style={{"cursor":"pointer"}}>
// 				<tr onClick={onClickHandler} style={{"background":"white"}} >
// 				<td >{number}</td>
// 					<td>{ProductId}</td>
// 					<td>{color}</td>
// 					<td>{size}</td>
// 					<td>
// 						<button
// 							className="fa fa-angle-down"
							
// 						></button>
// 					</td>
// 				</tr>
// 				<tr className="collapse">
// 					<td colSpan="6" className="back">
// 						<Row>
// 							<div className="maintoggle">
// 								<span className="ico">
// 									<AnnotationIcon className="h-6 w-6 text-gray-500" />
// 									<span className="icotext">
// 										Order in take
// 									</span>
// 								</span>
// 								<ArrowRightIcon
// 									className="h-6 w-6 text-gray-500"
// 									style={{ marginLeft: "25rem" }}
// 								/>

// 								<Row>
// 									<Col
// 										style={{
// 											marginLeft: "15rem",
// 											marginTop: "-3rem",
// 											marginBottom: "3rem",
// 										}}
// 									>
// 										<span>Front</span>
// 									</Col>
// 									<Col
// 										style={{
// 											marginLeft: "-30rem",
// 											marginTop: "-3rem",
// 										}}
// 									>
// 										<span
// 											style={{
// 												background: "white",
// 												border: "1px solid green",
// 												padding: "0.40rem",
// 												borderRadius: "0.35rem",
// 												color: "green",
// 											}}
// 										>
// 											<ClipboardCheckIcon
// 												className="h-6 w-6 text-gray-500"
// 												style={{ color: "green" }}
// 											/>
// 											<span>DTG</span>
// 										</span>
// 									</Col>
// 								</Row>
// 								<Row>
// 									<Col
// 										style={{
// 											marginLeft: "15rem",
// 											marginTop: "-1rem",
// 										}}
// 									>
// 										<span>Back</span>
// 									</Col>
// 									<Col
// 										style={{
// 											marginLeft: "-30rem",
// 											marginTop: "-1rem",
// 										}}
// 									>
// 										<span
// 											style={{
// 												background: "white",
// 												border: "1px solid black",
// 												padding: "0.40rem",
// 												borderRadius: "0.35rem",
// 											}}
// 										>
// 											<ClipboardCheckIcon
// 												className="h-6 w-6 text-gray-500"
// 												style={{ color: "grey" }}
// 											/>
// 											<span>DTG</span>
// 										</span>
// 									</Col>
// 								</Row>
// 								<Row>
// 									<Col
// 										style={{
// 											marginLeft: "40rem",
// 											marginTop: "-1rem",
// 										}}
// 									>
// 										<span
// 											style={{
// 												background: "white",
// 												border: "1px solid black",
// 												padding: "0.40rem",
// 												borderRadius: "0.35rem",
// 											}}
// 										>
// 											<ClipboardCheckIcon
// 												className="h-6 w-6 text-gray-500"
// 												style={{ color: "black" }}
// 											/>
// 											<span>QC</span>
// 										</span>
// 									</Col>
// 									<Col
// 										style={{
// 											marginLeft: "40rem",
// 											marginTop: "-5rem",
// 										}}
// 									>
// 										<span
// 											style={{
// 												background: "white",
// 												border: "1px solid red",
// 												padding: "0.40rem",
// 												borderRadius: "0.35rem",
// 												color: "red",
// 											}}
// 										>
// 											<ClipboardCheckIcon
// 												className="h-6 w-6 text-gray-500"
// 												style={{ color: "red" }}
// 											/>
// 											<span>QC</span>
// 										</span>
// 									</Col>
// 								</Row>
// 								<Col>
// 									<div
// 										style={{
// 											width: "20%",
// 											height: "5rem",
// 											marginLeft: "50rem",
// 											marginTop: "-5rem",
// 											background: "white",
// 											textAlign: "center",
// 											paddingTop: "0.25rem",
// 											borderRadius: "1rem",
// 											border:"1px solid gray"
// 										}}
// 									>
// 										<XCircleIcon style={{ color: "red" }} />
// 										<br />
// 										<span>Erorr</span> <br />
// 										<span>Misprint (Front)</span>
// 									</div>
// 								</Col>
// 							</div>
// 						</Row>
// 					</td>
// 				</tr>
// 			</tbody>
		
// 	);
// }
