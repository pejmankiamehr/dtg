import React from "react";
import PageMain from "./component/Admin/Layuot/PageMain.jsx";
import Login from "./component/login/Login.jsx";
import PagemainEmployer from "./component/Employer/Layuot/PagemainEmployer.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />}/>
				<Route path="admin/*" element={<PageMain />}/>
				<Route path="users/*" element={<PagemainEmployer />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

