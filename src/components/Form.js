import React, { useState } from "react";

const Form = ({ callback }) => {
	const [term, setTerm] = useState("");
	const changeHandler = (e) => {
		setTerm(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		callback(term);
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					placeholder="Enter country name"
					value={term}
					onChange={changeHandler}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Form;
