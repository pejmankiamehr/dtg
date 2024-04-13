import React from "react";
import { Route, Routes, Router } from "react-router-dom";

import Layoutbase from "./Layoutbase";
import Overview from "../overview/Overview";
import Users from "../Users/User";
import LogOrder from "../LogOrder/LogOrder";
import Addusers from "../Users/Addusers";
import NotFound from "../../NotFound/NotFound";
export default function PageMain(props) {
	return (
		<Layoutbase>
			<Routes>
				<Route path="/overview" exact element={<Overview />} />
				<Route path="/users" exact element={<Users />} />
				<Route path="/adduser" exact element={<Addusers />} />
				<Route path="/logorder" exact element={<LogOrder />} />
			</Routes>
		</Layoutbase>
	);
}
