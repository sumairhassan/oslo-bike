import React from "react";
import Card from "../Card/Card";
import StationStatus from "./StationStatus";
import "./Station.css";

const Station = ({ station }) => {
  const [show, setShow] = React.useState(false);
  function toggleShow() {
    setShow(!show);
  }
  console.log(station);
  return (
    <>
      {show ? (
        <StationStatus
          id={station.station_id}
          name={station.name}
          handleClick={toggleShow}
        />
      ) : (
        <Card title={station.name}>
          <>
            <div className="section">
              <span className="title">Address: </span> {station.address}
            </div>
            <div>
              <span className="title">Capacity: </span> {station.capacity}
            </div>
            <button className="showButton" onClick={toggleShow}>
              Show Status
            </button>
          </>
        </Card>
      )}
    </>
  );
};

export default Station;
