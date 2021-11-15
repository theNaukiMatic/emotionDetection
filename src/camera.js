import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

export default function CameraComp({ results, setResults }) {
	const webcamRef = React.useRef(null);
	const [isRecording, setIsRecording] = useState(false);
	let imgArray = [];
	useEffect(() => {
		const interval = setInterval(() => {
			if (isRecording) {
				const temp = webcamRef.current.getScreenshot();
				console.log("image captured");
				imgArray.push(temp);
			}
		}, 1000);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isRecording]);
	function handleRecordButtion() {
		if (isRecording) {
			//stop recording
			setIsRecording(false);

			//make axios call
			const baseUrl = "http://172.24.100.74:4000/rateVideo";
			const data = {
				images: imgArray,
			};
			axios({
				url: baseUrl,
				method: "post",
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				data: data,
			})
				.then((response) => {
					console.log(response.data);
					setResults(response.data);
					imgArray = [];
				})
				.catch((error) => {
					console.error(error);
					imgArray = [];
				});
		} else {
			//start recording
			setIsRecording(true);
		}
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
				<Webcam
					audio={false}
					height={360}
					ref={webcamRef}
					screenshotFormat="image/jpeg"
					width={480}
					imageSmoothing={true}
					screenshotQuality={0.5}
					mirrored={true}
					// videoConstraints={videoConstraints}
				/>
			</div>
			<div
				elevation={3}
				style={{
					display: "flex",
				}}
			>
				<div style={{ marginLeft: "auto", marginRight: "auto" }}>
					<Button
						onClick={handleRecordButtion}
						variant="contained"
						style={{
							marginLeft: "auto",
							marginRight: "auto",
							height: 55,
						}}
					>
						{" "}
						{isRecording && (
							<div
								style={{
									backgroundColor: "red",
									height: 20,
									width: 20,
									borderRadius: "50%",
									marginRight: 20,
								}}
							></div>
						)}
						{isRecording
							? "Stop Recording Reaction"
							: "Start Recording Reaction"}
					</Button>
				</div>
			</div>
		</div>
	);
}
