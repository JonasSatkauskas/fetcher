import "./App.css";
import React from "react";
import QuotesFetcher from "./fetchers/quotes_fetcher";
import CatFact from "./fetchers/cat_fact";
import CatFacts from "./fetchers/cat_facts";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h1>FETCHER</h1>
          <div>
            <QuotesFetcher />
            <CatFact />
            <CatFacts limit={8} />
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
