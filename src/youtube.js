import { Button, TextField } from "@mui/material";
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
				elevation={3}
				style={{
					display: "flex",
				}}
			>
				<div style={{ marginLeft: "auto", marginRight: "auto" }}>
					<TextField
						value={videoId}
						onChange={(e) => setVideoId(e.target.value)}
					/>
					<Button
						variant="contained"
						style={{ height: 55 }}
						onClick={searchVideoId}
					>
						{" "}
						Set Video Id{" "}
					</Button>
				</div>
			</div>
		</div>
	);
}
