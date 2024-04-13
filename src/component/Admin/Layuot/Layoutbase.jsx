import React   from "react";
import useStyles from "./StyleLayout";

import Header1 from "../common2/header/Header1";
import Menu from "../common2/menu/Menu";



export default function Layoutbase(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Menu />

			<Header1 />
			<div className={classes.main}>
        {props.children}
        </div>
		</div>
	);
}
