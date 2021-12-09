import "./styles.css";
import React from "react";
import { useState } from "react";

var bikes = {
  hero: [
    { name: "Hero Splendor Plus", rating: "8/10" },
    { name: "Hero Xtreme 160R", rating: "9/10" }
  ],
  ktm: [
    { name: "KTM 200 Duke", rating: "7/10" },
    { name: "KTM 390 Duke", rating: "9/10" }
  ],
  yamaha: [
    { name: "R15S", rating: "9/10" },
    { name: "MT 15 CYW", rating: "9/10" }
  ]
};

export default function App() {
  const [genre, setgenre] = useState("hero");
  function genreHandler(genre) {
    setgenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "orange" }}>Are you a Bike lover?</h1>
      <h3>Well if you are then I'm sure you will love my recommendations</h3>
      <h4>Check them out below</h4>
      <div>
        {Object.keys(bikes).map((genre) => (
          <button
            onClick={() => genreHandler(genre)}
            style={{
              border: "solid",
              borderRadius: "1rem",
              textAlign: "center",
              padding: "1rem",
              margin: "1rem",
              backgroundColor: "pink"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <div>
        <ul style={{ display: "block" }}>
          {bikes[genre].map((bike) => (
            <li
              key={bike.name}
              style={{
                margin: "auto",
                marginTop: "1rem",
                padding: "1rem",
                border: "solid black",
                width: "45%",
                borderRadius: "0.5rem",
                borderColor: "black",
                backgroundColor: "orange"
              }}
            >
              <div style={{ fontSize: "larger" }}>{bike.name}</div>
              <div style={{ fontSize: "smaller" }}>{bike.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
