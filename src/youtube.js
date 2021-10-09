import { Button, TextField } from "@material-ui/core";
import React, { useRef, useState } from "react";
import YouTube from "react-youtube";

export default function YoutubeComp() {
	const videoRef = useRef();
	const opts = {
		height: "360",
		width: "480",

		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 0,
			rel: 0,
		},
	};

	const [videoId, setVideoId] = useState("");
	const [playerVideoId, setPlayerVideoId] = useState("3rHxgKI97s4");
	function searchVideoId() {
		// alert("hehe");
		setPlayerVideoId(videoId);
	}

	return (
		<div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<YouTube ref={videoRef} videoId={playerVideoId} opts={opts} />
			</div>

			<div
				style={{
					marginTop: 40,
					backgroundColor: "grey",
					borderRadius: 20,
					padding: 20,
					paddingLeft: 60,
				}}
			>
				<TextField
					value={videoId}
					onChange={(e) => setVideoId(e.target.value)}
				/>
				<Button
					variant="contained"
					style={{ marginLeft: "50px" }}
					onClick={searchVideoId}
				>
					{" "}
					Set Video Id{" "}
				</Button>
			</div>
		</div>
	);
}
