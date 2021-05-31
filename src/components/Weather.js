import React from "react";

const Weather = ({ result }) => {
	if (result.data) {
		return (
			<div>
				<h2>{result.data.current.temperature} °C</h2>
			</div>
		);
	}
	return <div></div>;
};

export default Weather;
