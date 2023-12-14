import React from "react";
import { useState } from "react";

const CatFact = () => {
  const [fact, setFact] = useState(null);
  const [status, setStatus] = useState(false);
  const url = "https://catfact.ninja/fact";

  async function fetchFacts() {
    const response = await fetch(url);
    const data = await response.json();
    await setFact(data);
    await setStatus(true);
  }
  return (
    <div>
      {status ? (
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

export default CatFact;
