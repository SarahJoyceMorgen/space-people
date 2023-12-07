import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [peopleInSpace, setPeopleInSpace] = useState(0);

  useEffect(() => {
    async function fetchPeopleInSpace() {
      const response = await fetch(
        "http://api.open-notify.org/astros.json"
      );
      const data = await response.json();
      setPeopleInSpace(data.number);
    }
    fetchPeopleInSpace();
  }, []);

  return (
    <article>
      <p>People in Space: {peopleInSpace}</p>
    </article>
  );
}

export default App;