import axios from "axios";
import React, { useState } from "react";
import Weather from "./Weather";

const List = ({ results }) => {
	const [result, setResult] = useState("");
	const res = results.map((x) => x.capital);
	const access_key = process.env.ACCESS_KEY;
	const clickHnadler = () => {
		axios
			.get(
				`http://api.weatherstack.com/current?access_key=a6b0683e90aa58ac11e981962d3864ef&query=${res}`,
			)
			.then((res) => setResult(res))
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<div>
				<div>
					<h3>{res}</h3>
				</div>
				<button onClick={clickHnadler}>Capital weather</button>
			</div>
			<Weather result={result} />
		</div>
	);
};

export default List;
