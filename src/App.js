import "./App.css";
import React from "react";
import CatFacts from "./fetchers/cat_facts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h1>FETCHER</h1>
          <div>
            <CatFacts />
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
