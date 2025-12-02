import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

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
			setQuestions(json.results);
			console.log(json.results);
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

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
	<main>
		TEST
	</main>
	);
}
