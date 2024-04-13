import React   from "react";
import useStyles from "./StylelayoutEmployer.js";


import Header2 from "../common1/header/Header2";
import Menu2 from "../common1/menu/Menu2";




export default function LayoutEmployer(props) {
	

	const classes = useStyles();
	return (
		<div className={classes.root}>

			<Menu2 />

			<Header2    />
			<div className={classes.main}>
         {props.children} 
        </div>
		</div>
	);
}
