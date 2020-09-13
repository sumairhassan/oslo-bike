import React, { useState, useEffect } from "react";
import "./App.css";
import Station from "./Components/Station/Station";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json"
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
      });
  }, []);

  if (data == null) {
    return <div>loading</div>;
  }

  console.log(data);

  return (
    <div className="App">
      <div className="navbar">Oslo City Bike</div>
      <div className="root">
        {data.stations.map((station) => (
          <Station key={station.station_id} station={station} />
        ))}
      </div>
    </div>
  );
};

export default App;
