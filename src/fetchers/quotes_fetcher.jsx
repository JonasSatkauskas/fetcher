import React from "react";
import { useState } from "react";

const QuotesFetcher = () => {
  const [quotes, setQuotes] = useState();
  const [status, setStatus] = useState(false);

  const url = "https://api.api-ninjas.com/v1/quotes?category=life";
  const config = {
    headers: { "X-Api-Key": "PncZ7+oMTlqxtel6SDEo1g==oHd1LRTvHwdLvvID" },
  };

  async function getQuotes() {
    try {
      const response = await fetch(url, config);
      const data = await response.json();
      await setQuotes(data);
      await setStatus(true);
    } catch (err) {
      console.error("ERROR:", err);
    }
  }
  return (
    <div>
      {status ? (
        <>
          <p>{quotes[0].quote}</p>
          <p>
            AUTHOR: <b>{quotes[0].author}</b>
          </p>
          <button onClick={() => getQuotes()}>Click for quote</button>
        </>
      ) : (
        <>
          <p>Press the button for quote</p>
          <button onClick={() => getQuotes()}> Show quote</button>
        </>
      )}
    </div>
  );
};

export default QuotesFetcher;
