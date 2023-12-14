import React from "react";
import { useState } from "react";

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
      {fact && fact.fact ? (
        <>
          <p>{fact.fact}</p>
          <button
            onClick={() => {
              fetchFacts();
            }}
          >
            Click for Cat Fact
          </button>
        </>
      ) : (
        <>
          <p>Press the button</p>
          <button onClick={() => fetchFacts()}>Cat Fact</button>
        </>
      )}
    </div>
  );
};

export default CatFacts;
