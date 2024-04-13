import React from "react";

export default function Addusers() {
	return (
		<main className="main users chart-page" id="skip-target" style={{"marginLeft":"4rem","marginTop":"4rem"}}>
			<div className="container">
				<div className="inner form-layer   addpage col-lg-6">
					<form>
						<div className="mb-1">
							<div className=" col-lg-2">
								<label
									htmlFor="exampleFormControlInput"
									className="form-label"
								>
									<picture >
										<img
										className="imgadd"
											src="./img/avatar/img.png"
											alt="User name"
										/>
									</picture>
								</label>
							</div>
							<input
								type="file"
								name="imageUrl"
								className="form-control mb-2 inpu"
								aria-describedby="imageUrl"
								id="exampleFormControlInput"
							/>
						</div>
						<div className="mb-1">
							<label
								htmlFor="exampleFormControlInput1"
								className="form-label"
							>
								User Name
							</label>
							<input
								type="text"
								className="form-control"
								id="exampleFormControlInput1"
								placeholder="username@example.com"
								aria-describedby="title"
							/>
						</div>

						<div className="mb-1">
							<label
								htmlFor="exampleFormControlInput2"
								className="form-label"
							>
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleFormControlInput2"
								placeholder="email@example.com"
								aria-describedby="title"
							/>
						</div>

						<div className="mb-1">
							<label
								htmlFor="exampleInputPassword1"
								className="form-label"
							>
								Password
							</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="password"
							/>
						</div>

					

						<button
							type="submit"
							className="btn btn-primary "
							style={{ margin: "1em" }}
						>
							save
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}
