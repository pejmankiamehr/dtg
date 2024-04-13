import React, { useState } from "react";
import axios from "axios";
import {
	Form,
	Row,
	Col,
	Button,
	Container,
	Alert,
	Nav,
	Image,
} from "react-bootstrap";
import "./StyleLog.css";
import { ToastContainer, toast } from "react-toastify";
import PageMain from "../Admin/Layuot/PageMain";
import { loginUser } from "../../services/userservice.js";
import ForgetPasword from "./ForgetPasword";
import { useNavigate } from "react-router-dom";

function Login(props) {
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");

	const reset = () => {
		setemail("");
		setpassword("");
	};
	let navigate = useNavigate();

	const handlesubmit = async (event) => {
		event.preventDefault();
		const users = {
			email: email,
			password: password,
		};
		try {
			const { status, data } = await loginUser(users);
			if (status === 202) {
				console.log("sdgdfhg");
			 toast.success("welcome");
				 navigate("admin",{replace:true} );
			}
			console.log(data);
			reset();
		} catch (ex) {
			toast.error("not sent");
			console.log(ex);
		}
	};

	return (
		<Container fluid>
			<Row>
				{/* left page */}

				<Col md={6} className="Left">
					<h4 className="danger">DTG</h4>
					<h2>LOGIN</h2>
					<p className="mt-5 mb-5 pwelcom">
						Welcome back! Please login to your account.
					</p>

					<Form onSubmit={handlesubmit}>
						{/* input email*/}

						<Form.Group
							as={Row}
							className="mb-3"
							controlId="formHorizontalEmail"
						>
							<Col sm={10}>
								<Form.Control
									type="email"
									placeholder="Email Address"
									value={email}
									onChange={(e) => setemail(e.target.value)}
								/>
							</Col>
						</Form.Group>

						{/* input password */}

						<Form.Group
							as={Row}
							className="mb-3"
							controlId="formHorizontalPassword"
						>
							<Col sm={10}>
								<Form.Control
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) =>
										setpassword(e.target.value)
									}
								/>
							</Col>
						</Form.Group>

						<Form.Group
							as={Row}
							className="mb-5"
							controlId="formHorizontalCheck"
						>
							<Col sm={{ span: 7, offset: -1 }}>
								<Form.Check label="Remember me" />
							</Col>
							<Col>
								<ForgetPasword />
							</Col>
						</Form.Group>

						<Form.Group as={Row} className="mb-3">
							<Col
								sm={{ span: 8, offset: 1 }}
								className="d-grid gap-2"
							>
								<Button type="submit">Sign in</Button>
							</Col>
						</Form.Group>
					</Form>
				</Col>

				{/* right page */}

				<Col md={6} className="Right">
					<Nav
						variant="pills"
						defaultActiveKey="#home"
						as="ul"
						className="nav"
					>
						<Nav.Item as="li" className="itemHome">
							<Nav.Link href="#home">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item as="li">
							<Nav.Link href="#shopify" className="itemShopify">
								shopify
							</Nav.Link>
						</Nav.Item>
					</Nav>
					<Image src="./img/imglog/imglog.png" rounded />
				</Col>
			</Row>

			<ToastContainer />
		</Container>
	);
}

export default Login;
