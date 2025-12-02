import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom"
import Button from "react-bootstrap/Button";

export function Question()
{
	const [questionNumber, setQuestionNumber] = useState(0);
	const [questions, setQuestions] = useState([]);
	const [answer, setAnswer] = useState("");

	// Load questions from localStorage on component mount
	useEffect(() =>
	{
		const savedQuestions = JSON.parse(localStorage.getItem('trivia_questions'));
		if(savedQuestions)
		{
			setQuestions(savedQuestions);
		}
	}, []);

	const changeAnswer = (event) =>
	{
		setAnswer(event.target.value);
	};

	// Guard against empty questions
	if(questions.length === 0)
	{
		return <main><p>Loading questions...</p></main>;
	}

	const questionData = questions[questionNumber];

	const checkAnswer = () =>
	{
		if(answer === questionData.correct_answer)
		{
			alert("Correct!");
		}
		else
		{
			alert(`Incorrect! The correct answer was: ${questionData.correct_answer}`);
		}
		// Move to next question or end game
		if(questionNumber < questions.length - 1)
		{
			setQuestionNumber(questionNumber + 1);
			setAnswer("");
		}
		else
		{
			alert("Game Over! You've completed all questions.");		
		}	
	};

	return (
	<main className="text-center">
		<h1>Question Number {questionNumber + 1}</h1>
		<p className="text-center">{questionData.question}</p>

		{/* Answer Radio Buttons */}
		<div>
			{questionData.all_answers.map((answerOption, index) =>
			(
				<div key={index} className="form-check form-check-inline">
					<input 
						className="form-check-input" 
						type="radio" 
						id={`answer-${index}`}
						value={answerOption} 
						checked={answer === answerOption} 
						onChange={changeAnswer}
					/>
					<label className="form-check-label" htmlFor={`answer-${index}`}>
						{answerOption}
					</label>
				</div>
			))}
		</div>

		<Button variant="primary" onClick={checkAnswer}>Check Answer</Button>
	</main>
	);
}