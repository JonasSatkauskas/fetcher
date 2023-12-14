import React from "react";
import { useState } from "react";

const QuotesFetcher = () => {
  const [quotes, setQuotes] = useState();

  const url = "https://api.api-ninjas.com/v1/quotes?category=life";
  const config = {
    headers: { "X-Api-Key": "PncZ7+oMTlqxtel6SDEo1g==oHd1LRTvHwdLvvID" },
  };

  async function getQuotes() {
    try {
      const response = await fetch(url, config);
      const data = await response.json();
      setQuotes(data);
    } catch (err) {
      console.error("ERROR:", err);
    }
  }
  console.log(quotes);
  return (
    <div>
      {quotes && quotes[0] ? (
        <>
          <p>{quotes[0].quote}</p>
          <p>
            AUTHOR: <b>{quotes[0].author}</b>
          </p>
          <button onClick={() => getQuotes()}>Click for quote</button>
        </>
      ) : (
        <>
          <p>Not available</p>
          <button onClick={() => getQuotes()}> Show quote</button>
        </>
      )}
    </div>
  );
};

export default QuotesFetcher;
