import React, { useState, useEffect } from "react";

import api from "../../services/api";

import "./styles.css";

function Personage() {
  const [people, setPeople] = useState([]);

  useEffect(async () => {
    await api.get("/").then(response => {
      setPeople(response.data.results);
    });
    // console.log(response.data.results);
    // name
    // eye_color
  }, []);

  return (
    <div className="personage-container">
      <h1>Star Wars</h1>

      <ul>
        {people.map(personage => (
          <li key={personage.name}>
            <strong>Personagem:</strong>
            <p>{personage.name}</p>

            <button type="button">Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Personage;
