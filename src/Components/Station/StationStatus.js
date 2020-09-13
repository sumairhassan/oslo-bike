import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Station.css";

const StationStatus = ({ id, name, handleClick }) => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch("https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json")
      .then((resp) => resp.json())
      .then((resp) => {
        setStatus(resp.data.stations);
      });
  }, []);

  if (status == null) {
    return <Card title={"Loading..."}>loading</Card>;
  }

  const clickedStation = status.find((s) => s.station_id === id);

  return (
    <Card title={name}>
      <>
        <div className="section">
          <span className="title">Available Bikes: </span>{" "}
          {clickedStation.num_bikes_available}
        </div>
        <div>
          <span className="title">Available Docks: </span>{" "}
          {clickedStation.num_docks_available}
        </div>
        <button className="showButton" onClick={handleClick}>
          Hide Status
        </button>
      </>
    </Card>
  );
};

export default StationStatus;
