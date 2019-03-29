import React, { useState } from "react";

import Card from "../styled/Card";

const cards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

function App() {
  const [view, setView] = useState(null);
  const [away, setAway] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setView(null);
          setAway(false);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setView(1);
          setAway(true);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setView(2);
          setAway(true);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setView(3);
          setAway(true);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setView(4);
          setAway(true);
        }}
      >
        4
      </button>

      {cards.map(card => (
        <Card view={view === card.id} away={away}>
          {card.id}
        </Card>
      ))}
    </div>
  );
}

export default App;
