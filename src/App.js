import { Grid } from "@mui/material";
import { useState } from "react";
import CameraComp from "./camera";
import ResultComp from "./results";
import YoutubeComp from "./youtube";

function App() {
	const [results, setResults] = useState([]);
	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
				backgroundColor: "black",
			}}
		>
			<Grid container spacing={2}>
				<Grid item sm={6} xs={12}>
					<YoutubeComp />
				</Grid>
				<Grid item sm={6} xs={12}>
					<CameraComp results={results} setResults={setResults} />
				</Grid>
			</Grid>
			<ResultComp results={results} />
		</div>
	);
}

export default App;
