import React from "react";
import { useState } from "react";

const CatFacts = ({ limit }) => {
  const [facts, setFacts] = useState([]);
  const [status, setStatus] = useState(false);
  const url = `https://catfact.ninja/facts/?limit=${limit}`;

  async function fetchFacts() {
    const response = await fetch(url);
    const data = await response.json();
    setFacts(data);
    setStatus(true);
  }
  console.log(facts.data);
  const clickHandler = () => {
    setFacts([]);
    setStatus(false);
    fetchFacts();
  };
  return (
    <div>
      {status ? (
        <>
          {facts.data.map((item) => {
            return <p key={item.length}>{item.fact}</p>;
          })}
          <button onClick={clickHandler}>Click for Cat Facts</button>
        </>
      ) : (
        <>
          <p>Press the button</p>
          <button onClick={clickHandler}>Cat Fact</button>
        </>
      )}
    </div>
  );
};

export default CatFacts;
