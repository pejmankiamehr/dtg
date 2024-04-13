import React from "react";
 import { Route, Routes } from "react-router-dom";
import OrderScan from "../orderinTake/OrderScan.jsx";

 import OrederinTake from "../orderinTake/OrederinTake.jsx"
import Pretreat from "../Pretreat/Pretreat.jsx";
import ProductMangment from "../ProductMangment/ProductMangment.jsx";

import LayoutEmployer from "./LayoutEmployer.jsx";
import Dtg from '../Dtg/Dtg'
import Qc from '../Qc/Qc'
import Shiping from '../Shiping/Shiping'
import Qcproblem from "../Qc/QcProblem.jsx";
import NotFound from "../../NotFound/NotFound.jsx";



export default function PagemainEmployer(props) {
	
	return (
		<LayoutEmployer>
		<Routes>
		
		
				<Route path="/orderscan" exact element={<OrderScan />} />
				<Route path="/productmangment" exact element={<ProductMangment     />  } />
				<Route path="/pretreat" exact element={<Pretreat />} /> 
				<Route path="/dtg" exact element={<Dtg />}    /> 
				<Route path="/qc" exact element={<Qc/>} /> 
				<Route path="/shiping" exact element={<Shiping/>} /> 
				<Route path="/qcproblem" exact element={<Qcproblem/>} /> 
				<Route path="/orderintake" exact element={<OrederinTake   />} />
				

			
			
			</Routes> 
		</LayoutEmployer>
	);
}
