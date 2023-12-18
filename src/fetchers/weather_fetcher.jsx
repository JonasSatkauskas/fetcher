import React, { useState, useEffect } from "react";

const WeatherFetcher = () => {
  const [response, setResponse] = useState(null);
  const [status, setStatus] = useState("loading");

  const baseUrl = "https://api.meteo.lt/v1/places/vilnius/forecasts/long-term";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(baseUrl);
        if (!resp.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await resp.json();
        setResponse(data);
        setStatus("success");
      } catch (error) {
        console.error("Error fetching data:", error);
        setStatus("error");
      }
    };

    fetchData();
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error fetching data</div>;
  }

  console.log("[Weather data]", response);

  return (
    <div>
      {response.forecastTimestamps.map((time) => {
        time.map((inf) => {
          return (
            <div>
              <p>{`${inf.key}:${inf.value}`}</p>
            </div>
          );
        });
      })}
    </div>
  );
};

export default WeatherFetcher;
