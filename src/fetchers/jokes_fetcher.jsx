import React from "react";

const JokesFetcher = (jokesCount) => {
  const jokesApi = `https://api.api-ninjas.com/v1/jokes?limit=3`;
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "PncZ7+oMTlqxtel6SDEo1g==oHd1LRTvHwdLvvID");
  const myInit = {
    headers: myHeaders,
  };
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      let data = await fetch(jokesApi, myInit).then((res) => {
        return res.json();
      });

      setItems(data);
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      {items.map((item) => {
        return (
          <div>
            <p>{item.joke}</p>
          </div>
        );
      })}
    </div>
  );
};

export default JokesFetcher;
