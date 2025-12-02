import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {Question} from "./question";

export function Game(props)
{
	const location = useLocation();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [category, setCategory] = useState(-1);
	const [questions, setQuestions] = useState([]);

	// Resets state whenever user navigates to this page.
	useEffect(() =>
	{
		setQuestions([]);
        setLoading(true);
        setError(null);
		setCategory(-1);
	}, [location.pathname]);

	// Maps string name to id # for API request
	useEffect(() =>
	{
        if(props.category === "Computer Science")
		{
            setCategory(18);
        }
		else if(props.category === "General Knowledge")
		{
            setCategory(9);
        }
		else if(props.category === "History")
		{
            setCategory(23);
        }
    }, [props.category]);

	// API Request
	useEffect(() =>
	{
		if(category === -1)
		{
			return;
		}

		fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${props.difficulty.toLowerCase()}&type=multiple`)
		.then(response =>
		{
			if(!response.ok)
			{
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.json();
		})
		.then(json =>
		{
			// Parse and format questions for storage
			const formattedQuestions = json.results.map(q =>
			({
				question: q.question,
				correct_answer: q.correct_answer,
				// Combine all answers and shuffle them
				all_answers: shuffleArray([q.correct_answer, ...q.incorrect_answers])
			}));

			// Store in localStorage
			localStorage.setItem('trivia_questions', JSON.stringify(formattedQuestions));
			
			setQuestions(formattedQuestions);
			setLoading(false);
		})
		.catch(err =>
		{
			if(err.name !== 'AbortError')
			{
				console.error("Error fetching data:", err);
				setError(err.message);
				setLoading(false);
			}
		});
	}, [category, props.difficulty]);

	// Helper function to shuffle array
	const shuffleArray = (array) =>
	{
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--)
		{
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<Question/>
	);
}
