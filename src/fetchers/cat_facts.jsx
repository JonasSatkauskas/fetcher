import React from "react";
import { useState } from "react";

const CatFacts = () => {
  const [facts, setFacts] = useState([]);
  const [status, setStatus] = useState(false);
  const url = "https://catfact.ninja/facts/?limit=3";
  const params = { limit: 2 };

  async function fetchFacts() {
    const response = await fetch(url, params);
    const data = await response.json();
    await setFacts(data);
    await setStatus(true);
  }
  console.log(facts.data);
  return (
    <div>
      {status ? (
        <>
          {facts.data.map((item) => {
            return <p>{item.fact}</p>;
          })}
          <button
            onClick={() => {
              fetchFacts();
            }}
          >
            Click for Cat Facts
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
