import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	header: {
		boxSizing: "border-box",
		backgroundColor: "#F7F8FC",
	
		width: "100%",
		height: "15%",
		zIndex: "50",
		margin: "1rem",
		direction: "rtl",
		position: "relative",
	},
	btn: {
		marginTop: "-0.7rem !important",
	},
	img: {
		width: "3rem",
		height: "3rem",
		borderRadius: "50%",
	},

	headertext: {
		marginRight: "22rem !important",
	},
});
export default useStyles;
