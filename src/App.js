import "./App.css";
import React from "react";
import QuotesFetcher from "./fetchers/quotes_fetcher";
import CatFact from "./fetchers/cat_fact";
import CatFacts from "./fetchers/cat_facts";
import WeatherFetcher from "./fetchers/weather_fetcher";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h1>FETCHER</h1>
          <div>
            <WeatherFetcher />
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
