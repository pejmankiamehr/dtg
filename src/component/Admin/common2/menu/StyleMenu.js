import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	menu: {
		position:"fixed",
		bottom: 0,
		left:0,
		zIndex:500,
		backgroundColor: "#363740",
		width: "18%",
		padding: "1.2rem",
		height: "100vh",
	},
	logotext: {
		marginLeft: "0.2rem !important",
		fontSize: "1rem !important",
		color: "#C5C7CD",
		fontWeight: "bold !important",
	},
	icon: {
		color: "#C5C7CD",
	},
	itemmenu: {},
	itemtext: {
		marginLeft: "0.7rem !important",
		fontSize: "1rem !important",
		color: "#C5C7CD",
	},
});
export default useStyles;
