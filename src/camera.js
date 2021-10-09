import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

export default function CameraComp() {
	const webcamRef = React.useRef(null);
	const [isRecording, setIsRecording] = useState(false);
	const [images, setImages] = useState([]);
	const imgArray = [];
	useEffect(() => {
		const interval = setInterval(() => {
			if (isRecording) {
				const temp = webcamRef.current.getScreenshot();
				console.log("image captured");
				imgArray.push(temp);
				setImages(imgArray);
			}
		}, 1000);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isRecording]);
	function handleRecordButtion() {
		if (isRecording) {
			//stop recording
			console.log(images);
			setIsRecording(false);
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
				style={{
					marginTop: 40,
					backgroundColor: "grey",
					borderRadius: 20,
					padding: 20,
					paddingLeft: 60,
					display: "flex",
				}}
			>
				<Button
					onClick={handleRecordButtion}
					variant="contained"
					style={{ marginLeft: "auto", marginRight: "auto" }}
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
	);
}
