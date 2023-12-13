import React from "react";
import { useState, useEffect } from "react";

const QuotesFetcher = () => {
  const [quotes, setQuotes] = useState({ content: "", author: "" });
  const [error, setError] = useState(null);

  const url = "https://api.api-ninjas.com/v1/quotes?category=life";
  const headers = { "X-Api-Key": "PncZ7+oMTlqxtel6SDEo1g==oHd1LRTvHwdLvvID" };

  useEffect(() => {
    async function getQuotes() {
      try {
        let data = await fetch(url, { headers }).then((resp) => {
          resp.json();
        });
        if (data.error) {
          setError(data.error);
        } else {
          setQuotes(data[0]);
        }
      } catch (error) {
        setError("Error fetching quotes");
      }
    }
    getQuotes();
  }, []);

  return <div>{error ? <p>Error: {error}</p> : <p>{quotes.content}</p>}</div>;
};

export default QuotesFetcher;
