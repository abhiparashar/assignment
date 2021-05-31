import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

function App() {
	const [state, setstate] = useState("");
	const [result, setResult] = useState([]);

	useEffect(() => {
		axios
			.get(`https://restcountries.eu/rest/v2/name/${state}`)
			.then((res) => setResult(res.data))
			.catch((err) => console.log(err));
	}, [state]);

	const termCallback = (term) => {
		setstate(term);
	};

	return (
		<div className="App">
			<Form callback={termCallback} />
			<List results={result} />
		</div>
	);
}

export default App;
