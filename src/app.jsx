import React, {useState, useEffect} from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import {Home} from './home';

export default function App()
{
	return (
	<BrowserRouter>
		<header className = "d-flex flex-wrap align-items-center justify-content-start border-bottom">
			<img className = "img-fluid d-none d-lg-block" id = "scriptureImgTop" src = "pexels-suzyhazelwood-1634213.jpg"
			alt = "Close up image of a Monopoly board with the car on the question mark Chance space."/>

		</header>

		<Routes>
			<Route path = "/" element = {<Home/>}/>
			<Route path = "*" element = {<NotFound/>}/>
		</Routes>

		<footer className = "text-center">
			<div>
				<hr/>
				Created by: Owen Werts
				<br/>
				<a className = "page-link" href = "https://github.com/SimicNinja/Trivia-Trek.git">Source GitHub</a>
			</div>
		</footer>
	</BrowserRouter>
	);
}

function NotFound()
{
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}