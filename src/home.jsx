import React, {useState} from "react";
import Button from "react-bootstrap/Button";

export function Home()
{
	const [difficulty, setDifficulty] = useState("Easy");
	const [category, setCategory] = useState("Science");

	const changeDifficulty = (event) =>
	{
		setDifficulty(event.target.value);
	};

	const changeCategory = (event) =>
	{
		setCategory(event.target.value);
	};

	return (
	<main className="text-center">
		<h1>Welcome to Trivia Trek!</h1>
		<p className="text-center">
			Trivia trek is a simple trivia game to test your knowledge. Get startedby selecting a difficulty and category below!
		</p>

		{/* Difficulty Radio Buttons */}
		<div>
			<div className="form-check form-check-inline">
				<input className="form-check-input" type="radio" value="Easy" checked={difficulty === "Easy"} onChange={changeDifficulty}/>
				<label className="form-check-label" htmlFor="Easy">
					Easy
				</label>
			</div>

			<div className="form-check form-check-inline">
				<input className="form-check-input" type="radio" value="Medium" checked={difficulty === "Medium"} onChange={changeDifficulty}/>
				<label className="form-check-label" htmlFor="Medium">
					Medium
				</label>
			</div>

			<div className="form-check form-check-inline">
				<input className="form-check-input" type="radio" value="Hard" checked={difficulty === "Hard"} onChange={changeDifficulty}/>
				<label className="form-check-label" htmlFor="Hard">
					Hard
				</label>
			</div>
		</div>

		{/* Category Radio Buttons */}
		<div>
			<div className="form-check form-check-inline">
				<input className="form-check-input" type="radio" value="Science" checked={category === "Science"} onChange={changeCategory}/>
				<label className="form-check-label" htmlFor="Science">
					Science
				</label>
			</div>

			<div className="form-check form-check-inline">
				<input className="form-check-input" type="radio" value="History" checked={category === "History"} onChange={changeCategory}/>
				<label className="form-check-label" htmlFor="History">
					History
				</label>
			</div>

			<div className="form-check form-check-inline">
				<input className="form-check-input" type="radio" value="Entertainment" checked={category === "Entertainment"} onChange={changeCategory}/>
				<label className="form-check-label" htmlFor="Entertainment">
					Entertainment
				</label>
			</div>
		</div>


		<div className="text-center mt-3">Selected Difficulty: {difficulty}</div>
		<div className="text-center mb-3">Selected Category: {category}</div>

		<Button variant="primary">Start Game</Button>
	</main>
	);
}