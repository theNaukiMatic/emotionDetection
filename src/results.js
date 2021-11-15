import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";

export default function ResultComp({ results }) {
	//processing data
	const [processedData, setProcessedData] = useState([]);
	const [opacity, setOpacity] = useState({
		angry: 1,
		disgust: 1,
		fear: 1,
		happy: 1,
		neutral: 1,
		sad: 1,
		surprize: 1,
	});
	useEffect(() => {
		let newData = [];
		for (let i = 0; i < results.length; i++) {
			let obj = {
				index: `${i}s`,
				angry: results[i][0],
				disgust: results[i][1],
				fear: results[i][2],
				happy: results[i][3],
				neutral: results[i][4],
				sad: results[i][5],
				surprize: results[i][6],
			};
			newData.push(obj);
		}
		setProcessedData(newData);
	}, [results]);
	const handleMouseEnter = (o) => {
		const { dataKey } = o;
		const newOp = {
			...opacity,
			[dataKey]: 0.5,
		};
		setOpacity(newOp);
	};

	const handleMouseLeave = (o) => {
		const { dataKey } = o;

		const newOp = {
			...opacity,
			[dataKey]: 1,
		};
		setOpacity(newOp);
	};
	return (
		<ResponsiveContainer width="100%" height={500}>
			<LineChart
				width={500}
				height={300}
				data={processedData}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="index" />
				{/* <YAxis type="number" domain={[0, 1]} /> */}
				<Tooltip />

				<Legend
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				/>
				<Line
					type="monotone"
					dataKey="angry"
					stroke="#f71000"
					strokeOpacity={opacity.angry}
					yAxisId={0}
					activeDot={{ r: 8 }}
				/>
				<Line
					type="monotone"
					dataKey="disgust"
					stroke="#387908"
					yAxisId={1}
					strokeOpacity={opacity.disgust}
				/>
				<Line
					type="monotone"
					dataKey="fear"
					stroke="#c2f1ff"
					yAxisId={2}
					strokeOpacity={opacity.fear}
				/>
				<Line
					type="monotone"
					dataKey="happy"
					stroke="#e3b240"
					yAxisId={3}
					strokeOpacity={opacity.happy}
				/>
				<Line
					type="monotone"
					dataKey="nuetral"
					stroke="#57ba41"
					yAxisId={4}
					strokeOpacity={opacity.neutral}
				/>
				<Line
					type="monotone"
					dataKey="sad"
					stroke="#3c36ff"
					yAxisId={5}
					strokeOpacity={opacity.sad}
				/>
				<Line
					type="monotone"
					dataKey="surprize"
					stroke="#e340c2"
					yAxisId={6}
					strokeOpacity={opacity.surprize}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}
