# Trivia-Trek

How to Run
1. Clone the repository to your machine
2. Install Node.js & Vite using npm (https://vite.dev/guide/)
3. Make sure to install all the project dependencies (see below)
4. Run `npm run dev` in the console

Library Dependencies
1. React (npm install react)
2. React Router DOM (npm install react-router-dom)
3. Bootstrap (npm install react-bootstrap)

Next Steps
I lost an entire hour on the API call bug (see commit notes). My next steps would be to implement the score using another state variable. It would then be pretty quick to make a new component to display a end of game page. The score state would need to be passed to the main App component which could be done easily. A simple if-else block in a useEffect statement would determine and set the state for the user's rank. After finishing the stubbing of other small basic feature, I would return to the styling. I don't love that I use a pop-up alert to notify the player of how they responded to each question. The fonts and overall whitespace of the pages are really vanilla and bland. I think green and purple coloring as a nod to Riddler from Batman theme could be fun and straightforward.

Vite Debugging
Make sure that package.json scripts element is exactly like below:
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
