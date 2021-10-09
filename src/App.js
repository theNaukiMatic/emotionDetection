import { Grid } from "@material-ui/core";
import CameraComp from "./camera";
import YoutubeComp from "./youtube";

function App() {
	return (
		<Grid
			style={{
				backgroundColor: "black",
				height: "100vh",
				width: "100vw",
			}}
			container
		>
			<Grid item sm={6} xs={12} style={{ padding: 40 }}>
				<YoutubeComp />
			</Grid>
			<Grid item sm={6} xs={12} style={{ padding: 40 }}>
				<CameraComp />
			</Grid>
		</Grid>
	);
}

export default App;
