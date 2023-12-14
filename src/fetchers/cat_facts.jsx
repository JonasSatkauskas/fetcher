import React from "react";
import { useState, useEffect } from "react";

const CatFacts = () => {
  const [fact, setFact] = useState(null);
  const url = "https://catfact.ninja/fact";

  async function fetchFacts() {
    const response = await fetch(url);
    const data = await response.json();
    setFact(data);
  }
  return (
    <div>
      <p>{fact.fact}</p>
      <button
        onClick={() => {
          fetchFacts();
        }}
      >
        Click for Cats
      </button>
    </div>
  );
};

export default CatFacts;
